import { posts } from "../../../constants/posts";
import { Link } from "react-router-dom";
import { useLang } from "../../../context/LangContext";
const LastPost = () => {
  const { lang } = useLang();
  return (
    <div className="flex flex-col gap-4 h-full w-full text-primary">
      <div className="flex items-center py-2 w-full">
        <p className="w-full text-3xl md:text-2xl font-bold">
          {lang == "en" ? "Latest Posts" : "Últimas Publicaciones"}
        </p>
        <div className="w-full border-b-2 border-dashed border-primary/20"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 md:grid md:grid-cols-2">
        {posts[lang].map((post, index) => {
          if (
            index == posts[lang].length - 1 ||
            index == posts[lang].length - 2
          ) {
            return (
              <Link
                to={`/blog/${post.id}`}
                key={index}
                className="flex flex-col justify-center items-center gap-8 bg-secondary-dark text-primary/80 p-4 rounded-2xl shadow-lg shadow-secondary-dark/80 hover:bg-accent-dark/60 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex flex-col gap-2 bg-secondary rounded-xl">
                  <div className="w-full">
                    <img
                      src={post.portada}
                      alt=""
                      className="w-full rounded-t-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <div className="flex flex-col gap-2 md:h-[180px] md:justify-center border-dashed border-b-2 border-primary/20 pb-2">
                      <p className="text-sm font-light text-primary/70">
                        {post.tags}
                      </p>
                      <p className="text-2xl font-bold">{post.title}</p>
                    </div>
                    <div className="flex text-center gap-1 text-sm font-light text-primary/80">
                      <p className="">{post.date}</p>
                      <p className="">•</p>
                      <p>{post.author}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default LastPost;
