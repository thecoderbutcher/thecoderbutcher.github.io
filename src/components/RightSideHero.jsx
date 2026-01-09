import CardBestProject from "./CardBestProject";
import LastPost from "./LastPost";
import MyStory from "./MyStory";
import Testimonials from "./Testimonials";

const RightSideHero = () => {
  return (
    <section className="w-full h-full p-4 grid grid-cols-1 md:grid-cols-2 text-black">
      <div className="w-full h-0"></div>
      <div className="flex flex-col w-full">
        <CardBestProject />
        <MyStory />
        <Testimonials />
        <LastPost />
      </div>
    </section>
  );
};

export default RightSideHero;
