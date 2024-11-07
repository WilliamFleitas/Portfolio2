import { FaRegIdCard } from 'react-icons/fa'
import MeuProfile from '../assets/meuProfile.png'
import MerryFullPP from '../assets/MerryFullPP.jpg'
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
  const [theme, setTheme] = useState<string>('dark')
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
  }, [theme])
  return (
    <div
      style={{
        boxShadow: `0 1px 4px 0 #2c99bb`
      }}
      className=' flex flex-col bg-white dark:bg-black dark:text-white text-black  w-full h-full ssm:h-fit xl:h-full  z-10  shadow-md text-start items-center justify-between xl:justify-start overflow-hidden relative'
    >
      <div className='hidden ssm:flex flex-col text-start items-start justify-start w-full h-fit xl:h-full'>
        <img
          className='flex object-cover w-full h-fit fh:max-h-[20rem] xl:max-h-none xl:h-screen  flex-col overflow-hidden'
          src={MerryFullPP}
          alt='Going Merry Background'
          draggable='false'
        />
      </div>
      <div className=' flex flex-col bg-[#0867874d] z-10 w-full h-full absolute top-0'>
      </div>
      <div
        className={`absolute inset-x-0 bg-white dark:bg-[#171616] top-0 left-1/2 transform -translate-x-1/2  flex flex-col text-start items-center justify-center  z-50 dark:text-white text-black w-fit hover:min-w-fit hover:min-h-fit hover:rounded-b-md hover:border-2 hover:border-primaryButtonColor hover:border-t-0 `}
        onMouseEnter={() => setCustomNavHover(true)}
        onMouseLeave={() => setCustomNavHover(false)}
      >
        {!customNavHover ? (
          <div className='absolute border-2 border-primaryButtonColor  border-t-0 top-0 bg-white dark:bg-[#171616] w-10 h-4 rounded-b-md flex flex-col text-center items-center justify-center'>
            <TiArrowSortedDown className='w-6 h-5 text-primaryButtonColor' />
          </div>
        ) : (
          <div className='flex flex-row text-start items-center justify-start w-fit h-fit px-6 '>
            <section className='flex flex-row py-2 text-start items-center justify-center gap-4 sm:gap-10 w-fit'>
              {quickView ? (
                <>
                  <button
                    className='text-primaryMainColor  transition duration-500 relative'
                    type='button'
                    title={i18n.language === 'en' ? 'Language' : 'Idioma'}
                    onClick={handleChangeLanguage}
                  >
                    {<MdOutlineLanguage className='w-6 h-6 ' />}
                    <strong className='absolute bottom-0 right-0 font-extrabold  text-primaryButtonColor '>
                      {i18n.language === 'en' ? 'en' : 'es'}
                    </strong>
                  </button>

                  <button
                    className='text-primaryMainColor hover:text-primaryButtonColor transition duration-500 '
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
                className='text-primaryMainColor hover:text-primaryButtonColor transition duration-500 relative flex xl:hidden'
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
                className='text-primaryMainColor leading-0 pt-[0.1rem] h-fit m-0 p-0 pb-0 mb-0 hover:text-primaryButtonColor transition duration-500'
              >
                <strong className=' whitespace-nowrap'>{!quickView ? 'Quick View' : 'Normal View'}</strong>
              </Link>
            </section>
          </div>
        )}
      </div>

      <section
        className={`${
          contactSwitch ? 'hidden xl:flex' : 'flex'
        } w-full h-fit  text-start items-center justify-center gap-y-6 gap-x-6 flex flex-row flex-wrap z-40 select-none bg-white dark:bg-[#121212f5] shadow-sm py-10 px-6   ssm:max-w-[96%] md:max-w-[97%] xl:max-w-[90%] ssm:rounded-xl ssm:absolute  xl:top-5 ssm:inset-x-0 xl:inset-auto ssm:top-1/2 ssm:left-1/2 ssm:transform ssm:-translate-y-1/2 ssm:-translate-x-1/2 xl:-translate-y-0 xl:-translate-x-0  xl:left-auto`}
        draggable='false'
      >
        <div className=''>
          <div className='flex flex-col relative text-start items-center justify-center w-fit h-fit'>
            <div className='w-full h-full  max-w-[10rem] max-h-[10rem] z-50 border-[3px] border-[#1F1E1E] rounded-full'>
              <img
                className='flex object-cover w-full h-full rounded-full flex-col max-w-[10rem] max-h-[10rem]'
                src={MeuProfile}
                alt='William Cabrera Profile'
                draggable='false'
              />
            </div>
            <span className='ppContainerBase absolute top-0 w-full h-full  max-w-[10rem] max-h-[10rem] z-30  rounded-full  mr-5 mt-2'></span>
            <span className='ppContainerMid absolute top-0 w-full h-full  max-w-[10rem] max-h-[10rem] z-30  rounded-full mr-5 mt-2'></span>
            <span className='ppContainerMain absolute top-0  w-full h-full  max-w-[10rem] max-h-[10rem] z-30  rounded-full mr-5 mt-2'></span>
          </div>
        </div>

        <div className='flex flex-col w-fit h-fit gap-y-4 '>
          <strong className='m-0 font-bold w-full text-center justify-center items-center flex-col text-[2rem]'>
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
              className='hover:text-primaryButtonColor transition duration-700'
              draggable='false'
              href='https://www.linkedin.com/in/w-oni/'
              title='Linkedin'
              target='_blank'
            >
              <FaLinkedinIn className='w-8 h-8 ' />
            </a>
            <a
              className='hover:text-primaryButtonColor transition duration-700'
              draggable='false'
              href='https://github.com/WilliamFleitas'
              title='GitHub'
              target='_blank'
            >
              <VscGithub className='w-8 h-8 ' />
            </a>
            <a
              className='hover:text-primaryButtonColor transition duration-700'
              draggable='false'
              href={
                i18n.language === 'en'
                  ? 'https://docs.google.com/document/d/1dZvwhU_T1395QhTI1RkWFEqG0YpkFcOE/edit?usp=sharing&ouid=118393274526664722618&rtpof=true&sd=true'
                  : 'https://docs.google.com/document/d/1TqkVJvtDbDhZY8cyHhtbPcosETIp8ahQ/edit?usp=sharing&ouid=118393274526664722618&rtpof=true&sd=true'
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
        } w-full h-fit  text-start items-center justify-center gap-y-5 flex flex-col  z-40 select-none bg-white dark:bg-[#121212f5] shadow-sm pt-10 ssm:pt-6 pb-10 ssm:pb-8 px-6 ssm:max-w-[98%] xl:max-w-[90%] ssm:rounded-xl ssm:absolute ssm:inset-x-0 xl:inset-auto ssm:top-1/2 ssm:left-1/2 xl:bottom-5 ssm:transform v-translate-y-1/2 ssm:-translate-x-1/2  xl:-translate-y-0 xl:-translate-x-0`}
        draggable='false'
      >
        <div className='flex flex-col w-full h-fit '>
          <header className='flex  flex-col w-full h-fit'>
            <h2 className='gradient-title-line m-0 text-[25px] font-bold'>
              {t('contact')}
            </h2>
          </header>
        </div>

        <dl className='flex flex-row flex-wrap w-full text-start items-start justify-between gap-y-8 gap-x-2 xl:pt-4'>
          <div className='flex flex-col text-start items-center justify-between  w-full max-w-[48%] gap-x-10 xl:max-w-[10rem] 2xl:max-w-[48%]'>
            <div className='flex flex-col 2xl:flex-row text-start 2xl:items-center justify-between  w-full gap-x-2 gap-y-2'>
              <dt
                style={{
                  background: `linear-gradient(to right, transparent 0%, transparent 0%, #2c99bb -10%, transparent 80%,     transparent 100%)`
                }}
                className='text-[15px] '
              >
                <strong>{t('address')}</strong>
              </dt>
              <dd>Misiones - Paraguay</dd>
            </div>
            <span className='hidden 2xl:flex gradient-line-span  w-[100%] flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]'></span>
          </div>

          <div className='flex flex-col text-start items-center justify-between  w-full max-w-[48%] gap-x-10 xl:max-w-[10rem] 2xl:max-w-[48%]'>
            <div className='flex flex-col 2xl:flex-row text-start 2xl:items-center justify-between  w-full gap-x-2 gap-y-2'>
              <dt
                style={{
                  background: `linear-gradient(to right, transparent 0%, transparent 0%, #2c99bb -10%, transparent 80%,     transparent 100%)`
                }}
                className='text-[15px] '
              >
                <strong>{t('phone')}</strong>
              </dt>
              <dd>+595975641525</dd>
            </div>
            <span className='hidden 2xl:flex gradient-line-span  w-[100%] flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]'></span>
          </div>

          <div className='flex flex-col text-start items-center justify-between  w-full max-w-[48%] gap-x-10 xl:max-w-[10rem] 2xl:max-w-[48%]'>
            <div className='flex flex-col 2xl:flex-row text-start 2xl:items-center justify-between  w-full gap-x-2 gap-y-2'>
              <dt
                style={{
                  background: `linear-gradient(to right, transparent 0%, transparent 0%, #2c99bb -10%, transparent 80%,     transparent 100%)`
                }}
                className='text-[15px] '
              >
                <strong>Email</strong>
              </dt>
              <dd>wgiufc@hotmail.com</dd>
            </div>
            <span className='hidden 2xl:flex gradient-line-span  w-[100%] flex-col items-center justify-center text-center h-[1px] my-2  rounded-[10%]'></span>
          </div>

          <div className='flex flex-col text-start items-center justify-between  w-full max-w-[48%] gap-x-10 xl:max-w-[10rem] 2xl:max-w-[48%]'>
            <div className='flex flex-col 2xl:flex-row text-start 2xl:items-center justify-between  w-full gap-x-2 gap-y-2'>
              <dt
                style={{
                  background: `linear-gradient(to right, transparent 0%, transparent 0%, #2c99bb -10%, transparent 80%,     transparent 100%)`
                }}
                className='text-[15px] '
              >
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
