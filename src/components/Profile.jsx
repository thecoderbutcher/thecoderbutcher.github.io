import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { profileText } from "../constants";
import { useLang } from "../context/LangContext";
import BorderDashed from "./BorderDashed";
const Profile = () => {
  const { lang } = useLang();
  return (
    <section
      className={`hidden md:flex md:flex-col col-span-1 md:col-span-1 lg:col-span-2 h-full w-full justify-start items-end px-2 md:px-2 md:sticky md:top-20 md:h-screen`}
    >
      <article className="w-full  lg:w-2/3 xl:w-1/2 2xl:w-2/5 order-2 md:order-1 rounded-2xl shadow-lg shadow-secondary-dark/80">
        {profileText[lang].map((text, index) => (
          <div
            key={index}
            className="bg-secondary-dark/90 py-8 rounded-2xl flex flex-col gap-4 p-4 justify-center items-center text-center"
          >
            <div className="relative">
              <img
                src={text.image}
                alt="Ismael Ignacio Morinigo"
                className="w-32 h-32 rounded-full md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
              <div className="absolute bottom-0 right-0 -translate-x-2/4 -translate-y-2 bg-green-600 w-5 h-5 rounded-full border-4 border-green-700 md:-translate-y-0 lg:-translate-y-0"></div>
            </div>
            <div className="flex flex-col gap-2 md:gap-1">
              <h1 className="text-3xl font-semibold md:text-lg lg:text-xl">
                Ismael Ignacio Morinigo
              </h1>
              <h2 className="text-xl font-light md:text-sm lg:text-base">
                {text.position}
              </h2>
            </div>
            <BorderDashed />
            <div>
              <h3 className="italic font-light text-xl md:text-sm lg:text-base">
                {text.phrase}
              </h3>
            </div>
            <BorderDashed />
            <div className="flex gap-4 text-2xl md:text-base lg:text-xl">
              <a
                className="hover:text-accent hover:scale-110 transition-all duration-200"
                href="https://www.linkedin.com/in/imorinigo/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                className="hover:text-accent hover:scale-110 transition-all duration-200"
                href="https://github.com/thecoderbutcher"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="hover:text-accent hover:scale-110 transition-all duration-200"
                href="https://docs.google.com/document/d/1qRAC6tSt_hdsEX_f1jsX-AsulMmz8mlnbJ4kSoUC_rY/edit?usp=sharing"
                target="_blank"
              >
                <FaFilePdf />
              </a>
            </div>
            <BorderDashed />
            <div className="text-xl bg-accent/80 rounded-lg px-4 py-2 hover:bg-accent-dark/70 hover:scale-105 transition-all duraction-300 md:text-sm lg:text-base">
              <a
                href="mailto:thecoderbutcher@gmail.com"
                target="_blank"
                className=""
              >
                {text.button}
              </a>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Profile;
