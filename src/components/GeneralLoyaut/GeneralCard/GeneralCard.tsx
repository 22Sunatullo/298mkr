import styles from './GeneralCard.module.scss';

interface TypeGeneral {
    img: string,
    title: string
}

export const GeneralCard = ({img, title}:TypeGeneral) => {
  return (
    <div >
        <div className={styles.container}>
            <img src={img} alt="" />
        </div>
        <p className={styles.title}>{title}</p>
    </div>
  )
}
