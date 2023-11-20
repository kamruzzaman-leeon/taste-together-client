import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';

import { useEffect, useState } from 'react';

import axios from 'axios';
import { Button } from 'flowbite-react';

const Banner = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/banner')
      .then(res => setData(res.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='container mx-auto'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{clickable:true}}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 30,
          shadowScale: 0.7,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {data &&
          data.length &&
          data.map((slide) => (
            <SwiperSlide key={slide._id}>
              <div className='w-full h-1/2'>
                <img src={slide.image} alt="slide" className=' object-cover' />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* pagination component (if needed) */}
    </div>
  );
};

export default Banner;
