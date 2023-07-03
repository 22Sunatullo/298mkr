import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { GeneralCard } from "./GeneralCard/GeneralCard"
import { DataGeneral } from "./GeneralLoyautData"
import styles from './GeneralLoyaut.module.scss'

const GeneralLoyaut = () => {
  return (
    <div className={styles.container} id="general">
      <div className={styles.title}>
        <h1>Общая планировка</h1>
      </div>
      <div className="">
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          breakpoints={{
            "@0.48": {
              slidesPerView: 1.2,
            },
            "@1 .48": {
              slidesPerView: 3.2,
            },
          }}
        >
          {
            DataGeneral.map(el => {
              return <SwiperSlide key={el.id}><GeneralCard  {...el} /></SwiperSlide>
            })
          }
        </Swiper>
      </div>
    </div>
  )
}

export default GeneralLoyaut