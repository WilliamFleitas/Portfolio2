import { useTranslation } from 'react-i18next'
import { Experience } from './Resume'
import Works from './Works'
import MyServices from './aboutMeAssests/MyServices'
import PortfoBackground from '../PortfoBackground'
import { GiSkills } from 'react-icons/gi'
import '../../index.css'

const skillsData = {
  languages: [
    {
      label: 'JavaScript',
      value: 60
    },
    {
      label: 'TypeScript',
      value: 60
    }
  ],
  technologies: {
    frontend: [
      {
        label: 'React',
        value: 60
      },
      {
        label: 'React Native',
        value: 40
      },
      {
        label: 'NextJs',
        value: 35
      },
      {
        label: 'Tailwind',
        value: 70
      },
      {
        label: 'Redux Toolkit',
        value: 70
      },
      {
        label: 'CSS',
        value: 50
      },
      {
        label: 'Tailwind CSS',
        value: 80
      },
      {
        label: 'HTML',
        value: 80
      }
    ],
    backend: [
      {
        label: 'Express',
        value: 45
      },
      {
        label: 'Node.js',
        value: 45
      },
      {
        label: 'MongoDB',
        value: 35
      },
      {
        label: 'Mongoose',
        value: 35
      },
      {
        label: 'Firebase',
        value: 35
      },
      {
        label: 'Postgresql',
        value: 40
      },
      {
        label: 'Sequelize',
        value: 40
      }
    ]
  }
}
const QuickView = () => {
  const { t, i18n } = useTranslation(['resume'])
  return (
    <div className='w-full h-full flex flex-col text-start items-start justify-start relative bg-white dark:bg-[#171616]'>
      <div className='flex flex-col text-start items-start justify-start   text-black dark:text-white overflow-scroll smd:overflow-hidden w-full h-full smd:h-screen shadow-md  isolate fh:p-5 gap-8 fh:gap-6 no-scrollbar z-50'>
        <div className='flex flex-col smd:grid smd:grid-cols-2 w-full h-fit text-start items-start justify-between gap-8 fh:gap-5  smd:overflow-hidden isolate rounded-xl z-20'>
          <div className='h-full w-full flex flex-col  smd:overflow-y-scroll smd:overflow-x-hidden no-scrollbar gap-y-8 fh:gap-y-5 relative isolate fh:border-b rounded-xl fh:border-primaryButtonColor'>
            <article className='w-full h-full  text-start items-center justify-start gap-y-5 flex flex-col  z-40 select-none bg-white dark:bg-[#121212f5] pt-8 fh:pt-4 pb-4 px-4 no-scrollbar border-y fh:border-x border-primaryButtonColor  fh:rounded-xl isolate mt-8 fh:mt-0'>
              <MyServices type='firstView' />
            </article>

            <article className='w-full h-full smd:h-fit  text-start items-start smd:items-center justify-start gap-y-5 flex flex-col  z-40 select-none bg-white dark:bg-[#121212f5] pt-4 pb-4 px-4 border-y fh:border-x border-primaryButtonColor  fh:rounded-xl isolate shadow-sm shadow-black'>
              <Experience type='firstView' />
            </article>
          </div>
          <div className='h-full w-full fh:rounded-xl smd:overfloy-y-scroll smd:overflow-x-hidden isolate no-scrollbar border-y fh:border-x border-primaryButtonColor '>
            <article className='w-full h-fit  text-start items-center justify-start gap-y-4 flex flex-col smd:flex-grow  z-40 select-none bg-white dark:bg-[#121212f5] pt-4 pb-6 smd:pb-2 px-4  smd:overflow-y-hidden overflow-x-hidden fh:rounded-xl isolate no-scrollbar '>
              <div className='flex flex-col w-full h-fit '>
                <header className='flex  flex-col w-full h-fit'>
                  <label className='flex flex-row text-start items-start justify-start  font-bold text-[25px] h-fit w-full gradient-title-line gap-1'>
                    <GiSkills className='w-6 h-6 dark:text-white ' />
                    <span className=' '>{t('skills')}</span>
                  </label>
                </header>
              </div>

              <div className='flex flex-col gap-8 text-start items-center justify-start w-full h-full smd:h-fit px-1 smd:pb-6'>
                <section className='flex flex-col w-full text-start items-center justify-start h-fit p-0 m-0 gap-y-4'>
                  <div className='w-full flex text-start'>
                    <strong className='m-0 text-[25px] font-bold'>
                      {t('languages')}
                    </strong>
                  </div>
                  <div className='grid grid-cols-2 w-full text-start items-center justify-between gap-y-4 gap-x-6'>
                    <small className='py-2 flex flex-grow text-center items-center justify-center border border-primaryMainColor  rounded-md font-bold'>
                      English(C1 Advanced)
                    </small>
                    <small className='py-2 flex flex-grow text-center items-center justify-center border border-primaryMainColor  rounded-md font-bold'>
                      Spanish(Native)
                    </small>
                    <small className='py-2 flex flex-grow text-center items-center justify-center border border-primaryMainColor  rounded-md font-bold'>
                      Guarani(Native)
                    </small>
                    <small className='py-2 flex flex-grow text-center items-center justify-center border border-primaryMainColor  rounded-md font-bold'>
                      Portuguese(Basic)
                    </small>
                  </div>
                </section>

                <section className='flex flex-col w-full text-start items-center justify-start h-fit p-0 m-0 gap-y-4'>
                  <div className='w-full flex text-start'>
                    <strong className='m-0 text-[25px] font-bold'>
                      {t('programmingLanguages')}
                    </strong>
                  </div>
                  <div className='grid grid-cols-1 fh:grid-cols-2 smd:flex smd:flex-col w-full text-start items-center justify-start gap-4'>
                    {skillsData.languages?.map((item, index) => (
                      <dl
                        className='flex flex-col smd:flex-row w-full text-start items-start smd:items-center justify-start  gap-2'
                        key={index}
                      >
                        <dt className='whitespace-nowrap flex flex-row text-start items-center justify-start gap-2 w-fit smd:min-w-[10rem]'>
                          <strong className='p-0 m-0 leading-none text-[1.1rem] '>
                            {item.label}
                          </strong>
                        </dt>
                        <dd className='w-full'>
                          <div
                            className={`w-full flex flex-row tex-start items-center justify-start border relative  ${
                              item.value < 45
                                ? 'border-[#5d0616]'
                                : item.value > 70
                                ? 'border-[#075456]'
                                : 'border-[#0a3611]'
                            } rounded-md overflow-hidden isolate`}
                          >
                            <div
                              className={`bg-gradient-to-r  h-5 text-end items-center jusstify-start flex ${
                                item.value < 45
                                  ? 'from-[#34050e] to-[#75081c]'
                                  : item.value > 70
                                  ? 'from-[#072e2f] to-[#075456]'
                                  : 'from-[#021d06] to-[#0a3611] '
                              }`}
                              style={{
                                width: `${Math.abs(item.value)}%`,
                                animation: `expandBar ${
                                  Math.abs(item.value) / 100
                                }s ease-in-out forwards`
                              }}
                            ></div>
                            <small className='p-0 m-0 leading-none text-[0.9rem] w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zinc-400'>{`${
                              item.value < 45
                                ? 'Beginner'
                                : item.value > 70
                                ? 'Advanced'
                                : 'Intermediate'
                            } (${item.value}%)`}</small>
                          </div>
                        </dd>
                      </dl>
                    ))}
                  </div>
                </section>
                <section className='flex flex-col w-full text-start items-center justify-start h-fit p-0 m-0 gap-y-4'>
                  <div className='w-full flex text-start'>
                    <strong className='m-0 text-[25px] font-bold'>
                      {i18n.language === 'en'
                        ? 'Frontend Technologies'
                        : 'Tecnologías Frontend'}
                    </strong>
                  </div>
                  <div className='grid grid-cols-1 fh:grid-cols-2 smd:flex smd:flex-col w-full text-start items-center justify-start gap-4'>
                    {skillsData.technologies.frontend?.map((item, index) => (
                      <dl
                        className='flex flex-col smd:flex-row w-full text-start items-start smd:items-center justify-start  gap-2'
                        key={index}
                      >
                        <dt className='whitespace-nowrap flex flex-row text-start items-center justify-start gap-2 w-fit smd:min-w-[10rem]'>
                          <strong className='p-0 m-0 leading-none text-[1.1rem] '>
                            {item.label}
                          </strong>
                        </dt>
                        <dd className='w-full'>
                          <div
                            className={`w-full flex flex-row tex-start items-center justify-start border relative  ${
                              item.value < 45
                                ? 'border-[#5d0616]'
                                : item.value > 70
                                ? 'border-[#075456]'
                                : 'border-[#0a3611]'
                            } rounded-md overflow-hidden isolate`}
                          >
                            <div
                              className={`bg-gradient-to-r  h-5 text-end items-center jusstify-start flex ${
                                item.value < 45
                                  ? 'from-[#34050e] to-[#75081c]'
                                  : item.value > 70
                                  ? 'from-[#072e2f] to-[#075456]'
                                  : 'from-[#021d06] to-[#0a3611] '
                              }`}
                              style={{
                                width: `${Math.abs(item.value)}%`,
                                animation: `expandBar ${
                                  Math.abs(item.value) / 100
                                }s ease-in-out forwards`
                              }}
                            ></div>
                            <small className='p-0 m-0 leading-none text-[0.9rem] w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zinc-400'>{`${
                              item.value < 45
                                ? 'Beginner'
                                : item.value > 70
                                ? 'Advanced'
                                : 'Intermediate'
                            } (${item.value}%)`}</small>
                          </div>
                        </dd>
                      </dl>
                    ))}
                  </div>
                </section>

                <section className='flex flex-col w-full text-start items-center justify-start h-fit p-0 m-0 gap-y-4'>
                  <div className='w-full flex text-start'>
                    <strong className='m-0 text-[25px] font-bold'>
                      {i18n.language === 'en'
                        ? 'Backend Technologies'
                        : 'Tecnologías Backend'}
                    </strong>
                  </div>
                  <div className='grid grid-cols-1 fh:grid-cols-2 smd:flex smd:flex-col w-full text-start items-center justify-start gap-4'>
                    {skillsData.technologies.backend?.map((item, index) => (
                      <dl
                        className='flex flex-col smd:flex-row w-full text-start items-start smd:items-center justify-start  gap-2'
                        key={index}
                      >
                        <dt className='whitespace-nowrap flex flex-row text-start items-center justify-start gap-2 w-fit smd:min-w-[10rem]'>
                          <strong className='p-0 m-0 leading-none text-[1.1rem] '>
                            {item.label}
                          </strong>
                        </dt>
                        <dd className='w-full'>
                          <div
                            className={`w-full flex flex-row tex-start items-center justify-start border relative  ${
                              item.value < 45
                                ? 'border-[#5d0616]'
                                : item.value > 70
                                ? 'border-[#075456]'
                                : 'border-[#0a3611]'
                            } rounded-md overflow-hidden isolate`}
                          >
                            <div
                              className={`bg-gradient-to-r  h-5 text-end items-center jusstify-start flex ${
                                item.value < 45
                                  ? 'from-[#34050e] to-[#75081c]'
                                  : item.value > 70
                                  ? 'from-[#072e2f] to-[#075456]'
                                  : 'from-[#021d06] to-[#0a3611] '
                              }`}
                              style={{
                                width: `${Math.abs(item.value)}%`,
                                animation: `expandBar ${
                                  Math.abs(item.value) / 100
                                }s ease-in-out forwards`
                              }}
                            ></div>
                            <small className='p-0 m-0 leading-none text-[0.9rem] w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zinc-400'>{`${
                              item.value < 45
                                ? 'Beginner'
                                : item.value > 70
                                ? 'Advanced'
                                : 'Intermediate'
                            } (${item.value}%)`}</small>
                          </div>
                        </dd>
                      </dl>
                    ))}
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
        <div className='flex flex-col items-center justify-end w-full h-fit mt-auto z-20 border-y fh:border-x border-primaryButtonColor fh:rounded-xl isolate shadow-sm shadow-black bg-white dark:bg-[#121212f5] mb-8 fh:mb-0'>
          <Works type='firstView' />
        </div>
      </div>
      <div className='absolute z-0 h-screen fh:h-full  top-0  w-full  flex'>
        <PortfoBackground />
      </div>
    </div>
  )
}
export default QuickView
