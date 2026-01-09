import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { profileText } from "../constants";
import { useLang } from "../context/LangContext";
const ProfileMobile = () => {
  const { lang } = useLang();
  return (
    <section
      className={`col-span-1 h-full w-full justify-start items-end md:hidden pb-4`}
    >
      <article className="w-full rounded-2xl shadow-lg shadow-secondary-dark/80">
        {profileText[lang].map((text, index) => (
          <div
            key={index}
            className="flex bg-secondary-dark/90 py-8 px-2 rounded-2xl gap-4 justify-center items-center text-start"
          >
            <div className="flex flex-col gap-4 px-2">
              <div className="relative">
                <img
                  src={text.image}
                  alt="Ismael Ignacio Morinigo"
                  className="w-24 h-24 rounded-full"
                />
                <div className="absolute bottom-0 right-0 -translate-x-2/4 -translate-y-2 bg-green-600 w-5 h-5 rounded-full border-4 border-green-700 md:-translate-y-0 lg:-translate-y-0"></div>
              </div>
              <div className="flex gap-4 text-xl">
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
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">
                Ismael Ignacio Morinigo
              </h1>
              <h2 className="text-xl font-light">{text.position}</h2>
              <div className="text-lg bg-accent/80 rounded-lg px-2 py-2 hover:bg-accent-dark/70 sm:w-1/2 hover:scale-105 transition-all duraction-300 text-center">
                <a
                  href="mailto:thecoderbutcher@gmail.com"
                  target="_blank"
                  className=""
                >
                  {text.button}
                </a>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default ProfileMobile;
