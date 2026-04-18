import React from 'react'
import {Instagram/*, Mail */ } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 border-t border-neutral-500 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Logo y Eslogan */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-white">
              JOSE<span className="animate-flow text-gradient-clip bg-gradient-to-r from-teal-700 via-teal-300 via-purple-500 via-teal-300 to-teal-700 pb-2 px-1">Projects</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-xs">
              Ingenieria e innovación.
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="flex gap-6">
            <a 
            href="https://www.instagram.com/josependonj/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-teal-300 rounded-full text-black hover:text-pink-500 hover:scale-120 hover:bg-teal-700 transition-all border border-neutral-500"
            >
            <Instagram size={20} />
            </a>
            {/*
            <a href="#" className="p-3 bg-slate-900 rounded-full text-gray-400 hover:text-blue-400 hover:scale-120 transition-all border border-slate-800">
              <Mail size={20} />
            </a>
            */}
          </div>
        </div>

        {/* Línea inferior de copyright */}
        <div className="pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Jose Pendón. Casi todos los derechos reservados.
          </p>
          
          {/* Pequeño detalle con el degradado */}
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Trabajo realizado por</span>
            <span className="animate-flow text-gradient-clip bg-gradient-to-r from-teal-700 via-teal-300 via-purple-500 via-teal-300 to-teal-700 font-bold">
              Jose Pendon
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer