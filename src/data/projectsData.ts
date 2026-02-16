// 1. Primero definimos la interfaz para los proyectos
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  tech: string[];
  link: string;
}

// 2. Ahora sí podemos usarlo para el array
export const projectsData: Project[] = [
  {
    id: 'chupi',
    title: 'chu-π robot',
    description: 'Un pequeño robot de compañía, interactivo y divertido, diseñado para hacerte sonreír.',
    longDescription: 'Este proyecto es un robot de compañía impreso en 3D llamado "chu-π". Está diseñado para ser interactivo y divertido, con sensores que le permiten responder e interactuar con el usuario. Puede hablar, mover la cabeza y cambiar de humor.',
    images: ['chupi.webp', 'chu.webp'],
    tech: ['Arduino', 'Fusion360', 'Impresión 3D'],
    link: 'https://github.com/...'
  },
  {
    id: 'Linearactuator',
    title: 'Linear Actuator',
    description: 'Actuador lineal impreso en 3D, de bajo costo y sencillo para proyectos de automatización y robótica.',
    longDescription: 'Este proyecto es un actuador lineal impreso en 3D, diseñado para ser una solución de bajo costo y fácil de fabricar para proyectos de automatización y robótica. El diseño incluye un motor Dc, un husillo de avance y una estructura robusta que permite movimientos precisos.',
    images: ['linearactuator.webp', 'linactcorte.webp'],
    tech: ['Hardware', 'Fusion360', 'Impresión 3D'],
    link: 'https://github.com/...'
  },
  // Añade más proyectos aquí siguiendo el mismo formato
];
