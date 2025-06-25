import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">🐲 Dragon Garden Saipan</h3>
            <p className="text-green-100 mb-4">
              Experience the world&apos;s rarest and most exotic fruits at Dragon Garden Saipan. 
              Our botanical paradise features extraordinary tropical fruits from around the globe, 
              cultivated with passion and expertise in the beautiful island of Saipan.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/dragongardensaipan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/dragongardensaipan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297C4.243 14.794 3.76 13.644 3.76 12.347c0-1.297.49-2.447 1.297-3.328.878-.878 2.028-1.361 3.328-1.361 1.297 0 2.447.49 3.328 1.297.878.878 1.361 2.028 1.361 3.328 0 1.297-.49 2.447-1.297 3.328-.878.878-2.028 1.361-3.328 1.361zm7.718-9.469c-.878 0-1.59-.712-1.59-1.59s.712-1.59 1.59-1.59 1.59.712 1.59 1.59-.712 1.59-1.59 1.59zm1.59 2.447c0 .878-.712 1.59-1.59 1.59s-1.59-.712-1.59-1.59.712-1.59 1.59-1.59 1.59.712 1.59 1.59z"/>
                </svg>
              </a>
              <a
                href="tel:+16707853008"
                className="text-green-100 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/selection" className="text-green-100 hover:text-white transition-colors">
                  Our Selection
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white transition-colors">
                  Contact & Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-green-100">
              <p>📍 Saipan, Northern Mariana Islands</p>
              <p>📞 <a href="tel:+16707853008" className="text-green-100 hover:text-white transition-colors">+1 670 785-3008</a></p>
              <p>🕒 Open daily: 9:00 AM - 5:00 PM</p>
              <p className="text-sm">*Advance booking required for fruit tasting experiences</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-100">
            © {new Date().getFullYear()} Dragon Garden Saipan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 