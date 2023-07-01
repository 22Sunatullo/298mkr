import styles from './StagesOfConstruction.module.scss';


export const StagesOfConstruction = () => {
  return (


    <div>
      <div className={styles.title}>
        <h1>Этапы строительства</h1>
      </div>


      <div className={styles.btnContainer}>
        <button>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6666 6L7.99992 10.6667L3.33325 6" stroke="#262626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          2023
        </button>
        <button>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6666 6L7.99992 10.6667L3.33325 6" stroke="#262626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          2023
        </button>
      </div>

      <div className={styles.imageContainer}>
        <img src="/assets/stages/1.png" alt="stages" />
        <img src="/assets/stages/2.png" alt="stages" />
        <img src="/assets/stages/3.png" alt="stages" />
      </div>
    </div>
  )
}
