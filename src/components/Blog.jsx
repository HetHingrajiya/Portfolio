import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: "How I Built a Barcode Scanning System",
      description: "A deep dive into the integration of .NET/WPF with Android to create a seamless retail solution.",
      date: "Mar 15, 2024",
      author: "Het Hingrajiya",
      category: "Case Study"
    },
    {
      title: "Laravel vs Firebase for E-commerce",
      description: "Comparing the pros and cons of using a traditional PHP backend vs a real-time cloud database for online shops.",
      date: "Feb 28, 2024",
      author: "Het Hingrajiya",
      category: "Tutorial"
    },
    {
      title: "How to Optimize Android App Performance",
      description: "Essential tips and tricks for improving RecyclerView speed and overall app responsiveness in native Java.",
      date: "Jan 10, 2024",
      author: "Het Hingrajiya",
      category: "Performance"
    }
  ];

  return (
    <section id="blog" className="py-12 sm:py-24 bg-white/60 backdrop-blur-sm dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-slate-900 dark:text-white">
            Latest <span className="section-header-gradient">Articles</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Insights, tutorials, and case studies from my development journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-[#fafafa] dark:bg-slate-950 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all duration-500 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-full">
                  {article.category}
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8 flex-grow">
                {article.description}
              </p>
              <div className="flex flex-col gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} /> {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} /> {article.author}
                  </div>
                </div>
                <a href="#" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-xs hover:translate-x-2 transition-transform">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;