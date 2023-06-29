import React from 'react'
import { useState } from "react";
import style from './Header.module.scss';

const Header = () => {
    const [nav, setNav] = useState(false)
    return (
        <header className={style.header}>
            <nav className={style.container}>
                <nav className="logo">
                    <img src="/assets/logo/logo298.svg" alt="" />
                </nav>
                <nav className={
            nav ? [style.btnOver, style.active].join('') : [style.btnOver, ''].join('')
          }>
                    <nav className={style.navigation}>
                        <ul>
                            <li><a href="#">Наши преимущества</a></li>
                            <li><a href="#">Общая планировка</a></li>
                            <li><a href="#">Квартиры</a></li>
                            <li><a href="#">Галерея</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                </nav>
            </nav>
            <nav onClick={() => setNav(!nav)} className={style.burger}>
                    {nav ? (
                        <button>
                            <img src="/assets/logo/X.svg" alt="menu" />
                        </button>
                    ) : (
                        <button>
                            <img src="/assets/logo/menu.svg" alt="22" />
                        </button>
                    )}
                </nav>
        </header>
    )
}

export default Header
