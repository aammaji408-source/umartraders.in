import { motion } from 'motion/react';
import garlicImg from '../assets/images/garlic_wholesale_1783140239943.jpg';
import potatoesImg from '../assets/images/potatoes_wholesale_1783140255432.jpg';
import onionsImg from '../assets/images/onions_wholesale_1783140269115.jpg';

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-6 tracking-tight"
          >
            Fresh Bulk Produce
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            Take a look at our extensive range of high-quality bulk goods, neatly organized to serve your wholesale needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] overflow-hidden aspect-[4/3] relative group shadow-lg"
          >
            <img 
              src={garlicImg} 
              alt="Fresh Garlic Bulbs" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">Fresh Garlic</h3>
              <p className="text-emerald-100">Premium quality for all culinary needs.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[2rem] overflow-hidden aspect-[4/3] relative group shadow-lg"
          >
            <img 
              src={potatoesImg} 
              alt="Fresh Raw Potatoes" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">Fresh Potatoes</h3>
              <p className="text-emerald-100">Earthy, natural, and rich in nutrients.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-[2rem] overflow-hidden aspect-[4/3] relative group shadow-lg"
          >
            <img 
              src={onionsImg} 
              alt="Red and Yellow Onions" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 font-display">Fresh Onions</h3>
              <p className="text-emerald-100">Vibrant and essential for daily cooking.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
