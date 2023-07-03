import { ApartamentsData } from "./ApartmentsData"
import styles from "./Apartments.module.scss"

export const Apartments = () => {
    return (
        <div className={styles.container} id="apartments">


            <div className={styles.containerTitle}>
                <div className={styles.title}>
                    <h1>Квартиры</h1>
                </div>


                <div className={styles.table}>
                    <button className={styles.btn} >1-комнатные</button>
                    <button className={styles.btn} >2-комнатные</button>
                    <button className={styles.btn} >3-комнатные</button>
                </div>

                <div className={styles.mobileTable}>
                    <select name="" id="">
                        <option value="">1-комнатные</option>
                        <option value="">2-комнатные</option>
                        <option value="">3-комнатные</option>
                    </select>
                </div>
            </div>
            <div className={styles.apartmentsContainer}>
                {
                    ApartamentsData.map(el => {
                        return <div key={el.id} className={styles.apartments}><img src={el.img} alt="" /></div>
                    })
                }
            </div>
        </div>
    )
}
