/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react';
import homeImg from '../../assets/images/Hussein.png'
import ScrollReveal from 'scrollreveal'

const Home = () => {
    const [t] = useTranslation();
    useEffect(() => {
        ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
        }).reveal(`.home__data`, {reset: true})
        ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 700,
        }).reveal(`.home__handle`, {reset: true})
        ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 2500,
            delay: 500,
        }).reveal(`.home__social, .home__scroll`, {reset: true})
    }, [])
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <span className="home__greeting">{t('home.home_greeting')}</span>
                    <h1 className="home__name">{t('home.home_name')}</h1>
                    <h3 className="home__education">{t('home.home_education')}</h3>
                    <div className="home__buttons">
                        <a href="#" download="Mr.Hussein_Abdulimam.pdf" className="button button--ghost">
                            {t('home.btn_cv')}
                        </a>
                        <a href="#about" className="button">{t('home.btn_about')}</a>
                    </div>
                </div>
                <div className="home__handle">
                    <img src={homeImg} alt="" className="home__img" />
                </div>
                <div className="home__social">
                    <a href="https://facebook.com/HusseinAbdulimam" target="_blank" className="home__social-link" rel="noreferrer">
                    <i className='bx bxl-facebook'></i>
                    </a>
                    <a href="https://instagram.com/java_fx" target="_blank" className="home__social-link" rel="noreferrer">
                    <i className='bx bxl-instagram' ></i>
                    </a>
                    <a href="https://x.com/java_fx7" target="_blank" className="home__social-link" rel="noreferrer">
                    <i className='bx bxl-twitter' ></i>
                    </a>
                </div>
                <a href="#about" className="home__scroll">
                    <i className='bx bx-mouse home__scroll-icon' ></i>
                    <span className="home__scroll-name">Scroll Down</span>
                </a>
            </div>
        </section>
    );
}

export default Home;
