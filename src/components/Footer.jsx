import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="py-16 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">
            © 2026 Het Hingrajiya 
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        type="button"
        onClick={goToTop}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 p-4 glass rounded-2xl shadow-2xl z-50 transition-all duration-500 hover:bg-blue-600 hover:text-white group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 ${showTopBtn ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-24 opacity-0 pointer-events-none'}`}
      >
        <ChevronUp className="w-6 h-6 group-hover:animate-bounce" aria-hidden />
      </button>
    </>
  );
};

export default Footer;
