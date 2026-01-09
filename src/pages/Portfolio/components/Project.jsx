import { useParams } from "react-router-dom";
import { projects } from "../../../constants/projects";
import { IoLogoGithub } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import { useLang } from "../../../context/LangContext";
import MoreProjects from "./MoreProjects";

const Project = () => {
  const { id } = useParams();
  const { lang } = useLang();
  const project = projects.find((project) => project.id == id);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col w-full p-4 bg-secondary-dark/90 text-primary/80 rounded-2xl shadow-lg shadow-secondary-dark/80">
        <div className="w-full">
          <img src={project.img} alt="" className="w-full rounded-t-2xl" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="pt-2 pb-1 text-2xl font-semibold text-primary">
            {project.title}
          </h2>
          <div className="flex gap-2 text-primary/40 text-sm">
            {project.icons.map((Icon, index) => (
              <Icon key={index} className="" />
            ))}
          </div>
          <div className="flex pt-2 text-primary/60">
            <a
              href={project.repository}
              target="_blank"
              className="flex justify-center items-center gap-1 text-xl group hover:bg-accent-dark/50 hover:text-primary hover:rounded-2xl px-2 py-1 transition-all duration-300"
            >
              <span className="text-base hidden group-hover:block">
                View code
              </span>
              <IoLogoGithub className="text-2xl" />
            </a>
            <a
              href={project.link}
              target="_blank"
              className="flex justify-center items-center gap-1 text-xl group hover:bg-accent-dark/50 hover:text-primary hover:rounded-2xl px-2 py-1 transition-all duration-300"
            >
              <TbWorldWww className="text-2xl" />
              <span className="text-base hidden group-hover:block">Live</span>
            </a>
          </div>
        </div>
        <div className="flex py-4">
          <div
            dangerouslySetInnerHTML={{ __html: project.text[lang].description }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className="pr-4 pb-4"
            dangerouslySetInnerHTML={{
              __html: project.text[lang].specification,
            }}
          />
          <div className="grid grid-cols-1 gap-2 justify-center items-center">
            {project.screenshot.map((image, index) => (
              <img
                key={index}
                src={image.img}
                className="w-full h-full object-cover rounded-lg pb-2"
              />
            ))}
          </div>
        </div>
      </div>
      <MoreProjects id={project.id} />
    </div>
  );
};

export default Project;
