import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventItem from './EventItem/EventItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import './Events.css'

export default function Events() {
  return (
    <>
      <div className='events'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination,]}
          slidesPerView={2}
          spaceBetween={16}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide className='event-slide'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              loop={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <EventItem></EventItem>
              </SwiperSlide>
              <SwiperSlide>
                <EventItem></EventItem>
              </SwiperSlide>
              <SwiperSlide>
                <EventItem></EventItem>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide className='event-slide'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              loop={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <EventItem></EventItem>
              </SwiperSlide>
              <SwiperSlide>
                <EventItem></EventItem>
              </SwiperSlide>
              <SwiperSlide>
                <EventItem></EventItem>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}