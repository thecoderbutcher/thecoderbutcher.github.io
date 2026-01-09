import { experiences } from "../../../constants/experiences";
import { useLang } from "../../../context/LangContext";
const Experience = () => {
  const { lang } = useLang();
  return (
    <div className="flex flex-col gap-4 p-4 bg-secondary-dark/90 rounded-2xl shadow-lg shadow-secondary-dark/80">
      <div className="flex items-center w-full">
        <p className="w-full text-3xl md:text-2xl font-bold">
          {lang == "en" ? "Work experiences" : "Experiencias laborales"}
        </p>
        <div className="w-full border-b-2 border-dashed border-primary/20"></div>
      </div>
      {experiences[lang].map((experience) => (
        <div
          key={experience.id}
          className="flex flex-col w-full border border-primary/10 p-4 rounded-2xl"
        >
          <div className="flex w-full h-full gap-4 py-1 items-center">
            <img
              src={experience.logo}
              alt={experience.company}
              width={50}
              height={30}
              className="object-contain"
            />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{experience.jobTitle}</h3>
                <span className="text-sm font-light text-primary/60">
                  {experience.duration}
                </span>
              </div>
              <div className="font-light text-sm text-primary/60 py-1">
                <p>
                  {experience.company} · {experience.period}
                </p>
                <p>
                  {experience.location} - {experience.workMode}
                </p>
              </div>
            </div>
          </div>
          <p className="font-light text-base text-primary/80">
            {experience.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
