import { useState } from 'react'
import WorksModal from './worksAssests/WorksModal'
import ImageLoader from '../../utils/ImageLoader'
import { useTranslation } from 'react-i18next'
import Modal from '../../utils/Modal'
import { ViewOptionsType } from '../../globalTypes/globalTypes'
import { TYPE_VIEW_OPTIONS } from '../../globalVariables/globalVariables'
import { FaBriefcase } from 'react-icons/fa'

const worksData = [
  {
    link: 'fakelink.com',
    date: 'February 2025 - April 2025',
    color: 'rgba(110, 110, 110)',
    miniature:
      'https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbook%20(6)4234.png?alt=media&token=2be60ac3-d1f4-4b1b-81d6-60a15cd6b592',
    title: 'Translator Desktop APP',
    company: 'Personal Project',
    value: 'translator_APP',
    miniDescription: 'up.',
    id: 0
  },
  {
    link: 'fakelink.com',
    miniature:
      'https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbook%20(2)%20(1).png?alt=media&token=ddfd7e0c-f26e-450e-bef5-e3abc2e475bb',
    date: 'April 2023 - Oct 2024',
    color: 'rgba(11, 57, 65)',
    title: 'Trade Social Network',
    value: 'wallStIntel',
    miniDescription:
      'Development of a Single Page Application (SPA) for web-based trading, utilizing React library.',
    id: 1,
    company: 'Wall St Intel'
  },
  {
    link: 'fakelink.com',
    date: 'April 2023 - May 2023',
    color: 'rgba(36, 68, 89)',
    miniature:
      'https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FSin_titulo%20(1)%20(1).png?alt=media&token=f6b6bb5c-c383-4dda-8fae-1dfdb41b2094',
    company: 'Brunson Insurance',
    title: 'Dashboard',
    value: 'brunsonInsurance',
    miniDescription: 'up',
    id: 2
  },
  {
    link: 'fakelink.com',
    date: 'April 2023 - May 2023',
    miniature:
      'https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbook%20(6).png?alt=media&token=c7396ddf-f26e-4341-8f51-e086fc1c5c6d',
    title: 'Landing Page / Booking system',
    company: 'La Carreta Posada',
    color: 'rgba(186, 146, 152)',
    value: 'laCarretaPosada',
    miniDescription: 'up.',
    id: 3
  },
  {
    link: 'fakelink.com',
    date: 'April 2023 - May 2023',
    color: 'rgba(59, 35, 42)',
    miniature:
      'https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FMacbookasd.png?alt=media&token=e395e075-9875-47af-8a7b-6e70754aa812',
    title: 'ClockIA APP',
    company: 'Personal Project',
    value: 'clockIA_APP',
    miniDescription: 'up.',
    id: 4
  }
]

interface WorksTypeProps {
  type?: ViewOptionsType
}
const Works = ({ type = 'normalView' }: WorksTypeProps) => {
  const { t } = useTranslation(['works'])
  const [modalSwitch, setModalSwitch] = useState<boolean>(false)
  const [currentWork, setCurrentWork] = useState<string>('')
  const [currentColor, setCurrentColor] = useState<string>('')
  const [hovered, setHovered] = useState<number | null>(null)

  const handleHover = (hoveredIndex: number) => {
    setHovered(hoveredIndex)
  }

  const handleLeave = () => {
    setHovered(null)
  }

  const handleOpenModalClick = (workName: string, color: string) => {
    setCurrentWork(workName)
    setCurrentColor(color)
    setModalSwitch(true)
  }
  return (
    <div
      className={`flex flex-col  text-start items-center justify-center text-black dark:text-white overflow-hidden w-full isolate select-none ${
        type === TYPE_VIEW_OPTIONS.normalView
          ? 'smd:h-screen md:h-full  py-0 pt-3 lg:pt-0'
          : 'pt-4 fh:rounded-xl fh:px-2'
      } `}
      style={
        type !== TYPE_VIEW_OPTIONS.normalView
          ? {
              boxShadow: 'inset 5px 10px 20px #0000008c'
            }
          : {}
      }
    >
      <article
        className={`w-full h-full flex flex-col text-start  items-start justify-start   ${
          type === TYPE_VIEW_OPTIONS.normalView
            ? 'max-h-[95%] overflow-y-scroll pb-10 no-scrollbar'
            : ''
        }`}
      >
        <div className='flex flex-col w-full h-fit'>
          <header
            className={`flex  flex-col w-full h-fit  px-4  pt-2 ${
              type === TYPE_VIEW_OPTIONS.normalView
                ? 'border-b border-primaryBorderColor dark:border-secondaryBorderColor pb-4'
                : 'pb-1'
            }`}
          >
            <h2
              className='gradient-title-line m-0 text-[25px] font-bold flex flex-row gap-2'
              style={{
                textShadow: '-2px 5px 4px #0000008c'
              }}
            >
              {type !== TYPE_VIEW_OPTIONS.normalView ? (
                <FaBriefcase className='w-6 h-6 dark:text-white ' />
              ) : (
                <></>
              )}
              {t('works')}
            </h2>
          </header>
        </div>

        <div
          className={`relative  w-full text-start   justify-start p-4  ${
            type === TYPE_VIEW_OPTIONS.normalView
              ? ' flex flex-col sm:grid grid-cols-2 gap-8 items-center'
              : 'grid grid-cols-1 fh:grid-cols-2 smd:flex smd:flex-row gap-4 items-start'
          }`}
        >
          {worksData?.map((item, index) => (
            <button
              key={item.id}
              className={`z-40 transition duration-500  flex flex-col w-full  text-start items-center justify-start relative   rounded-md  h-full    overflow-hidden ${
                type === TYPE_VIEW_OPTIONS.normalView ? 'gap-y-0 border border-secondaryBorderColor' : 'gap-y-0'
              }`}
              onMouseEnter={() => handleHover(Number(index))}
              onMouseLeave={handleLeave}
              type='button'
              onClick={() => handleOpenModalClick(item.value, item.color)}
              value={item.value}
              style={ type !== TYPE_VIEW_OPTIONS.normalView ? {
                boxShadow: '5px 10px 20px #0000008c'
              } : {}}
            >
              <div
                draggable='false'
                className={`object-contain h-auto w-full transition duration-500 ${
                  hovered === index ? 'scale-105' : ''
                }`}
              >
                <ImageLoader
                  src={item.miniature}
                  alt={`${item.title} miniature`}
                />
              </div>
              <strong
                className={`w-full h-full items-center justify-center flex text-center transition duration-500 px-2 pt-6 pb-4 ${
                  hovered === index
                    ? 'dark:text-zinc-400 bg-opacity-[15%] dark:bg-opacity-[40%]  bg-[#1e2122]'
                    : 'bg-opacity-[0%]'
                }`}
                style={{
                  textShadow: '-2px 5px 4px #0000008c'
                }}
              >
                {item.title}
              </strong>
            </button>
          ))}

          {type === TYPE_VIEW_OPTIONS.normalView ? (
            <span className='hidden vertical-gradient-line absolute top-0 left-[50%] h-[100%] w-[1px] sm:flex flex-col items-center justify-center text-center rounded-[10%]'></span>
          ) : (
            <></>
          )}
        </div>
        <div className='flex flex-col w-full text-start items-center justify-start'>
          <Modal
            color={currentColor}
            isOpen={modalSwitch}
            onClose={setModalSwitch}
            Content={<WorksModal workName={currentWork} />}
          />
        </div>
      </article>
    </div>
  )
}
export default Works
