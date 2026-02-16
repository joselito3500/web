import React from 'react'

const About: React.FC = () => {
  const skills = ["Impresión 3D", "Electrónica", "bases de datos", "Homelabbing", "C++", "Python", "Linux", "Proxmox", "React", "TypeScript", "Docker", "Fusion360"];

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Cabecera con Foto/Avatar */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="w-48 h-48 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl rotate-3 flex-shrink-0 shadow-2xl shadow-blue-500/20">
            {/* Aquí podrías poner una <img src="..." /> más adelante */}
          </div>
          <div>
            <h2 className="text-4xl font-black mb-4">Hola, soy Jose 👋</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Soy un ingeniero en constante formación con una gran curiosidad por la tecnología. 
              Dedicado a aprender y experimentar con nuevas herramientas para crear proyectos innovadores 
              y desarrollar mis habilidades técnicas.
            </p>
          </div>
        </div>

        {/* Sección de Skills */}
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-blue-500">#</span> Mis Intereses y Habilidades
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div 
                key={skill}
                className="px-5 py-2 bg-slate-800 border border-slate-700 rounded-xl font-medium text-slate-300 hover:text-white hover:border-blue-500 transition-all cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Pequeña Bio Extra */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-blue-400 mb-2">Mi Objetivo</h4>
            <p className="text-slate-400 text-sm">Construir herramientas digitales que faciliten la vida de las personas.</p>
          </div>
          <div className="p-6 bg-slate-900/30 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-emerald-400 mb-2">Aprendizaje</h4>
            <p className="text-slate-400 text-sm">Actualmente desarrollando mi propio proyecto.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About