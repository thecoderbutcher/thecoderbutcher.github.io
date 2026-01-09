import { Link } from "react-router-dom";
import { posts } from "../../../constants/posts";
import { useLang } from "../../../context/LangContext";
const MorePosts = (id) => {
  const { lang } = useLang();
  const excludePost = posts[lang].filter((post) => post.id !== id.id);
  const morePost = excludePost.sort(() => 0.5 - Math.random()).slice(0, 2);
  return (
    <div className="flex flex-col w-full text-primary/80 rounded-2xl">
      <div className="flex items-center py-4 w-full">
        <p className="w-full text-3xl md:text-2xl font-bold">
          {lang == "en" ? "More Posts" : "Otras Publicaciones"}
        </p>
        <div className="w-full border-b-2 border-dashed border-primary/20"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between w-full">
        {morePost.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <div className="flex flex-col gap-2 bg-secondary-dark h-full shadow-lg shadow-secondary-dark/80 justify-between rounded-2xl p-4 group hover:bg-accent-dark/60 hover:scale-105 transition-all duration-300 cursor-pointer">
              <img
                src={post.portada}
                alt={post.title}
                className="rounded-t-2xl"
              />
              <p className="text-sm font-light text-primary/60 py-1">
                {post.tags}
              </p>
              <h2 className="text-xl md:text-lg font-semibold pb-1">
                {post.title}
              </h2>
              <p className="text-sm font-light text-primary/60 border-t-2 border-dashed border-primary/20 pt-2">
                {post.date} • {post.author}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MorePosts;
