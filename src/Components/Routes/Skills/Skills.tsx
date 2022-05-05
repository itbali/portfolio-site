import React, {ReactElement} from 'react';
import s from './skills.module.scss'
import {FaCss3, FaHtml5, FaReact} from "react-icons/fa";
import {DiSass} from "react-icons/di";
import {SiRedux, SiReactrouter, SiLess, SiJavascript, SiJest, SiTypescript, SiPostman} from "react-icons/si";
import {v1} from "uuid";
import {GiPlatform} from "react-icons/gi";

type SkillsForMappingType = Array<SingleSkillType>
type SingleSkillType = {
    id: string
    img: ReactElement
    title: string
    description: string
}


export const Skills = () => {

    const skillsForMapping: SkillsForMappingType = [
        {
            id: v1(),
            img: <FaHtml5/>,
            title: 'HTML5',
            description: 'HyperText Markup Language (HTML) is the standard markup language used for creating web pages'
        },
        {
            id: v1(),
            img: <FaCss3/>,
            title: 'CSS3',
            description: 'CSS is used to create the layout of the page, color, fonts, and style'
        },

        {
            id: v1(),
            img: <DiSass/>,
            title: 'SCSS',
            description: 'Sass is a CSS-based metalanguage designed to increase the abstraction level of CSS code.'
        },
        {
            id: v1(),
            img: <SiLess/>,
            title: 'LESS',
            description: 'Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS'
        }, {
            id: v1(),
            img: <SiJavascript/>,
            title: 'JS',
            description: 'JS is the tool to implement interactive features in your website'
        },
        {
            id: v1(),
            img: <SiTypescript/>,
            title: 'TS',
            description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale'

        },
        {
            id: v1(),
            img: <FaReact/>,
            title: 'REACT',
            description: 'A JavaScript library for building user interfaces'
        },
        {
            id: v1(),
            img: <SiRedux/>,
            title: 'REDUX',
            description: 'A Predictable State Container for JS Apps'
        },
        {
            id: v1(),
            img: <SiReactrouter/>,
            title: 'RRD',
            description: 'React Router keeps your UI in sync with the URL'
        },
        {
            id: v1(),
            img: <SiJest/>,
            title: 'JEST',
            description: 'Jest is a delightful JavaScript Testing Framework with a focus on simplicity'
        },
        {
            id: v1(),
            img: <SiPostman/>,
            title: 'POSTMAN',
            description: 'Postman is an API platform for building and using APIs'
        },
        {
            id: v1(),
            img: <GiPlatform/>,
            title: 'FORMIK',
            description: 'Formik is the world\'s most popular open source form library for React and React Native.'
        },

    ]
    const skills = skillsForMapping.map(
        (el) => {
            return <div className={s.unit} key={el.id}>
                {el.img}
                <h4>{el.title}</h4>
                <span>{el.description}</span>
            </div>
        }
    )

    return (
        <div className={s.container}>
            <span className={s.title}>My skills</span>
            <p className={s.innerText}>
                <strong> A front end developer</strong>
                is someone who implements web designs through
                programming languages like HTML, CSS, and JavaScript. The front end
                developers work with the design and outlook of the website. Whereas, the
                back end developers program what goes on behind the scenes like
                databases. If you head to any site, you can see the work of a front end
                developer in the navigation, layouts, and also the way a site looks
                different from your phone.
                Web design is all about the way a website looks, while front end
                development is how the design actually gets implemented on the website.
                The front end developer is the person who is responsible for the
                implementation.
            </p>

            <span className={s.title}>Interesting</span>
            <p className={s.innerText}>My hardest task was to write a SPA on VUE in 1 day. I didn't know Vue before that
                                       task... The result is in Git for today (just a joke app for beer choose)</p>

            <span className={s.title}>My stack</span>
            <div className={s.factsContainer}>

                {skills}

                {/*<div className={s.unit}>*/}
                {/*    <FaHtml5/>*/}
                {/*    <h3>HTML5</h3>*/}
                {/*    <span>HyperText Markup Language (HTML) is the standard markup language used for creating web pages.*/}
                {/*          It is the most basic building block required for developing websites.</span>*/}
                {/*</div>*/}
                {/*<div className={s.unit}>*/}
                {/*    <DiSass/>*/}
                {/*    <h3>SCSS</h3>*/}
                {/*    <span>is an advanced version of CSS. It is not just a language to improve the styling elements, but it helps*/}
                {/*          the developers to skip tasks like writing CSS selectors and color strings frequently.*/}
                {/*    </span>*/}
                {/*</div>*/}
                {/*<div className={s.unit}>*/}
                {/*    <FaLess/>*/}
                {/*    <h3>LESS</h3>*/}
                {/*    <span>Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension*/}
                {/*          for CSS.*/}
                {/*    </span>*/}
                {/*</div>*/}
                {/*<div className={s.unit}>*/}
                {/*    <GrJs/>*/}
                {/*    <h3>JavaScript</h3>*/}
                {/*    <span>If you are trying to implement interactive features in your website such as audio and video,*/}
                {/*          games, scrolling abilities, page animations, JS is the tool you need.*/}
                {/*    </span>*/}
                {/*</div>*/}


            </div>
        </div>
    );
};
