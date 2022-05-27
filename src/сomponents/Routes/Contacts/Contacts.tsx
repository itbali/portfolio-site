import React from 'react';
import s from './contact.module.scss'
import GoogleMap from "./GoogleMap";
import ContactForm from "./ContactForm";

export const Contacts = () => {
    return (
        <div className={s.container}>
            <span className={s.title}>Contact me</span>
            <p className={s.innerText}>I am open for work and ready to answer you. Send me a message or contact via
                                       Form</p>
            <ContactForm/>
            <div className={s.forIframe}>
                <GoogleMap/>
            </div>
        </div>
    );
};
