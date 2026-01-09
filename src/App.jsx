import { HashRouter, useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./layout.jsx";
import Hero from "./pages/Hero/Hero.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Resume from "./pages/Resume/Resume.jsx";
/* import Blog from "./pages/Blog/Blog.jsx";
import Post from "./pages/Blog/components/Post.jsx"; */
import Project from "./pages/Portfolio/components/Project.jsx";
import { LangProvider } from "./context/LangContext.jsx";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const AppRoutes = () => {
  const location = useLocation();

  let routes = useRoutes([
    { path: "/", element: <Hero /> },
    { path: "*", element: <Hero /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/portfolio/:id", element: <Project /> },
    { path: "/resume", element: <Resume /> },
    /* { path: "/blog", element: <Blog /> },
    { path: "/blog/:id", element: <Post /> }, */
  ]);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {routes}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <LangProvider>
      <HashRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </HashRouter>
    </LangProvider>
  );
}

export default App;
