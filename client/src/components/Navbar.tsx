import { IoPersonSharp } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdOutlineLanguage, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname.split("/").splice(2);
  const [currentPath, setCurrentPath] = useState<string>("aboutme");
  const [theme, setTheme] = useState<string>("dark");
  const {i18n} = useTranslation();
  const navData = [
    {
      label: i18n.language === 'en' ? 'About Me' : 'Sobre mi',
      value: "aboutme",
      link: "/portfolio/aboutme",
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
  ];
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };
  useEffect(() => {
    if (path.length === 0) {
      setCurrentPath("aboutme");
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
    <nav className="text-start  items-center justify-start flex flex-row w-full text-black dark:text-white bg-white dark:bg-[#131212] xl:dark:bg-[#121212f5] xl:border-b border-zinc-700 overflow-hidden">
      <section className="flex flex-row text-start items-center justify-center py-3 px-6 gap-2 ssm:gap-10 border-r border-zinc-700 w-fit md:min-w-[20rem]">
        <button
          className="text-primaryMainColor   transition duration-500 relative"
          type="button"
          title={i18n.language === 'en' ? "Language" : 'Idioma' }
          onClick={handleChangeLanguage}
        >
          {<MdOutlineLanguage className="w-6 h-6 " />}
          <strong className="absolute bottom-0 right-0 font-extrabold  text-primaryButtonColor ">{i18n.language === "en" ? "en" : "es"}</strong>
        </button>

        <button
          className="text-primaryMainColor hover:text-primaryButtonColor transition duration-500"
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
      <section className="flex flex-row text-start items-center justify-around md:justify-between py-3 px-4 md:px-32 gap-2 sm:gap-10 w-full">
        {navData?.map((item, index) => (
          <Link
            to={item.link}
            className={`h-fit w-fit  border  flex flex-row text-center items-center justify-center px-2 py-2 gap-0 transition duration-300  rounded-full whitespace-nowrap ${
              currentPath === item.value 
                ? "gradient-top-line-section-selected border-primaryButtonColor text-primaryButtonColor"
                : "gradient-top-line-section-selected  border-primaryMainHoverColor text-primaryMainHoverColor hover:text-primaryButtonColor hover:border-primaryButtonColor"
            }  `}
            key={index}
            type="button"
            title={item.label}
          >
            <item.Icon className="w-5 h-5 " />
          </Link>
        ))}
      </section>
    </nav>
  );
};

export default NavBar;
