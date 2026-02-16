import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import type { Project } from '../data/projectsData';

export default function ProjectDetail() {
  // 1. Obtenemos el ID desde la URL (ej: /proyectos/sistema-ventas)
  const { id } = useParams<{ id: string }>();

  // 2. Buscamos el proyecto que coincida con ese ID
  const project = projectsData.find((p: Project) => p.id === id);

  // 3. Si el proyecto no existe, redirigimos al inicio
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Botón Volver */}
        <Link to="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Volver a proyectos
        </Link>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        {/* Tecnologías */}
        <div className="flex gap-2 mb-8">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
        
        {/* Imagen Principal 
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full rounded-2xl border border-slate-800 mb-8"
        />
        */}
        
        {/* Descripción larga */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-12">
            {project.images.map((url: string, index: number) => (
                <img 
                key={index} 
                src={url} 
                alt={`Captura ${index + 1} de ${project.title}`} 
                className="w-full h-auto rounded-xl object-contain border border-slate-800"
                />
            ))}
        </div>

        {/* Enlace al proyecto real/GitHub 
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-12 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-colors"
        >
          Ver Proyecto en GitHub
        </a>
        */}
        
      </div>
    </div>
  );
}