import { Moon, Sun, Menu, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ toggleTheme, isDark }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      let current = '';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && window.pageYOffset >= element.offsetTop - 150) {
          current = section;
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full glass z-50 border-b border-white/20 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 font-extrabold text-3xl tracking-tighter gradient-text">HH.</div>
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`nav-link font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                    activeSection === link.name.toLowerCase() ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <button 
                onClick={toggleTheme}
                className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-amber-400 transition-all border border-slate-200 dark:border-slate-700 overflow-hidden w-10 h-10 flex items-center justify-center shadow-inner"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ y: 20, opacity: 0, rotate: -90 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: -20, opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-5 h-5 text-amber-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ y: 20, opacity: 0, rotate: 90 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: -20, opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-5 h-5 text-blue-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleTheme} className="relative p-2 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden w-9 h-9 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div key="m-sun" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 180 }} transition={{ duration: 0.3 }}>
                      <Sun className="w-5 h-5 text-amber-400" />
                    </motion.div>
                  ) : (
                    <motion.div key="m-moon" initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: -180 }} transition={{ duration: 0.3 }}>
                      <Moon className="w-5 h-5 text-blue-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-900 dark:text-white">
                <Menu />
              </button>
            </div>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-20 bottom-0 glass backdrop-blur-3xl z-40 border-t border-white/20 dark:border-white/5 animate-fade-in">
            <div className="flex flex-col h-full p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="mobile-nav-link text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="mt-auto pt-10 border-t border-slate-200 dark:border-slate-800">
                <div className="flex gap-6 justify-center">
                  <a href="https://linkedin.com/in/het-hingrajiya-5a63b2273" target="_blank" rel="noreferrer" className="p-4 glass rounded-2xl"><FaLinkedin /></a>
                  <a href="https://github.com/HetHingrajiya" target="_blank" rel="noreferrer" className="p-4 glass rounded-2xl"><FaGithub /></a>
                  <a href="mailto:hethingrajiya97@gmail.com" className="p-4 glass rounded-2xl"><Mail /></a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
