
import Records from "./aboutMeAssests/Records";
import MyServices from "./aboutMeAssests/MyServices";
import "../../index.css";
import { useTranslation } from "react-i18next";



const AboutMe = () => {
  const { t } = useTranslation(['aboutMe']);
  return (
    <div className="flex flex-col text-start items-center justify-center bg-white dark:bg-secondaryBgColor text-black dark:text-white overflow-hidden w-full h-full shadow-md  isolate pt-3 lg:pt-0 select-none">
      <article className="  w-full h-full flex flex-col text-start gap-4 items-start justify-start  max-h-[95%] overflow-y-scroll pb-10 no-scrollbar">
      <div className="flex flex-col w-full h-fit items-center">
      <header className="flex  flex-col w-full h-fit border-b border-primaryMainColor px-4 pb-4 pt-2 ">
        <h2 className="select-none gradient-title-line m-0 text-[25px] font-bold" draggable="false">
        {t("aboutMe")}
        </h2>
      </header>
      <section className="flex flex-col sm:grid sm:grid-cols-2 w-full px-4   gap-2 relative">
        <div className="flex flex-col w-full h-full text-start items-start justify-start py-4 pl-4 sm:pl-0 pr-4 gap-1 ">
          <strong className=" font-bold ">{t("greeting")}</strong>
          <p>
          {t("greetingDescription")}
          </p>
        </div>
        <span className="hidden sm:flex bg-gradient-custom absolute left-[50%] h-[100%] w-[1px]  flex-col items-center justify-center text-center rounded-[10%]"></span>
        <div className="flex flex-col w-full h-full text-start items-center justify-center p-4 ">
          <section className="flex flex-row text-start justify-between w-full h-fit items-center ">
            <strong className="gradient-title-line min-w-[25%] text-[15px] ">
              <span className="font-bold">{t("age")}</span>
            </strong>
            <small className="text-[15px]">27</small>
          </section>
          <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
          <section className="flex flex-row text-start justify-between w-full h-fit items-center ">
            <strong className="gradient-title-line min-w-[45%] text-[15px]">
              <span className="font-bold">{t("country")}</span>
            </strong>
            <small className="text-[15px]">Paraguay</small>
          </section>
          <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
          <section className="flex flex-row text-start justify-between w-full h-fit items-center ">
            <strong className="gradient-title-line min-w-[50%] text-[15px]">
              <span className="font-bold">{t("address")}</span>
            </strong>
            <small className="text-[15px] flex text-end ">Misiones, Paraguay</small>
          </section>
          <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
          <section className="flex flex-row text-start justify-between w-full h-fit items-center ">
            <strong className="gradient-title-line min-w-[55%] text-[15px]">
              <span className="font-bold">Freelance</span>
            </strong>
            <small className="text-[15px]">{t("freelance")}</small>
          </section>
          <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
        </div>
      </section>
    </div>
        <div className="flex flex-col w-full h-fit select-none">
          <MyServices />
        </div>
        <div className="flex flex-col w-full h-fit">
          <Records />
        </div>
      </article>
    </div>
  );
};

export default AboutMe;
