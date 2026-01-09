import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProfileMobile from "./components/ProfileMobile";
import { useLang } from "./context/LangContext";

const Layout = ({ children }) => {
  const { lang } = useLang();
  const text =
    lang == "en"
      ? {
          welcome: "Welcome",
          presentation: "Discover the applications I have created.",
          description: "My innovation space",
        }
      : {
          welcome: "Bienvenido",
          presentation: "Descubra las aplicaciones que he creado.",
          description: "Mi espacio de innovación",
        };
  return (
    <div className="w-full h-full min-h-screen max-w-screen flex flex-col items-center bg-secondary/90 relative">
      <Banner />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-start w-full absolute top-[80px] md:top-[100px] lg:top-[120px]">
        <Profile />
        <section className="col-span-1 md:col-span-2 lg:col-span-3 2xl:col-span-2 flex flex-col h-full w-full justify-start px-4 gap-4">
          <article className="flex flex-col py-1 md:py-4 w-full">
            <div className="flex flex-col gap-4 md:gap-8 items-center text-center md:items-start md:text-start">
              <p className="text-2xl font-light md:text-2xl drop-shadow-2xl text-shadow">
                {text.welcome}!
              </p>
              <h2 className="text-4xl font-bold md:text-4xl lg:text-5xl drop-shadow-2xl text-shadow py-1 md:py-4">
                {text.presentation}
              </h2>
              <p className="text-2xl font-light md:text-2xl text-shadow drop-shadow-2xl">
                <span className="text-accent font-bold text-border">
                  {text.description}
                </span>
              </p>
            </div>
          </article>
          <ProfileMobile />
          {children}
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Layout;
