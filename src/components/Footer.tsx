import { Store, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-400 py-16 border-t border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-900/50 rounded-xl flex items-center justify-center text-emerald-400">
                <Store className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                Umar <span className="text-emerald-500">Traders</span>
              </span>
            </div>
            <p className="text-emerald-500/80 text-sm leading-relaxed max-w-sm">
              Your trusted wholesale partner providing bulk daily essentials and premium groceries at unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-display mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-emerald-500/80 hover:text-emerald-300 transition-colors text-sm font-medium">Home</a></li>
              <li><a href="#features" className="text-emerald-500/80 hover:text-emerald-300 transition-colors text-sm font-medium">Why Us</a></li>
              <li><a href="#reservation" className="text-emerald-500/80 hover:text-emerald-300 transition-colors text-sm font-medium">Reservation</a></li>
              <li><a href="#contact" className="text-emerald-500/80 hover:text-emerald-300 transition-colors text-sm font-medium">Contact & Location</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-bold font-display mb-6">Connect With Us</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-emerald-900/50 text-emerald-400 rounded-full flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900/50 text-emerald-400 rounded-full flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900/50 text-emerald-400 rounded-full flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-900/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-600 font-medium">
            &copy; {new Date().getFullYear()} Umar Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
