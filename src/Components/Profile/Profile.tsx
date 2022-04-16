import React from 'react';
import foto from '../../assets/img/2022-03-23 10.43.21.jpg'
import s from './Profile.module.scss'
import {FaCloudDownloadAlt, FaGithub, FaLinkedin, FaTelegram, FaWhatsappSquare} from "react-icons/fa";
import {SiCodewars} from "react-icons/si";

export const Profile = () => {
    return (
        <div>
            <div className={s.cardContainer}>

                <div className={s.photoContainer}>

                    <img className={s.profilePhoto} src={foto} alt=""/>

                </div>
                <div className={s.name}>Алексей Дюжев</div>
                <div className={s.animatedText}>Animated text</div>
                <div className={s.contactsContainer}>
                    <a href="https://github.com/itbali">
                        <FaGithub/>
                    </a>
                    <a href="https://www.codewars.com/users/itbali">
                        <SiCodewars/>
                    </a>
                    <a href="https://www.linkedin.com/in/alex-dyuzhev-21a217231/">
                        <FaLinkedin/>
                    </a>
                    <a href="https://t.me/xopycaku">
                        <FaTelegram/>
                    </a>
                    <a href="https://wa.me/79992156384">
                        <FaWhatsappSquare/>
                    </a>
                </div>
                <div className={s.downloadCV}>
                    <a href="https://docs.google.com">
                        Download CV
                        <FaCloudDownloadAlt/>
                    </a>
                </div>
            </div>

        </div>
    );
};
