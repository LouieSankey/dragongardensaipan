import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services - Dragon Garden Saipan | Fresh Fruits, Seeds & Plant Starts',
  description: 'Buy fresh exotic fruits, rare seeds, and plant starts from Dragon Garden Saipan. Book fruit tasting experiences and discover tropical treasures.',
  keywords: ['Dragon Garden Saipan services', 'exotic fruit sales', 'rare seeds', 'plant starts', 'fruit tasting', 'Saipan tropical fruits'],
  openGraph: {
    title: 'Services - Dragon Garden Saipan | Fresh Fruits, Seeds & Plant Starts',
    description: 'Buy fresh exotic fruits, rare seeds, and plant starts from Dragon Garden Saipan. Book fruit tasting experiences and discover tropical treasures.',
    type: 'website',
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Fruit Sales',
      description: 'Purchase our premium exotic fruits fresh from the garden. From island-exclusive Purple Sweet Sop to rare passion fruits and seasonal specialties.',
      features: ['Seasonal fresh fruits', 'Island-exclusive varieties', 'Premium quality guarantee', 'Direct from garden', 'Harvest-to-table freshness'],
      price: 'Custom Quote',
      image: '/images/purple-sweet-sop.jpg',
      popular: true,
      icon: '🍎',
    },
    {
      title: 'Rare Seeds',
      description: 'Start your own exotic fruit garden with our carefully collected seeds from the rarest varieties. Perfect for serious cultivators and hobbyists.',
      features: ['Viable, tested seeds', 'Growing instructions included', 'Rare variety genetics', 'Seasonal availability', 'Cultivation support'],
      price: 'Custom Quote',
      image: '/images/coming-soon-wide.jpg',
      popular: false,
      icon: '🌱',
    },

    {
      title: 'Fruit Tasting Experience',
      description: 'Visit our garden for an unforgettable tasting journey through the world\'s most exotic fruits. Perfect for individuals, families, or groups.',
      features: ['Guided garden tour', '8-12 fruit varieties', 'Educational experience', 'Seasonal specialties', 'Take-home samples'],
      price: 'Custom Quote',
      image: '/images/jackfruit.jpg',
      popular: false,
      icon: '👅',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                From fresh exotic fruits to rare seeds and unforgettable tasting experiences, 
                Dragon Garden Saipan offers everything you need to discover the world's most extraordinary tropical fruits.
              </p>
            
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-list" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600">
                Fresh fruits, rare genetics, and unforgettable experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                  {service.popular && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="h-48 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t pt-4 mt-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-3">
                          Custom quotes available
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-800 transition-colors shadow-sm"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 