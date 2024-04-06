/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useRef } from 'react';
import workImg from '../../assets/images/work.jpg';
import mixitup from 'mixitup';
import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next'

const Work = () => {
    const [t] = useTranslation();
    const btns = useRef([]);
    useEffect(() => {
        mixitup('.work__container', {
            selectors: {
                target: '.work__card'
            },
            animation: {
                duration: 300
            }
        });
    }, [])
    useEffect(() => {
        ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 2500,
            delay: 500,
        }).reveal(`.work__container`, {reset: true})
    }, [])
    const handler = idx => e => {
        const next = btns.current[idx];
        if (next) {
            //   e.target.classList.add('x1x');
            btns.current.forEach(item => item.classList.remove('active-work'))
            next.classList.add('active-work')
        }
    };
    return (
        <section className="work section" id="work">
            {/* <span className="section__subtitle">{t('work.section_subtitle')}</span> */}
            <h2 className="section__title">{t('work.section_title')}</h2>
            <div className="work__filters">
                <span ref={el => btns.current[0] = el} onClick={handler(0)} className="work__item active-work" data-filter="all">All</span>
                <span ref={el => btns.current[1] = el} onClick={handler(1)} className="work__item" data-filter=".web">Web</span>
                <span ref={el => btns.current[2] = el} onClick={handler(2)} className="work__item" data-filter=".movil">Movil</span>
                <span ref={el => btns.current[3] = el} onClick={handler(3)} className="work__item" data-filter=".design">Design</span>
            </div>
            <div className="work__container container grid">
                <div className="work__card mix web">
                    <img src={workImg} alt="" className="work__img" />
                    <h3 className="work__title">Web design</h3>
                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow-alt work__icon arrow__icone'></i>
                    </a>
                </div>
                <div className="work__card mix movil">
                    <img src={workImg} alt="" className="work__img" />
                    <h3 className="work__title">App movil</h3>
                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow-alt work__icon arrow__icone'></i>
                    </a>
                </div>
                <div className="work__card mix design">
                    <img src={workImg} alt="" className="work__img" />
                    <h3 className="work__title">Brand design</h3>
                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow-alt work__icon arrow__icone'></i>
                    </a>
                </div>
                <div className="work__card mix web">
                    <img src={workImg} alt="" className="work__img" />
                    <h3 className="work__title">Web design</h3>
                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow-alt work__icon arrow__icone'></i>
                    </a>
                </div>
                <div className="work__card mix movil">
                    <img src={workImg} alt="" className="work__img" />
                    <h3 className="work__title">App movil</h3>
                    <a href="#" className="work__button">
                        Demo <i className='bx bx-right-arrow-alt work__icon arrow__icone'></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Work;
