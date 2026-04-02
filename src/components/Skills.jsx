import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { SiAndroid, SiLaravel, SiTailwindcss, SiMysql, SiFirebase, SiPostman, SiGit, SiGithub, SiAndroidstudio } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { Terminal } from 'lucide-react';

const Skills = ({ isDark }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }
  };

  const skills = [
    {
      title: 'Android Development',
      desc: 'Expertise in Java & XML, building high-performance native applications.',
      Icon: SiAndroid,
      color: '#3DDC84',
      bgLight: 'rgba(61, 220, 132, 0.1)',
      bgDark: 'rgba(61, 220, 132, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(61,220,132,0.3)]'
    },
    {
      title: 'Laravel (PHP)',
      desc: 'Creating robust, scalable, and secure backend architectures using Laravel framework.',
      Icon: SiLaravel,
      color: '#FF2D20',
      bgLight: 'rgba(255, 45, 32, 0.1)',
      bgDark: 'rgba(255, 45, 32, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(255,45,32,0.3)]'
    },
    {
      title: 'Tailwind CSS',
      desc: 'Designing modern, responsive, and highly customizable user interfaces.',
      Icon: SiTailwindcss,
      color: '#38B2AC',
      bgLight: 'rgba(56, 178, 172, 0.1)',
      bgDark: 'rgba(56, 178, 172, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(56,178,172,0.3)]'
    },
    {
      title: 'MySQL / SQLite',
      desc: 'Designing efficient database schemas and optimizing complex queries.',
      Icon: SiMysql,
      color: '#4479A1',
      bgLight: 'rgba(68, 121, 161, 0.1)',
      bgDark: 'rgba(68, 121, 161, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(68,121,161,0.3)]'
    },
    {
      title: 'Firebase',
      desc: 'Implementing real-time databases, cloud functions, and seamless authentication.',
      Icon: SiFirebase,
      color: '#FFCA28',
      bgLight: 'rgba(255, 202, 40, 0.1)',
      bgDark: 'rgba(255, 202, 40, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(255,202,40,0.3)]'
    },
    {
      title: 'REST APIs',
      desc: 'Developing and integrating robust APIs for seamless data communication.',
      Icon: SiPostman,
      color: '#FF6C37',
      bgLight: 'rgba(255, 108, 55, 0.1)',
      bgDark: 'rgba(255, 108, 55, 0.15)',
      glow: 'shadow-[0_0_20px_rgba(255,108,55,0.3)]'
    }
  ];

  const tools = [
    { name: 'Git & GitHub', Icon: SiGithub, color: '#181717' },
    { name: 'Android Studio', Icon: SiAndroidstudio, color: '#3DDC84' },
    { name: 'VS Code', Icon: VscCode, color: '#007ACC' }
  ];

  return (
    <section id="skills" className="py-8 sm:py-24 bg-[#fafafa]/60 backdrop-blur-sm dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/[0.04] bg-[bottom_1px_center] opacity-20 transition-opacity"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-slate-900 dark:text-white">
            Technical <span className="section-header-gradient">Skills</span>
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
            <motion.div key={index} variants={itemVariants}>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000}>
                <div className="group relative p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="relative z-10">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundColor: isDark ? skill.bgDark : skill.bgLight }}
                    >
                      <skill.Icon size={32} color={skill.color} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-32 text-center"
        >
          <h3 className="text-2xl sm:text-4xl font-black mb-12 text-slate-900 dark:text-white flex items-center justify-center gap-4">
            <Terminal className="text-blue-600 w-8 h-8" /> Essential Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {tools.map((tool, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 glass rounded-2xl sm:rounded-3xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-lg">
                  <tool.Icon size={isDark ? 32 : 36} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
