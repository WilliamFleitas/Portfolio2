import { useState } from "react";
import { useTranslation } from "react-i18next";

interface workDataType {
  link: string;
  miniature: string;
  state: string;
  images?: string[];
  video?: string;
  date: string;
  title: string;
  value: string;
  miniDescription: string;
  description: string;
  jobTitle: string;
  id: number;
  company: string;
  color: string;
}
interface WorksModalTypeProps {
  workName: string;
}
const WorksModal: React.FC<WorksModalTypeProps> = ({ workName }) => {
  const { t, i18n } = useTranslation(["works"]);
  const worksData: Record<string, workDataType> = {
    translator_APP: {
      link: "fakelink.com",
      date:
        i18n.language === "en"
          ? "February 2025 - April 2025"
          : "Febrero 2025 - Abril 2025",
      state: "Production",
      miniature:
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbook%20(6)4234.png?alt=media&token=2be60ac3-d1f4-4b1b-81d6-60a15cd6b592",
      video:
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2F2025-04-09%2010-03-24.mp4?alt=media&token=a1f1bb8f-adb9-4daa-b653-1cbd1eb807d9",
      title: "Translator Desktop APP",
      color: "rgba(110, 110, 110)",
      company: "Personal Project",
      value: "translator_APP",
      miniDescription:
        i18n.language === "en"
          ? "Translator Desktop, created with Electron.js, Typescript and React."
          : "Aplicación Desktop de traducción, creado con Electron.js, Typescript y React.",
      description:
        i18n.language === "en"
          ? "I developed a language translation application using Electron.js, TypeScript, and React. The application has two versions: one that uses OpenAI's Whisper running locally for audio-to-text transcriptions, and another version that uses the Deepgram library for audio-to-text transcriptions in the cloud. Both versions use Azure AI Translation for text translations, in addition to employing Voicemeeter Banana to create virtual audio devices, which allow capturing audio from the speaker."
          : "Desarrollé una aplicación de traducción de lenguajes utilizando Electron.js, TypeScript y React. La aplicación cuenta con dos versiones: una en la que se utiliza Whisper de OpenAI, ejecutándose de manera local para las transcripciones de audio a texto, y otra versión que emplea la librería de Deepgram para las transcripciones de audio a texto en la nube. Ambas versiones utilizan Azure AI Translation para las traducciones de texto, además de emplear Voicemeeter Banana para la creación de dispositivos virtuales de audio, lo que permite la captura del audio proveniente del altavoz.",
      id: 0,
      jobTitle: "Full Stack Developer",
    },
    wallStIntel: {
      link: "fakelink.com",
      state: "Seed",
      miniature:
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbook%20(2)%20(1).png?alt=media&token=ddfd7e0c-f26e-450e-bef5-e3abc2e475bb",
      color: "rgba(11, 57, 65)",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2Fwall%2FCaptura%20de%20pantalla%202024-11-06%20075239.png?alt=media&token=2976799c-bc9b-4fc9-9d5d-a4b523142b35",
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2Fwall%2FwallJournalTabletScreen.png?alt=media&token=d112cfea-b5c4-4cea-a999-e68bca8514b5",
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2Fwall%2FMobileScreenwalljournal.png?alt=media&token=caa0d786-d60b-4413-98fa-c20a78c3f1ff",
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2Fwall%2FwallJournalDesktopScreen.png?alt=media&token=d88c409b-1f63-4e6f-a761-ab3d62be6ae5",
      ],
      video:
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2Fwalldemoproy2.mp4?alt=media&token=2ecc5ea1-33b1-42f2-90ad-cccad40e80c6",
      date:
        i18n.language === "en"
          ? "April 2023 - November 2024"
          : "Abril 2023 - Noviembre 2024",
      title: "Trade Social Network",
      value: "wallStIntel",
      miniDescription:
        i18n.language === "en"
          ? "Development of a Single Page Application (SPA) for web-based trading, utilizing React library."
          : "Desarrollo de una Aplicación de Página Única (SPA) para Trading, utilizando la libreria React.",
      description:
        i18n.language === "en"
          ? "Developed React interfaces with TypeScript and Tailwind, integrating Asynchronous Redux Toolkit for robust state management. Implemented charts and tables to provide users with an intuitive and visually appealing representation of the data. Implemented List virtualization for efficient rendering of large data sets, resulting in a 15% performance enhancement for components utilizing lists. Collaboratively worked with the backend team to design data structures, ensuring seamless integration with the frontend and efficient data management. Designed scalable code architecture through reusable components for enhanced efficiency."
          : "Desarrollé interfaces en React con TypeScript y Tailwind, integrando Asynchronous Redux Toolkit para una gestión robusta del estado. Implementé Gráficos y tablas para proporcionar a los usuarios una representación intuitiva y visualmente atractiva de la data. Implemente la virtualización de listas para mejorar la eficiencia del renderizado de grandes conjuntos de datos, lo que resulto en una mejora del rendimiento en un 15%. Trabajé en colaboración con el equipo de backend para diseñar estructuras de datos, asegurando una integración fluida con el frontend y una gestión eficiente de los datos. Diseñé e implementé una arquitectura de código escalable y eficiente mediante la creación de componentes reutilizables, mejorando la eficiencia y escalabilidad del código..",
      id: 1,
      company: "Wall St Intel",
      jobTitle: "Frontend Developer",
    },
    brunsonInsurance: {
      link: "fakelink.com",
      date:
        i18n.language === "en"
          ? "April 2023 - May 2023"
          : "Abril 2023 - Mayo 2023",
      state: "Production",
      color: "rgba(36, 68, 89)",
      miniature:
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FSin_titulo%20(1)%20(1).png?alt=media&token=f6b6bb5c-c383-4dda-8fae-1dfdb41b2094",
      company: "Brunson Insurance",
      title: "Dashboard",
      value: "brunsonInsurance",
      miniDescription:
        i18n.language === "en"
          ? "Led the refactoring of a web application for one of the client products, including the integration of new functionalities."
          : "Lidere la refactorización de una aplicación web para uno de los productos del cliente, incluyendo la integración de nuevas funcionalidades.",
      description:
        i18n.language === "en"
          ? "Revamped the client website through extensive refactoring, optimizing code for efficiency by eliminating unnecessary components and upgrading libraries. Achieved a streamlined and cleaner codebase, leading to reduced loading times and improved maintainability and scalability. Implemented a migration of global application states to Redux Toolkit, enhancing code readability and delivering a notable 30% speed improvement for relevant components. Further upgraded the website's styling by replacing Bootstrap with Tailwind, ensuring a modern and controlled design while preserving the original appearance of components."
          : "Refactorización completa del panel administrativo de uno de los productos del cliente, optimizando el código para mejorar la eficiencia al eliminar componentes innecesarios y actualizar bibliotecas. Logré una base de código más limpia y eficiente, lo que resultó en tiempos de carga reducidos y una mejor mantenibilidad y escalabilidad. Implementé la migración de estados de aplicación globales a Redux Toolkit, mejorando la legibilidad del código y logrando una mejora de velocidad notable del 30% para los componentes relevantes. Además, actualicé el estilo del sitio web al reemplazar Bootstrap con Tailwind, garantizando un diseño moderno y controlado mientras se conserva la apariencia original de los componentes.",
      id: 2,
      jobTitle: "Frontend Developer",
    },
    laCarretaPosada: {
      link: "fakelink.com",
      date:
        i18n.language === "en"
          ? "January 2023 - February 2023"
          : "Enero 2023 - Febrero 2023",
      state: "Demo",
      miniature:
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbook%20(6).png?alt=media&token=c7396ddf-f26e-4341-8f51-e086fc1c5c6d",
      title: "Landing Page / Booking system",
      color: "rgba(186, 146, 152)",
      video:
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FlaCarreta.mp4?alt=media&token=f46d758b-58f8-4bfc-80fc-b3050418ea7c",
      company: "La Carreta Posada",
      value: "laCarretaPosada",
      miniDescription:
        i18n.language === "en"
          ? "Led the development of a landing page web application with booking system."
          : "Lidere el desarrollo de una aplicación web landing page con sistema de reservas.",
      description:
        i18n.language === "en"
          ? "Led the development of a landing page web application, implementing a room reservation system with integrated quotes, a secure payment gateway, SQL database management, enhanced security, and seamless deployment. This achievement resulted in an 80% automation rate for the hotel's reservation system."
          : "Dirigí el desarrollo de una aplicación web tipo landing page y un sistema de reservas de habitaciones con cotizaciones integradas, una pasarela de pago segura, gestión de base de datos SQL, seguridad mejorada y despliegue sin problemas. Este logro resultó en una tasa de automatización del 80% para el sistema de reservas del hotel.",
      id: 3,
      jobTitle: "Full Stack Developer",
    },
    clockIA_APP: {
      link: "fakelink.com",
      date:
        i18n.language === "en"
          ? "January 2022 - December 2023"
          : "Enero 2022 - Diciembre 2023",
      state: "Demo",
      miniature:
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbookasd.png?alt=media&token=e395e075-9875-47af-8a7b-6e70754aa812",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FClockIA%2FCaptura%20de%20pantalla%202024-01-05%20012732.png?alt=media&token=a3fec995-eb72-4039-9519-79e8a03eccc2",
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FClockIA%2F744160a6-e7ac-4f64-9887-cdc2f1e776b6.png?alt=media&token=3a3e37a7-566c-46b0-a7b2-7ba1621cfb82",
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FClockIA%2Fd684cf8b-c6ef-4682-8e5c-0a8ca821fcf7.png?alt=media&token=96f1cbef-578e-4f53-a96a-3ab903b9ec70",
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FClockIA%2FCaptura%20de%20pantalla%202024-01-05%20012652.png?alt=media&token=52bd057b-be7a-4055-af90-7b941b72c62f",
      ],
      video:
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FClockIA.mp4?alt=media&token=ec555751-d350-404b-b3e0-fd42bee499f2",
      title: "ClockIA APP",
      color: "rgba(59, 35, 42)",
      company: "Personal Project",
      value: "clockIA_APP",
      miniDescription:
        i18n.language === "en"
          ? "Created AI Alarm Clock App with PERN Stack and Typescript."
          : "Desarrollé una aplicación de alarma con IA utilizando el stack PERN y TypeScript.",
      description:
        i18n.language === "en"
          ? "Alarm Clock APP using the PERN Stack and Typescript, incorporating Node-cron for alarm and task management. Leveraged Socket.IO for seamless event handling and real-time information transmission. Enhanced user interactivity with personalized responses generated through Openai API and real-time conversion to audiovisual content using the D-ID AI API."
          : "Desarrollé una aplicación de despertador utilizando el stack PERN y Typescript, incorporando Node-cron para la gestión de alarmas y tareas. Aproveché Socket.IO para un manejo de eventos fluido y la transmisión de información en tiempo real. Mejoré la interactividad del usuario con respuestas personalizadas generadas a través de la API de OpenAI y la conversión en tiempo real a contenido audiovisual utilizando la API de D-ID AI.",
      id: 4,
      jobTitle: "Full Stack Developer",
    },
  };
  const workData: workDataType = worksData[workName];
  const bgColor = workData.color;

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <article
      className={`sm:rounded-md isolate flex flex-col w-full text-start items-center justify-start gap-4 text-black dark:text-white pb-10`}
    >
      <div
        style={{
          background: `${bgColor}`,
        }}
        className="flex flex-col text-start items-center justify-center w-full   "
      >
        {loading && (
          <div className="min-h-[300px] flex flex-col text-start items-center justify-center">
            <div className="transition duration-500 animate-spin rounded-full h-14 w-14 m-8  border-t-2 border-b-2 border-primaryButtonColor"></div>
          </div>
        )}
        <img
        draggable="false"
          className="transition duration-500 object-cover sm:rounded-t-md isolate"
          src={workData.miniature}
          alt={`${workData.title} main image`}
          onLoad={handleImageLoad}
          style={{ display: loading ? "none" : "block" }}
        />
      </div>

      <section className="flex flex-col w-full text-start items-start justify-start p-4 gap-6">
        <div className="flex flex-col w-full gap-1">
          <h2 className="m-0 p-0">{workData.title}</h2>
          <small>{workData.company}</small>
        </div>

        <dl className="flex flex-col ssm:flex-row flex-wrap w-full text-start items-start justify-between sm:gap-2 sm:px-4">
          <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full ssm:w-[49%] md:w-[45%]  ">
            <div className="flex gap-2 flex-row flex-wrap text-start items-center justify-between  w-full">
              <dt
                style={{
                  background: `linear-gradient(to right, transparent 0%, transparent 0%,  ${bgColor} -10%, transparent 80%,     transparent 100%)`,
                }}
                className="text-[15px] "
              >
                <strong>{t("createdBy")}</strong>
              </dt>
              <dd>William Cabrera</dd>
            </div>
            <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
          </div>

          <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full ssm:w-[49%] md:w-[45%]  ">
            <div className="flex gap-2 flex-row flex-wrap text-start items-center justify-between  w-full">
              <dt
                style={{
                  background: `linear-gradient(to right, transparent 0%, transparent 0%,  ${bgColor} -10%, transparent 80%,     transparent 100%)`,
                }}
                className="text-[15px] "
              >
                <strong>{t("state")}</strong>
              </dt>
              <dd>{workData.state}</dd>
            </div>
            <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
          </div>

          <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full ssm:w-[49%] md:w-[45%]  ">
            <div className="flex gap-2 flex-row flex-wrap text-start items-center justify-between  w-full">
              <dt
                 style={{
                  background: `linear-gradient(to right, transparent 0%, transparent 0%,  ${bgColor} -10%, transparent 80%,     transparent 100%)`,
                }}
                className="text-[15px] "
              >
                <strong>{t("role")}</strong>
              </dt>
              <dd>{workData.jobTitle}</dd>
            </div>
            <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
          </div>

          <div className="flex flex-row flex-wrap text-start items-center justify-between  w-full ssm:w-[49%] md:w-[45%]  ">
            <div className="flex gap-2 flex-row flex-wrap text-start items-center justify-between  w-full">
              <dt
                style={{
                  background: `linear-gradient(to right, transparent 0%, transparent 0%,  ${bgColor} -10%, transparent 80%,     transparent 100%)`,
                }}
                className="text-[15px] "
              >
                <strong>{t("date")}</strong>
              </dt>
              <dd>{workData.date}</dd>
            </div>
            <span className="gradient-line-span  w-[100%] flex flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]"></span>
          </div>
        </dl>
        <div className="px-4">
          <p>{workData.miniDescription}</p>
        </div>


        {workData.video ? (
          <div className="flex flex-col w-full py-4 px-4 rounded-md">
            <video
              style={{
                boxShadow: `0 3px 4px 0 ${bgColor}`,
              }}
              className="rounded-md"
              src={workData.video}
              controls
            />
          </div>
        ) : (
          <></>
        )}

        {workData.images ? (
          <div className="flex flex-row flex-wrap text-start items-center justify-center md:justify-between gap-4 w-full py-4 px-4 rounded-md">
            {workData.images?.map((image, index) => (
              <div
              key={index}
                style={{
                  boxShadow: `0 3px 4px 0 ${bgColor}`,
                }}
                className="rounded-md "
              >
                <img draggable="false"
                  className="rounded-md object-cover h-auto w-full"
                  src={image}
                  alt={`${workData.title} image demo`}
                />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}


        <div className="px-4">
          <p>{workData.description}</p>
        </div>
      </section>
    </article>
  );
};

export default WorksModal;
