import styles from './Infrastructure.module.scss'

export const Infrastructure = () => {
    return (
        // //
        <div className={styles.container}>
                <div className={styles.item1}>
                    <img src="/assets/infrastructure/1.png" alt="" />
                    <p>ВИТРАЖНЫЕ АЛЮМИНИЕВЫЕ ОКНА</p>
                </div>
                <div className={styles.item2}>
                    <img src="/assets/infrastructure/2.png" alt="" />
                    <p>5 БОЛЬШИХ ДЕТСКИХ ПЛОЩАДОК </p>
                </div>
                <div className={styles.item3}>
                    <img src="/assets/infrastructure/6.png" alt="" />
                    <p>БОЛЬШОЙ ТОРГОВЫЙ ЦЕНТР В ЖК</p>
                </div>
                <div className={styles.item4}>
                    <img src="/assets/infrastructure/3.png" alt="" />
                    <p>РАЗВИТАЯ ИНФРАСТРУКТУРА</p>
                </div>
                <div className={styles.item5}>
                    <img src="/assets/infrastructure/5.png" alt="" />
                </div>
                <div className={styles.item6}>
                    <img src="/assets/infrastructure/4.png" alt="" />
                </div>
                <div className={styles.item7}>
                    <img src="/assets/infrastructure/7.png" alt="" />
                </div>
        </div>
    )
}