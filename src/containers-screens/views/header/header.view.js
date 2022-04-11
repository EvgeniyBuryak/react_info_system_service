import React from "react";
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <span className="title">Каталог</span>
            <span className="title title__sravnenie">СРАВНЕНИЕ</span>
            <span className="title title__cabinet">Личный кабинет</span>            
        </header>
    );
}

export default Header;