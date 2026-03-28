import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-24 bg-[#fafafa] dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-7xl font-black mb-6 sm:mb-12 tracking-tight text-slate-900 dark:text-white"
        >
          Let's Create<br/><span className="section-header-gradient">Together</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto w-48 h-48 sm:w-64 sm:h-64 -mt-8 mb-4 overflow-hidden"
        >
          <lottie-player 
            src="/robot.json" 
            background="transparent" 
            speed="1" 
            style={{ width: '100%', height: '100%' }} 
            loop 
            autoplay
            aria-hidden="true"
          ></lottie-player>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-1 gap-4">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:hethingrajiya97@gmail.com" 
              className="flex items-center gap-4 p-5 glass rounded-2xl group transition-all border border-white/20 dark:border-white/5 shadow-lg text-left"
            >
              <div className="w-12 h-12 bg-blue-600/10 dark:bg-blue-400/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Email Me</p>
                <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white break-all">hethingrajiya97@gmail.com</p>
              </div>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919726229197" 
              className="flex items-center gap-4 p-5 glass rounded-2xl group transition-all border border-white/20 dark:border-white/5 shadow-lg text-left"
            >
              <div className="w-12 h-12 bg-purple-600/10 dark:bg-purple-400/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-inner group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Call Me</p>
                <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white">+91 97262 29197</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 sm:gap-10"
        >
          <a href="https://linkedin.com/in/het-hingrajiya-5a63b2273" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-4 sm:p-6 glass rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:-translate-y-2">
            <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a href="https://github.com/HetHingrajiya" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-4 sm:p-6 glass rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 hover:text-white transition-all shadow-lg hover:-translate-y-2">
            <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-slate-400 dark:text-slate-500 font-medium text-[10px] sm:text-sm max-w-xs sm:max-w-md mx-auto leading-relaxed"
        >
          Het, Block No.9, Radhika Residency 1, Behind Ramkrushna, Kothariya Solvant, Kothariya, Rajkot - 360022
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
