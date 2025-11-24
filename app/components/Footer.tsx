import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold">Sidhant Pakhare</h3>
            <p className="text-gray-300">FP&A Specialist</p>
            <p className="text-gray-300 text-sm mt-2">Cost forecasting, budgeting, variance analysis & financial strategy</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="/experience" className="hover:text-gold transition-colors">Experience</a></li>
              <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Connect</h4>
            <div className="flex space-x-4">
              <a href="mailto:sidhant@example.com" className="hover:text-gold transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="tel:+1234567890" className="hover:text-gold transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sidhant Pakhare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
