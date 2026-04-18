import React from 'react'

const About: React.FC = () => {
  const skillCategories = {
    "Intereses": ["Desarrollo de software", "Impresión 3D", "Automatización", "Robótica", "Homelabbing", "Selfhosting", "Ethical Hacking", "electrónica", "mecánica de motos"],
    "Lenguajes y Frameworks": ["React", "TypeScript", "Python", "C++", "VHDL", "Arduino", "Ros2", "RAPID", "matlab"],
    "Hardware": ["Mecánica de motos","PLCs", "Arduino", "Raspberry Pi", "ESP32", "Motores DC", "Servomotores", "Motores paso a paso", "Sensores", "electronica analógica y digital"],
    "Sistemas": ["Linux", "Proxmox (hypervisor)", "OracleCloud", "wireguard (VPN)", "pihole (DNS)", "Nginx (reverse proxy)", "docker (containerization)","PostgreSQL (database)", "portainer (Docker management)", "nodered (flow-based programming)", "mosquitto (MQTT broker)" ],
    "Diseño y CAD": ["Fusion360","freeCAD","OpenSCAD", "KiCAD", "autoCAD"],
    
  };

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-neutral-700 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Cabecera con Foto/Avatar */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div>
            <img src="/web/LogoJP.png" alt="Jose's Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-black mb-4">Hola, soy Jose</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Soy ingeniero y mecánico de motos. Estoy en constante formación con una gran curiosidad por la tecnología. 
              Dedicado a aprender y experimentar con nuevas herramientas para crear proyectos innovadores 
              y desarrollar mis habilidades técnicas.
            </p>
          </div>
        </div>

        {/* Sección de Skills */}
        <div className="bg-neutral-800/50 border border-neutral-500 p-8 rounded-3xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-300">
            <span className="text-teal-300">#</span> Mis Intereses y Habilidades
          </h3>
          <div className="flex flex-col gap-6">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-xl font-bold text-gray-300 mb-4">{category}</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div 
                      key={skill}
                      className="px-5 py-2 bg-neutral-800 border border-neutral-500 rounded-xl font-medium text-teal-300 hover:text-white hover:border-teal-700 transition-all cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pequeña Bio Extra */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-neutral-800/30 rounded-2xl border border-neutral-500">
            <h4 className="font-bold text-gray-300 mb-2">Mi Objetivo</h4>
            <p className="text-gray-300 text-sm">Construir herramientas digitales que faciliten la vida de las personas.</p>
          </div>
          <div className="p-6 bg-neutral-800/30 rounded-2xl border border-neutral-500">
            <h4 className="font-bold text-gray-300 mb-2">Aprendizaje</h4>
            <p className="text-gray-300 text-sm">Actualmente desarrollando mi propio proyecto.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About