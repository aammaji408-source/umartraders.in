import { motion } from 'motion/react';
import { ArrowRight, ShoppingCart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-emerald-950 text-white">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-emerald-950/80"></div>
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] bg-emerald-800 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute top-[40%] -left-[20%] w-[60%] h-[60%] bg-amber-900/30 rounded-full blur-[100px] opacity-30"></div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-emerald-300 text-sm font-medium mb-8 backdrop-blur-md shadow-lg">
            <ShoppingCart className="w-4 h-4" />
            Premium Wholesale Partner
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-8 leading-tight">
            Umar <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              Traders
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Your trusted wholesale destination in Tirupati. We provide bulk daily essentials, premium groceries, and top-quality goods at unbeatable prices for your business and family.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-emerald-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:-translate-y-0.5 gap-2 w-full sm:w-auto">
              Visit Our Store
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+917861078608" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-emerald-800/50 rounded-full hover:bg-emerald-700 transition-all backdrop-blur-md border border-emerald-600/50 hover:border-emerald-500 hover:-translate-y-0.5 gap-2 w-full sm:w-auto">
              Call +91 7861078608
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
