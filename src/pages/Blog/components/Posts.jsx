import { Link } from "react-router-dom";
import { posts } from "../../../constants/posts";
import { useLang } from "../../../context/LangContext";

const Posts = () => {
  const { lang } = useLang();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
      {posts[lang].map((post) => (
        <Link key={post.id} to={`/blog/${post.id}`}>
          <div className="flex flex-col gap-2 h-[400px] justify-between bg-secondary-dark rounded-2xl shadow-lg shadow-secondary-dark/80 p-4 group hover:bg-accent-dark/60 hover:scale-105 transition-all duration-300 cursor-pointer">
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
  );
};

export default Posts;
