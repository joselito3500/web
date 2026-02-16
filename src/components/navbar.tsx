import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // Importamos los iconos

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un link
  const closeMenu = () => setIsOpen(false);

  

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="text-2xl font-black text-white tracking-tighter">
          JOSE<span className="animate-flow text-gradient-clip bg-gradient-to-r from-blue-600 via-emerald-400 via-purple-500 via-emerald-400 to-blue-600 pb-2 px-1">DEV</span>
        </Link>

        {/* Desktop Menu (Se oculta en móviles: hidden md:flex) */}
        <div className="hidden md:flex items-center gap-10 text-slate-300 font-medium">
          <Link to="/" className="hover:text-blue-400 transition-colors">Inicio</Link>
          <Link to="/proyectos" className="hover:text-blue-400 transition-colors">Proyectos</Link>
          <Link to="/sobre-mi" className="hover:text-blue-400 transition-colors">Sobre mí</Link>
          <Link to="/contacto" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full transition-all active:scale-95">
            Contacto
          </Link>
        </div>

        {/* Mobile Overlay Menu */}
        <div className={`
          fixed inset-0 w-full h-screen bg-slate-950/98 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ease-in-out
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}>
          
          {/* Contenedor de los links centrado */}
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link 
              to="/" 
              onClick={closeMenu} 
              className="text-lg font-medium text-slate-300 hover:text-white tracking-widest transition-all hover:scale-110"
            >
              INICIO
            </Link>
            <Link 
              to="/proyectos" 
              onClick={closeMenu} 
              className="text-lg font-medium text-slate-300 hover:text-white tracking-widest transition-all hover:scale-110"
            >
              PROYECTOS
            </Link>
            <Link 
              to="/sobre-mi" 
              onClick={closeMenu} 
              className="text-lg font-medium text-slate-300 hover:text-white tracking-widest transition-all hover:scale-110"
            >
              SOBRE MÍ
            </Link>
            
            {/* Línea decorativa */}
            <div className="w-8 h-[1px] bg-blue-500/50 my-4"></div>

            <Link 
              to="/contacto" 
              onClick={closeMenu} 
              className="text-sm tracking-widest border border-blue-500 text-blue-400 px-10 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all active:scale-95"
            >
              CONTACTO
            </Link>
          </div>
        </div>
        {/* Mobile Button - Asegúrate de que tenga z-50 */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors z-50 relative"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Línea de degradado con flujo infinito */}
      <div className="h-[4px] w-full bg-gradient-to-r from-blue-600 via-emerald-400 via-purple-500 via-emerald-400 to-blue-600 animate-flow shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
    </nav>
  )
}

export default Navbar

