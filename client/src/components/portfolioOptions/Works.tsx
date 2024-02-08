import { useState } from "react";
import WorksModal from "./worksAssests/WorksModal";
import ImageLoader from "../../utils/ImageLoader";
import { useTranslation } from "react-i18next";
import Modal from "../../utils/Modal";

const worksData = [
  {
    link: "fakelink.com",
    miniature:
      "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbook%20(2).png?alt=media&token=26f7501b-af4a-4610-8603-9978a7271bb9",
    date: "April 2023 - Present",
    color: "rgba(11, 57, 65)",
    title: "Trade Social Network",
    value: "wallStIntel",
    miniDescription:
      "Development of a Single Page Application (SPA) for web-based trading, utilizing React library.",
    id: 0,
    company: "Wall St Intel",
  },
  {
    link: "fakelink.com",
    date: "April 2023 - May 2023",
    color: "rgba(36, 68, 89)",
    miniature:
      "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FSin_titulo%20(1)%20(1).png?alt=media&token=f6b6bb5c-c383-4dda-8fae-1dfdb41b2094",
    company: "Brunson Insurance",
    title: "Dashboard panel",
    value: "brunsonInsurance",
    miniDescription:
      "up",
    id: 1,
  },
  {
    link: "fakelink.com",
    date: "April 2023 - May 2023",
    miniature:
      "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbook%20(6).png?alt=media&token=c7396ddf-f26e-4341-8f51-e086fc1c5c6d",
    title: "Landing Page / Booking system",
    company: "La Carreta Posada",
    color: "rgba(186, 146, 152)",
    value: "laCarretaPosada",
    miniDescription:
      "up.",
    id: 2,
  },
  {
    link: "fakelink.com",
    date: "April 2023 - May 2023",
    color: "rgba(59, 35, 42)",
    miniature:
      "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbookasd.png?alt=media&token=e395e075-9875-47af-8a7b-6e70754aa812",
    title: "ClockIA APP",
    company: "Personal Project",
    value: "clockIA_APP",
    miniDescription:
      "up.",
    id: 3,
  },
];
const Works = () => {
  const { t } = useTranslation(['works']);
  const [modalSwitch, setModalSwitch] = useState<boolean>(false);
  const [currentWork, setCurrentWork] = useState<string>("");
  const [currentColor, setCurrentColor] = useState<string>("");
  const [hovered, setHovered] = useState<number | null>(null);

  const handleHover = (hoveredIndex: number) => {
    setHovered(hoveredIndex);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  const handleOpenModalClick = (workName: string, color: string) => {
    setCurrentWork(workName);
    setCurrentColor(color);
    setModalSwitch(true);
  };
  return (
    <div  className="flex flex-col h-screen md:h-full text-start items-center justify-center bg-white dark:bg-secondaryBgColor text-black dark:text-white overflow-hidden w-full  shadow-md  isolate  py-0 pt-3 lg:pt-0 select-none">
      <article className="  w-full h-full flex flex-col text-start  items-start justify-start  max-h-[95%] overflow-y-scroll pb-10 no-scrollbar">
        <div className="flex flex-col w-full h-fit">
          <header className="flex  flex-col w-full h-fit border-b border-primaryMainColor px-4 pb-4 pt-2 ">
            <h2 className="gradient-title-line m-0 text-[25px] font-bold">
            {t("works")}
            </h2>
          </header>
        </div>

        <div className="relative flex flex-col sm:grid grid-cols-2  w-full text-start items-center  justify-start p-4 gap-8">
          {worksData?.map((item, index) => (
            <button
            key={item.id}
              className=" z-40 transition duration-500  flex flex-col w-full  text-start items-center justify-start relative   rounded-md  h-fit   gap-y-4 overflow-hidden"
              onMouseEnter={() => handleHover(Number(index))}
              onMouseLeave={handleLeave}
              type="button"
                onClick={() => handleOpenModalClick(item.value, item.color)}
                value={item.value}
            >
              <div draggable="false" className={`object-contain h-auto w-full transition duration-500 ${hovered === index ? "scale-105" : ""}`}>

              <ImageLoader src={item.miniature} alt={`${item.title} miniature`}/>
              </div>
              <strong
                
                className={`flex text-center transition duration-500 pb-4 ${hovered === index ? "dark:text-purple-200" : ""}`}
              >
                {item.title}
              </strong>
              <span className={`  absolute rounded-b-md top-0  transition duration-500 w-full h-full pointer-events-none ${hovered === index ? "bg-opacity-[15%] dark:bg-opacity-[5%]  bg-purple-500" : "bg-opacity-[0%]"}`}></span>
            </button>
          ))}
          <span className="hidden  bg-gradient-custom absolute top-0 left-[50%] h-[100%] w-[1px] sm:flex flex-col items-center justify-center text-center rounded-[10%]"></span>
        </div>
        <div className="flex flex-col w-full text-start items-center justify-start">
        
        <Modal 
        color={currentColor}
        isOpen={modalSwitch}
        onClose={setModalSwitch}
        Content={<WorksModal workName={currentWork} />}
        /> 
        </div>
      </article>
    </div>
  );
};
export default Works;
