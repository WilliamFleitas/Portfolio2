import { FaRegIdCard } from "react-icons/fa";
import MeuProfile from "../assets/meuProfile.png";
import MerryPP from "../assets/MerryPP.jpg";
import MerryFullPP from "../assets/MerryFullPP.jpg";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import TypeWriter from "../utils/TypeWriter";
import { useTranslation } from "react-i18next";
const ProfileCard = () => {
  const { i18n } = useTranslation();
  return (
    <div
      style={{
        boxShadow: `0 1px 4px 0 #8A61B1`,
      }}
      className=" flex flex-col bg-white dark:bg-black dark:text-white text-black   text-start items-center justify-start w-full h-full md:min-w-[35vw] md:max-w-[35vw] lg:min-w-[30vw] lg:max-w-[30vw] z-10 md:min-h-[80vh] md:max-h-[80vh] md:overflow-hidden md:rounded-md isolate shadow-md md:border-0"
    >
      <div className=" w-full h-full    md:min-h-[45vh] md:max-h-[45vh] ">
        <img
          className="hidden md:flex object-cover w-full h-full flex-col md:max-h-[65vh]"
          src={MerryPP}
          alt="Going Merry Background"
          draggable="false"
        />

        <img
          className="md:hidden min-h-[30vh] max-h-[30vh] w-full md:w-fit md:min-w-[30vw] md:max-w-[30vw] md:min-h-[55vh] md:max-h-[55vh] object-cover md:object-cover "
          src={MerryFullPP}
          alt="Going Merry Background"
          draggable="false"
        />
      </div>

      <section
        className="relative w-full h-full  text-start items-center justify-center gap-y-2 flex flex-col  z-40 md:pb-16 md:pt-20 pb-10 pt-20 md:px-4 select-none  md:rounded-t-[20%]  bg-white dark:bg-[#171616]  md:mt-auto min-h-full"
        draggable="false"
      >
        <div 
          className="absolute top-[-90px] md:-top-28 w-full h-full  max-w-[150px] max-h-[150px] z-50 border-[3px] border-[#1F1E1E] rounded-full">
          <img
            className="flex object-cover w-full h-full rounded-full flex-col max-w-[250px] max-h-[150px]"
            src={MeuProfile}
            alt="William Cabrera Profile"
            draggable="false"
          />
        </div>
        <span className="ppContainerBase absolute top-[-90px] md:-top-28 w-full h-full  max-w-[150px] max-h-[150px] z-30  rounded-full  mr-6 mt-2"></span>
        <span className="ppContainerMid absolute top-[-90px] md:-top-28 w-full h-full  max-w-[150px] max-h-[150px] z-30  rounded-full  mr-6 mt-2"></span>
        <span className="ppContainerMain absolute top-[-90px] md:-top-28 w-full h-full  max-w-[150px] max-h-[150px] z-30  rounded-full  mr-6 mt-2"></span>
        
        <h1 className="m-0 font-bold w-full text-center justify-center items-center flex-col">
          William Cabrera
        </h1>
        <TypeWriter
          words={[
            "Full Stack Web Developer",
            "Frontend Developer",
            "Backend Developer",
          ]}
        />
        <div className="flex flex-row text-start items-start justify-center w-full gap-4">
          <a
            className="hover:text-primaryButtonColor transition duration-700"
            draggable="false"
            href="https://www.linkedin.com/in/w-oni/"
            title="Linkedin"
            target="_blank"
          >
            <FaLinkedinIn className="w-5 h-5 " />
          </a>
          <a
            className="hover:text-primaryButtonColor transition duration-700"
            draggable="false"
            href="https://github.com/WilliamFleitas"
            title="GitHub"
            target="_blank"
          >
            <VscGithub className="w-5 h-5 " />
          </a>
          <a
            className="hover:text-primaryButtonColor transition duration-700"
            draggable="false"
            href={i18n.language === "en" ? "https://drive.google.com/file/d/1c7PzlVi-gs2voq9WL8InX27RRkbeUu0A/view" : "https://drive.google.com/file/d/1RiSTuteLBxRRKwa77R4I4hpK4V7-CVi0/view"}
            target="_blank"
            title="Download CV"
          >
            <FaRegIdCard className="w-5 h-5 " />
          </a>
        </div>
      </section>
    </div>
  );
};
export default ProfileCard;
