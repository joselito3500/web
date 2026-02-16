import React from 'react'
import { motion } from 'framer-motion'

// Definimos una interfaz para los tipos de datos (buena práctica en TS)
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const myProjects: Project[] = [
  {
    title: "E-commerce Pro",
    description: "Una tienda completa con carrito de compras y pasarela de pago.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    title: "Dashboard de Clima",
    description: "Visualización de datos meteorológicos usando APIs externas.",
    tags: ["Vite", "API Rest", "Chart.js"],
    link: "#"
  },
  {
    title: "App de Notas",
    description: "Gestión de tareas diarias con almacenamiento local.",
    tags: ["React", "Local Storage"],
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Mis {" "}
          <span className="animate-flow text-gradient-clip bg-gradient-to-r from-blue-600 via-emerald-400 via-purple-500 via-emerald-400 to-blue-600 pb-2 px-1">
            Proyectos
          </span>
          </h2>
          </motion.header>
          <p className="text-slate-400 text-lg">
            Una selección de mis trabajos más recientes y experimentos técnicos.
          </p>
        </header>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500">
                  {/* Icono simple de carpeta */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Status-icon-placeholder" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects