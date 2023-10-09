import { useEffect, useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';

SwiperCore.use([EffectCoverflow, Autoplay]);

function LoginForm() {
  // Use useRef hook to store the Swiper instance
  const swiperRef = useRef(null);

  // Use useEffect hook to call handleNextSlide function after component mounts
  useEffect(() => {
    handleNextSlide();
  }, []);

  const handleNextSlide = () => {
    // Access the Swiper instance from the ref
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.slideNext();
    }
  };

  const details = [
    {
      id: 1,
      title: 'Migrate With Ease',
      desc: 'Say goodbye to the hassle of indecisions with your travel plans. Say hello to a streamlined travel experience with Circue',
    },
    {
      id: 2,
      title: 'Explore New Sights',
      desc: 'Traveling is all about experiencing new things and discovering the world around you. Discover new sights and attractions that you may have otherwise missed',
    },
    {
      id: 3,
      title: 'Let the locals show you around',
      desc: 'With our app you can let the locals show you around and make the most of your travel experience. Explore your destination like a local',
    },
  ];

  const handleSwiper = (swiper) => {
    // Assign the Swiper instance to the ref
    swiperRef.current = swiper;
  };

  return (
    <div className='w-full lg:w-1/3 lg:h-screen md:h-96 lg:fixed lg:right-0 lg:inset-y-0 flex justify-center  flex-col py-8 px-8 gap-8 bg-white opacity-95 font-lato text-center lg:text-start rounded-xl absolute z-10 h-100'>
      <div className="swiper-container">
        <Swiper
          onSwiper={handleSwiper}
          className="mySwiper"
          modules={[ EffectCoverflow, Autoplay]}
          loop={true}
          autoplay={{ delay: 9000,
          disableOnInteraction: false,}}
          speed={1500}
        >
          {details.map((detail) => (
            <SwiperSlide className='' key={detail.id}>
              <h1 className="text-4xl font-black text-circue-dark-1 bg-white">{detail. title}</h1>
              <p className='text-lg md:text-2xl lg:text-3xl text-circue-grey-2 mt-10 bg-white '>{detail.desc}</p>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
    <div className='flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-80 lg:w-4/5 lg:gap-8 gap-2 text-base lg:text-2xl'>
            <div className="bg-gradient-to-br from-circue-pink to-circue-blue rounded-2xl p-1 w-full">
              <button className="text-black/60 font-extrabold capitalize py-3 px-12 rounded-2xl outline-none border-none bg-white w-full">
                log in
              </button>
            </div>
            <button className="text-white capitalize py-3 px-12 rounded-2xl outline-none bg-gradient-to-br from-circue-pink to-circue-blue w-full">
              join us
            </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
