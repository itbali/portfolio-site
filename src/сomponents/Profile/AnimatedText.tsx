import React, {useState} from 'react';

export const AnimatedText = () => {
    const [textForContainer, setText] = useState('')

    const whoIsMeArray = [
        'Front-end Developer',
        'Web-Master',
        'Your friend'
    ]

    let showText = () => whoIsMeArray.forEach((el, index) => {

        setTimeout(() => {
            setText('')
            el.split('').forEach((elem, indx) => {

                setTimeout(() => {
                    let newText = textForContainer + elem;
                    setText(newText)
                    // console.log(newText)
                }, 500 * indx)

            });

        }, 12000 * index)
    })

    setInterval(() => {
        showText()
    }, 14000 * whoIsMeArray.length)

    return (
        <>
            Front-end developer
        </>
    );
};
