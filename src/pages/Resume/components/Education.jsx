import { FaFilePdf } from "react-icons/fa";
import { useLang } from "../../../context/LangContext";
import { academics } from "../../../constants/academic";

const Education = () => {
  const { lang } = useLang();
  return (
    <div className="flex flex-col gap-4 p-4 bg-secondary-dark/90 rounded-2xl shadow-lg shadow-secondary-dark/80">
      <div className="flex items-center w-full">
        <p className="w-full text-3xl md:text-2xl font-bold">
          {lang == "en" ? "Academic history" : "Historial académico"}
        </p>
        <div className="w-full border-b-2 border-dashed border-primary/20"></div>
      </div>
      {academics[lang].map((academic, index) => (
        <div
          key={index}
          className="flex flex-col w-full border border-primary/10 p-4 rounded-2xl"
        >
          <div className="flex w-full h-full justify-between gap-4 py-1 items-center">
            <div className="flex flex-col gap-0">
              <h3 className="font-semibold text-xl">{academic.title}</h3>
              <p className="text-sm font-light text-primary/70">
                {academic.academy}
              </p>
              <p className="text-sm font-extralight">{academic.status}</p>
            </div>
            <a
              href={`${
                academic.certificate === "" ? "#" : academic.certificate
              }`}
              onClick={(e) => {
                if (!academic.certificate) e.preventDefault();
              }}
              target="_blank"
              className={`text-2xl ${
                academic.certificate === ""
                  ? "text-primary/10"
                  : "hover:text-accent-dark hover:scale-150 transition-all duration-300 "
              }`}
            >
              <FaFilePdf />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
