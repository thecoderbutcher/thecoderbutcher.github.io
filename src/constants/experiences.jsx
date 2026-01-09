import freelance from "../assets/images/experience/freelance.png";
import upro from "../assets/images/experience/upro.webp";
import raona from "../assets/images/experience/raona.webp";
import unvime from "../assets/images/experience/unvime.webp";

const durationTime = (initDate) => {
  const init = new Date(initDate);
  const today = new Date();

  let years = today.getFullYear() - init.getFullYear();
  let month = today.getMonth() - init.getMonth();

  if (month < 0) {
    years--;
    month += 12;
  }
  return { year: years, month: month };
};

const expDate1 = durationTime("2023-05-01");

export const experiences = {
  en: [
    {
      id: 1,
      jobTitle: "Web Application Developer (Javascript)",
      duration: `${expDate1.year} year${expDate1.year !== 1 ? "s" : ""} ${
        expDate1.month
      } month${expDate1.month !== 1 ? "s" : ""}`,
      company: "Freelance",
      logo: freelance,
      period: "May 2023 - Present",
      location: "Villa Mercedes, San Luis, Argentina",
      workMode: "Remote",
      description:
        "Design and development of web applications and templates with Reactjs, Nextjs, Nodejs,Postgresql, Mongodb and Docker. Design and development of web applications with service focus (veterinarian, lawyer buffet, counters)",
    },
    {
      id: 2,
      jobTitle: "Developer | Web Application Manager",
      duration: "1 year 10 months",
      company: "Universidad Provincial de Oficio (Upro)",
      logo: upro,
      period: "Mar 2022 - Dec 2023",
      location: "Villa Mercedes, San Luis, Argentina",
      workMode: "In person",
      description:
        "Design and development of web applications for staff entry/exit, organization and positioning of graduates in the acts of collation, records of employees and generation of salary receipts using PHP, HTML5, JavaScript, CSS3, Bootstrap, Postgresql. Administration and updating of the SIU-GUARANÍ system, generation of reports in excel, modification of the report generator with Jasper Report. Design and implementation of solutions adapting the system to the requirements of the institution in databases with Postgresql.",
    },
    {
      id: 3,
      jobTitle: "Security Investigator",
      duration: "10 months",
      company: "Universidad Nacional de Villa Mercedes",
      logo: unvime,
      period: "Mar. 2022 - Dec. 2022",
      location: "Villa Mercedes, San Luis, Argentina",
      workMode: "Hybrid",
      description:
        "Research on Denial of Access Attack Detection Mechanism services distributed over software-defined networks. Understanding and simulation of the operation of SDN with Mininet and Python.",
    },
    {
      id: 4,
      jobTitle: "Web Application Developer (PHP)",
      duration: "2 years 4 months",
      company: "Freelance",
      logo: freelance,
      period: "Sept. 2020 - Dec. 2022",
      location: "Villa Mercedes, San Luis, Argentina",
      workMode: "Hybrid",
      description:
        "Update and modification of the portals of “La casa de la Música”, “Molino Fenix” and “San Luis Discos” implemented with Wordpress. Module implementation for a CRM of a graphics company located in Chile with PHP, HTML5, CSS, Javascript, Jquery, Mysql.",
    },
    {
      id: 5,
      jobTitle: "Web Application Developer",
      duration: "5 months",
      company: "Raona",
      logo: raona,
      period: "Feb. 2014 - Jun. 2014",
      location: "La Punta, San Luis, Argentina",
      workMode: "In person",
      description:
        "Web application development (ShareMe) on the Microsoft Sharepoint platform using HTML, CSS, Javascript, Jquery, C# and SQL Server R2 2012",
    },
  ],
  es: [
    {
      id: 1,
      jobTitle: "Desarrollador de aplicaciones web (Javascript)",
      duration: `${expDate1.year} año${expDate1.year !== 1 ? "s" : ""} ${
        expDate1.month
      } mes${expDate1.month !== 1 ? "es" : ""}`,
      company: "Independiente / Freelance",
      logo: freelance,
      period: "May. 2023 - Actual",
      location: "Villa Mercedes, San Luis, Argentina",
      workMode: "Remoto",
      description:
        "Diseño y Desarrollo de aplicaciones web y templates con Reactjs, Nextjs, Nodejs, Postgresql, Mongodb y Docker. Diseño y Desarrollo de aplicaciones web con enfoque a servicio (veterinaria, buffet de abogados, contadores)",
    },
    {
      id: 2,
      jobTitle: "Desarrollador | Administrador de aplicaciones web",
      duration: "1 año 10 meses",
      company: "Universidad Provincial de Oficio (Upro)",
      logo: upro,
      period: "Mar. 2022 - Dic. 2023 ",
      location: "Villa Mercedes, San Luis, Argentina",
      workMode: "Presencial",
      description:
        "Diseño y Desarrollo de aplicaciones web de ingreso/egreso del personal, ordenamiento y posicionamiento de egresados en los actos de colación, registros de empleados y generación de recibos de sueldo utilizando PHP, HTML5, JavaScript, CSS3, Bootstrap, Postgresql. Administración y actualización del sistema SIU-GUARANÍ, generación de reportes en excel, modiﬁcación de generador de reportes con Jasper Report. Diseño e implementación de soluciones adaptando al sistema a los requerimientos de la institución en bases de datos con Postgresql.",
    },
    {
      id: 3,
      jobTitle: "Investigador de Seguridad",
      duration: "10 meses",
      company: "Universidad Nacional de Villa Mercedes",
      logo: unvime,
      period: "Mar. 2022 - Dic. 2022 ",
      location: "Villa Mercedes, San Luis, Argentina",
      workMode: "Híbrido",
      description:
        "Investigación sobre Mecanismo de detección de ataques de denegación de servicios distribuidos en redes deﬁnidos por software. Entendimiento y simulación del funcionamiento de las SDN con Mininet y Python.",
    },
    {
      id: 4,
      jobTitle: "Desarrollador de aplicaciones web (PHP)",
      duration: "2 años 4 meses",
      company: "Independiente / Freelance",
      logo: freelance,
      period: "Sept. 2020 - Dic. 2022",
      location: "Villa Mercedes, San Luis, Argentina",
      workMode: "Híbrido",
      description:
        "Actualización y modiﬁcación de los portales de “La casa de la música”, “Molino fénix” y “San Luis Discos” implementados con Wordpress.\nImplementación de módulo para un CRM de una gráﬁca situada en Chile con PHP, HTML5, CSS, Javascript, Jquery, Mysql.",
    },
    {
      id: 5,
      jobTitle: "Desarrollador de aplicaciones web",
      duration: "5 meses",
      company: "Raona",
      logo: raona,
      period: "Feb. 2014 - Jun. 2014",
      location: "La Punta, San Luis, Argentina",
      workMode: "Presencial",
      description:
        "Desarrollo de aplicación web (ShareMe) en la plataforma Microsoft Sharepoint utilizando HTML, CSS, Javascript, Jquery, C# y SQL Server R2 2012",
    },
  ],
};
