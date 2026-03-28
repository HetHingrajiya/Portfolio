import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-black mb-16 sm:mb-24 text-center tracking-tight text-slate-900 dark:text-white"
        >
          Professional <span className="section-header-gradient">Journey</span>
        </motion.h2>

        <div className="space-y-8 sm:space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 sm:pl-12 border-l-2 sm:border-l-4 border-blue-600/20 dark:border-blue-900/30"
          >
            <div className="absolute -left-[9px] sm:-left-[14px] top-0 w-4 h-4 sm:w-6 sm:h-6 bg-blue-600 rounded-full border-2 sm:border-4 border-white dark:border-slate-900 shadow-lg shadow-blue-500/50 animate-pulse"></div>
            <div className="glass p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/5 transition-all border-white/50 dark:border-white/5 card-glow">
              <div className="flex flex-wrap justify-between items-start mb-6 sm:mb-8 gap-4 sm:gap-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Full Stack Mobile Developer</h3>
                  <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-black mt-1">AEd-it Software, Rajkot</p>
                </div>
                <span className="px-5 py-2 bg-blue-600 text-white rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-lg shadow-blue-500/30">Current Role</span>
              </div>
              <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-3xl">
                Spearheading mobile application architecture and development, specializing in high-performance cross-platform solutions and robust backend integrations.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative pl-8 sm:pl-12 border-l-2 sm:border-l-4 border-slate-100 dark:border-slate-800"
          >
            <div className="absolute -left-[9px] sm:-left-[14px] top-0 w-4 h-4 sm:w-6 sm:h-6 bg-slate-200 dark:bg-slate-700 rounded-full border-2 sm:border-4 border-white dark:border-slate-900 shadow-lg"></div>
            <div className="glass p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border-white/50 dark:border-white/5 card-glow">
              <div className="flex flex-wrap justify-between items-start mb-6 sm:mb-8 gap-4 sm:gap-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Full Stack Mobile Developer</h3>
                  <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-black mt-1">BrainyBeam Info-Tech Pvt. Ltd, Ahmedabad</p>
                </div>
                <span className="px-5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-widest">1 Year Tenure</span>
              </div>
              <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-3xl">
                Focused on native Android development and API architecture, delivering seamless mobile experiences for diverse enterprise clients.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
