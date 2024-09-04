import { useTranslation } from "react-i18next";
import { GiSkills } from "react-icons/gi";

const Skills = () => {
  const { t } = useTranslation(['resume']);
  return (
    <section className=" flex flex-col text-start items-center justify-start w-full h-full">
      <div className=" flex  flex-row text-start items-center justify-start  w-full h-fit  px-4  py-4 ">
        <label className="flex flex-row text-start items-start justify-start  font-bold text-[25px] h-fit w-full gradient-title-line gap-1">
          <GiSkills className="w-6 h-6 dark:text-white " />
          <span className=" ">{t("skills")}</span>
        </label>
      </div>
      <div className=" relative flex flex-row flex-wrap w-full h-full  text-start items-start justify-start  border-t border-primaryMainColor ">
        <div className="flex flex-col text-start items-center justify-start w-full px-4 ">
          <div className="flex flex-row text-center items-center justify-center sm:px-8  py-2  gap-4  border-b border-primaryMainColor">
            <strong>{t("programmingLanguages")}</strong>
          </div>
          <div className="flex flex-row text-start items-center justify-between  py-2  gap-4  ">
            <strong>JAVASCRIPT</strong>
            <strong>/</strong>
            <strong>TYPESCRIPT</strong>
          </div>

          <div className="border-t border-primaryMainColor flex flex-row w-full h-full text-center items-center justify-between py-2">
            <section className=" flex flex-col w-full text-start items-center justify-start ">
              <div className="flex flex-col w-fit min-w-[70%] text-center items-center justify-center py-1 border-b border-primaryMainColor font-bold">
                <label>FRONTEND</label>
              </div>
              <div className="flex flex-col w-full text-center items-center justify-center text-[18px]  py-2 gap-1">
                <small>CSS</small>
                <small>React</small>
                <small>NextJs</small>
                <small>Tailwind</small>
                <small>React Native</small>
                <small>Redux Toolkit</small>
              </div>
            </section>
            <section className=" flex flex-col w-full text-start items-center justify-start ">
              <div className="flex flex-col w-fit min-w-[70%] text-center items-center justify-center py-1 border-b border-primaryMainColor font-bold">
                <label>BACKEND</label>
              </div>
              <div className="flex flex-col w-full text-center items-center justify-center  py-2 text-[18px] gap-1">
                <small>Express</small>
                <small>Node.js</small>
                <small>MongoDB</small>
                <small>Mongoose</small>
                <small>Sequelize</small>
                <small>PostgreSQL</small>
              </div>
            </section>
          </div>
          <div className="flex flex-row text-start items-center justify-center px-8  py-2  gap-4  border-b border-primaryMainColor ">
            <strong className="">{t("languages")}</strong>
        </div>
        <div className="flex flex-row flex-wrap w-full text-start items-center justify-center gap-2  py-2  px-4 border-b border-primaryMainColor">
            <small>English(C1 Advanced) /</small>
            <small>Spanish(Native) /</small>
            <small>Guarani(Native) /</small>
            <small>Portuguese(Basic)</small>
        </div>
        <div className="flex flex-row text-start items-center justify-center px-8  py-2  gap-4  border-b border-primaryMainColor ">
            <strong className="">{t("others")}</strong>
        </div>
        <div className="flex flex-row flex-wrap w-full text-start items-center justify-center gap-2  border-b border-primaryMainColor py-2  px-4 ">
            <small>Git /</small>
            <small>GitHub /</small>
            <small>BitBucket /</small>
            <small>SCRUM /</small>
            <small>Figma /</small>
            <small>Vite.js /</small>
            <small>ClickUp /</small>
            <small>Socket.IO</small>
        </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
