import { motion } from 'framer-motion';
import { ExternalLink, Layers, Zap, Smartphone, ShoppingCart, Barcode, Heart } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Jewelry E-Commerce System",
      problem: "Local jewelry businesses struggle with managing products, orders, and payments efficiently.",
      solution: "Developed a full-stack e-commerce platform with secure payment integration.",
      tech: ["Laravel", "Tailwind CSS", "MySQL", "Razorpay"],
      features: ["Product management", "Shopping cart & checkout", "Secure online payments", "Admin dashboard"],
      result: "Reduced manual work and improved order tracking efficiency.",
      icon: ShoppingCart,
      color: "blue",
      links: { demo: "#", github: "#" }
    },
    {
      title: "Barcode Scan to Cart System",
      problem: "Retail shops needed a faster way to add products to customer carts.",
      solution: "Built a desktop + mobile system to scan barcodes and directly add items to cart.",
      tech: [".NET / WPF", "Android", "SQLite"],
      features: ["Barcode scanning", "Customer selection", "Real-time cart updates", "Data storage"],
      result: "Improved billing speed and reduced manual entry errors.",
      icon: Barcode,
      color: "purple",
      links: { demo: "#", github: "#" }
    },
    {
      title: "Wishlist & Cart System (Android)",
      problem: "Users needed a way to save products and manage cart items easily.",
      solution: "Implemented wishlist and cart functionality using local storage.",
      tech: ["Android (Java)", "SQLite", "RecyclerView"],
      features: ["Add/remove wishlist items", "Multi-item cart system", "Quantity management"],
      result: "Enhanced user experience and engagement.",
      icon: Heart,
      color: "pink",
      links: { demo: "#", github: "#" }
    }
  ];

  const colorClasses = {
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    pink: "bg-pink-500/10 text-pink-600 dark:text-pink-400"
  };

  const glowClasses = {
    blue: "from-blue-600/20",
    purple: "from-purple-600/20",
    pink: "from-pink-600/20"
  };

  const tagClasses = {
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
    pink: "text-pink-600 dark:text-pink-400"
  };

  return (
    <section id="projects" className="py-12 sm:py-24 bg-white/60 backdrop-blur-sm dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-slate-900 dark:text-white">
            Project <span className="section-header-gradient">Case Studies</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Solving real-world business problems through practical and scalable software solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-12 sm:gap-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
            >
              {/* Info Section */}
              <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl ${colorClasses[project.color]}`}>
                    <project.icon size={32} />
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className={`flex items-center gap-2 text-sm font-black uppercase tracking-widest mb-2 ${tagClasses[project.color]}`}>
                      <Zap size={16} /> Problem
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className={`flex items-center gap-2 text-sm font-black uppercase tracking-widest mb-2 ${tagClasses[project.color]}`}>
                      <Layers size={16} /> Solution
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className={`flex items-center gap-2 text-sm font-black uppercase tracking-widest mb-2 ${tagClasses[project.color]}`}>
                      <Smartphone size={16} /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-bold bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                            <div className={`w-1.5 h-1.5 rounded-full ${project.color === 'blue' ? 'bg-blue-500' : project.color === 'purple' ? 'bg-purple-500' : 'bg-pink-500'}`}></div> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-3">Result</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a href={project.links.demo} className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:scale-105 transition-all text-sm">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a href={project.links.github} className="flex items-center gap-2 px-6 py-3 glass text-slate-900 dark:text-white rounded-xl font-bold hover:scale-105 transition-all text-sm border border-slate-200 dark:border-white/10">
                      <FaGithub size={18} /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Image/Placeholder Section */}
              <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} relative group`}>
                <div className={`absolute -inset-4 bg-gradient-to-br ${glowClasses[project.color]} to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/20 dark:border-white/5 shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800/50">
                    <project.icon size={64} className="text-slate-300 dark:text-slate-600 animate-pulse" />
                  </div>
                  {/* Image tag would go here if available */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
