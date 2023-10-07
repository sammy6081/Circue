// import { useEffect, useRef } from 'react';
// import SwiperCore from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-fade';

// SwiperCore.use([EffectFade, Autoplay]);

// function LoginForm() {
//   // Use useRef hook to store the Swiper instance
//   const swiperRef = useRef(null);

//   // Use useEffect hook to call handleNextSlide function after component mounts
//   useEffect(() => {
//     handleNextSlide();
//   }, []);

//   const handleNextSlide = () => {
//     // Access the Swiper instance from the ref
//     const swiper = swiperRef.current;
//     if (swiper) {
//       swiper.slideNext();
//     }
//   };

//   const details = [
//     {
//       id: 1,
//       title: 'Explore New Sights',
//       desc: 'Traveling is all about experiencing new things and discovering the world around you. Discover new sights and attractions that you may have otherwise missed',
//     },
//     {
//       id: 2,
//       title: 'Migrate With Ease',
//       desc: 'Say goodbye to the hassle of indecisions with your travel plans. Say hello to a streamlined travel experience with Circue',
//     },
//     {
//       id: 3,
//       title: 'Let the locals show you around',
//       desc: 'With our app you can let the locals show you around and make the most of your travel experience. Explore your destination like a local',
//     },
//   ];

//   const handleSwiper = (swiper) => {
//     // Assign the Swiper instance to the ref
//     swiperRef.current = swiper;
//   };

//   return (
//     <div className='w-auto md:w-100 lg:h-screen md:h-96 fixed lg:right-0 bottom-0 flex justify-between flex-col gap-8 opacity-95 font-lato text-center rounded-xl'>
//         <div className="swiper-container">
//         <Swiper
//             onSwiper={handleSwiper}
//             pagination={{clickable: true,}}
//             className="mySwiper"
//             spaceBetween={30}
//             effect={'fade'}
//             modules={[ EffectFade, Autoplay]}
//             loop={true}
//             autoplay={{ delay: 9000,
//             disableOnInteraction: false,}}
//             speed={2000}
//         >
//         {details.map((detail) => (
//                 <SwiperSlide key={detail.id}>
//                 <h1 className="text-3xl text-circue-dark-1 mb-8 bg-white">{detail. title}</h1>
//                 <p className='text-3xl text-circue-grey-2 bg-white'>{detail.desc}</p>
//                 </SwiperSlide>
//             ))}
//       </Swiper>
      
//     </div>
//     <div>
//             <div className="bg-gradient-to-br from-circue-pink to-circue-blue rounded-2xl p-1 ">
//             <button className="text-black/60 shadow-inner capitalize w-full py-3 px-12 rounded-2xl outline-none border-none bg-white">
//                 log in
//             </button>
//             </div>
//             <button className="text-white shadow-inner capitalize w-full py-3 px-12 rounded-2xl outline-none bg-gradient-to-br from-circue-pink to-circue-blue">
//                 join us
//             </button>
//         </div>
//     </div>
//   );
// }

// export default LoginForm;
