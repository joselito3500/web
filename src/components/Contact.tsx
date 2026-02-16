import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    // Aquí es donde normalmente enviarías los datos a un servicio como EmailJS o Formspree
  };

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-slate-950 flex justify-center">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-black text-white mb-2">Contacto</h2>
        <p className="text-slate-400 mb-8">¿Tienes una idea? Hablemos.</p>

        {enviado ? (
          <div className="bg-emerald-500/10 border border-emerald-500/50 p-6 rounded-2xl text-emerald-400 text-center">
            <p className="font-bold text-xl">¡Mensaje enviado con éxito! 🚀</p>
            <p className="text-sm mt-2">Te responderé lo antes posible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-300 mb-2 font-medium">Nombre</label>
              <input 
                required
                type="text" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Tu nombre..."
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-2 font-medium">Email</label>
              <input 
                required
                type="email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-2 font-medium">Mensaje</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95"
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