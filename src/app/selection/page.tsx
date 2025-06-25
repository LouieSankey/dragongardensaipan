import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Fruits & Plants - Dragon Garden Saipan | Exotic Tropical Collection',
  description: 'Discover our diverse collection of exotic fruits and specialty plants at Dragon Garden Saipan. From island-exclusive Purple Sweet Sop to rare African Peach and unique tropical plants.',
  keywords: ['Dragon Garden Saipan fruits', 'exotic tropical fruits', 'rare fruits Saipan', 'tropical plants', 'Purple Sweet Sop', 'African Peach', 'passion fruit', 'jackfruit'],
  openGraph: {
    title: 'Our Fruits & Plants - Dragon Garden Saipan | Exotic Tropical Collection',
    description: 'Discover our diverse collection of exotic fruits and specialty plants at Dragon Garden Saipan.',
    type: 'website',
  },
}

export default function FruitsPage() {
  const fruits = [
    {
      name: 'African Peach',
      scientificName: 'Nauclea latifolia',
      description: 'Ultra-rare island first after 1,000+ hours of cultivation effort. Nobody on Saipan has even heard of African Peach - making this a true botanical breakthrough.',
      highlights: ['Island\'s first flowering', '1,000+ cultivation hours', 'Ultra-rare variety', 'Clone propagation planned'],
      image: '/images/african-peach.jpg',
      blogSlug: 'african-peach',
      rarity: 'Island Exclusive',
      season: 'First flowering',
    },
    {
      name: 'Purple Sweet Sop',
      scientificName: 'Annona squamosa var. purple',
      description: 'The only grower of this extraordinary variety on the entire island of Saipan. Described as "one of the most delicious fruits you\'ll ever eat in your life."',
      highlights: ['Island exclusive', 'Incredible flavor', 'Only source on Saipan', 'Limited availability'],
      image: '/images/purple-sweet-sop.jpg',
      blogSlug: 'purple-sweet-sop-island-exclusive',
      rarity: 'Island Exclusive',
      season: 'Seasonal',
    },
    {
      name: 'Jackfruit',
      scientificName: 'Artocarpus heterophyllus',
      description: 'Our first jackfruit has appeared! This massive fruit tastes like Juicy Fruit gum and is considered one of the "best fruits on earth."',
      highlights: ['First harvest milestone', 'Tastes like Juicy Fruit gum', 'World\'s largest tree fruit', '30-100+ lbs per fruit'],
      image: '/images/jackfruit.jpg',
      blogSlug: 'jackfruit',
      rarity: 'Historic First',
      season: 'Year-round',
    },
    {
      name: 'Waimanalo & Red Lady Papayas',
      scientificName: 'Carica papaya',
      description: 'Premium papaya varieties that deliver incredible flavor where local papayas fall short. These are the two main papaya specialties we grow.',
      highlights: ['Premium varieties', 'Better than local papayas', 'Hawaiian & Thai genetics', 'Exceptional sweetness'],
      image: '/images/papaya-varieties.jpg',
      blogSlug: 'waimanalo-red-lady-papaya-varieties',
      rarity: 'Premium Varieties',
      season: 'Year-round',
    },
    {
      name: 'Passion Fruit (Lilikoi)',
      scientificName: 'Passiflora edulis',
      description: 'Growing rare Yellow Lilikoi and Giant Orange varieties on citrus trees. Fresh passion fruit + sugar = "one of the best fruits on earth."',
      highlights: ['Rare on the island', 'Innovative growing method', 'Yellow Lilikoi & Giant Orange', 'Paradise flavor experience'],
      image: '/images/passion-fruit.png',
      blogSlug: 'passion-fruit',
      rarity: 'Extremely Rare',
      season: 'Seasonal',
    },
    {
      name: 'Surinam Cherry',
      scientificName: 'Eugenia uniflora',
      description: '60+ bushes in first major fruiting with unique cherry-tomato flavor. Plans for Surinam cherry wine with AI-designed labels ready.',
      highlights: ['60+ bushes producing', 'Cherry-tomato flavor', 'Wine-making plans', 'Zill\'s black variety'],
      image: '/images/surinam-cherry.jpg',
      blogSlug: 'surinam-cherry',
      rarity: 'Large Scale Operation',
      season: 'Peak Season',
    },
    {
      name: 'Premium Pineapples',
      scientificName: 'Ananas comosus',
      description: 'Rota Red and Hawaiian varieties commanding $4-6 per fruit. Each pineapple creates 12+ new plants for our 200-plant vision.',
      highlights: ['$4-6 premium fruit', 'Rota Red & Hawaiian varieties', '12+ pups per fruit', '200-plant expansion goal'],
      image: '/images/pineapple.png',
      blogSlug: 'pineapple',
      rarity: 'Premium Economics',
      season: 'Limited harvest',
    },
    {
      name: 'Strawberry Guava',
      scientificName: 'Psidium cattleianum',
      description: 'The only grower on the island with six bushes facing unique cultivation challenges. A pioneering agricultural experiment in progress.',
      highlights: ['Only grower on island', 'Agricultural challenge', 'Six precious bushes', 'Cultivation experiment'],
      image: '/images/strawberry-guava.jpg',
      blogSlug: 'strawberry-guava',
      rarity: 'Cultivation Challenge',
      season: 'Experimental',
    },
    {
      name: 'Jamaican Cherry',
      scientificName: 'Muntingia calabura',
      description: 'Fast-growing tree producing berries that taste exactly like Froot Loops cereal with sugary milk. Birds love it, locals avoid it.',
      highlights: ['Tastes like Froot Loops', 'Fast-growing tree', 'Bird favorite', 'Cultural curiosity'],
      image: '/images/jamaican-cherry.jpg',
      blogSlug: 'jamaican-cherry',
      rarity: 'Unique Flavor',
      season: 'Year-round',
    },
    {
      name: 'Star Fruit',
      scientificName: 'Averrhoa carambola',
      description: 'Absolutely delicious fruit with perfect star-shaped slices, yet mysteriously no one on the island will buy or eat them. A fascinating cultural food mystery.',
      highlights: ['Genuinely delicious', 'Beautiful star shape', 'Zero local demand', 'Cultural food barrier'],
      image: '/images/star-fruit.jpg',
      blogSlug: 'star-fruit',
      rarity: 'Cultural Mystery',
      season: 'Year-round',
    },
    {
      name: 'Bananas',
      scientificName: 'Musa species',
      description: 'A tropical empire of 50+ stands featuring cooking bananas, ultra-sweet Fiji Apple bananas, and classic Chiquita varieties.',
      highlights: ['50+ stands total', 'Fiji Apple bananas', 'Cooking varieties', 'Large scale cultivation'],
      image: '/images/banana-varieties.jpg',
      blogSlug: 'bananas',
      rarity: 'Abundant Varieties',
      season: 'Year-round',
    },
    {
      name: 'Mango',
      scientificName: 'Mangifera indica',
      description: 'Why plant 3 trees on an island of 10,000+? Our selective cultivation approach focuses on quality over quantity.',
      highlights: ['Selective cultivation', '15 feet tall', 'First fruiting', 'Quality over quantity'],
      image: '/images/mango.png',
      blogSlug: 'mango',
      rarity: 'Selective Quality',
      season: 'Seasonal',
    },
    {
      name: 'Citrus Collection',
      scientificName: 'Citrus species',
      description: 'The ultimate long game - 8-15 years from seed to fruit. Currently supporting passion fruit vines while growing rare oranges and pomelos.',
      highlights: ['8-15 year investment', 'Rare oranges & pomelos', 'Supporting passion fruit', 'Long-term vision'],
      image: '/images/coming-soon-tall.jpg',
      blogSlug: 'citrus',
      rarity: 'Long-term Investment',
      season: 'Future harvest',
    },
  ]

  const specialtyPlants = [
    {
      name: 'Lemon Gum Eucalyptus',
      scientificName: 'Eucalyptus citriodora',
      description: 'Meet "Sheila" and her 60-foot family of towering eucalyptus trees producing citronella oil and lemon gum rosin.',
      highlights: ['60+ feet tall', 'Meet "Sheila"', 'Citronella oil production', '150-foot potential'],
      image: '/images/lemon-gum-eucalyptus.jpg',
      blogSlug: 'lemon-gum-eucalyptus',
      rarity: 'Giant Trees',
      season: 'Year-round',
    },
    {
      name: 'Lemongrass',
      scientificName: 'Cymbopogon citratus',
      description: 'Abundant growth with high-value essential oil extraction potential. Turning tropical abundance into aromatic liquid gold.',
      highlights: ['Abundant growth', 'Essential oil potential', 'High-value extraction', 'Aromatic treasure'],
      image: '/images/lemongrass.jpg',
      blogSlug: 'lemongrass',
      rarity: 'Abundant Resource',
      season: 'Year-round',
    },
    {
      name: 'Tapioca (Cassava)',
      scientificName: 'Manihot esculenta',
      description: 'Ultimate low-maintenance shade provider growing 15-foot tall plants from simple cuttings with complete removability.',
      highlights: ['15-foot shade trees', 'Easy propagation', 'Low maintenance', 'Completely removable'],
      image: '/images/tapioca.jpg',
      blogSlug: 'tapioca',
      rarity: 'Permaculture Tool',
      season: 'Year-round',
    },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Island Exclusive':
      case 'Extremely Rare':
        return 'bg-red-100 text-red-800'
      case 'Historic First':
      case 'Cultivation Challenge':
        return 'bg-purple-100 text-purple-800'
      case 'Premium Varieties':
      case 'Premium Economics':
        return 'bg-blue-100 text-blue-800'
      case 'Large Scale Operation':
      case 'Abundant Varieties':
        return 'bg-green-100 text-green-800'
      case 'Giant Trees':
        return 'bg-indigo-100 text-indigo-800'
      case 'Cultural Mystery':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-yellow-100 text-yellow-800'
    }
  }

  const renderPlantGrid = (plants: typeof fruits, title: string) => (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {plants.map((plant, index) => (
          <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full relative">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getRarityColor(plant.rarity)}`}>
                    {plant.rarity}
                  </span>
                  <span className="text-sm text-gray-500">{plant.season}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plant.name}
                </h3>
                
                <p className="text-sm text-gray-500 italic mb-3">
                  {plant.scientificName}
                </p>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {plant.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <ul className="grid grid-cols-1 gap-1 text-xs text-gray-600">
                    {plant.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${plant.blogSlug}`}
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
                    Visit & Taste
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Tropical Paradise Collection
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                From island-exclusive fruits to specialty plants, discover our diverse collection of tropical treasures. 
                Each variety represents a unique story of flavor, rarity, and agricultural innovation.
              </p>
             
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Fruits Section */}
            {renderPlantGrid(fruits, "Exotic Fruits")}
            
            {/* Specialty Plants Section */}
            {renderPlantGrid(specialtyPlants, "Specialty Plants")}
            
          
          </div>
        </section>

    
      </main>
      <Footer />
    </>
  )
} 