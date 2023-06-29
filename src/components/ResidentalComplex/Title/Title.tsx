import style from './Title.module.scss'

const Title = () => {
    return (
        <div className={style.container1}>
            <h1>
                Жилой
                комплекс 298 МКР
            </h1>
            <p>Приобретите квартиру своей мечты в одном из лучших районов Душанбе, по привлекательной цене.</p>
            <button>Заказать</button>
        </div>
    )
}

export default Title