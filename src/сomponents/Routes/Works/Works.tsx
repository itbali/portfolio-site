import React from 'react';
import s from './works.module.scss'
import {MyWorksContainer} from "./myWorksContainer";

const Works = () => {
    return (
        <div className={s.container}>
            <span className={s.title}>My works</span>
            <p className={s.innerText}>
                <strong> All my works </strong>
                are available as gitRepositories and functioning web-sites. Of course all of them are mobile-friendly
                (adaptive)
                <br/>Less words - more code
            </p>

            <section className={s.worksContainer}>
                <MyWorksContainer/>
            </section>
        </div>
    );
};

export default Works;
