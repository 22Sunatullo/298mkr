import styles from './Footter.module.scss';


export const Footter = () => {
  return (
    <footer className={styles.footer}>


        <div className={styles.containerFooter}>
            <div className={styles.title}>
                <h1>Готовы приобрести квартиру своей мечты</h1>
                <p>Оставьте нам свои контакты и мы свяжемся с вами в ближайшее время</p>
            </div>


            <div className={styles.FormContainer}>
                <form action="" className={styles.Form}>
                    <input type="text" placeholder="Имя" className={styles.input}/>
                    <input type="tel" placeholder="Номер телефона" className={styles.input}/>
                    <button className={styles.button}>Отправить</button>
                </form>
            </div>

            <div className={styles.line}></div>

            <div className={styles.contacts}>
                <div className="iconsFoot">
                    <img src="/assets/logo/logo298White.svg" alt="logo298.svg" />
                </div>

                <div className={styles.linkContact}>
                    <div className={styles.numberTelefon}>
                    <h5 className={styles.nameContact}>Контакты</h5>
                    <a href="tel: +992 444 298 298">+992 444 298 298</a>
                    </div>

                    <div className={styles.socialNetwork}>
                        <h5 className={styles.nameContact}>Соц-сети</h5>
                        <div className="icons">
                            <img src="/assets/logo/instagram.svg" alt="" />
                            <img src="/assets/logo/facebook.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </footer>
  )
}
