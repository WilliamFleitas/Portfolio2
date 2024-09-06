import { Outlet, Routes, Route, useLocation } from 'react-router-dom'
import AboutMe from './portfolioOptions/AboutMe'
import NavBar from './Navbar'
import Resume from './portfolioOptions/Resume'
import ProfileCard from './ProfileCard'
import Works from './portfolioOptions/Works'
import { Suspense, useEffect, useState } from 'react'
import QuickView from './portfolioOptions/QuickView'

const PortfolioLayout = () => {
  const location = useLocation()
  const [quickView, setQuickView] = useState<boolean>(false)

  
  useEffect(() => {
    const currentLocation = location.pathname.split('/')
    if (currentLocation.length === 2 || currentLocation[2] === 'quickview') {
      setQuickView(true)
    } else {
      setQuickView(false)
    }
  }, [location.pathname])
  return (
    <div className={`relative flex flex-col xl:flex-row w-full   text-start items-center justify-start smd:overflow-y-scroll xl:overflow-hidden no-scrollbar ${quickView === false ? "smd:h-screen":"h-fit smd:h-screen"}`}>
      <aside className='relative flex flex-row w-full h-fit xl:h-screen xl:min-w-[33%] xl:max-w-[33%]'>
        <ProfileCard />
      </aside>
      <div
        className=' flex flex-col w-full h-full'
        style={{
          boxShadow: `1px 1px 4px 0 #8A61B1`
        }}
      >
        {quickView === false ? (
          <div className='h-fit m-0 p-0 hidden xl:flex'>
            <NavBar />
          </div>
        ) : (
          <></>
        )}

        <div className='w-full h-full overflow-hidden isolate bg-white dark:bg-[#171616] '>
          <Suspense
            fallback={
              <div className='min-h-screen  md:min-h-full h-full flex flex-col text-start items-center justify-center'>
                <div className='transition duration-500 animate-spin rounded-full h-14 w-14 m-8  border-t-2 border-b-2 border-purple-500'></div>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
      {quickView === false ? (
        <div className='sticky bottom-0 z-50 flex  w-full xl:hidden border-t border-zinc-700 '>
          <NavBar />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

const PortfolioPage = () => (
  <Routes>
    <Route element={<PortfolioLayout />}>
      <Route index element={<QuickView />} />
      <Route path='/aboutme' element={<AboutMe />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/works' element={<Works />} />
      <Route path='/quickview' element={<QuickView />} />
      <Route
        path='*'
        element={
          <div className='flex flex-col text-center items-center p-20 justify-center h-full'>
            NOT FOUND, Are you lost? We are all lost..{' '}
          </div>
        }
      />
    </Route>
  </Routes>
)

export default PortfolioPage
