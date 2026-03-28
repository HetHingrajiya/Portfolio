import { Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import MagneticButton from './MagneticButton';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32 overflow-hidden px-4">
      <div className="hero-blob top-1/4 -left-20"></div>
      <div 
        className="hero-blob bottom-1/4 -right-20" 
        style={{ animationDelay: '-5s', background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))' }}
      ></div>
      
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center z-10 px-4 sm:px-0 mt-0 lg:mt-0">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
        >

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 sm:mb-10 tracking-tight leading-[1] sm:leading-none text-slate-900 dark:text-white text-center lg:text-left">
            I'm <span className="gradient-text">Het Hingrajiya</span><br />
            <ReactTyped 
              strings={['Android Developer', 'React Developer', 'Flutter Developer', 'Laravel Developer']} 
              typeSpeed={50} 
              backSpeed={30} 
              loop 
              className="text-slate-800 dark:text-slate-200"
            />
          </h1>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 mb-8 sm:mb-12 max-w-xl leading-relaxed font-medium">
            Designing and developing cutting-edge mobile solutions that bridge the gap between imagination and reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 w-full justify-center lg:justify-start">
            <MagneticButton className="w-full sm:w-auto">
              <a href="#contact" className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 sm:px-12 py-5 sm:py-6 rounded-2xl sm:rounded-3xl font-bold hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] dark:shadow-none flex items-center justify-center gap-3 w-full">
                Start a Project <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </MagneticButton>
            
            <MagneticButton className="w-full sm:w-auto">
              <a href="https://github.com/HetHingrajiya" target="_blank" rel="noreferrer" className="glass text-slate-900 dark:text-white px-10 sm:px-12 py-5 sm:py-6 rounded-2xl sm:rounded-3xl font-bold hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-3 text-sm sm:text-base border border-slate-200 dark:border-white/10 w-full">
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" /> Explore Work
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right Content - Spline 3D Viewer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-1/2 w-full h-[300px] sm:h-[400px] lg:h-[600px] mt-12 lg:mt-0 relative flex items-center justify-center"
          style={{ pointerEvents: 'auto' }}
        >
          {/* Main 3D Robot */}
          <spline-viewer 
            url="https://prod.spline.design/iK769U-Vz-Jk5W5A/scene.splinecode"
            style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 10 }}
          ></spline-viewer>
          
          {/* Static Fallback / Background Glow */}
          <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl scale-75 animate-pulse"></div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
