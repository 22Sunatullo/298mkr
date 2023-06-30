import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { DataGalery } from "./GalleryData";

import styles from './Gallery.module.scss'

export const Gallery = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Галерея</h1>
            </div>


            <div className={styles.gallery}>
                <Swiper
                spaceBetween={15}
                slidesPerView={1}
                breakpoints={{
                    "@0.48": {
                      slidesPerView: 1.2,
                    },
                    "@1 .48": {
                      slidesPerView: 2.1,
                    },
                  }}
                loop = {true}
                >
                    {
                        DataGalery.map(el => {
                            return <SwiperSlide key={el.id}>
                                <img src={el.img} alt="galery" />
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}
