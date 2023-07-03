import styles from './StagesOfConstruction.module.scss';


export const StagesOfConstruction = () => {
  return (


    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Этапы строительства</h1>
      </div>


      <div className={styles.btnContainer}>
        <div className={styles.select}>
          <select name="" id="">
            <option value="">2023</option>
            <option value="">2024</option>
            <option value="">2025</option>
          </select>
        </div>

        <div className={styles.select}>
          <select name="" id="">
            <option value="">Январь</option>
          </select>
        </div>

      </div>

      <div className={styles.imageContainer}>
        <img src="/assets/stages/1.png" alt="stages" />
        <img src="/assets/stages/2.png" alt="stages" />
        <img src="/assets/stages/3.png" alt="stages" />
      </div>
    </div>
  )
}
