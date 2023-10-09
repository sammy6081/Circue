import { useEffect, useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

// Import images as modules 
import slide1 from '../assets/slide 1.png';
import slide2 from '../assets/slide 2.png';
import slide3 from '../assets/slide 3.png';

SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

function Slider() {
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

const slides = [
    {
        id: 1,
        title: 'Slide 1',
        image: slide1,
    },
    {
        id: 2,
        title: 'Slide 2',
        image: slide2,
    },
    {
        id: 3,
        title: 'Slide 3',
        image: slide3,
    },
];

  const handleSwiper = (swiper) => {
    // Assign the Swiper instance to the ref
    swiperRef.current = swiper;
  };

  return (
    <div className="swiper-container swiper-height">
        <Swiper
            onSwiper={handleSwiper}
            pagination={{clickable: true,}}
            className="mySwiper"
            modules={[Pagination, EffectCoverflow, Autoplay]}
            loop={true}
            autoHeight={true}
            autoplay={{ delay: 9000,
            disableOnInteraction: false,}}
            speed={1500}
        >
        {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
                <div className="swiper-slide">
                <img src={slide.image} alt={slide.title} />
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
