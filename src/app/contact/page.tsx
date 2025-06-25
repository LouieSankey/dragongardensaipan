import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact & Visit Dragon Garden Saipan | Location, Hours & Get in Touch',
  description: 'Contact Dragon Garden Saipan and plan your visit. Find our location, hours, directions, and get in touch for rare fruit experiences, private events, or inquiries.',
  keywords: ['contact Dragon Garden Saipan', 'visit Dragon Garden', 'Saipan garden location', 'rare fruit inquiries', 'book garden visit', 'Dragon Garden directions'],
  openGraph: {
    title: 'Contact & Visit Dragon Garden Saipan | Location, Hours & Get in Touch',
    description: 'Contact Dragon Garden Saipan and plan your visit. Find our location, hours, directions, and get in touch for rare fruit experiences.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact & Visit Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Plan your visit to Dragon Garden Saipan or get in touch with questions about our rare fruits, 
                fruit purchases, seeds, or group tasting experiences. We&apos;re here to help make your experience extraordinary.
              </p>
          
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12">
              {/* Location Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Location & Hours</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        Dragon Garden Saipan<br />
                        6187 Rte 34, Saipan, 96950<br />
                        Northern Mariana Islands
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
                      <div className="text-gray-600">
                        <p><span className="font-medium">Daily:</span> 9:00 AM - 5:00 PM</p>
                        <p className="text-sm text-green-700 mt-1">*Advance booking required for fruit tasting experiences</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <div className="text-gray-600">
                        <p>📞 <a href="tel:+16707853008" className="text-green-700 hover:text-green-800 font-medium">+1 670 785-3008</a></p>
                        <p className="text-sm text-green-700 mt-1">Contact Teal for pricing & availability</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.google.com/maps/place/Dragon+Garden+Saipan/data=!4m2!3m1!1s0x0:0x2ee383615471c01c?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Map Area */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
                
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60566.818529228636!2d145.73063166466787!3d15.17998499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x66d8b7c7f077debd%3A0x2ee383615471c01c!2sDragon%20Garden%20Saipan!5e1!3m2!1sen!2sus!4v1750647407089!5m2!1sen!2sus"
                    width="100%" 
                    height="400" 
                    style={{ border: 0 }}
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dragon Garden Saipan Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

       

    

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do I need to book in advance?
                  </h3>
                  <p className="text-gray-600">
                    Yes, advance booking is required. This ensures we can provide you with the best experience and that our rare fruits are available during your visit.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What fruits are available for purchase?
                  </h3>
                  <p className="text-gray-600">
                    Our fruit availability varies by season. We grow island-exclusive varieties like Purple Sweet Sop, African Peach, and many others. Contact us for current availability and pricing.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I purchase seeds or plants?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We offer rare seeds from our collection with growing instructions and cultivation support. Contact Teal at +1 670 785-3008 for custom quotes and availability.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you offer group tasting experiences?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! We provide guided tasting experiences for individuals, families, and groups. Each experience includes 8-12 fruit varieties and educational information.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How do I get to Dragon Garden from the airport?
                  </h3>
                  <p className="text-gray-600">
                    Dragon Garden is easily accessible from Saipan International Airport. Rental cars are available at the airport, and we provide free parking for all visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 