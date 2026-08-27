import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Store, Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isScrolled ? 'bg-emerald-100 text-emerald-700' : 'bg-white/10 text-white group-hover:bg-white/20'}`}>
              <Store className="w-6 h-6" />
            </div>
            <span className={`text-xl font-bold font-display tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Umar <span className={isScrolled ? 'text-emerald-600' : 'text-amber-400'}>Traders</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-emerald-700' : 'text-white/90 hover:text-white'}`}>Why Us</a>
            <a href="#contact" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-emerald-700' : 'text-white/90 hover:text-white'}`}>Location</a>
            <a href="tel:+917861078608" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${isScrolled ? 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-md hover:shadow-lg' : 'bg-white text-emerald-950 hover:bg-amber-400 hover:text-emerald-950'}`}>
              <Phone className="w-4 h-4" />
              +91 7861078608
            </a>
          </nav>

          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-2">
          <a href="#features" className="px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
          <a href="#contact" className="px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Location</a>
          <a href="tel:+917861078608" className="px-4 py-3 mt-2 bg-emerald-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-md">
            <Phone className="w-4 h-4" />
            Call +91 7861078608
          </a>
        </div>
      )}
    </header>
  );
}
