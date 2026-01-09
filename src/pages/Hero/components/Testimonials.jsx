import { testimonials } from "../../../constants/testimonials";
import { testimonialText } from "../../../constants";
import { useLang } from "../../../context/LangContext";
const Testimonials = () => {
  const { lang } = useLang();
  return (
    <div className="flex flex-col gap-4 h-full w-full text-primary">
      <div className="flex items-center py-2 w-full">
        <p className="w-full text-3xl md:text-2xl font-bold">
          {testimonialText[lang].map((textTestimonial) => textTestimonial.text)}
        </p>
        <div className="w-full border-b-2 border-dashed border-primary/20"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 bg-secondary-dark text-primary/80 px-4 py-8 rounded-2xl shadow-lg shadow-secondary-dark/80 cursor-pointer">
        {testimonials[lang].map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col justify-center items-center gap-1 "
          >
            <img
              src={testimonial.images}
              alt="testimonial"
              className="w-16 h-16 rounded-full"
            />
            <p className="font-bold text-2xl">{testimonial.user}</p>
            <p className="font-light text-accent text-xl">
              {testimonial.position}
            </p>
            <div
              className="font-light text-center italic text-lg"
              dangerouslySetInnerHTML={{ __html: testimonial.testimonial }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
