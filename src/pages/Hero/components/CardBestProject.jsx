import { projects } from "../../../constants/projects";
import { Link } from "react-router-dom";
const CardBestProject = () => {
  return (
    <article className="flex flex-col gap-4 w-full h-full md:flex-row">
      {projects.map((project, index) => {
        if (
          index == projects.length - 1 ||
          index == projects.length - 2 ||
          index == projects.length - 3
        ) {
          return (
            <Link
              to={`/portfolio/${project.id}`}
              key={project.id}
              className="flex flex-col gap-4 shadow-lg shadow-secondary-dark/80 rounded-2xl"
            >
              <div className="flex flex-col justify-center items-center w-full bg-secondary-dark rounded-2xl md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] xl:w-[230px] xl:h-[230px] hover:scale-105 hover:bg-accent-dark/80 transition-all duration-300 group">
                <img
                  src={project.img}
                  alt=""
                  className="rounded-t-2xl w-full h-full object-center object-cover group-hover:object-cover transition-all duration-300 px-2 pt-2"
                />
                <p className="text-primary text-center text-xl px-4 py-2 md:text-lg">
                  {project.title}
                </p>
              </div>
            </Link>
          );
        }
      })}
    </article>
  );
};

export default CardBestProject;
