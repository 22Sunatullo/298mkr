import { ApartamentTable, Apartaments } from "./ApartmentsData"
import styles from "./Apartments.module.scss"

export const Apartments = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Квартиры</h1>
            </div>
            <div className={styles.table}>
                {
                    ApartamentTable.map(el => {
                        return <button className={styles.btn} key={el.id}>{el.title}</button>
                    })
                }
            </div>
            <div className={styles.apartmentsContainer}>
                {
                    Apartaments.map(el => {
                        return <div key={el.id} className={styles.apartments}><img src={el.img} alt="" /></div>
                    })
                }
            </div>
        </div>
    )
}
