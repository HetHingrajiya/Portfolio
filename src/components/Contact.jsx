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
          ></lottie-player>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mb-12 sm:mb-16"
        >
          <a href="mailto:hethingrajiya97@gmail.com" className="group p-10 sm:p-14 glass rounded-[2.5rem] sm:rounded-[3.5rem] hover:shadow-2xl transition-all border-white/50 dark:border-white/5 card-glow">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-50 dark:bg-blue-900/20 rounded-3xl sm:rounded-[2rem] flex items-center justify-center mx-auto mb-8 sm:mb-10 group-hover:scale-110 transition-transform group-hover:bg-blue-600">
              <Mail className="text-blue-600 dark:text-blue-400 group-hover:text-white w-10 h-10 sm:w-12 sm:h-12 transition-colors" />
            </div>
            <h4 className="text-2xl sm:text-3xl font-black mb-3 text-slate-900 dark:text-white">Email</h4>
            <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 font-bold break-all">hethingrajiya97@gmail.com</p>
          </a>

          <a href="tel:7069267376" className="group p-10 sm:p-14 glass rounded-[2.5rem] sm:rounded-[3.5rem] hover:shadow-2xl transition-all border-white/50 dark:border-white/5 card-glow">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-50 dark:bg-green-900/20 rounded-3xl sm:rounded-[2rem] flex items-center justify-center mx-auto mb-8 sm:mb-10 group-hover:scale-110 transition-transform group-hover:bg-green-600">
              <Phone className="text-green-600 dark:text-green-400 group-hover:text-white w-10 h-10 sm:w-12 sm:h-12 transition-colors" />
            </div>
            <h4 className="text-2xl sm:text-3xl font-black mb-3 text-slate-900 dark:text-white">Phone</h4>
            <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 font-bold">+91 7069267376</p>
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 sm:gap-10"
        >
          <a href="https://linkedin.com/in/het-hingrajiya-5a63b2273" target="_blank" rel="noreferrer" className="p-4 sm:p-6 glass rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:-translate-y-2">
            <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a href="https://github.com/HetHingrajiya" target="_blank" rel="noreferrer" className="p-4 sm:p-6 glass rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 hover:text-white transition-all shadow-lg hover:-translate-y-2">
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
