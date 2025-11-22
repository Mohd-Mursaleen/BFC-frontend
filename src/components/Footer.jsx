import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { 
  CreditCard, 
  Smartphone, 
  Banknote,
  Instagram,
  MessageCircle,
} from 'lucide-react'


const SERVICE_LINKS = [
  { label: 'Cardio', href: '#' },
  { label: 'Zumba', href: '#' },
  { label: 'Weight Training', href: '#' },
  { label: 'Personal Training', href: '#' }
]


const PAYMENT_METHODS = [
  { icon: Banknote, label: 'Cash' },
  { icon: Smartphone, label: 'UPI' },
  { icon: CreditCard, label: 'Card' }
]

function Footer() {
  const serviceLinks = useMemo(() => SERVICE_LINKS, [])
  const paymentMethods = useMemo(() => PAYMENT_METHODS, [])

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Big CTA */}
        <div className="mb-20 border-b border-white/10 pb-20">
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter text-white mb-8">
            Ready To <span className="text-transparent bg-clip-text bg-gradient-to-r from-bfc-yellow to-yellow-600">Start?</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <p className="text-xl text-gray-400 max-w-xl">
              Join the most premium fitness community in Bengaluru. Your journey to greatness begins here.
            </p>
            <a 
              href="https://wa.me/918050022645"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-bfc-yellow transition-colors duration-300"
            >
              Join Now
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-black tracking-tighter uppercase text-white hover:text-green-500 transition-colors inline-block">
              BFC
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium fitness destination in Bengaluru. Transform your body and mind with expert guidance and world-class equipment.
            </p>
            <div className="flex gap-4">
              {[Instagram].map((Icon, i) => (
                <a key={i} href="https://www.instagram.com/bengaluru_fitness_club/" className="text-gray-400 hover:text-green-500 transition-colors p-2 hover:bg-white/5 rounded-full">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 uppercase tracking-wider text-bfc-yellow">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>



          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Bengaluru Fitness Club. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-500" title={method.label}>
                <method.icon size={16} />
                <span className="text-xs uppercase tracking-wider">{method.label}</span>
              </div>
            ))}
          </div>

          {/* Developer Credit - Bottom Right */}
          <div className="flex flex-col items-end gap-1 text-gray-500">
            <p className="text-xs">
              Developed and managed by: <span className="text-gray-400">Mohd Mursaleen</span>
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">Connect here:</span>
              <a
              href="https://wa.me/918218134534"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-500 transition-colors p-1.5 hover:bg-white/5 rounded-full"
                title="Contact on WhatsApp"
              >
                <MessageCircle size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
