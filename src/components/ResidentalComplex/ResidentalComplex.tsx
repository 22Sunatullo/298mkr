import Title from './Title/Title'
import { Wrapper } from '../Wrapper/Wraper'
import Background from './Background/Background'

import style from './ResidentalComplex.module.scss'

const ResidentalComplex = () => {
  return (

    <div className={style.container}>
        <Title />
      <Background />
    </div>

  )
}

export default ResidentalComplex