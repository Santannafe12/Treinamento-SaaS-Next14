'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { A11y, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { useRef } from 'react';
import { CategoriesCard } from './categories-card';
import { ProductsProps } from '@/types/products';

export const CategoriesCarousel = ({ products, title }: ProductsProps & { title: string }) => {

    const swiperRef = useRef<SwiperType>();

    return (
        <div>
            <h1 className='text-center text-3xl font-extrabold mb-4'>{title}</h1>

            <div className='w-11/12 m-auto flex items-center py-4'>
                <div className='mr-6'>
                    <button className='text-3xl' onClick={() => swiperRef.current?.slidePrev()}>
                        <svg className='hover:scale-105 transition-all' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                    </button>
                </div>
                <Swiper
                    modules={[A11y, Navigation]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={20}

                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        }
                    }}
                >

                    {products.map((item, index) => (
                        <SwiperSlide key={index} className="mb-1 rounded-xl shadow-lg flex flex-col justify-between">
                            <CategoriesCard/>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className='ml-6'>
                    <button className='text-3xl ' onClick={() => swiperRef.current?.slideNext()}>
                        <svg className='hover:scale-105 transition-all' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}