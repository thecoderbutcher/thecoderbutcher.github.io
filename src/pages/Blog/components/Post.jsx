import { useParams } from "react-router-dom";
import { posts } from "../../../constants/posts";
import parse from "html-react-parser";
import MorePosts from "./MorePosts";
import { useLang } from "../../../context/LangContext";

const Post = () => {
  const { id } = useParams();
  const { lang } = useLang();
  const post = posts[lang].find((post) => post.id == id);

  if (!post) return <h1 className="text-3xl"> POST NO FOUND!</h1>;

  const transform = (node) => {
    if (node.type === "tag") {
      switch (node.name) {
        case "article":
          node.attribs.className = "flex flex-col gap-4";
          break;
        case "h2":
          node.attribs.className = "text-xl font-semibold text-primary/90";
          break;
        case "h3":
          node.attribs.className = "font-semibold";
          break;
        case "p":
          node.attribs.className = "";
          break;
        case "ul":
          node.attribs.className = "";
          break;
        case "li":
          node.attribs.className = "";
          break;
        case "strong":
          node.attribs.className = "";
          break;
        case "code":
          node.attribs.className =
            " flex bg-accent-dark/20 p-2 rounded-lg break-words text-wrap";
          break;
        default:
          break;
      }
    }
    return node;
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 bg-secondary-dark/80 text-primary rounded-2xl p-4 shadow-lg shadow-secondary-dark/80">
        <div>
          <img
            src={post.portada}
            alt={post.title}
            className="w-full rounded-t-2xl pb-2"
          />
          <p className="text-sm font-light text-primary/60">
            {post.date} • {post.author}
          </p>
        </div>
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <div className="text-primary/80">
          {parse(post.content, { replace: transform })}
        </div>
      </div>
      <MorePosts id={id} />
    </div>
  );
};

export default Post;
