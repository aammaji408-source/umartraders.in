import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Restaurant Owner",
    content: "Umar Traders has been our go-to supplier for our restaurant. The quality of grains and spices is unmatched, and their bulk pricing helps our margins significantly.",
    rating: 5
  },
  {
    name: "Lakshmi Devi",
    role: "Local Retailer",
    content: "Reliable and always stocked. I run a small grocery shop in the neighboring town, and they never fail to deliver on time. Highly recommended for wholesale purchases.",
    rating: 5
  },
  {
    name: "Srinivasa Reddy",
    role: "Event Caterer",
    content: "The best wholesale shop in the region. Their transparent pricing and premium quality pulses have kept me coming back for the last 5 years. Great people to do business with.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden" id="testimonials">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-emerald-900 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-amber-900/20 rounded-full blur-[100px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold font-display text-white mb-6 tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-emerald-100/80 text-lg leading-relaxed"
          >
            Trusted by local businesses, retailers, and families for consistent quality and reliable service.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl relative group flex flex-col h-full"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-50 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 leading-relaxed font-light mb-8 relative z-10 flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto relative z-10">
                <p className="font-bold font-display text-slate-900 text-lg">{testimonial.name}</p>
                <p className="text-sm text-emerald-600 font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
