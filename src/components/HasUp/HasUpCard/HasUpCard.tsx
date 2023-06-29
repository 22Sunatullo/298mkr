import style from './HasUpCard.module.scss'

interface TypeCard {
  titleNumber: string,
  title: string
}


export const HasUpCard = ({ titleNumber, title }: TypeCard) => {
  return (
    <div className={style.cardStyle}>
      <h1>{titleNumber}</h1>
      <p>{title}</p>
    </div>
  )
}
