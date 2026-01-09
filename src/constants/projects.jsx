/* ICONS */
import { FaHtml5, FaCss3, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { SiSqlite } from "react-icons/si";
/*import {  RiNextjsFill,  RiNextjsLine } from "react-icons/ri";
/* import { SiMongodb, SiRedux } from "react-icons/si"; */
import {
  BiLogoPostgresql,
  BiLogoTypescript,
  BiLogoTailwindCss,
} from "react-icons/bi";

/* IMAGES */
import underconstruction from "../assets/images/underconstruction.webp";
import miraiweb01 from "../assets/images/projects/miraiweb01.webp";
import miraiweb02 from "../assets/images/projects/miraiweb02.webp";

import masqueuncambio1 from "../assets/images/projects/masqueuncambio1.webp";
import masqueuncambio2 from "../assets/images/projects/masqueuncambio2.webp";
import masqueuncambio3 from "../assets/images/projects/masqueuncambio3.webp";

import dashboard1 from "../assets/images/projects/dashboard1.webp";
import dashboard2 from "../assets/images/projects/dashboard2.webp";
import dashboard3 from "../assets/images/projects/dashboard3.webp";

import dotdager1 from "../assets/images/projects/dotdager1.webp";
import dotdager2 from "../assets/images/projects/dotdager2.webp";
import dotdager3 from "../assets/images/projects/dotdager3.webp";

import singularity1 from "../assets/images/projects/singularity1.webp";
import singularity2 from "../assets/images/projects/singularity2.webp";
import singularity3 from "../assets/images/projects/singularity3.webp";

import devlanding1 from "../assets/images/projects/devlanding.webp";
import devlanding2 from "../assets/images/projects/devlanding2.webp";
import devlanding3 from "../assets/images/projects/devlanding3.webp";

import phisiscare from "../assets/images/projects/phisiscare.webp";
import phisiscare2 from "../assets/images/projects/phisiscare2.webp";
import phisiscare3 from "../assets/images/projects/phisiscare3.webp";

import gadev from "../assets/images/projects/gadev.webp";
import gadev2 from "../assets/images/projects/gadev2.webp";
import gadev3 from "../assets/images/projects/gadev3.webp";

import eatcommerce from "../assets/images/projects/eatcommerce.webp";
import eatcommerce2 from "../assets/images/projects/eatcommerce2.webp";
import eatcommerce3 from "../assets/images/projects/eatcommerce3.webp";

import resumia1 from "../assets/images/projects/resumia01.webp";
import resumia2 from "../assets/images/projects/resumia02.webp";
import resumia3 from "../assets/images/projects/resumia03.webp";

export const projects = [
  {
    id: 0,
    title: "Gadev - Web",
    link: "https://thecoderbutcher.github.io/gadev/",
    repository: "https://github.com/thecoderbutcher/gadev",
    icons: [FaHtml5, FaCss3, FaJsSquare],
    img: gadev,
    screenshot: [{ img: gadev2 }, { img: gadev3 }],
    text: {
      en: {
        description:
          "GADEV is a website created for a fictional development agency.",
        specification:
          "Built with <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, and <strong>jQuery</strong>, this website was the final project for a university course.<br><br> Using <strong>Bootstrap.js</strong>, transition effects between pages were added, along with form validations, enhancing the user experience and interactivity of the site.",
      },
      es: {
        description:
          "GADEV es una página web creada para una agencia de desarrollo ficticia.",
        specification:
          "Desarrollada con <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong> y <strong>Bootstrap.js</strong>, esta web fue el resultado de una práctica final para una materia de la universidad.<br><br> Mediante <strong>Bootstrap.js</strong>, se añadieron efectos de transición entre páginas y validaciones en los formularios, mejorando la experiencia de usuario e interactividad del sitio.",
      },
    },
  },
  {
    id: 1,
    title: "Mirai - Web",
    link: "https://thecoderbutcher.github.io/miraidev-officialweb/",
    repository: "https://github.com/thecoderbutcher/miraidev-officialweb",
    icons: [FaHtml5, FaCss3, FaJsSquare, FaReact],
    img: miraiweb01,
    screenshot: [{ img: miraiweb01 }, { img: miraiweb02 }],
    text: {
      en: {
        description:
          "This website was created with the goal of getting familiar with <strong>React.js</strong> and deepening my understanding of its features and capabilities for advanced projects.",
        specification:
          "With this practice, I was able to understand component-based development.<br><br> Additionally, by using <strong>TailwindCSS</strong> for its design, I gained valuable insights into design systems and how to implement them efficiently.<br><br> Currently, the website contains some hidden sections, but their content can be viewed by inspecting the code.",
      },
      es: {
        description:
          "Esta página web fue desarrollada con el objetivo de familiarizarme y profundizar mis conocimientos en <strong>React.js</strong>, explorando sus características y funcionalidades para proyectos avanzados.",
        specification:
          "Con esta práctica logré comprender el desarrollo basado en componentes.<br><br> Además, al utilizar <strong>TailwindCSS</strong> para su diseño, pude aprender mucho sobre sistemas de diseño y cómo implementarlos de manera eficiente.<br><br> Actualmente, la web cuenta con algunas secciones ocultas, pero su contenido puede visualizarse inspeccionando el código.",
      },
    },
  },
  {
    id: 2,
    title: "Más que un cambio - Web",
    link: "https://thecoderbutcher.github.io/masqueuncambio/",
    repository: "https://github.com/thecoderbutcher/masqueuncambio",
    icons: [FaHtml5, FaCss3, FaJsSquare],
    img: masqueuncambio1,
    screenshot: [{ img: masqueuncambio2 }, { img: masqueuncambio3 }],
    text: {
      en: {
        description:
          "This website was created for Engineer Joaquín Surroca with the goal of showcasing his proposals as a candidate for mayor, providing a clear and accessible platform to communicate his vision and projects to the community.",
        specification:
          "Using <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>Bootstrap.js</strong>, and other technologies, this website was built from a template due to time constraints.<br><br> The main focus was to highlight the proposals of Engineer Joaquín Surroca, as well as to showcase his team.",
      },
      es: {
        description:
          "Esta página web fue desarrollada para el Ing. Joaquín Surroca con el propósito de presentar sus propuestas como candidato a intendente, ofreciendo un espacio claro y accesible para comunicar su visión y proyectos a la comunidad.",
        specification:
          "Haciendo uso de <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>Bootstrap.js</strong>, entre otras tecnologías, esta página web fue desarrollada a partir de un template debido a la urgencia de tiempo.<br><br> El enfoque principal fue resaltar las propuestas del Ing. Joaquín Surroca, así como también destacar a su equipo de trabajo.",
      },
    },
  },
  {
    id: 3,
    title: "Dev Landing",
    link: "https://thecoderbutcher.github.io/devlanding/",
    repository: "https://github.com/thecoderbutcher/devlanding",
    icons: [FaHtml5, FaCss3, FaJsSquare, FaReact],
    img: devlanding1,
    screenshot: [{ img: devlanding2 }, { img: devlanding3 }],
    text: {
      en: {
        description:
          "This website serves as a template for selling Virtual Reality (VR) application development services, providing an attractive and professional presentation for potential clients.",
        specification:
          "Built with <strong>React.js</strong>, this site was created as an additional practice to deepen my understanding of the fundamentals of this technology, exploring concepts such as componentization, state management, and performance optimization.<br><br> Additionally, it features a modern and <strong>responsive design</strong> to ensure a smooth user experience across different devices.",
      },
      es: {
        description:
          "Esta página web sirve como template para la venta de servicios de desarrollo de aplicaciones de Realidad Virtual (VR), ofreciendo una presentación atractiva y profesional para potenciales clientes.",
        specification:
          "Desarrollada con <strong>React.js</strong>, esta web fue creada como una práctica adicional para profundizar en los fundamentos de esta tecnología, explorando conceptos como componentización, manejo de estado y optimización de rendimiento.<br><br> Además, incorpora un diseño moderno y responsivo para garantizar una experiencia de usuario fluida en diferentes dispositivos.",
      },
    },
  },
  {
    id: 4,
    title: "Admin Dashboard",
    link: "https://thecoderbutcher.github.io/admin-dashboard/",
    repository: "https://github.com/thecoderbutcher/admin-dashboard",
    icons: [FaHtml5, FaCss3, FaJsSquare],
    img: dashboard1,
    screenshot: [{ img: dashboard2 }, { img: dashboard3 }],
    text: {
      en: {
        description:
          "Admin Dashboard is a template designed to serve as a foundation for the development of a complete future administration panel. It features a modular and scalable structure that showcases user management, data analysis, activity monitoring, and system configuration.",
        specification:
          "This dashboard, built entirely with <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong>, allowed me to strengthen my knowledge by using both <strong>Flexbox</strong> and <strong>Grid</strong> as design systems.<br><br> Additionally, I implemented light and dark themes as well as <strong>responsive design</strong>, which helped me understand how to implement these features.<br><br> While it is a simple template, it was an excellent opportunity to practice and solidify these concepts.",
      },
      es: {
        description:
          "Admin Dashboard es una plantilla diseñada para servir como base para el desarrollo de un futuro panel de administración completo. con una estructura modular y escalable que muestra la gestión de usuarios, análisis de datos, monitoreo de actividades y configuración de sistemas.",
        specification:
          "Este dashboard, desarrollado completamente con <strong>HTML5</strong>, <strong>CSS3</strong> y <strong>JavaScript</strong>, me permitió consolidar mis conocimientos al utilizar tanto <strong>Flexbox</strong> como <strong>Grid</strong> como <strong>sistemas de diseño</strong>.<br><br> Además, implementé temas claro y oscuro, así como <strong>diseño responsivo</strong>, lo que me ayudó a comprender cómo llevar a cabo estas funcionalidades.<br><br> Aunque se trata de un template sencillo, fue una excelente oportunidad para practicar y afianzar estas implementaciones.",
      },
    },
  },
  {
    id: 5,
    title: "DotDager Web",
    link: "https://thecoderbutcher.github.io/dotdager/",
    repository: "https://github.com/thecoderbutcher/dotdager",
    icons: [FaCss3, FaJsSquare, FaReact],
    img: dotdager1,
    screenshot: [{ img: dotdager2 }, { img: dotdager3 }],
    text: {
      en: {
        description:
          "A web page developed in React for the hackathon organized by Mariano Villa in collaboration with Fiverr.",
        specification:
          "This website was built entirely with <strong>React.js</strong>, using <strong>TailwindCSS</strong> for styling and implementing <strong>responsive design</strong> with a <strong>SPA</strong> (Single Page Application) approach.<br><br> It features Mariano's Spotify playlist and his favorite game, LumberJack.<br><br> The site is focused on showcasing Mariano Villa's projects and hobbies, as well as his contact information. Both the displayed information and the images used were generated with artificial intelligence.",
      },
      es: {
        description:
          "Página web desarrollada en <strong>React.js</strong> para la hackathon organizada por Mariano Villa en colaboración con Fiverr.",
        specification:
          "Esta página web fue desarrollada completamente en <strong>React.js</strong>, utilizando <strong>TailwindCSS</strong> para los estilos y aplicando diseño responsivo con un enfoque <strong>SPA</strong> (Single Page Application).<br><br> Se integraron una lista de reproducción de Spotify de Mariano y su juego favorito, LumberJack. <br><br>El sitio está diseñado para mostrar los proyectos y hobbies de Mariano Villa, así como su información de contacto. Tanto la información presentada como las imágenes utilizadas fueron generadas con inteligencia artificial.",
      },
    },
  },
  {
    id: 6,
    title: "EatCommerce",
    link: "https://thecoderbutcher.github.io/eatcommerce",
    repository: "https://github.com/thecoderbutcher/eatcommerce",
    icons: [BiLogoTailwindCss, FaNodeJs, FaReact],
    img: eatcommerce,
    screenshot: [{ img: eatcommerce2 }, { img: eatcommerce3 }],
    text: {
      en: {
        description: "",
        specification: "",
      },
      es: {
        description: "",
        specification: "",
      },
    },
  },
  {
    id: 7,
    title: "Phisis Care",
    link: "https://thecoderbutcher.github.io/phisiscare/",
    repository: "https://github.com/thecoderbutcher/phisiscare",
    icons: [FaHtml5, FaCss3, FaJsSquare, FaReact],
    img: phisiscare,
    screenshot: [{ img: phisiscare2 }, { img: phisiscare3 }],
    text: {
      en: {
        description:
          "Phisis Care is a website designed as a template for a mental health center, providing a professional and accessible presentation for both patients and specialists.",
        specification:
          "Built with <strong>React.js</strong>, this site was created as an additional practice to enhance my knowledge of componentization, state management, and responsive design.<br><br> Furthermore, a clear and intuitive structure was implemented to facilitate navigation and access to relevant information about the services offered.",
      },
      es: {
        description:
          "Phisis Care es una página web diseñada como template para un centro de salud mental, ofreciendo una presentación profesional y accesible para pacientes y especialistas.",
        specification:
          "Desarrollada con <strong>React.js</strong>, esta web fue creada como una práctica adicional para fortalecer mis conocimientos en componentización, gestión de estado y diseño responsivo.<br><br> Además, se implementó una estructura clara e intuitiva para facilitar la navegación y el acceso a información relevante sobre los servicios ofrecidos.",
      },
    },
  },
  {
    id: 8,
    title: "Singularity",
    link: "https://thecoderbutcher.github.io/singularity-web/",
    repository: "https://github.com/thecoderbutcher/singularity",
    icons: [BiLogoTypescript, FaNodeJs, FaReact, IoLogoElectron, SiSqlite],
    img: singularity1,
    screenshot: [{ img: singularity2 }, { img: singularity3 }],
    text: {
      en: {
        description:
          "This application, developed using <strong>TypeScript</strong>, <strong>Reactjs</strong>, <strong>Electron</strong>, and <strong>Sqlite3</strong>, was created to address the need for an MP3 player designed to simplify playlist management.",
        specification:
          "This application allows you to create playlists where you can add MP3 files for playback.<br><br> I used <strong>Context</strong> for managing global states and <strong>Prisma</strong> for database creation and queries.<br><br> For reading MP3 metadata, I implemented <strong>music-metadata</strong>, which enabled me to extract information such as titles, artist, album, and cover art. Additionally, I integrated <strong>wavesurfer.js</strong> to generate a visual representation of sound waves on the progress bar during playback.<br><br> For the user interface, I used <strong>React.js</strong>, and I developed the API with <strong>Node.js</strong>. In both cases, I worked with <strong>TypeScript</strong> and focused on applying <strong>clean code</strong> principles.",
      },
      es: {
        description:
          "Esta aplicación, desarrollada utilizando <strong>TypeScript</strong>, <strong>Reactjs</strong>, <strong>Electron</strong>, y <strong>Sqlite3</strong>, se creó para abordar la necesidad de un reproductor de MP3 diseñado para simplificar la gestión de la lista de reproducción.",
        specification:
          "Esta aplicación permite crear listas de reproducción en las que puedes agregar archivos MP3 para reproducirlos.<br><br> Utilicé <strong>Context</strong> para el manejo de los estados globales y <strong>Prisma</strong> para la creación y consultas en la base de datos.<br><br> Para la lectura de los metadatos de los MP3, implementé <strong>music-metadata</strong>, lo que me permitió obtener información como títulos, artista, álbum y portada (cover). Además, integré <strong>wavesurfer.js</strong> para generar una representación visual de las ondas de sonido en la barra de progreso durante la reproducción.<br><br> En cuanto a la interfaz de usuario, empleé <strong>React.js</strong>, y desarrollé la API con Node.js. En ambos casos, trabajé con <strong>TypeScript</strong> y me enfoqué en aplicar principios de código limpio.",
      },
    },
  },
  {
    id: 9,
    title: "Crediflow",
    link: "https://github.com/thecoderbutcher/crediflow",
    repository: "https://github.com/thecoderbutcher/crediflow",
    icons: [BiLogoTailwindCss, FaNodeJs, FaReact],
    img: underconstruction,
    screenshot: [{ img: underconstruction }, { img: underconstruction }],
    text: {
      en: {
        description:
          "Crediflow is a web application designed to manage and optimize lender operations, providing control over customers, loans, payments, and employees. Its main objective is to facilitate credit administration and collection management, ensuring transparency and efficiency in the process.",
        specification: "",
      },
      es: {
        description:
          "Crediflow es una aplicación web diseñada para gestionar y optimizar las operaciones de prestamistas, proporcionando control sobre clientes, préstamos, cuotas y empleados. Su principal objetivo facilitar la administración de créditos y la gestión de cobros, garantizando transparencia y eficiencia en el proceso.",
        specification: "",
      },
    },
  },
  {
    id: 10,
    title: "Notus",
    link: "https://github.com/thecoderbutcher/notus",
    repository: "https://github.com/thecoderbutcher/notus",
    icons: [BiLogoTailwindCss, FaNodeJs, FaReact],
    img: underconstruction,
    screenshot: [{ img: underconstruction }, { img: underconstruction }],
    text: {
      en: {
        description:
          "Notus is a comprehensive solution for managing private educational institutions. It allows you to manage students, teachers, classes, assignments, assessments, events, and much more, all from a single, modern, secure, and accessible platform.",
        specification: "",
      },
      es: {
        description:
          "Notus es una solución integral para la gestión de instituciones educativas privadas. Permite gestionar estudiantes, profesores, clases, tareas, evaluaciones, eventos y mucho más, todo desde una plataforma única, moderna, segura y accesible.",
        specification: "",
      },
    },
  },
  {
    id: 11,
    title: "Resumia",
    link: "https://resume-analyzer-nine-xi.vercel.app/",
    repository: "https://github.com/thecoderbutcher/resumia",
    icons: [BiLogoTailwindCss, FaNodeJs, FaReact],
    img: resumia1,
    screenshot: [{ img: resumia2 }, { img: resumia3 }],
    text: {
      en: {
        description:
          "Designed to help professionals optimize their job opportunities by analyzing and creating resumes that are fully compatible with Applicant Tracking Systems (ATS). It allows you to analyze an existing resume using artificial intelligence, identifying relevant keywords, evaluating the document's structure, and generating a realistic compatibility score.",
        specification: "It also incorporates an AI-powered CV generator capable of producing modern, clear, and optimized resumes that pass automated filters, tailored to the user's profile and industry.<br><br>Developed with a focus on performance, usability, and scalability, using modern tools from the JavaScript ecosystem:<br><strong>React.js:</strong> to build a dynamic, reactive, and modular interface.<br><strong>Tailwind CSS:</strong> to achieve a clean, minimalist, and highly customizable design.<br><strong>Zod:</strong> to validate forms, ensure reliable data, and improve the user experience.<br><strong>Zustand:</strong> to manage overall status in a lightweight, simple, and efficient way.<br><br>The result is a fast, intuitive, and technically sound application, designed to offer a high-level professional experience for those looking to improve or create their resume from scratch using artificial intelligence.",
      },
      es: {
        description:
          "Diseñada para ayudar a profesionales a optimizar sus oportunidades laborales mediante el análisis y creación de currículums totalmente compatibles con sistemas ATS (Applicant Tracking Systems). Permite analizar un CV existente utilizando inteligencia artificial, identificando palabras clave relevantes, evaluando la estructura del documento y generando un puntaje real de compatibilidad.",
        specification: "Además, incorpora un generador de CV potenciado con IA, capaz de producir currículums modernos, claros y optimizados para superar filtros automatizados, adaptados al perfil y la industria del usuario.<br><br>Desarrollada con un enfoque en rendimiento, usabilidad y escalabilidad, utilizando herramientas modernas del ecosistema JavaScript:<br><strong>React.js:</strong> para construir una interfaz dinámica, reactiva y modular.<br><strong>TailwindCSS:</strong> para lograr un diseño limpio, minimalista y altamente personalizable.<br><strong>Zod:</strong> para validar formularios, garantizar datos confiables y mejorar la experiencia del usuario.<br><strong>Zustand:</strong> para gestionar el estado global de forma ligera, simple y eficiente.<br><br>El resultado es una aplicación rápida, intuitiva y técnicamente sólida, orientada a ofrecer una experiencia profesional de alto nivel para quienes buscan mejorar o crear su CV desde cero utilizando inteligencia artificial.",
      },
    },
  },
];
