import React, { useState } from "react";
import style from './Header.module.scss';

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src="/assets/logo/logo298.svg" alt="" />
        </div>
        <button onClick={toggleNav} className={`${style.burger} ${navOpen ? style.active : ''}`}>
          <img src={`/assets/logo/${navOpen ? 'X' : 'menu'}.svg`} alt="Меню" />
        </button>
        <nav className={`${style.navigation} ${navOpen ? style.active : ''}`}>
          <ul>
            <li><a href="./#advantages">Наши преимущества</a></li>
            <li><a href="./#general">Общая планировка</a></li>
            <li><a href="./#apartments">Квартиры</a></li>
            <li><a href="./#gallery">Галерея</a></li>
            <li><a href="./#contacts">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;