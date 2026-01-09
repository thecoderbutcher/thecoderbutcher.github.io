import { projects } from "../../../constants/projects";
import { Link } from "react-router-dom";
const ProjectCard = () => {
  const projectsReverse = [...projects].sort((a, b) => b.id - a.id);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsReverse.map((project) => (
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

export default ProjectCard;
