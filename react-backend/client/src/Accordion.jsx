import React, { useState, useEffect } from 'react';
//import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';

const Accordion = () => {
    const [modalClass, setModalClass] = useState('hide');
    const [scrollClass, setScrollClass] = useState('hide');

    useEffect(() => {
        window.onscroll = () => {
            scrollDown(window.pageYOffset)

        }
    }, []);

    const scrollDown = (yOffset) => {
        if (yOffset > 1000)
        {
            setScrollClass('')
        }
        else
        {
            setScrollClass('hide')
        }
    }
    const openModal = () => {
        if (modalClass === 'hide')
        {
            setModalClass('')
        }
        else
        {
            setModalClass('hide')
        }
    }

    return (
        <div>
            <div className={'scrollDown ' + scrollClass}>
                Йа Скролл
            </div>
            <div  className="openModal" >
                <div className={'openModalWindow ' + modalClass}>
                    Я Модалко
                </div>
                <div className="openModalBtn" onClick={openModal}>

                </div>
            </div>
        </div>
    );

}

export default Accordion
// const scrollToRef = (ref) => {
//
//     const wrapper = document.querySelector('.app');
//
//     return isInViewPort(ref, wrapper)
//         ? null : setTimeout(() => {
//             return ref.current
//
//                 && wrapper
//
//                 && wrapper.scrollTo(wrapper.scrollTop, wrapper.scrollTop + ref.current.offsetTop)
//
//         }, 300);
//
// };