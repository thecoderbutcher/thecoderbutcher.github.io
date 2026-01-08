/* IMAGES */
import banner from "../assets/images/banner.webp";
import profile from "../assets/images/profile-image.webp";
import logo from "../assets/images/logo.png";
import spanish from "../assets/images/spanish.png";
import english from "../assets/images/english.png";

export const images = {
  banner,
  profile,
  logo,
  spanish,
  english,
};

/* LINKS */
export const links = {
  en: [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Experience",
      url: "/experience",
    } /*
        {
            id: 4,
            title: 'Blog',
            url: '/blog'
        },  */,
  ],
  es: [
    {
      id: 1,
      title: "Inicio",
      url: "/",
    },
    {
      id: 2,
      title: "Portafolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Experiencia",
      url: "/experience",
    } /*
        {
            id: 4,
            title: 'Blog',
            url: '/blog'
        }, */,
  ],
};

/* PROFILE */
export const profileText = {
  en: [
    {
      position: "Web Developer",
      phrase: "Design the future by Developing the present",
      image: profile,
      button: "Contact me",
    },
  ],
  es: [
    {
      position: "Desarrollador Web",
      phrase: '"Diseña el futuro desarrollando el presente"',
      image: profile,
      button: "Contáctame",
    },
  ],
};

export const myStory = {
  en: {
    title: "About me",
    description:
      "🤓 I'm a constantly growing web developer, passionate about graphic design, pizza lover and an information systems engineer in process.",
    text2: "💡 Currently, I am fully focused on JavaScript development.",
    text3:
      "🧑🏾‍💻 I use React.js and Next.js for frontend development, and Node.js with Express.js and TypeScript for backend development. For databases, I primarily work with PostgreSQL and occasionally use MongoDB.",
    text4:
      "🚀 My main goal is to specialize in JavaScript-based technologies and become an expert in this ecosystem.",
  },

  es: {
    title: "Acerca de mi",
    description:
      "🤓 Soy desarrollador web en constante crecimiento, apasionado por el diseño gráfico, fanático de la pizza e Ingeniero en sistemas de información en proceso.",
    text2: "💡 Actualmente, estoy enfocado en el desarrollo con JavaScript.",
    text3:
      "🧑🏾‍💻 Utilizo React.js y Next.js para el desarrollo frontend, y Node.js con Express.js y TypeScript para el desarrollo de backend. Para bases de datos, trabajo principalmente con PostgreSQL y ocasionalmente uso MongoDB.",
    text4:
      "🚀 Mi principal objetivo es especializarme en tecnologías basadas en JavaScript y convertirme en un experto en este ecosistema.",
  },
};

export const testimonialText = {
  en: [{ text: "Testimonials" }],
  es: [{ text: "Testimonios" }],
};
