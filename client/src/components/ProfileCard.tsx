import { FaRegIdCard } from 'react-icons/fa'
import MeuProfile from '../assets/meuProfile.png'
import { VscGithub } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa'
import TypeWriter from '../utils/TypeWriter'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import {
  MdOutlineLanguage,
  MdDarkMode,
  MdOutlineLightMode
} from 'react-icons/md'
import { MdOutlineContactPhone } from 'react-icons/md'
import { IoPersonSharp } from 'react-icons/io5'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link, useLocation } from 'react-router-dom'

const ProfileCard = () => {
  const { t, i18n } = useTranslation(['contact'])
  const location = useLocation()
  const [contactSwitch, setContactSwitch] = useState<boolean>(false)
  const [customNavHover, setCustomNavHover] = useState<boolean>(false)
  const [quickView, setQuickView] = useState<boolean>(false)
  const [theme, setTheme] = useState<string>('light')
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  useEffect(() => {
    const currentLocation = location.pathname.split('/')
    if (currentLocation.length === 2 || currentLocation[2] === 'quickview') {
      setQuickView(true)
    } else {
      setQuickView(false)
    }
  }, [location.pathname])
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme, quickView])
  return (
    <div
      className=' flex flex-col  dark:text-white text-black  w-full h-full ssm:h-fit xl:h-full  z-10  shadow-md text-start items-center justify-between xl:justify-start xl:overflow-hidden relative  rounded-md  secondary-gradient-color'
      style={{
        boxShadow: '2px 10px 15px #0000008c'
      }}
    >
      <div className='hidden ssm:flex flex-col text-start items-start justify-start w-full h-fit xl:h-full'>
        <span className='flex object-cover w-full h-fit fh:min-h-[20rem] xl:max-h-none xl:h-screen  flex-col overflow-hidden'></span>
      </div>

      <section
        className={`${
          contactSwitch ? '' : 'flex'
        } w-full h-full xl:h-fit  text-start items-center justify-center gap-y-6 gap-x-6 flex flex-row flex-wrap z-40 select-none py-10 px-6 xl:max-w-[90%] ssm:rounded-xl ssm:absolute  xl:top-5 ssm:inset-x-0 xl:inset-auto ssm:top-1/2 ssm:left-1/2 ssm:transform ssm:-translate-y-1/2 ssm:-translate-x-1/2 xl:-translate-y-0 xl:-translate-x-0  xl:left-auto relative`}
        style={{
          boxShadow: '5px 10px 20px #0000008c'
        }}
        draggable='false'
      >
        {' '}
        <div
          className={`absolute inset-x-0 bottom-0 left-1/2 transform -translate-x-1/2  flex flex-col text-start items-center justify-center  z-50 w-fit hover:min-w-fit hover:min-h-fit `}
          style={{
            boxShadow: 'inset 2px 10px 15px #0000008c'
          }}
          onMouseEnter={() => setCustomNavHover(true)}
          onMouseLeave={() => setCustomNavHover(false)}
        >
          {!customNavHover ? (
            <div
              className='absolute top-0 border border-t-0 border-primaryButtonColor/20 w-14 h-5 rounded-b-md flex flex-col text-center items-center justify-center z-50 bg-gradient-to-r from-[#16222abe] to-[#ffffff6e] dark:bg-gradient-to-r dark:from-[#16222ac4] dark:to-[#3a6073a4] xl:bg-gradient-to-r xl:from-[#16222a00] xl:to-[#ffffff00] xl:dark:bg-gradient-to-r xl:dark:from-[#16222a00] xl:dark:to-[#3a607300] bg-transparent'
              style={{
                boxShadow: '2px 10px 15px #0000008c'
              }}
            >
              <TiArrowSortedDown className='w-7 h-7 dark:text-white text-primaryButtonColor' />
            </div>
          ) : (
            <div
              className='flex flex-row text-start items-center justify-start w-fit h-fit px-6 absolute top-0 bg-gradient-to-r from-[#16222abe] to-[#ffffff6e] dark:bg-gradient-to-r dark:from-[#16222ac4] dark:to-[#3a6073a4] xl:bg-gradient-to-r xl:from-[#16222a00] xl:to-[#ffffff00] xl:dark:bg-gradient-to-r xl:dark:from-[#16222a00] xl:dark:to-[#3a607300] bg-transparent rounded-b-md '
              style={{
                boxShadow: '2px 10px 15px #0000008c'
              }}
            >
              <section className='flex flex-row py-2 text-start items-center justify-center gap-4 sm:gap-10 w-fit'>
                {quickView ? (
                  <>
                    <button
                      className='transition duration-500 relative dark:hover:text-primaryButtonColor hover:text-primaryButtonColor/80'
                      type='button'
                      title={i18n.language === 'en' ? 'Language' : 'Idioma'}
                      onClick={handleChangeLanguage}
                    >
                      {<MdOutlineLanguage className='w-6 h-6 ' />}
                      <strong className='absolute bottom-0 right-0 font-extrabold  text-[#9c9c9c]'>
                        {i18n.language === 'en' ? 'en' : 'es'}
                      </strong>
                    </button>

                    <button
                      className='dark:hover:text-primaryButtonColor hover:text-primaryButtonColor/80 transition duration-500 '
                      type='button'
                      title={theme === 'dark' ? 'Light' : 'Dark'}
                      onClick={handleThemeSwitch}
                    >
                      {theme === 'dark' ? (
                        <MdOutlineLightMode className='w-6 h-6 ' />
                      ) : (
                        <MdDarkMode className='w-6 h-6' />
                      )}
                    </button>
                    <span className='flex xl:hidden w-2 h-5 m-auto border-l text-center items-center justify-center'></span>
                  </>
                ) : (
                  <></>
                )}

                <button
                  className=' transition duration-500 relative flex xl:hidden dark:hover:text-primaryButtonColor hover:text-primaryButtonColor/80'
                  type='button'
                  onClick={() => setContactSwitch(!contactSwitch)}
                >
                  {contactSwitch ? (
                    <MdOutlineContactPhone className='w-6 h-6' />
                  ) : (
                    <IoPersonSharp className='w-6 h-6' />
                  )}
                </button>
                <Link
                  to={`/portfolio/${!quickView ? 'quickview' : 'aboutme'}`}
                  className='leading-0 pt-[0.1rem] h-fit m-0 p-0 pb-0 mb-0  transition duration-500 dark:hover:text-primaryButtonColor hover:text-primaryButtonColor/80'
                >
                  <strong className=' whitespace-nowrap'>
                    {!quickView ? 'Quick View' : 'Normal View'}
                  </strong>
                </Link>
              </section>
            </div>
          )}
        </div>
        <div className=''>
          <div className='flex flex-col relative text-start items-center justify-center w-fit h-fit rounded-full'>
            <div className='w-full h-full  max-w-[10rem] max-h-[10rem] z-50 border-[3px] border-primaryButtonColor rounded-full'>
              <img
                className='flex object-cover w-full h-full rounded-full flex-col max-w-[10rem] max-h-[10rem]'
                src={MeuProfile}
                alt='William Cabrera Profile'
                draggable='false'
                style={{
                  boxShadow: '2px 10px 15px #0000008c'
                }}
              />
            </div>
            <span
              className='ppContainerBase absolute top-0 w-full h-full  max-w-[10rem] max-h-[10rem] z-30  rounded-full  mr-5 mt-2'
              style={{
                boxShadow: '2px 10px 15px #0000008c'
              }}
            ></span>
            <span className='ppContainerMid absolute top-0 w-full h-full  max-w-[10rem] max-h-[10rem] z-30  rounded-full mr-5 mt-2'></span>
            <span
              className='ppContainerMain absolute top-0  w-full h-full  max-w-[10rem] max-h-[10rem] z-30  rounded-full mr-5 mt-2'
              style={{
                boxShadow: '2px 10px 15px #0000008c'
              }}
            ></span>
          </div>
        </div>
        <div className='flex flex-col w-fit h-fit gap-y-4 '>
          <strong
            className='m-0 font-bold w-full text-center justify-center items-center flex-col text-[2rem]'
            style={{
              textShadow: '-2px 5px 4px #0000008c'
            }}
          >
            William Cabrera
          </strong>
          <TypeWriter
            words={[
              'Full Stack Web Developer',
              'Frontend Developer',
              'Backend Developer'
            ]}
          />
          <div className='flex flex-row text-start items-start justify-center w-full h-full  gap-4 mt-auto'>
            <a
              className='dark:hover:text-primaryButtonColor hover:text-primaryButtonColor/80 transition duration-500'
              draggable='false'
              href='https://www.linkedin.com/in/cabrerawilliam/'
              title='Linkedin'
              target='_blank'
            >
              <FaLinkedinIn className='w-8 h-8 ' />
            </a>
            <a
              className='dark:hover:text-primaryButtonColor hover:text-primaryButtonColor/80 transition duration-500'
              draggable='false'
              href='https://github.com/WilliamFleitas'
              title='GitHub'
              target='_blank'
            >
              <VscGithub className='w-8 h-8 ' />
            </a>
            <a
              className='dark:hover:text-primaryButtonColor hover:text-primaryButtonColor/80 transition duration-500'
              draggable='false'
              href={
                i18n.language === 'en'
                  ? 'https://drive.google.com/file/d/1AZbk3k5Usg0bvD0-WH8G5Eh64xlHx5Nj/view?usp=sharing'
                  : 'https://drive.google.com/file/d/10USyul0aoVIVsBFVi01VlFe4-0m_b6ih/view?usp=sharing'
              }
              target='_blank'
              title='Download CV'
            >
              <FaRegIdCard className='w-8 h-8 ' />
            </a>
          </div>
        </div>
      </section>

      <section
        className={`${
          contactSwitch ? 'block' : 'hidden xl:block'
        } w-full h-full xl:h-fit  text-start items-center justify-center gap-y-5 flex flex-col  z-40 select-none bg-white dark:bg-[#121212f5] shadow-sm pt-10 ssm:pt-6 pb-10 ssm:pb-8 px-6 xl:max-w-[90%] rounded-xl absolute ssm:inset-x-0 xl:inset-auto  ssm:left-1/2 xl:bottom-5 ssm:transform v-translate-y-0 ssm:-translate-x-1/2  -translate-y-0 xl:-translate-x-0 secondary-gradient-color`}
        draggable='false'
        style={{
          boxShadow: '5px 10px 20px #0000008c'
        }}
      >
        <div className='flex flex-col w-full h-fit '>
          <header className='flex  flex-col w-full h-fit'>
            <h2
              className='gradient-title-line m-0 text-[25px] font-bold'
              style={{
                textShadow: '-2px 5px 4px #0000008c'
              }}
            >
              {t('contact')}
            </h2>
          </header>
        </div>

        <dl className='flex flex-row flex-wrap w-full text-start items-start justify-between gap-y-8 gap-x-2 xl:pt-4'>
          <div className='flex flex-col text-start items-center justify-between  w-full max-w-[48%] gap-x-10 xl:max-w-[10rem] 2xl:max-w-[48%]'>
            <div className='flex flex-col 2xl:flex-row text-start 2xl:items-center justify-between  w-full gap-x-2 gap-y-2'>
              <dt className='text-[15px] gradient-label-line'>
                <strong>{t('address')}</strong>
              </dt>
              <dd>Paraguay</dd>
            </div>
            <span className='hidden 2xl:flex gradient-line-span  w-[100%] flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]'></span>
          </div>

          <div className='flex flex-col text-start items-center justify-between  w-full max-w-[48%] gap-x-10 xl:max-w-[10rem] 2xl:max-w-[48%]'>
            <div className='flex flex-col 2xl:flex-row text-start 2xl:items-center justify-between  w-full gap-x-2 gap-y-2'>
              <dt className='text-[15px] gradient-label-line'>
                <strong>{t('phone')}</strong>
              </dt>
              <dd>+595975641525</dd>
            </div>
            <span className='hidden 2xl:flex gradient-line-span  w-[100%] flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]'></span>
          </div>

          <div className='flex flex-col text-start items-center justify-between  w-full max-w-[48%] gap-x-10 xl:max-w-[10rem] 2xl:max-w-[48%]'>
            <div className='flex flex-col 2xl:flex-row text-start 2xl:items-center justify-between  w-full gap-x-2 gap-y-2'>
              <dt className='text-[15px] gradient-label-line'>
                <strong>Email</strong>
              </dt>
              <dd>wgiufc1@gmail.com</dd>
            </div>
            <span className='hidden 2xl:flex gradient-line-span  w-[100%] flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]'></span>
          </div>

          <div className='flex flex-col text-start items-center justify-between  w-full max-w-[48%] gap-x-10 xl:max-w-[10rem] 2xl:max-w-[48%]'>
            <div className='flex flex-col 2xl:flex-row text-start 2xl:items-center justify-between  w-full gap-x-2 gap-y-2'>
              <dt className='text-[15px] gradient-label-line'>
                <strong>Freelance</strong>
              </dt>
              <dd>{t('freelance')}</dd>
            </div>
            <span className='hidden 2xl:flex gradient-line-span  w-[100%] flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]'></span>
          </div>
        </dl>
      </section>
    </div>
  )
}
export default ProfileCard
