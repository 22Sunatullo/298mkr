import styles from './AboutComplex.module.scss';

const AboutComplex = () => {
    return (
        <div className={styles.imageAbout}>
            <div >
                <img src="/assets/background/back2.png" alt="" />
            </div>
            <div className={styles.title}>
                <h1>О жилом комплексе</h1>
                <p>
                    ООО «Ахмаджон 2020» реализует строительство многофункционального жилого комплекса «298 mkr».
                </p>
                <p>
                    За годы работы компания заслужила репутацию профессионала и надежного партнера в сфере строительства и управления проектами любой сложности.
                </p>
                <p>
                    Комплекс строится с использованием новейших  технологий и будет построен из высококачественных энергосберегающих строительных материалов
                </p>
            </div>
        </div>
    )
}

export default AboutComplex