import s from './skills.module.scss'
import {SkillsContainer} from "./skillsContainer";


export const Skills = () => {

    return (
        <div className={s.container}>
            <span className={s.title}>My skills</span>
            <p className={s.innerText}>
                <strong> A front end developer </strong>
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
                <SkillsContainer/>
            </div>
        </div>
    );
};
