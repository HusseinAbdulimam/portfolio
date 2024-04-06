
import { useEffect } from 'react';
import aboutImg from '../../assets/images/about.jpg';
import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next'

const About = () => {
    const [t] = useTranslation();
    useEffect(() => {
        ScrollReveal({
            origin: 'left',
            distance: '60px',
            duration: 2500,
            delay: 500,
        }).reveal(`.about__img`, {reset: true})
        ScrollReveal({
            origin: 'right',
            distance: '60px',
            duration: 2500,
            delay: 500,
        }).reveal(`.about__data`, {reset: true})
    }, [])
    return (
        <section className="about section" id="about">
            {/* <span className="section__subtitle">{t('about.section_subtitle')}</span> */}
            <h2 className="section__title">{t('about.section_title')}</h2>
            <div className="about__container container grid">
                <img src={aboutImg} alt="" className="about__img" />
                <div className="about__data">
                    {/* <div className="about__info">
                        <div className="about__box">
                            <i className='bx bx-award about__icon'></i>
                            <h3 className="about__title">{t('about.box_title1')}</h3>
                            <span className="about__subtitle">{t('about.box_subtitle1')}</span>
                        </div>
                        <div className="about__box">
                            <i className='bx bx-briefcase-alt about__icon'></i>
                            <h3 className="about__title">{t('about.box_title2')}</h3>
                            <span className="about__subtitle">{t('about.box_subtitle2')}</span>
                        </div>
                        <div className="about__box">
                            <i className='bx bx-support about__icon'></i>
                            <h3 className="about__title">{t('about.box_title3')}</h3>
                            <span className="about__subtitle">{t('about.box_subtitle3')}</span>
                        </div>
                    </div> */}
                    <p className="about__description">
                        {/* Full stack developer, I create web pages with UI / UX user interface,
                        I have years of experience and many clients are happy
                        with the prjects carried out. */}
                        {t('about.about_description')}
                    </p>
                    <a href="#contact" className="button">{t('about.btn_contact')}</a>
                </div>
            </div>
        </section>
    );
}

export default About;
