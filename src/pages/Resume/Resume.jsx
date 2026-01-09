import Education from "./components/Education";
import Experience from "./components/Experience";

const Resume = () => {
  return (
    <div className="grid grid-cols-1 gap-4 w-full h-full">
      <Experience />
      <Education />
    </div>
  );
};

export default Resume;
