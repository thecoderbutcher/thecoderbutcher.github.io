import { myStory } from "../../../constants";
import { useLang } from "../../../context/LangContext";
const MyStory = () => {
  const { lang } = useLang();
  return (
    <div className="flex flex-col h-full gap-4 w-full text-primary md:py-0">
      <div className="flex items-center w-full py-2">
        <p className="w-full text-3xl md:text-2xl font-bold">
          {myStory[lang].title}
        </p>
        <div className="w-full border-b-2 border-dashed border-primary/20"></div>
      </div>
      <div className="flex flex-col justify-center gap-4 items-center bg-secondary-dark text-primary/80 py-8 px-4 rounded-2xl shadow-lg shadow-secondary-dark/80 text-xl font-light text-center">
        <p className="font-semibold"> {myStory[lang].description} </p>
        <p> {myStory[lang].text2} </p>
        <p> {myStory[lang].text3} </p>
        <p> {myStory[lang].text4} </p>
      </div>
    </div>
  );
};

export default MyStory;
