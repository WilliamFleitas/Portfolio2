import { useTranslation } from 'react-i18next'
import { RiReactjsFill } from 'react-icons/ri'
import { SiNodedotjs } from 'react-icons/si'
import { ViewOptionsType } from '../../../globalTypes/globalTypes'
import { TYPE_VIEW_OPTIONS } from '../../../globalVariables/globalVariables'
import { useKeenSlider } from 'keen-slider/react'
import { FaTools } from "react-icons/fa";
import 'keen-slider/keen-slider.min.css'

interface MyServicesTypeProps {
  type?: ViewOptionsType
}
const MyServices = ({ type = 'normalView' }: MyServicesTypeProps) => {
  const { t } = useTranslation(['aboutMe'])

  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 20
      }
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout () {
          clearTimeout(timeout)
        }
        function nextTimeout () {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider?.next()
          }, 4000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <section className={`flex flex-col w-full  text-start  items-center justify-between ${type === TYPE_VIEW_OPTIONS.normalView ? "h-full":" h-fit"}`}>
      <header className={`flex flex-col w-full h-fit   ${type === TYPE_VIEW_OPTIONS.normalView ? "p-4 border-b border-primaryMainColor":""}`}>
        <h3 className='gradient-title-line p-0 m-0 text-[25px] font-bold flex flex-row gap-2 items-center'>
        {
          type !== TYPE_VIEW_OPTIONS.normalView ?
          <FaTools className='w-6 h-6 dark:text-white ' /> : <></>
        }
        <span className=' '>{t('myServices')}</span>
        </h3>
      </header>
      <div
        ref={ref}
        className={`${
          type === TYPE_VIEW_OPTIONS.normalView
            ? 'flex flex-col sm:grid  sm:grid-cols-2 w-full h-full  px-4  text-start '
            : 'keen-slider flex flex-row w-full h-fit overflow-hidden'
        }  items-start justify-start`}
      >
        <div
          className={`${
            type === TYPE_VIEW_OPTIONS.normalView
              ? 'col-span-2 border-b border-[#4b4a4b] py-4  justify-center'
              : 'keen-slider__slide number-slide1 pt-4 justify-start '
          }  text-start items-start w-full h-full  px-0  flex flex-col`}
        >
          <div className={`flex flex-row w-full h-fit text-start items-center justify-start gap-4`}>
            <div className='w-14 p-2 h-14 border-2 border-primaryButtonColor flex  gradient-line   rounded-full flex-col text-start items-center justify-center'>
              <span className='font-bold dark:text-primaryButtonColor '>
                100%
              </span>
            </div>
            <label className='font-bold '>Full Stack Web Developer</label>
          </div>

          <p className={` w-full m-0 ${type === TYPE_VIEW_OPTIONS.normalView ? " px-4 py-2":" px-2 pt-2"} `}>{t('fullStack')}</p>
        </div>

        <div
          className={`${
            type === TYPE_VIEW_OPTIONS.normalView
              ? 'py-4 pr-4 justify-center'
              : 'keen-slider__slide number-slide2 pt-4 justify-start'
          } flex flex-col text-start items-start  w-full h-fit  gap-1 `}
        >
          <div className='flex flex-row w-full h-fit text-start items-center justify-start gap-4'>
            <div className='w-14 p-2 h-14 border-2 border-primaryButtonColor flex  gradient-line   rounded-full flex-col text-start items-center justify-center'>
              <RiReactjsFill className='w-10 h-10 dark:text-primaryButtonColor ' />
            </div>
            <label className='font-bold '>Frontend</label>
          </div>

          <p className={` w-full m-0 ${type === TYPE_VIEW_OPTIONS.normalView ? " px-4 py-2":" px-2 pt-2 h-fit"} `}>{t('frontend')}</p>
        </div>

        <div
          className={`${
            type === TYPE_VIEW_OPTIONS.normalView
              ? 'sm:p-4 py-4 justify-center border-t border-[#4b4a4b] sm:border-0  '
              : 'keen-slider__slide number-slide3 pt-4 justify-start'
          } relative flex flex-col text-start items-start  w-full h-fit   `}
        >
          <div className='flex flex-row w-full h-fit text-start items-center justify-start gap-4'>
            <div className='w-14 p-2 h-14 border-2 border-primaryButtonColor flex  gradient-line   rounded-full flex-col text-start items-center justify-center'>
              <SiNodedotjs className='w-10 h-10 dark:text-primaryButtonColor ' />
            </div>
            <label className='font-bold'>Backend</label>
          </div>

          <p className={` w-full m-0 ${type === TYPE_VIEW_OPTIONS.normalView ? " px-4 py-2":" px-2 pt-2"} `}>{t('backend')}</p>
          {type === TYPE_VIEW_OPTIONS.normalView ? (
            <span className='hidden  bg-gradient-custom absolute top-0 left-0 h-[100%] w-[1px] sm:flex flex-col items-center justify-center text-center rounded-[10%]'></span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  )
}

export default MyServices
