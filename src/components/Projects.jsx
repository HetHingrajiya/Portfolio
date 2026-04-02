import { motion } from 'framer-motion';
import { ExternalLink, Layers, Zap, Smartphone, ShoppingCart, Barcode, Heart, Calendar } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "TEAS",
      problem: "Traditional tea ordering and inventory management can be slow and prone to errors.",
      solution: "Developed a modern mobile application for efficient tea service management and tracking.",
      tech: ["Dart", "Flutter", "Firebase"],
      features: ["Real-time ordering", "Inventory tracking", "User authentication", "Order history"],
      result: "Streamlined the ordering process and improved inventory accuracy.",
      icon: ShoppingCart,
      color: "blue",
      links: { demo: "#", github: "https://github.com/HetHingrajiya/Teas" }
    },
    {
      title: "GARAGE APP",
      problem: "Garage owners struggle with tracking service schedules and customer vehicle history.",
      solution: "Built a comprehensive management solution to streamline service tracking and billing.",
      tech: ["Dart", "Flutter", "SQLite"],
      features: ["Service scheduling", "Vehicle history logs", "Automated billing", "Customer management"],
      result: "Improved service efficiency and customer retention through better tracking.",
      icon: Barcode,
      color: "purple",
      links: { demo: "#", github: "https://github.com/HetHingrajiya/Garage_app" }
    },
    {
      title: "MOVIEVERSE",
      problem: "Users often find it difficult to discover new movies and find detailed information in one place.",
      solution: "Created a dynamic movie exploration platform with real-time search and detailed insights.",
      tech: ["React", "Tailwind CSS", "TMDb API"],
      features: ["Dynamic search", "Movie details & ratings", "Trending categories", "Responsive design"],
      result: "Provided an engaging and user-friendly platform for movie enthusiasts.",
      icon: Heart,
      color: "pink",
      links: { demo: "#", github: "https://github.com/HetHingrajiya/movieverse" }
    },
    {
      title: "SLOT BOOK",
      problem: "Managing appointment slots and bookings manually leads to overlaps and missed sessions.",
      solution: "A streamlined booking platform for users to view available slots and book appointments instantly.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      features: ["Real-time availability", "Instant booking", "Email notifications", "Admin management"],
      result: "Automated the booking process, reducing manual errors and improving scheduling efficiency.",
      icon: Calendar,
      color: "indigo",
      links: { demo: "#", github: "https://github.com/HetHingrajiya?tab=repositories" }
    }
  ];

  const colorClasses = {
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    pink: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
  };

  const glowClasses = {
    blue: "from-blue-600/20",
    purple: "from-purple-600/20",
    pink: "from-pink-600/20",
    indigo: "from-indigo-600/20"
  };

  const tagClasses = {
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
    pink: "text-pink-600 dark:text-pink-400",
    indigo: "text-indigo-600 dark:text-indigo-400"
  };

  const bulletClasses = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    indigo: "bg-indigo-500"
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
                            <div className={`w-1.5 h-1.5 rounded-full ${bulletClasses[project.color]}`}></div> {f}
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
