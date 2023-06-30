import style from './GeneralCard.module.scss';

interface TypeGeneral {
    img: string,
    title: string
}

export const GeneralCard = ({img, title}:TypeGeneral) => {
  return (
    <div>
        <div className={style.container}>
            <img src={img} alt="" />
        </div>
        <p>{title}</p>
    </div>
  )
}
