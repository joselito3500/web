import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    // Aquí es donde normalmente enviarías los datos a un servicio como EmailJS o Formspree
  };

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-neutral-700 flex justify-center">
      <div className="max-w-2xl w-full bg-neutral-800 border border-neutral-700 p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-black text-white mb-2">Contacto</h2>
        <p className="text-gray-300 mb-8">¿Tienes una idea? Hablemos.</p>

        {enviado ? (
          <div className="bg-teal-500/10 border border-teal-500/50 p-6 rounded-2xl text-gray-400 text-center">
            <p className="font-bold text-xl">¡Mensaje enviado con éxito! 🚀</p>
            <p className="text-sm mt-2">Te responderé lo antes posible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Nombre</label>
              <input 
                required
                type="text" 
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-300 transition-colors"
                placeholder="Tu nombre..."
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Email</label>
              <input 
                required
                type="email" 
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-300 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Mensaje</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-300 transition-colors resize-none"
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-teal-300 hover:bg-teal-700 text-black font-bold rounded-xl shadow-lg shadow-teal-500/20 transition-all active:scale-95"
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact