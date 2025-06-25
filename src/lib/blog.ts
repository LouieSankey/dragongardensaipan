import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readingTime: string
  tags: string[]
  image?: string
  author: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

// Helper function to process markdown
async function processMarkdown(content: string): Promise<string> {
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content)
  return processedContent.toString()
}

// Synchronous version using a simple but better markdown processor
function processMarkdownSync(content: string): string {
  let processed = content
    // Headers first
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>')
    
    // Bold and italic (handle both * and _ syntax)
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/_(.*?)_/g, '<em class="italic text-gray-600">$1</em>')
    
    // Links - handle markdown links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-green-700 hover:text-green-800 font-medium transition-colors underline">$1</a>')
    
    // Lists - handle bullet points
    .replace(/^- (.*$)/gim, '<li class="text-gray-800 mb-2">$1</li>')

  // Handle lists - wrap consecutive list items in ul tags
  processed = processed.replace(/((?:<li[^>]*>.*?<\/li>\s*)+)/g, '<ul class="list-disc list-inside mb-6 space-y-2">$1</ul>')
  
  // Split into paragraphs and process each one
  const paragraphs = processed.split('\n\n')
  
  const processedParagraphs = paragraphs.map(paragraph => {
    const trimmed = paragraph.trim()
    
    // Skip empty paragraphs
    if (!trimmed) {
      return ''
    }
    
    // Skip if it's already HTML (starts with <)
    if (trimmed.startsWith('<')) {
      return trimmed
    }
    
    // For any remaining text, wrap it in a paragraph with dark styling
    return `<p class="text-gray-900 mb-6 leading-relaxed">${trimmed}</p>`
  })
  
  return processedParagraphs.join('\n')
}

export function getAllPosts(): BlogPost[] {
  // Create the directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        content: processMarkdownSync(content),
        readingTime: readingTime(content).text,
        tags: data.tags || [],
        image: data.image || null,
        author: data.author || 'Dragon Garden Saipan',
        seo: {
          title: data.seoTitle || data.title || 'Untitled',
          description: data.seoDescription || data.excerpt || '',
          keywords: data.seoKeywords || data.tags || [],
        },
      } as BlogPost
    })

  // Sort posts by date in descending order
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    let fileContents = ''
    
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8')
    } else {
      const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
      if (fs.existsSync(mdxPath)) {
        fileContents = fs.readFileSync(mdxPath, 'utf8')
      } else {
        return null
      }
    }

    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      content: processMarkdownSync(content),
      readingTime: readingTime(content).text,
      tags: data.tags || [],
      image: data.image || null,
      author: data.author || 'Dragon Garden Saipan',
      seo: {
        title: data.seoTitle || data.title || 'Untitled',
        description: data.seoDescription || data.excerpt || '',
        keywords: data.seoKeywords || data.tags || [],
      },
    } as BlogPost
  } catch (error) {
    console.error('Error reading post:', error)
    return null
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = posts.flatMap((post) => post.tags)
  return Array.from(new Set(tags)).sort()
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.tags.includes(tag))
} 