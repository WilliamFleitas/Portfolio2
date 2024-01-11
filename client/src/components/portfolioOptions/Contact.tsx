import {VscGithub} from "react-icons/vsc";
import {FaLinkedinIn} from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation(['contact']);
  return (
    <div className="flex flex-col text-start items-center justify-center bg-white dark:bg-secondaryBgColor text-black dark:text-white overflow-hidden w-full h-screen md:h-full shadow-md  isolate  py-0 pt-3 lg:pt-0">
      <article className="  w-full h-full flex flex-col text-start  items-start justify-start  max-h-[95%] overflow-y-scroll pb-10 no-scrollbar">
        <div className="flex flex-col w-full h-fit">
          <header className="flex  flex-col w-full h-fit border-b border-primaryMainColor px-4 pb-4 pt-2 ">
            <h2 className="gradient-title-line m-0 text-[25px] font-bold">
              {t("contact")}
            </h2>
          </header>
        </div>

        <section className="flex flex-col w-full text-start items-center justify-start  p-8 gap-4">
          <dl className="flex flex-col sm:flex-row flex-wrap w-full text-start items-start justify-between gap-2">
            <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full sm:w-[45%] ">
              <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full">
                <dt
                  style={{
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, #c084fc -10%, transparent 80%,     transparent 100%)`,
                  }}
                  className="text-[15px] "
                >
                  <strong>{t("address")}</strong>
                </dt>
                <dd>Misiones - Paraguay</dd>
              </div>
              <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
            </div>

            <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full sm:w-[45%] ">
              <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full">
                <dt
                  style={{
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, #c084fc -10%, transparent 80%,     transparent 100%)`,
                  }}
                  className="text-[15px] "
                >
                  <strong>{t("phone")}</strong>
                </dt>
                <dd>+595975641525</dd>
              </div>
              <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
            </div>

            <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full sm:w-[45%] ">
              <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full">
                <dt
                  style={{
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, #c084fc -10%, transparent 80%,     transparent 100%)`,
                  }}
                  className="text-[15px] "
                >
                  <strong>Email</strong>
                </dt>
                <dd>WGiuFC@hotmail.com</dd>
              </div>
              <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
            </div>

            <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full sm:w-[45%] ">
              <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full">
                <dt
                  style={{
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, #c084fc -10%, transparent 80%,     transparent 100%)`,
                  }}
                  className="text-[15px] "
                >
                  <strong>Freelance</strong>
                </dt>
                <dd>{t("freelance")}</dd>
              </div>
              <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
            </div>
          </dl>

          <div className="flex flex-col text-start items-center justify-center w-full">
            <a className="text-zinc-200  border  transition duration-700 w-full text-center flex items-center justify-center font-bold  rounded-md p-2 bg-primaryButtonColor hover:bg-opacity-[60%] dark:border-zinc-800" href="mailto:WGiuFC@hotmail.com">{t("emailMe")}</a>
          </div>

          <div className="flex flex-row text-start items-start justify-center w-full gap-4 select-none">
             <a draggable="false" className="flex flex-col text-center items-center justify-center gap-2 select-none hover:text-primaryButtonColor transition duration-700" href="https://www.linkedin.com/in/w-oni/" target="_blank">
             <FaLinkedinIn className="w-10 h-10 " />
             <strong >Linkedin</strong>
             </a>
             <a draggable="false" className="flex flex-col text-center items-center justify-center gap-2 select-none hover:text-primaryButtonColor transition duration-700" href="https://github.com/WilliamFleitas" target="_blank">
             <VscGithub className="w-10 h-10 " />
             <strong >Github</strong>
             </a>
             <a draggable="false" className="flex flex-col text-center items-center justify-center gap-2  select-none hover:text-primaryButtonColor transition duration-700" href="https://drive.google.com/file/d/1fdy330T5q-XaUQz6_CbYqciM4Vks_Fk5/view?usp=sharing" target="_blank">
             <FaRegIdCard className="w-10 h-10 " />
             <strong >{t("downloadCV")}</strong>
             </a>
            
             </div>
        </section>
      </article>
    </div>
  );
};
export default Contact;
