import { Link } from "react-router-dom";
import { projects } from "../../../constants/projects";
import { useLang } from "../../../context/LangContext";
const MoreProjects = (id) => {
  const { lang } = useLang();
  const excludeProject = projects.filter((project) => project.id !== id.id);
  const moreProjects = excludeProject
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  return (
    <div className="flex flex-col w-full text-primary/80 rounded-2xl">
      <div className="flex items-center py-4 w-full">
        <p className="w-full text-3xl md:text-2xl font-bold">
          {lang == "en" ? "More projects" : "Otros Proyectos"}
        </p>
        <div className="w-full border-b-2 border-dashed border-primary/20"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {moreProjects.map((project) => (
          <Link
            to={`/portfolio/${project.id}`}
            key={project.id}
            className="flex flex-col gap-4 p-4 bg-secondary-dark shadow-lg shadow-secondary-dark/80 rounded-2xl items-center hover:scale-105 hover:bg-accent-dark/70 transition-transform duration-300 ease-in-out"
          >
            <img src={project.img} alt="" className="rounded-t-xl" />
            {project.title}
            <div className="flex flex-row gap-2 text-sm">
              {project.icons.map((Icon, index) => (
                <Icon key={index} />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
