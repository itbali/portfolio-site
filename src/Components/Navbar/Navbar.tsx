import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressCard, faBook, faBriefcase, faEnvelopesBulk, faCloud} from "@fortawesome/free-solid-svg-icons";
import style from './Navbar.module.scss'
import {Link, NavLink, Outlet} from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <ul className={style.navBar}>
                <li>
                    <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)} to="/about">
                        <FontAwesomeIcon icon={faAddressCard}/>
                        <span>About</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)} to="/skills">
                        <FontAwesomeIcon icon={faBook}/>
                        <span>Skills</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)} to="/works">
                        <FontAwesomeIcon icon={faBriefcase}/>
                        <span>Works</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)} to="contact">
                        <FontAwesomeIcon icon={faEnvelopesBulk}/>
                        <span>Contact</span>
                    </NavLink>
                </li>
                <li style={{marginTop: '20px'}}>
                    <NavLink className={({isActive}) => (isActive ? style.active : style.inactive)} to="/">
                        <FontAwesomeIcon icon={faCloud}/>
                        <span>+12 C</span>
                    </NavLink>
                </li>
            </ul>

            <Outlet/>
        </div>
    );
};

export default Navbar;