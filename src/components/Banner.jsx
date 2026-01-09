import { images } from "../constants";
const Banner = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center relative px-2 h-[640px] justify-center w-full rounded-2xl shadow-[0_8px_4px_rgba(0,0,0,0.25)]">
        <div
          className="h-[640px] w-full bg-cover bg-center bg-fixed bg-no-repeat absolute top-0 rounded-b-2xl"
          style={{ backgroundImage: `url(${images.banner})` }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
