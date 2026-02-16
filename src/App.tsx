import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Projects from './components/projects'
import About from './components/about'
import Contact from './components/Contact'
import Footer from './components/Footer'; // Asegúrate de que la ruta sea correcta

// Un componente rápido para la página de Inicio (Home)
const Home = () => (
  <div className="pt-40 text-center">
    <h1 className="text-6xl font-black text-white">Bienvenido a mi Web</h1>
    <p className="text-slate-400 mt-4">Navega por las secciones para conocerme mejor.</p>
  </div>
)

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
        </Routes>

        <Footer />
      </div>
    </Router>
    
  )
}

export default App

