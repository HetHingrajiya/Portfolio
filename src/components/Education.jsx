import { motion } from 'framer-motion';
import { MapPin, Award, Terminal, Cpu } from 'lucide-react';

const Education = () => {
  const eduData = [
    { title: 'MCA', inst: 'Dr. Babasaheb Ambedkar Open University', year: '2025 - 2027', metric: 'Duration', val: '30%', type: 'Current', color: 'blue' },
    { title: 'BCA', inst: 'Atmiya University', year: '2022 - 2025', metric: 'CGPA', val: '87.2%', type: 'Graduate', color: 'blue' },
    { title: 'HSC', inst: 'Sarvodaya School', year: 'High School', metric: 'Percentage', val: '85.8%', type: 'SSC', color: 'slate' },
    { title: 'SSC', inst: 'Divyatej School', year: 'Secondary Education', metric: 'Percentage', val: '82.5%', type: 'SSC', color: 'slate' },
  ];

  const achData = [
    { title: 'GDSC Hackathon', loc: 'Rajkot', Icon: Award, color: 'blue' },
    { title: 'Code Carnival', loc: 'Rajkot', Icon: Terminal, color: 'purple' },
    { title: 'ADSC Hackathon', loc: 'Rajkot', Icon: Cpu, color: 'pink' },
  ];

  return (
    <>
      <section id="education" className="py-20 sm:py-32 bg-[#fafafa] dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black mb-16 sm:mb-24 text-center tracking-tight text-slate-900 dark:text-white"
          >
            Academic <span className="section-header-gradient">Foundation</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {eduData.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl card-glow flex flex-col h-full ${edu.type === 'Current' ? 'border-2 border-blue-600/30 dark:border-blue-400/30' : 'border border-white/50 dark:border-white/5'}`}
              >
                <div className="mb-auto">
                  {edu.type === 'Current' ? (
                     <span className="px-5 py-1.5 bg-blue-600 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-blue-500/30">Current</span>
                  ) : (
                     <span className={`text-${edu.type === 'Graduate' ? 'blue' : 'slate'}-600 dark:text-${edu.type === 'Graduate' ? 'blue' : 'slate'}-400 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em]`}>{edu.year}</span>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-black mt-8 mb-2 text-slate-900 dark:text-white">{edu.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold mb-4 leading-tight">{edu.inst}</p>
                  
                  {edu.type === 'Current' && (
                    <div className="flex items-center gap-2 mb-8">
                      <MapPin className="w-3 h-3 text-blue-600" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ahmedabad</span>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{edu.metric}</span>
                    <span className={`text-xl sm:text-2xl font-black text-${edu.color}-600 dark:text-${edu.color}-400`}>
                      {edu.type === 'Graduate' ? '8.72' : 
                       edu.type === 'Current' ? `${edu.val} (25-27)` : edu.val}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: edu.val }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`bg-${edu.color}-600 dark:bg-${edu.color}-400 h-2.5 rounded-full ${edu.type === 'Current' ? 'animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]' : ''}`} 
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 sm:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-black mb-8 sm:mb-12 tracking-tight flex items-center gap-6 text-slate-900 dark:text-white">
                <span className="section-header-gradient">Achievements</span>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {achData.map((ach, i) => (
                  <div key={i} className="glass p-5 sm:p-6 rounded-2xl sm:rounded-3xl flex items-center gap-4 sm:gap-6 hover:shadow-xl transition-all group">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-${ach.color}-50 dark:bg-${ach.color}-900/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-${ach.color}-600 transition-colors`}>
                      <ach.Icon className={`text-${ach.color}-600 dark:text-${ach.color}-400 group-hover:text-white w-6 h-6 sm:w-8 sm:h-8`} />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">{ach.title}</h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">{ach.loc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-black mb-12 sm:mb-20 tracking-tight text-slate-900 dark:text-white">
                <span className="section-header-gradient">Certifications</span>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {['Google Cloud Computing Foundation', 'Python, Great Learning', 'Introduction to C#, Sololearn'].map((cert, i) => (
                  <div key={i} className={`p-6 sm:p-8 glass rounded-2xl sm:rounded-[2rem] border-l-4 sm:border-l-8 ${i===0 ? 'border-blue-600 dark:border-blue-400' : i===1 ? 'border-green-600 dark:border-green-400' : 'border-purple-600 dark:border-purple-400'} shadow-sm hover:shadow-xl transition-all`}>
                    <h4 className="text-base sm:text-xl font-black text-slate-900 dark:text-white leading-tight">{cert}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
