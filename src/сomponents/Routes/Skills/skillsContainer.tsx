import {FaCss3, FaHtml5, FaReact} from "react-icons/fa";
import {DiSass} from "react-icons/di";
import {SiRedux, SiReactrouter, SiLess, SiJavascript, SiJest, SiTypescript, SiPostman} from "react-icons/si";
import {v1} from "uuid";
import {GiPlatform} from "react-icons/gi";
import {ReactElement} from "react";
import s from './skills.module.scss'


type skillsContainerArrayType = Array<SingleSkillType>
type SingleSkillType = {
    id: string
    img: ReactElement
    title: string
    description: string
}

const skillsContainerArray: skillsContainerArrayType = [
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
        img: <SiJavascript/>,
        title: 'JS',
        description: 'JS is the tool to implement interactive features in your website'
    },
    {
        id: v1(),
        img: <FaHtml5/>,
        title: 'HTML5',
        description: 'HyperText Markup Language (HTML) is the standard markup language used for creating web pages'
    },
    {
        id: v1(),
        img: <SiTypescript/>,
        title: 'TS',
        description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale'

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

export const SkillsContainer = () => (
    <>
        {skillsContainerArray.map(
            (el) => {
                return <div className={s.unit} key={el.id}>
                    {el.img}
                    <h4>{el.title}</h4>
                    <span>{el.description}</span>
                </div>
            })
        }
    </>
)
