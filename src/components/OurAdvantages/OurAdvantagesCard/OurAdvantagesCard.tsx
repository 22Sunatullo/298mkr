import style from './OurAdvantagesCard.module.scss';

interface TypeOur  {
    img: string,
    title: string
}

const OurAdvantagesCard = ({img, title}:TypeOur) => {
  return (
    <div className={style.ourCard}>
        <img src={img} alt="" />
        <p>{title}</p>
    </div>
  )
}

export default OurAdvantagesCard