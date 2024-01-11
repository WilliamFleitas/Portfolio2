import { useTranslation } from "react-i18next";
import { RiReactjsFill } from "react-icons/ri";
import { SiNodedotjs } from "react-icons/si";
const MyServices = () => {
  const { t } = useTranslation(['aboutMe']);
  return (
    <section className="flex flex-col w-full h-full text-start  items-center justify-between">
      <header className="flex flex-col w-full h-fit border-b border-primaryMainColor p-4">
        <h3 className="gradient-title-line m-0 text-[25px] font-bold">
        {t("myServices")}
        </h3>
      </header>
      <div className="flex flex-col sm:grid sm:grid-cols-2 w-full h-full text-start items-start justify-start px-4 ">
        <div className="flex flex-col text-start items-start justify-center w-full h-full py-4 px-0 border-b border-[#4b4a4b] col-span-2 ">
          <div className="flex flex-row w-full h-full text-start items-center justify-start gap-4">
            <div className="w-14 p-2 h-14 border-2 border-primaryButtonColor flex  gradient-line   rounded-full flex-col text-start items-center justify-center">
              <span className="font-bold dark:text-primaryButtonColor ">100%</span>
            </div>
            <label className="font-bold ">Full Stack Web Developer</label>
          </div>

          <p className="py-2 px-4 w-full m-0">
          {t("fullStack")}
          </p>
        </div>

        <div className="flex flex-col text-start items-start justify-center w-full h-fit py-4 pr-4 gap-1 ">
          <div className="flex flex-row w-full h-full text-start items-center justify-start gap-4">
            <div className="w-14 p-2 h-14 border-2 border-primaryButtonColor flex  gradient-line   rounded-full flex-col text-start items-center justify-center">
              <RiReactjsFill className="w-10 h-10 dark:text-primaryButtonColor " />
            </div>
            <label className="font-bold ">Frontend</label>
          </div>

          <p className="py-2 px-4">
          {t("frontend")}
          </p>
        </div>

        <div className="relative flex flex-col text-start items-start justify-center w-full h-fit sm:p-4  border-t border-[#4b4a4b] sm:border-0 py-4 ">
          <div className="flex flex-row w-full h-full text-start items-center justify-start gap-4">
            <div className="w-14 p-2 h-14 border-2 border-primaryButtonColor flex  gradient-line   rounded-full flex-col text-start items-center justify-center">
              <SiNodedotjs className="w-10 h-10 dark:text-primaryButtonColor " />
            </div>
            <label className="font-bold">Backend</label>
          </div>

          <p className="py-2 px-4">
          {t("backend")}
          </p>
          <span className="hidden  bg-gradient-custom absolute top-0 left-0 h-[100%] w-[1px] sm:flex flex-col items-center justify-center text-center rounded-[10%]"></span>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
