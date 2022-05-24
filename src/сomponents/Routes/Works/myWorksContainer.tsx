import React from 'react';
import {v1} from "uuid";
import s from './works.module.scss'
import work1 from "../../../assets/img/work1Social.jpeg"
import work2 from "../../../assets/img/work2TicTacToe.png"
import work3 from "../../../assets/img/work3TODO.png"
import work4 from "../../../assets/img/work4Memo.jpeg"
import work5 from "../../../assets/img/work5JSTodoList.png"

type myWorksContainerArrayType = Array<singleWork>
type singleWork = {
    id: string
    title: string
    img: string
    code: string
    page: string
}
const myWorksContainerArray: myWorksContainerArrayType = [
    {
        id: v1(),
        title: 'Social Network',
        img: work1,
        code: '',
        page: ''
    },
    {
        id: v1(),
        title: 'Tic-Tac-Toe game',
        img: work2,
        code: 'https://github.com/itbali/tic-tac-toe',
        page: 'https://itbali.github.io/tic-tac-toe/'
    },
    {id: v1(), title: 'React TODO SPA', img: work3, code: 'https://github.com/itbali/todolist-ts-01', page: ''},
    {id: v1(), title: 'Memo cards', img: work4, code: '', page: ''},
    {
        id: v1(),
        title: 'JS TODO list',
        img: work5,
        code: 'https://github.com/itbali/todo-list',
        page: 'https://itbali.github.io/todo-list/'
    },
]

export const MyWorksContainer = () => {
    return (
        <>
            {myWorksContainerArray.map(el => <React.Fragment key={el.id}>
                <div className={s.singleUnit}>
                    <span className={s.title}>{el.title}</span>
                    <div className={s.imgContainer}>
                        <img src={el.img} alt=""/>
                        <nav className={s.imgContainerNav}>
                            <a href={el.code}>Code</a>
                            <a href={el.page}>Page</a>
                        </nav>
                    </div>
                </div>
            </React.Fragment>)
            }
        </>
    );
};


