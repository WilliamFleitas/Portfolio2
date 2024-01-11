import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { BsPersonVcard } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdOutlineLanguage, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useWindowSize from "../utils/useWindowsSize";

const NavBar = () => {
  const location = useLocation();
  const {width} = useWindowSize();
  const path = location.pathname.split("/").splice(2);
  const [currentPath, setCurrentPath] = useState<string>("aboutMe");
  const [theme, setTheme] = useState<string>("dark");
  const {i18n} = useTranslation();
  const navData = [
    {
      label: i18n.language === 'en' ? 'About Me' : 'Sobre mi',
      value: "aboutMe",
      link: "/portfolio/aboutMe",
      Icon: IoPersonSharp,
    },
    {
      label: i18n.language === 'en' ? 'Resume' : 'Resumen',
      value: "resume",
      link: "/portfolio/resume",
      Icon: BsPersonVcard,
    },
    {
      label: i18n.language === 'en' ? 'Works' : 'Trabajos',
      value: "works",
      link: "/portfolio/works",
      Icon: AiFillFolderOpen,
    },
    {
      label: i18n.language === 'en' ? 'Contact' : 'Contacto',
      value: "contact",
      link: "/portfolio/contact",
      Icon: MdOutlineContactPhone,
    },
  ];
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };
  useEffect(() => {
    if (path.length === 0) {
      setCurrentPath("aboutMe");
    } else {
      setCurrentPath(path[0]);
    }
  });
  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    }else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <nav className="fh:gap-4 md:gap-10 text-start  items-center md:justify-between lg:justify-start flex flex-row lg:flex-col sm:px-6 lg:px-4    w-full lg:w-fit">
      <section className="flex flex-row fh:w-1/2 lg:flex-col sm:w-full h-fit text-start items-center justify-center px-2 fh:px-6 sm:px-0 gap-4  lg:p-4 lg:bg-opacity-[55%]  lg:bg-zinc-600 lg:dark:bg-[#171616] md:rounded-md border-r sm:border-0">
        <button
          className="text-primaryMainColor hover:text-primaryMainHoverColor transition duration-500 relative"
          type="button"
          title={i18n.language === 'en' ? "Language" : 'Idioma' }
          onClick={handleChangeLanguage}
        >
          {<MdOutlineLanguage className="w-6 h-6 " />}
          <strong className="absolute bottom-0 right-0 font-extrabold  text-purple-200 ">{i18n.language === "en" ? "en" : "es"}</strong>
        </button>

        <button
          className="text-primaryMainColor hover:text-primaryMainHoverColor transition duration-500"
          type="button"
          title={theme === "dark" ? "Light":"Dark"}
          onClick={handleThemeSwitch}
        >

          { theme === "dark" ? 
          <MdOutlineLightMode className="w-6 h-6 "/>:
            <MdDarkMode className="w-6 h-6" />
          }
          
        </button>
      </section>
      <section className="flex flex-row px-1 lg:flex-col w-full  lg:w-fit h-full lg:h-fit text-start items-center justify-between lg:justify-center sh:px-4 sm:px-0 fh:gap-4 lg:py-3  lg:p-3 lg:bg-opacity-[55%] lg:bg-zinc-600 lg:dark:bg-[#171616] lg:rounded-md transition duration-700">
        {navData?.map((item, index) => (
          <Link
            to={item.link}
            className={`lg:text-zinc-200 h-full lg:h-fit sm:w-full lg:w-fit lg:dark:text-zinc-400 lg:border flex flex-row gap-2 text-center items-center justify-cebnter px-2 fh:px-4   py-2 lg:py-2 lg:gap-0 transition duration-700     lg:rounded-full lg:p-2 whitespace-nowrap ${
              currentPath === item.value && width >= 1024
                ? "gradient-top-line-section-selected lg:border-primaryMainHoverColor  "
                : width >= 1024 && "gradient-top-line-section lg:border-zinc-400 lg:dark:border-zinc-800 "
            }  ${
              currentPath === item.value && width <= 1024
                ? "gradient-top-line-section-selected lg:border-primaryMainHoverColor "
                : width <= 1024 && "hover:bg-zinc-700 "
            }`}
            key={index}
            type="button"
            title={item.label}
          >
            <item.Icon className="w-4 h-4 " />
            <span className=" lg:hidden hidden  sm:flex h-full text-center items-center justify-start">{item.label}</span>
          </Link>
        ))}
      </section>
    </nav>
  );
};

export default NavBar;
