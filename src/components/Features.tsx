import { motion } from 'motion/react';
import { PackageOpen, Coins, Truck, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: PackageOpen,
    title: "Bulk Quantities",
    description: "Fully stocked inventory to support businesses, events, and large families without interruption."
  },
  {
    icon: Coins,
    title: "Wholesale Pricing",
    description: "Highly competitive, transparent rates that ensure the best margins for your retail business."
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description: "We source only the finest grains, spices, and daily essentials from trusted regional suppliers."
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Consistent availability of goods ensuring your business never runs out of crucial stock."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 relative" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-6 tracking-tight"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            We are committed to providing the highest quality products at true wholesale rates, proudly serving the Tirupati community with trust and reliability.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
