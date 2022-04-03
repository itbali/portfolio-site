import React from "react";
import "./Header.less"

export const Header = () => {
    return (
        <div>
            <div className="logo">LOGO</div>
            <menu className="menu">
                <ul>
                    <li>Главная</li>
                    <li>Скилы</li>
                    <li>Работы</li>
                    <li>Контакты</li>
                </ul>
            </menu>
            <select name="lang" id="langId" defaultValue={"RU"}>
                <option value="RU">RU</option>
                <option value="EN">EN</option>

            </select>
        </div>
    )
}