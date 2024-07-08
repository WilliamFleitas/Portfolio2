import { FaBriefcase } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Skills from "./resumeAssests/Skills";
import { useTranslation } from "react-i18next";


const Resume = () => {
  const { t, i18n} = useTranslation(['resume']);

  const jobsData = [
    {
      date:i18n.language === "en" ? "April 2023 - Present": "Abril 2023 - Presente",
      jobTitle: "Frontend Web Developer",
      company: "Wall ST Intel",
      place: "USA - Florida",
      description: i18n.language === "en" ?
        "Development of a Single Page Application (SPA) for web-based trading, utilizing React library." : "Desarrollo de una Aplicación de Página Única (SPA) para Trading, utilizando la libreria React.",
      id: 0,
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Redux Toolkit",
        "HTML",
        "CSS",
        "Tailwind",
        "BitBucket",
        "Git",
        "ClickUp",
      ],
    },
    {
      date: i18n.language === "en" ? "April 2023 - May 2023" : "Abril 2023 - Mayo 2023",
      jobTitle: "Frontend Web Developer",
      company: "Brunson Insurance",
      place: "USA - Florida",
      description:
      i18n.language === "en" ? "Led the refactoring of a web application for one of the client products, including the integration of new functionalities." : "Lidere la refactorización de una aplicación web para uno de los productos del cliente, incluyendo la integración de nuevas funcionalidades.",
      id: 1,
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Redux Toolkit",
        "HTML",
        "CSS",
        "Tailwind",
        "BitBucket",
        "Git",
        "ClickUp",
      ],
    },
    {
      date: i18n.language === "en" ? "January 2023 - February 2023" : "Enero 2023 - Febrero 2023",
      jobTitle: "Full Stack Web Developer",
      company: "Posada La Carreta",
      place: "Paraguay - Misiones",
      description: i18n.language === "en" ?
        "Led the development of a landing page web application with booking system." : "Lidere el desarrollo de una aplicación web landing page con sistema de reservas.",
      id: 2,
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Redux Toolkit",
        "ExpressJs",
        "PostgreSQL",
        "Sequelize",
        "AdamsPay",
        "HTML",
        "CSS",
        "Tailwind",
        "GitHub",
        "Git",
        "Figma",
      ],
    },
  ];
  return (
    <div className="flex flex-col text-start items-center justify-center bg-white dark:bg-secondaryBgColor text-black dark:text-white overflow-hidden w-full h-full shadow-md  isolate  py-0 pt-3 lg:pt-0 select-none">
      <article className="  w-full h-full flex flex-col text-start  items-start justify-start  max-h-[95%] overflow-y-scroll pb-10 no-scrollbar">
        <div className="flex flex-col w-full h-fit">
          <header className="flex  flex-col w-full h-fit border-b border-primaryMainColor px-4 pb-4 pt-2 ">
            <h2 className="gradient-title-line m-0 text-[25px] font-bold">
            {t("resume")}
            </h2>
          </header>
        </div>

        <div className=" flex flex-col text-start items-center justify-start w-full h-fit">
          <div className=" flex  flex-row text-start items-center justify-start  w-full h-full  px-4  py-4 ">
            <label className="flex flex-row text-start items-start justify-start  font-bold text-[25px] h-fit w-full gradient-title-line gap-1">
              <FaBriefcase className="w-6 h-6 dark:text-white " />
              <span className=" "> {t("experience")}</span>
            </label>
          </div>
          <div className=" relative flex flex-col sm:flex-row flex-wrap w-full h-full  text-start items-start justify-start  border-t border-primaryMainColor">
            {jobsData?.map((item) => (
              <div
                className={`w-full sm:w-1/2 flex-grow text-start items-start justify-start  h-fit py-4 px-4  gap-1 `}
                key={item.id}
              >
                <div className="flex flex-row flex-wrap w-full h-full text-start items-start justify-between gap-1 pb-2">
                  <label className="font-bold text-clip max-w-[130px] min-w-[130px]">
                    {item.jobTitle}
                  </label>
                  <small className="font-bold px-2 pt-1  shadow-md  border border-primaryButtonColor  w-fit whitespace-nowrap rounded-md text-primaryButtonColor">
                    {item.date}
                  </small>
                </div>
                <div className="flex flex-row flex-wrap w-full  text-center items-start justify-between  h-full">
                  <strong className="font-extrabold flex flex-row text-start text-zinc-600 text-[15px] font-sans">
                    {item.company}
                  </strong>
                  <small className="flex text-end items-end justify-end flex-col pt-1">
                    {item.place}
                  </small>
                </div>
                <p className="py-2">{item.description}</p>
                
                  <Marquee
                  autoFill={true}
                  className="no-scrollbar flex flex-row  text-start items-center justify-between rounded-md overflow-hidden "
                    gradient={true}
                    speed={30}
                    gradientColor="#2B2A2A"
                    gradientWidth={0}
                  ><div className=" flex flex-cols flex-row w-full h-fit overflow-hidden gap-2 text-start items-center justify-between no-scrollbar ">
                    {item.technologies?.map((item, index) => (
                      <small
                        className={` mx-2 w-fit h-full  whitespace-nowrap  px-2 pt-[3px] m-auto rounded-md bg-primaryMainColor shadow-md font-bold text-zinc-400`} key={index}
                      >
                        {item}
                      </small>
                    ))}</div>
                  </Marquee>
                
              </div>
            ))}
            <span className="hidden  bg-gradient-custom absolute top-0 left-[50%] h-[50%] w-[1px] sm:flex flex-col items-center justify-center text-center rounded-[10%]"></span>
          </div>
        </div>
        <div className=" flex flex-col text-start items-center justify-start w-full h-full">
          <Skills/>
        </div>
      </article>
    </div>
  );
};
export default Resume;
