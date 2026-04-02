import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, ShoppingBag, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Android App Development",
      description: "Building high-performance, native Android applications using Java and XML with a focus on usability.",
      icon: Smartphone,
      color: "blue"
    },
    {
      title: "Web Development",
      description: "Developing modern, responsive web applications using Laravel and Tailwind CSS for robust backends and beautiful frontends.",
      icon: Globe,
      color: "purple"
    },
    {
      title: "E-commerce Solutions",
      description: "Creating complete online shopping experiences with secure payment integrations and efficient management systems.",
      icon: ShoppingBag,
      color: "pink"
    },
    {
      title: "Custom Business Software",
      description: "Designing and building tailored software solutions to solve specific business problems and improve operational efficiency.",
      icon: Briefcase,
      color: "indigo"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    pink: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
  };

  return (
    <section id="services" className="py-12 sm:py-24 bg-[#fafafa]/60 backdrop-blur-sm dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-slate-900 dark:text-white">
            My <span className="section-header-gradient">Services</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Providing expert development services to help businesses grow and succeed in the digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 glass rounded-[2rem] border border-white/20 dark:border-white/5 hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${colorClasses[service.color].split(' ')[0]}`}>
                <service.icon className={colorClasses[service.color].split(' ').slice(1).join(' ')} size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;