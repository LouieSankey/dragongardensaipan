import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 4)
  const remainingCount = allPosts.length - 4

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Welcome to{' '}
                  <span className="text-green-700">Dragon Garden</span>{' '}
                  Saipan 🐉
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  Discover the world&apos;s rarest and most exotic fruits in our botanical paradise. 
                 
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/selection"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors"
                  >
                    Explore Our Selection
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-6 py-3 border border-green-700 text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="w-full rounded-lg overflow-hidden shadow-xl max-w-lg mx-auto">
                  <Image
                    src="/images/purple-sweet-sop.jpg"
                    alt="Exotic tropical fruits in Dragon Garden Saipan"
                    width={500}
                    height={320}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From fresh exotic fruits to rare seeds and guided tastings, we provide everything 
                you need to discover the world&apos;s most extraordinary tropical fruits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🍎</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fruit Sales
                </h3>
                <p className="text-gray-600">
                  Premium exotic fruits harvested fresh from our garden. Island exclusives 
                  like Purple Sweet Sop and rare seasonal specialties.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Rare Seeds
                </h3>
                <p className="text-gray-600">
                  Start your own exotic fruit garden with viable seeds from our rarest varieties. 
                  Complete with growing instructions and cultivation support.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">👅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Fruit Tastings
                </h3>
                <p className="text-gray-600">
                  Guided tasting experiences for individuals or groups. Discover flavors 
                  you never knew existed in our tropical paradise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest from Our Garden
              </h2>
              <p className="text-xl text-gray-600">
                Discover stories, tips, and insights from our exotic fruit cultivation journey.
              </p>
            </div>

            {recentPosts.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <article key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        {post.image && (
                          <div className="h-64 md:h-full relative">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover object-center"
                            />
                          </div>
                        )}
                      </div>
                      <div className="md:w-1/2 p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readingTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          <Link href={`/blog/${post.slug}`} className="hover:text-green-700 transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors text-sm"
                          >
                            Learn More
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          
                          <Link
                            href="/contact"
                            className="inline-flex items-center px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors"
                          >
                            Inquire
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Welcome to our blog! We&apos;ll be sharing exciting content about our rare fruits soon.
                </p>
                <Link
                  href="/selection"
                  className="inline-block mt-4 text-green-700 font-medium hover:text-green-800 transition-colors"
                >
                  Explore Our Selection →
                </Link>
              </div>
            )}

            {recentPosts.length > 0 && remainingCount > 0 && (
              <div className="text-center mt-12">
                <Link
                  href="/selection"
                  className="inline-flex items-center px-6 py-3 border border-green-700 text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition-colors"
                >
                  View {remainingCount} More Varieties
                </Link>
              </div>
            )}
          </div>
        </section>

                {/* News Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                News & Updates
              </h2>
              <p className="text-xl text-gray-600">
                Stay informed about exciting developments at Dragon Garden Saipan
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <article className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/3">
                    <img 
                      src="/images/house-image-1.jpeg" 
                      alt="Potential Dragon Garden Hostel entrance" 
                      className="h-48 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="p-8 md:flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-2xl">🏨</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                            New Project
                          </span>
                          <span className="text-sm text-gray-500">December 2024</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          Dragon Garden Hostel - Dream or Reality?
                        </h3>
                                                  <p className="text-gray-600 mb-4">
                            We&apos;re exploring the possibility of creating Saipan&apos;s first digital nomad hostel 
                            right here at Dragon Garden. Imagine working remotely while enjoying fresh garden-to-glass smoothies and the island lifestyle.
                          </p>
                        <a
                          href="https://louiesankey.github.io/dragon-garden-hostel/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-700 font-medium hover:text-green-800 transition-colors"
                        >
                          Learn more about Dragon Garden Hostel
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <div className="text-center mt-8">
                <p className="text-gray-500 text-sm">
                  More updates coming soon...
                </p>
              </div>
            </div>
          </div>
        </section>

      
      </main>
      <Footer />
    </>
  )
}
