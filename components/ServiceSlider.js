// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import {FreeMode, Pagination} from 'swiper';


// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Crafting a unique business identity through a memorable logo and messaging.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Combining aesthetics and functionality for an engaging digital experience.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Bringing a website to life through coding for a smooth user experience.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Creating compelling content to drive engagement and conversions.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Enhancing website visibility on search engines for increased organic traffic/ranking.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode,Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item,index) => {
          return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
          );
        })
      }
      ServiceSlider
    </Swiper>
  );
};

export default ServiceSlider;
