import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6 tracking-tight">Visit Our Store</h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              We are conveniently located right on the highway. Drop by to check our extensive stock and discuss bulk requirements directly with our team.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 border border-amber-100">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-display text-slate-900 mb-2">Store Address</h4>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Shop No 140&141, <br />
                    Indira Priyadarshini Municipal Vegetables market, <br />
                    Kotramangalam, Tirupati, <br />
                    Andhra Pradesh 517501 <br />
                    <span className="text-sm text-slate-400 mt-1 inline-block">(JCPF+649)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 border border-amber-100">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-display text-slate-900 mb-2">Contact Number</h4>
                  <p className="text-slate-600 leading-relaxed font-light">
                    <a href="tel:+917861078608" className="hover:text-emerald-600 transition-colors inline-block py-1">
                      +91 7861078608
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 border border-amber-100">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-display text-slate-900 mb-2">Business Hours</h4>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Monday - Sunday<br />
                    4:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] lg:aspect-square bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-900/10 border border-slate-200 relative group">
              <iframe 
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.2913508491823!2d79.41490211527787!3d13.639145601140081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b1a1a63cbf5%3A0xf5928d2d60a5e78c!2sIndira%20Priyadarshini%20Vegetable%20Market!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[30%] opacity-90 transition-all duration-700 group-hover:grayscale-0"
              ></iframe>
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl flex items-center justify-between pointer-events-auto border border-white/20">
                <div>
                  <p className="font-bold font-display text-slate-900 text-lg">Umar Traders</p>
                  <p className="text-sm text-slate-500 font-medium">Kotramangalam, Tirupati</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Indira+Priyadarshini+Municipal+Vegetables+market,+Kotramangalam,+Tirupati,+Andhra+Pradesh+517501" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Navigation className="w-5 h-5 ml-[-2px]" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
