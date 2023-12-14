// data
const workSlides = {
  slides: [
    {
      images: [
        {
          href: 'https://reactgym-68085.web.app/',
          title: 'title',
          path: '/img_gym2.png',
        },
        {
          href: 'https://michalfront.github.io/Gas2023',
          title: 'title',
          path: '/img_gas.png',
        },
        {
          href: 'https://michalfront.github.io/retro-snake/',
          title: 'title',
          path: '/img_snake1.png',
        },
        {
          href: 'https://michalfront.github.io/CV/',
          title: 'title',
          path: '/img_portfolioold.png',
        },
      ],
    },
    {
      images: [
        {
          href: 'https://michalfront.github.io/TicTacToe/',
          title: 'title',
          path: '/img_tictactoe.png',
        },
        {
          href: 'https://michalfront.github.io/BMI_Calculator/',
          title: 'title',
          path: '/img_bmi.png',
        },
        // {
        //   title: 'title',
        //   path: '/thumb2.jpg',
        // },
        // {
        //   title: 'title',
        //   path: '/thumb3.jpg',
        // },
      ],
    },
  ],
};

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination} from 'swiper';

// icons
import {BsArrowRight} from 'react-icons/bs'
// next img
import Image from 'next/image';


const openWebpage = (href) => {
  window.open(href, '_blank'); // This opens the link in a new tab/window
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {
        workSlides.slides.map((slide,index) => {
          return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                  onClick={() => openWebpage(image.href)}
                  key={index}
                  className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt=''/>
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part1 */}
                          <div className='delay-100'>LIVE</div>
                          {/* title part2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
          );
        })
      }
      ServiceSlider
    </Swiper>
  );
};

export default WorkSlider;
