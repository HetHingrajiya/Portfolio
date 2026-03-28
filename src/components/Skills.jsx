import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { SiAndroid, SiReact, SiFlutter, SiLaravel, SiMysql, SiFirebase } from 'react-icons/si';
import { ArrowRight } from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const skills = [
    {
      title: 'Android Native',
      desc: 'Expertise in Java & Kotlin, building high-performance native experiences.',
      Icon: SiAndroid,
      color: 'green',
      glowColor: 'bg-green-600'
    },
    {
      title: 'React ecosystem',
      desc: 'Architecting modern web applications with Vite, Framer Motion, and Tailwind.',
      Icon: SiReact,
      color: 'blue',
      glowColor: 'bg-blue-600'
    },
    {
      title: 'Flutter',
      desc: 'Developing beautiful, natively compiled apps for mobile and web from a single codebase.',
      Icon: SiFlutter,
      color: 'cyan',
      glowColor: 'bg-cyan-600'
    },
    {
      title: 'Laravel',
      desc: 'Creating robust, scalable, and secure backend architectures using PHP.',
      Icon: SiLaravel,
      color: 'red',
      glowColor: 'bg-red-600'
    },
    {
      title: 'MySQL',
      desc: 'Designing efficient database schemas and optimizing complex queries for data integrity.',
      Icon: SiMysql,
      color: 'orange',
      glowColor: 'bg-orange-600'
    },
    {
      title: 'Firebase',
      desc: 'Implementing real-time databases, cloud functions, and seamless authentication.',
      Icon: SiFirebase,
      color: 'amber',
      glowColor: 'bg-amber-600'
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-[#fafafa] dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/[0.04] bg-[bottom_1px_center] opacity-20 transition-opacity"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-slate-900 dark:text-white">
            Core <span className="section-header-gradient">Specializations</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Deep technical mastery across the full stack, empowering the creation of seamless digital experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {skills.map((skill, index) => (
            <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} perspective={1000} transitionSpeed={1000}>
              <motion.a 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                href="#projects" 
                className="glass p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border-white/50 dark:border-white/5 group block card-glow h-full relative overflow-hidden"
              >
                {/* Background animated blob */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`absolute -right-20 -top-20 w-64 h-64 bg-${skill.color}-500/10 rounded-full blur-3xl group-hover:bg-${skill.color}-500/20 transition-colors duration-500`}
                ></motion.div>

                <motion.div 
                  animate={floatAnimation}
                  className={`w-20 h-20 sm:w-24 sm:h-24 bg-${skill.color}-50 dark:bg-${skill.color}-900/20 rounded-3xl sm:rounded-[2.5rem] flex items-center justify-center mb-8 relative z-10 group-hover:${skill.glowColor} transition-all duration-500 shadow-lg shadow-${skill.color}-500/20`}
                >
                  <skill.Icon className={`text-${skill.color}-600 dark:text-${skill.color}-400 group-hover:text-white w-10 h-10 sm:w-12 sm:h-12 transition-colors`} />
                </motion.div>
                
                <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 text-slate-900 dark:text-white relative z-10">{skill.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed relative z-10">{skill.desc}</p>
                
                <div className={`mt-8 flex items-center gap-2 text-${skill.color}-600 dark:text-${skill.color}-400 text-xs font-black uppercase tracking-widest relative z-10 opacity-70 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300`}>
                  Explore Framework <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
