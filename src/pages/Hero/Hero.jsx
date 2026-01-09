import CardBestProject from "./components/CardBestProject";
import MyStory from "./components/MyStory";
import Testimonials from "./components/Testimonials";
/* import LastPost from "./components/LastPost" */

const Hero = () => {
  return (
    <div className="flex flex-col gap-8">
      <CardBestProject />
      <MyStory />
      <Testimonials />
      {/* <LastPost />   */}
    </div>
  );
};

export default Hero;
