import React, {MouseEvent} from 'react';
import foto from '../../assets/img/1-1 2.jpg'
import s from './Profile.module.scss'
import {FaCloudDownloadAlt,  FaGithubSquare, FaLinkedin, FaTelegram, FaWhatsappSquare} from "react-icons/fa";
import {SiCodewars} from "react-icons/si";
import axios from 'axios';

export const apiBase = axios.create({
    withCredentials: true,
    baseURL: 'https://api.weather.yandex.ru/v2/informers?lat=59.93909836&lon=30.31587601',
    headers: {
        "X-Yandex-API-Key":"1c626c6b-c056-4ce4-9162-8c7a374898f8"
    }})

export const Profile = () => {

    let onWeatherClickHandler = (e: MouseEvent) => {
        e.preventDefault();

        apiBase.get('').then(response => response.data)
            .then(data => console.log(data))
            .catch(data=>console.log(data))
    }


    return (
        <div>
            <div className={s.cardContainer}>

                <div className={s.photoContainer}>

                    <img className={s.profilePhoto} src={foto} alt=""/>

                </div>
                <div className={s.name}>Alex Duzhev</div>
                <div className={s.animatedText} onClick={onWeatherClickHandler}>Animated text</div>
                <div className={s.contactsContainer}>
                    <a href="https://github.com/itbali">
                        <FaGithubSquare/>
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
                    <a href="https://wa.me/79992156384" >
                        <FaWhatsappSquare/>
                    </a>
                </div>
                <div className={s.downloadCV}>
                    <a href="https://docs.google.com">
                        <span>Download CV </span>
                        <FaCloudDownloadAlt/>
                    </a>
                </div>
            </div>

        </div>
    );
};
