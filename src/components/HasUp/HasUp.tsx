import style from './HasUp.module.scss'
import { HasUpCard } from './HasUpCard/HasUpCard'
import { DataHas } from './HasUpData'

export const HasUp = () => {
  return (
    <div className={style.backgroundCard}>
    <div className={style.center1}>
      <div className={style.center}>
        {
          DataHas.map(el => <HasUpCard key={el.id} {...el} />)
        }
      </div>
    </div>
  </div>
  )
}
