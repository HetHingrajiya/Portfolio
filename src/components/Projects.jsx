import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/HetHingrajiya/repos?sort=updated&per_page=6');
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error('GitHub API rate limit exceeded or invalid data', data);
          setRepos([]);
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const projectDescriptions = {
    'Portfolio': 'A high-end, responsive professional portfolio featuring dynamic integrations and modern UI/UX design.',
    'Garage_app': 'A comprehensive garage management solution built with Flutter, streamlining service tracking.',
    'Shiva-shine': 'A professional car detailing and service platform designed for seamless appointment booking.',
    'movieverse': 'A dynamic movie exploration platform using TMDb API, featuring real-time search.',
    'E-Commerce_Platform': 'A robust full-stack e-commerce solution with integrated payment gateways.',
    'Android-projects': 'A collection of native Android applications demonstrating expertise in Java and Kotlin.'
  };

  return (
    <section id="projects" className="py-20 sm:py-32 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-slate-900 dark:text-white">
            Featured <span className="section-header-gradient">Projects</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            A curated selection of my most recent work, showcasing dynamic problem-solving and technical expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse bg-slate-100 dark:bg-slate-800/50 rounded-[2rem] h-80"></div>
            ))
          ) : (
            repos && repos.length > 0 ? repos.map((repo, idx) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#fafafa] dark:bg-slate-950 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all duration-500 cursor-pointer p-8 flex flex-col h-full transform hover:-translate-y-2 card-glow no-underline text-inherit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-12 -mt-12 blur-3xl group-hover:bg-blue-600/20 transition-colors duration-500"></div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white capitalize group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {repo.name.replace(/[-_]/g, ' ')}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
                  {projectDescriptions[repo.name] || repo.description || 'An exciting side project demonstrating advanced implementation details.'}
                </p>
                <div className="flex items-center gap-4 text-slate-400 text-sm font-bold pt-6 border-t border-slate-200 dark:border-slate-800">
                  {repo.language && (
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> {repo.language}</span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1"><Star className="w-4 h-4" /> {repo.stargazers_count}</span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1"><GitFork className="w-4 h-4" /> {repo.forks_count}</span>
                  )}
                </div>
              </motion.a>
            )) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10 text-slate-500">
                Projects are currently unavailable. Please check my GitHub directly.
              </div>
            )
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="https://github.com/HetHingrajiya" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-[2rem] font-black hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(59,130,246,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 active:scale-95"
          >
            View Full Archive <FaGithub className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
