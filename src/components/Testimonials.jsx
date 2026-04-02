import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Het delivered our jewelry system on time and improved our workflow significantly.",
      author: "Local Business Owner",
      role: "Client",
      stars: 5
    },
    {
      text: "Great developer with strong problem-solving skills.",
      author: "Client",
      role: "Freelance Client",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-24 bg-[#fafafa]/60 backdrop-blur-sm dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-slate-900 dark:text-white">
            Client <span className="section-header-gradient">Feedback</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            What clients say about working with me on their business solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 glass rounded-[2.5rem] border border-white/20 dark:border-white/5 hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
            >
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                <Quote size={64} className="text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
                ))}
              </div>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed italic mb-8 flex-grow">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 dark:text-blue-400 font-black text-xl">
                  {testimonial.author[0]}
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;