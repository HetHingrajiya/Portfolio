import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Code2, UserCheck, GraduationCap, User } from 'lucide-react';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section id="about" className="py-20 sm:py-32 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
              <div className="relative glass rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 overflow-hidden shadow-2xl border-white/50 dark:border-white/5">
                <div className="absolute top-0 right-0 p-4 sm:p-8">
                  <Code2 className="w-12 h-12 sm:w-20 sm:h-20 text-blue-600 dark:text-blue-400 opacity-5" />
                </div>
                <div className="relative z-10 text-center py-6 sm:py-10">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6 sm:mb-8 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 rounded-[2rem] transform -rotate-6 transition-transform hover:rotate-0 flex items-center justify-center">
                      <User className="w-20 h-20 text-blue-600/20 dark:text-blue-400/10" />
                    </div>
                    
                    {/* 3D Scene - Desktop ONLY */}
                    {!isMobile && (
                      <spline-viewer 
                        url="https://prod.spline.design/v2o63Vp-vYjW-X75/scene.splinecode"
                        style={{ width: '100%', height: '100%', position: 'relative', zIndex: 10 }}
                      ></spline-viewer>
                    )}

                    {/* Animation removed to resolve 'warning sign' issue and reduce space */}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black mb-2 text-slate-900 dark:text-white">Het Hingrajiya</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-[10px] sm:text-xs">Full Stack Developer</p>
                </div>
              </div>
            </Tilt>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6 sm:mb-10 tracking-tight text-slate-900 dark:text-white">
              Crafting Digital<br/><span className="text-blue-600 dark:text-blue-400">Excellence</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8 font-medium">
              With a BCA degree and a deep-seated passion for cross-platform ecosystems, I specialize in transforming complex requirements into seamless digital experiences across Mobile and Web.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 sm:mb-10">
              My approach blends robust technical implementation in <span className="text-blue-600 dark:text-blue-400 font-bold">Android, React, Flutter, and Laravel</span> with a keen eye for modern UI/UX principles, ensuring every app is as beautiful as it is functional.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div className="p-6 sm:p-8 glass rounded-2xl sm:rounded-3xl hover:scale-105 transition-transform duration-300 flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <UserCheck className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 mb-0.5">1+</h4>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Year Exp.</p>
                </div>
              </div>
              <div className="p-6 sm:p-8 glass rounded-2xl sm:rounded-3xl hover:scale-105 transition-transform duration-300 flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-purple-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 mb-0.5">BCA</h4>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Graduate</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
