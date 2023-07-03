import styles from './ByDeveloped.module.scss'

export const ByDeveloped = () => {
  return (
    <div className={styles.container}>
        <div className={styles.developed}>
            <h4>Copyright @ 2023 <span className={styles.yelow}>298mkr</span>, All Right Reserved</h4>
            <a href='https://bobo.tj/' target="_blank">DEVELOPED BY <span className={styles.red}> BO</span>/BO</a>
        </div>
    </div>
  )
}
