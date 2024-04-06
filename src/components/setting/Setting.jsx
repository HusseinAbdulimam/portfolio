/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import './setting.css'

const Setting = () => {
    const spans = useRef([])
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        spans.current[localStorage.getItem('idx-col')].classList.add('active');
    }, [])
    const handler = idx => e => {
        const next = spans.current[idx];
        if (next) {
            localStorage.setItem('theme-color',[next.getAttribute('data-hue'), next.getAttribute('data-sat'), next.getAttribute('data-lig')])
            localStorage.setItem('idx-col', idx)
            //   e.target.classList.add('x1x');
            spans.current.forEach(item => item.classList.remove('active'))
            next.classList.add('active')
            // console.log(document.documentElement.getAttribute('lang'));
            document.documentElement.style.setProperty('--first-hue', next.getAttribute('data-hue'))
            document.documentElement.style.setProperty('--sat', next.getAttribute('data-sat'))
            document.documentElement.style.setProperty('--lig', next.getAttribute('data-lig'))
            // document.documentElement.style.setProperty('--lig', next.getAttribute('lang'))
        }
        setOpenMenu(!openMenu)
    };
    return (
        <nav className={`nav-sitting z1 ${openMenu ? "open": ""}`}>
            <div className="nav-content">
                <div className="toggle-btn" onClick={()=> {setOpenMenu(!openMenu)}}>
                    <i className='bx bx-palette'></i>
                </div>
                <span ref={el => spans.current[0] = el} onClick={handler(0)} data-hue='250' data-sat='66%' data-lig='75%' style={{'--i': '1'}}></span>
                <span ref={el => spans.current[1] = el} onClick={handler(1)} data-hue='207' data-sat='90%' data-lig='72%' style={{'--i': '2'}}></span>
                <span ref={el => spans.current[2] = el} onClick={handler(2)} data-hue='160' data-sat='100%' data-lig='32%' style={{'--i': '3'}}></span>
                <span ref={el => spans.current[3] = el} onClick={handler(3)} data-hue='348' data-sat='53%' data-lig='47%' style={{'--i': '4'}}></span>
                <span ref={el => spans.current[4] = el} onClick={handler(4)} data-hue='4' data-sat='90%' data-lig='58%' style={{'--i': '5'}}></span>
            </div>
        </nav>
    );
}

export default Setting;
