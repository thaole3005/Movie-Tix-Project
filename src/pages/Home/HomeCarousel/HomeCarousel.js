import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Core modules imports are same as usual
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/autoplay/autoplay.scss'; // Pagination module
import SlideItem from './SlideItem';

export default function HomeCarousel() {

    const {arrBanner} = useSelector(state => state.QuanLyPhimReducer);
    // console.log("arrBanner", arrBanner)

    useEffect(() => {
        
    }, [])

    const renderBanner = () => {
      return arrBanner.map((detailMovieSlide, index) => {
        return <SwiperSlide key={index}>
          <SlideItem detailMovieSlide = {detailMovieSlide}/>
        </SwiperSlide>
      })
    }


    return (
        <div>
           <Swiper
           id ="homeCarousel"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      effect="slide"
    //   autoplay={{
    //     delay: 3000,
    // }}
    >

      {
        renderBanner()
      }
     
    </Swiper>
        </div>
    )
}
