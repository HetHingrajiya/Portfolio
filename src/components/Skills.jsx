import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Smartphone, Layers, Code2, Database, ArrowRight } from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const skills = [
    {
      title: 'Android Studio',
      desc: 'Java & Kotlin Native',
      Icon: Smartphone,
      color: 'blue',
      glowColor: 'bg-blue-600'
    },
    {
      title: 'Flutter',
      desc: 'Cross-platform',
      Icon: Layers,
      color: 'purple',
      glowColor: 'bg-purple-600'
    },
    {
      title: 'Laravel',
      desc: 'PHP Backends',
      Icon: Code2,
      color: 'pink',
      glowColor: 'bg-pink-600'
    },
    {
      title: 'Firebase',
      desc: 'Cloud Infrastructure',
      Icon: Database,
      color: 'slate',
      glowColor: 'bg-slate-600'
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-[#fafafa] dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-slate-900 dark:text-white">
            Technical <span className="section-header-gradient">Arsenal</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Mastering the tools and technologies that power the next generation of digital experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
        >
          {skills.map((skill, index) => (
            <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03}>
              <motion.a 
                variants={itemVariants}
                href="#projects" 
                className="glass p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border-white/50 dark:border-white/5 group block card-glow h-full"
              >
                <div className={`w-14 h-14 sm:w-20 sm:h-20 bg-${skill.color}-50 dark:bg-${skill.color}-900/20 rounded-2xl sm:rounded-[2rem] flex items-center justify-center mb-8 sm:mb-10 group-hover:${skill.glowColor} transition-all duration-500 group-hover:rotate-6`}>
                  <skill.Icon className={`text-${skill.color}-600 dark:text-${skill.color}-400 group-hover:text-white w-8 h-8 sm:w-10 sm:h-10 transition-colors`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-4 text-slate-900 dark:text-white">{skill.title}</h3>
                <p className="text-xs sm:text-base text-slate-500 dark:text-slate-400 font-bold opacity-80 group-hover:opacity-100 transition-opacity">{skill.desc}</p>
                <div className={`mt-6 flex items-center gap-2 text-${skill.color}-600 dark:text-${skill.color}-400 text-[10px] sm:text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500`}>
                  View Projects <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </motion.a>
            </Tilt>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 sm:mt-24 flex flex-wrap justify-center gap-3 sm:gap-6"
        >
          {['API Integration', 'Debugging', 'Teamwork', 'Management', 'Full Stack Mobile'].map((tag, i) => (
            <span key={i} className={`px-6 py-3 sm:px-8 sm:py-4 glass rounded-2xl text-xs sm:text-sm font-black text-slate-600 dark:text-slate-400 hover:text-white transition-all cursor-default shadow-sm hover:shadow-lg translate-y-0 hover:-translate-y-1 ${
              i % 4 === 0 ? 'hover:bg-blue-600' : 
              i % 4 === 1 ? 'hover:bg-purple-600' : 
              i % 4 === 2 ? 'hover:bg-pink-600' : 
              'hover:bg-slate-800'
            }`}>
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
