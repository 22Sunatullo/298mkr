import React from 'react'
import { useState } from "react";
import style from './Header.module.scss';

const Header = () => {
    const [nav, setNav] = useState(false)
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className="logo">
                    <img src="/assets/logo/logo298.svg" alt="" />
                </div>
                <div className={
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
                </div>
            </div>
            <button onClick={() => setNav(!nav)} className={style.burger}>
                   <img src={`/assets/logo/${nav? 'X' : 'menu' }.svg`} alt="menu" />
            </button>
        </header>
    )
}

export default Header
