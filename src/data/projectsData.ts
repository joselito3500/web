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
  {
    id: 'Pomodoro timer',
    title: 'Pomodoro Timer',
    description: 'Un temporizador de Pomodoro para ayudarte a concentrarte y ser más productivo.',
    longDescription: 'Este proyecto es un temporizador de Pomodoro impreso en 3D, se basa en una técnica de gestión del tiempo que consiste en dividir el trabajo en bloques de 50 minutos de trabajo seguidos de 10 minutos de descanso. Este dispositivo permite la configuración independiente de los tiempos de trabajo y descanso y cuenta con indicadores visuales para mejorar la experiencia del usuario.',
    images: ['pomodoro_main.webp'],
    tech: ['Arduino', 'Fusion360', 'impresión 3D'],
    link: 'https://github.com/...'
  },
  {
    id: 'Piaggio liberty 50cc 4T',
    title: 'Piaggio Liberty 50cc 4T',
    description: 'Un proyecto de reparación y venta de motocicleta Piaggio Liberty 50cc.',
    longDescription: 'Este proyecto consiste en la reparación de una motocicleta Piaggio Liberty 50cc, incluyendo el mantenimiento de motor, reparaciones en el sistema eléctrico y mejoras estéticas.',
    images: ['moto7.webp','moto6.webp','moto5.webp','moto4.webp','moto3.webp','moto2.webp','moto1.webp'],
    tech: ['Mecánica', 'Electrónica', 'Restauración'],
    link: 'https://github.com/...'
  },
  {
    id: '6DOF Robotic Arm',
    title: '6DOF Robotic Arm',
    description: '(WORK IN PROGRESS) Brazo robótico de 6 grados de libertad impreso en 3D y de bajo costo, diseñado para aplicaciones de automatización y robótica.',
    longDescription: 'Este proyecto es un brazo robótico de 6 grados de libertad, diseñado para aplicaciones de automatización y robótica. El brazo está construido con piezas impresas en 3D y utiliza motores paso a paso con encoders de efecto hall.',
    images: ['3th_holder.webp', 'parallel_gripper.webp'],
    tech: ['Robótica', 'Fusion360', 'Impresión 3D'],
    link: 'https://github.com/...'
  },
  // Añade más proyectos aquí siguiendo el mismo formato
];
