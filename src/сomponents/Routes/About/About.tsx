import React from 'react';
import s from './About.module.scss'
import {FaCoffee, FaDog, FaFlag, FaMusic} from "react-icons/fa";

export const About = () => {
    return (
        <div className={s.container}>
            <span className={s.title}>About me</span>
            <p className={s.innerText}><strong>Hello! I’m Alex Dyuzhev. </strong>
                Frond-end developer from RU, Spb.
                I have rich experience in site-creating. Also I am good at SPA and looking forward to PWA.
                I love to talk with you about our unique.</p>
            <ul className={s.infoList}>
                <li><strong>AGE</strong><span>33</span></li>
                <li><strong>RESIDENCE</strong><span>RU</span></li>
                <li><strong>FREELANCE</strong><span>Available</span></li>
                <li><strong>RELOCATE</strong><span>Available</span></li>
                <li><strong>ADDRESS</strong><span>Saint-Petersburg</span></li>
            </ul>

            <span className={s.title}>Interesting</span>
            <p className={s.innerText}>
                My first development experience in development was in age of 14.
                I was creating mod's for GTA Vice city, but i didn't understand that it was about development.
            </p>
            {/*TODO slider with facts*/}

            <span className={s.title}>Fun facts</span>
            <div className={s.factsContainer}>
                <div className={s.unit}>
                    <FaCoffee/>
                    <span>1000 cups of coffee</span>
                </div>
                <div className={s.unit}>
                    <FaFlag/>
                    <span>5 countries visited</span>
                </div>
                <div className={s.unit}>
                    <FaMusic/>
                    <span>over 10.000 hours music listened</span>
                </div>
                <div className={s.unit}>
                    <FaDog/>
                    <span>really love animals</span>
                </div>
            </div>
        </div>
    );
};