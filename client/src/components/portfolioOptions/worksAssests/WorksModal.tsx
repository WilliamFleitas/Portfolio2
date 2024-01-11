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
    wallStIntel: {
      link: "fakelink.com",
      state: "Seed",
      miniature:
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbook%20(2).png?alt=media&token=26f7501b-af4a-4610-8603-9978a7271bb9",
      color: "rgba(11, 57, 65)",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2Fwall%2FSin%20t%C3%ADtulo.png?alt=media&token=22de6355-59ff-446a-bf7e-c8151859e26d",
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2Fwall%2F9dbf691d-aa42-4c47-92b6-01d37219e1bd.png?alt=media&token=960b2157-e162-45d6-a566-ed9863b6ffeb",
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2Fwall%2Fdfdfdf.png?alt=media&token=940b6937-d6da-4957-a778-2e6d4bcdd61b",
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2Fwall%2Feadff149-abb5-4311-8204-214b528f6de1.png?alt=media&token=131d52d2-9c2e-4969-839b-066cbcaceb38",
      ],
      video:
        "https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FwallStDemo.mp4?alt=media&token=3ef3c881-cea5-4e28-9c22-b9280e61e541",
      date:
        i18n.language === "en"
          ? "April 2023 - Present"
          : "Abril 2023 - Presente",
      title: "Trade Social Network",
      value: "wallStIntel",
      miniDescription:
        i18n.language === "en"
          ? "Development of a Single Page Application (SPA) for web-based trading, utilizing React framework."
          : "Desarrollo de una Aplicación de Página Única (SPA) para Trading, utilizando el framework React.",
      description:
        i18n.language === "en"
          ? "Developed React interfaces with TypeScript and Tailwind, integrating Asynchronous Redux Toolkit for robust state management. Engineered a user-centric experience, fetching and formatting analytic data for React components. Implemented charts and tables, boosting user satisfaction by 40%. Introduced list virtualization for a 15% performance enhancement. Ensured accessible and responsive interfaces for optimal user experience. Collaborated on backend data structure design for 5+ products, enabling seamless integration. Designed scalable code architecture through reusable components for enhanced efficiency."
          : "Desarrollé interfaces en React con TypeScript y Tailwind, integrando Asynchronous Redux Toolkit para una gestión robusta del estado. Diseñé una experiencia centrada en el usuario, recuperando y formateando datos analíticos para los componentes de React. Implementé gráficos y tablas, aumentando la satisfacción del usuario en un 40%. Introduje la virtualización de listas para un aumento del rendimiento del 15%. Garanticé interfaces accesibles y receptivas para una experiencia de usuario óptima. Colaboré en el diseño de la estructura de datos del backend para más de 5 productos, permitiendo una integración fluida. Diseñé una arquitectura de código escalable mediante componentes reutilizables para una eficiencia mejorada.",
      id: 0,
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
      title: "Dashboard panel",
      value: "brunsonInsurance",
      miniDescription:
        i18n.language === "en"
          ? "Led the refactoring of a web application for one of the company's products, including the integration of new functionalities."
          : "Lidere la refactorización de una aplicación web para uno de los productos de la empresa, incluyendo la integración de nuevas funcionalidades.",
      description:
        i18n.language === "en"
          ? "Revamped the company's website through extensive refactoring, optimizing code for efficiency by eliminating unnecessary components and upgrading libraries. Achieved a streamlined and cleaner codebase, leading to reduced loading times and improved maintainability and scalability. Implemented a migration of global application states to Redux Toolkit, enhancing code readability and delivering a notable 50% speed improvement for relevant components. Further upgraded the website's styling by replacing Bootstrap with Tailwind, ensuring a modern and controlled design while preserving the original appearance of components."
          : "Refactorización completa del panel administrativo de la empresa, optimizando el código para mejorar la eficiencia al eliminar componentes innecesarios y actualizar bibliotecas. Logré una base de código más limpia y eficiente, lo que resultó en tiempos de carga reducidos y una mejor mantenibilidad y escalabilidad. Implementé la migración de estados de aplicación globales a Redux Toolkit, mejorando la legibilidad del código y logrando una mejora de velocidad notable del 50% para los componentes relevantes. Además, actualicé el estilo del sitio web al reemplazar Bootstrap con Tailwind, garantizando un diseño moderno y controlado mientras se conserva la apariencia original de los componentes.",
      id: 1,
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
          ? "Led the development of a landing page web application, implementing a room reservation system with integrated quotes, a secure payment gateway, SQL database management, enhanced security, and seamless deployment. This achievement resulted in an 80% automation rate for the hotel's reservation system, reducing user booking time by an outstanding 120%."
          : "Dirigí el desarrollo de una aplicación web tipo landing page y un sistema de reservas de habitaciones con cotizaciones integradas, una pasarela de pago segura, gestión de base de datos SQL, seguridad mejorada y despliegue sin problemas. Este logro resultó en una tasa de automatización del 80% para el sistema de reservas del hotel, reduciendo el tiempo de reserva del usuario en un destacado 120%.",
      id: 2,
      jobTitle: "Full Stack Developer",
    },
    clockIA_APP: {
      link: "fakelink.com",
      date:
        i18n.language === "en"
          ? "January 2023 - Present"
          : "Enero 2023 - Presente",
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
      id: 3,
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
      className={`rounded-md isolate flex flex-col w-full text-start items-center justify-start gap-4 text-black dark:text-white`}
    >
      <div
        style={{
          background: `${bgColor}`,
        }}
        className="flex flex-col text-start items-center justify-center w-full   "
      >
        {loading && (
          <div className="min-h-[300px] flex flex-col text-start items-center justify-center">
            <div className="transition duration-500 animate-spin rounded-full h-14 w-14 m-8  border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}
        <img
        draggable="false"
          className="transition duration-500 object-cover rounded-t-md isolate"
          src={workData.miniature}
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
                />
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}

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

        <div className="px-4">
          <p>{workData.description}</p>
        </div>
      </section>
    </article>
  );
};

export default WorksModal;
