import React from 'react'
import { BrowserRouter as Router, Routes,HashRouter,Navigate, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'; // Asegúrate de que la ruta sea correcta

// Un componente rápido para la página de Inicio (Home)
const Home = () => (
  <div className="pt-40 text-center">
    <h1 className="text-6xl font-black text-white">Bienvenido a mi Web</h1>
    <p className="text-slate-400 mt-4">Navega por las secciones para conocerme mejor.</p>
  </div>
)
/*
const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    
  )
}
*/

function App() {
  return (
    <HashRouter>
      {/* Contenedor principal que ocupa toda la pantalla */}
      <div className="flex flex-col min-h-screen bg-slate-950">
        <Navbar />
        
        {/* El contenido crece y empuja al footer hacia abajo */}
        <main className="flex-grow">
          <Routes>
            {/* Ruta principal */}
            <Route path="/" element={<Home />} />
            
            {/* Tus otras rutas */}
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/proyectos" element={<Projects />} />

            {/* Redirección de seguridad: si entran a una ruta que no existe, al Inicio */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}
export default App

