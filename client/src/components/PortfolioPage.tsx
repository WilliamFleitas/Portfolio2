import { Outlet, Routes, Route } from "react-router-dom";
import AboutMe from "./portfolioOptions/AboutMe";
import NavBar from "./Navbar";
import Resume from "./portfolioOptions/Resume";
import ProfileCard from "./ProfileCard";
import Works from "./portfolioOptions/Works";
import { Suspense } from "react";
import Contact from "./portfolioOptions/Contact";
import PortfoBackground from "./PortfoBackground";
const PortfolioLayout = () => {
  return (
    <div className="relative flex flex-col w-auto h-full md:h-screen  text-start items-center justify-start no-scrollbar">
      <div className="absolute h-full  bottom-0  w-screen  hidden md:flex">
      <PortfoBackground/>
      </div>
      <div className=" flex flex-col md:flex-row w-full h-full md:h-screen text-start items-center justify-center overflow-hidden md:px-6 lg:px-0 z-30">
        <aside className="relative flex flex-row w-full h-full md:w-fit md:h-fit  z-30 ">
          <div className="hidden lg:flex z-40">
            <NavBar />
          </div>
          <ProfileCard />
          <span className="hidden md:flex ppContainerBase absolute left-[-10px] lg:left-[80px] top-[-8px] w-full h-full md:min-w-[35vw] md:max-w-[35vw] lg:min-w-[30vw] lg:max-w-[30vw] z-4 md:min-h-[80vh] md:max-h-[80vh] md:overflow-hidden md:rounded-md"></span>
          <span className="hidden md:flex ppContainerMid absolute left-[-10px] lg:left-[80px] top-[-8px] w-full h-full md:min-w-[35vw] md:max-w-[35vw] lg:min-w-[30vw] lg:max-w-[30vw] z-4 md:min-h-[80vh] md:max-h-[80vh] md:overflow-hidden md:rounded-md"></span>
          <span className="hidden md:flex ppContainerMain absolute left-[-10px] lg:left-[80px] top-[-8px] w-full h-full md:min-w-[35vw] md:max-w-[35vw] lg:min-w-[30vw] lg:max-w-[30vw] z-4 md:min-h-[80vh] md:max-h-[80vh] md:overflow-hidden md:rounded-md"></span>
        </aside>

        <div
          style={{
            boxShadow: `1px 1px 4px 0 #8A61B1`,
          }}
          className="w-full h-full lg:min-w-[50vw] lg:max-w-[50vw] z-10 md:min-h-[70vh] md:max-h-[70vh] overflow-hidden md:rounded-r isolate bg-white dark:bg-black"
        >
          <Suspense
            fallback={
              <div className="min-h-screen  md:min-h-full h-full flex flex-col text-start items-center justify-center">
                <div className="transition duration-500 animate-spin rounded-full h-14 w-14 m-8  border-t-2 border-b-2 border-purple-500"></div>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
      <div className="sticky md:relative bottom-0 z-50 flex  w-full bg-[#1e1c1c]   lg:hidden  border-t border-zinc-700">
        <div style={{
            boxShadow: `4px 4px 0px 0px #1e1c1c`,
          }} className="bg-opacity-[55%] bg-secondaryBgColor w-full">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => (
  <Routes>
    <Route element={<PortfolioLayout />}>
      <Route index element={<AboutMe />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<>NOT FOUND, you're lost? we are all lost </>} />
    </Route>
  </Routes>
);

export default PortfolioPage;
