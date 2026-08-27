import { motion } from 'motion/react';
import { CalendarDays, Send } from 'lucide-react';

export default function Reservation() {
  return (
    <section className="py-24 bg-white" id="reservation">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold font-display text-black mb-4 tracking-tight"
          >
            Make a Reservation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            Reserve your bulk orders in advance to ensure availability. Please fill in the details below.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-bold text-black uppercase tracking-wider">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 transition-all text-black placeholder:text-slate-400 font-medium bg-transparent" 
                />
              </div>
              
              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-bold text-black uppercase tracking-wider">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="+91 00000 00000" 
                  className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 transition-all text-black placeholder:text-slate-400 font-medium bg-transparent" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Business Name */}
              <div className="space-y-2">
                <label htmlFor="business" className="block text-xs font-bold text-black uppercase tracking-wider">
                  Business Name (Optional)
                </label>
                <input 
                  type="text" 
                  id="business" 
                  placeholder="Your Shop Name" 
                  className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 transition-all text-black placeholder:text-slate-400 font-medium bg-transparent" 
                />
              </div>

              {/* Pickup Date */}
              <div className="space-y-2">
                <label htmlFor="date" className="block text-xs font-bold text-black uppercase tracking-wider">
                  Expected Pickup Date
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 transition-all text-black placeholder:text-slate-400 font-medium appearance-none bg-transparent" 
                  />
                  <CalendarDays className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="space-y-2">
              <label htmlFor="items" className="block text-xs font-bold text-black uppercase tracking-wider">
                Items to Reserve
              </label>
              <textarea 
                id="items" 
                rows={4} 
                placeholder="e.g., 50kg Sona Masoori Rice, 20kg Toor Dal..." 
                className="w-full px-4 py-3 border-2 border-black rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 transition-all text-black placeholder:text-slate-400 font-medium resize-none bg-transparent"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 border-2 border-black"
            >
              <Send className="w-5 h-5" />
              Submit Reservation
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
