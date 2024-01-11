import { FaRegFileCode } from "react-icons/fa";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Records = () => {
    const { t } = useTranslation(['aboutMe']);
    return (
        <section className="flex flex-col w-full h-full text-start items-center justify-between">
         <header className="flex flex-col w-full h-fit border-b border-primaryMainColor p-4">
            <h4 className="gradient-title-line m-0 text-[25px] font-bold">{t("records")}</h4>
         </header> 
         <div className="grid grid-cols-3 w-full h-full text-start items-start justify-start px-4 ">

         <div className="relative flex flex-col text-center items-center justify-start w-full h-full py-4 px-2  gap-2">
            
            <div className="w-14  h-14 border-2 border-primaryButtonColor flex  gradient-line   rounded-full flex-col text-center items-center justify-center">
                <VscFileSubmodule className="w-8 h-8 dark:text-primaryButtonColor "/>

            </div>
            <strong className="font-bold">5+</strong>
            <strong>{t("projects")}</strong>
            <span className=" bg-gradient-custom absolute top-0 left-0 h-[100%] w-[1px] flex flex-col items-center justify-center text-center rounded-[10%]"></span>
         </div> 

         <div className="relative flex flex-col text-center items-center justify-start w-full h-full py-4 px-2  gap-2">
            
            <div className="w-14  h-14 border-2 border-primaryButtonColor flex  gradient-line   rounded-full flex-col text-center items-center justify-center">
                <FaRegFileCode className="w-8 h-8 dark:text-primaryButtonColor  "/>

            </div>
            <strong className="font-bold">1+</strong>
            <strong>{t("yearsExperience")}</strong>
            <span className=" bg-gradient-custom absolute top-0 left-0 h-[100%] w-[1px] flex flex-col items-center justify-center text-center rounded-[10%]"></span>
            <span className=" bg-gradient-custom absolute top-0 right-0 h-[100%] w-[1px] flex flex-col items-center justify-center text-center rounded-[10%]"></span>
         </div> 
         <div className="relative flex flex-col text-center items-center justify-start w-full h-full py-4 px-2  gap-2">
            
            <div className="w-14  h-14 border-2 border-primaryButtonColor flex  gradient-line   rounded-full flex-col text-center items-center justify-center">
                <IoPeopleCircleOutline className="w-8 h-8 dark:text-primaryButtonColor  "/>

            </div>
            <strong className="font-bold">3</strong>
            <strong>{t("clients")}</strong>
            <span className=" bg-gradient-custom absolute top-0 right-0 h-[100%] w-[1px] flex flex-col items-center justify-center text-center rounded-[10%]"></span>
         </div> 
         </div> 
        </section>
    )
};

export default Records; 