import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next'

const Skills = () => {
    const [t] = useTranslation();
    useEffect(() => {
        ScrollReveal({
            origin: 'left',
            distance: '60px',
            duration: 2500,
            delay: 500,
        }).reveal(`.skills__one`, {reset: true})
        ScrollReveal({
            origin: 'right',
            distance: '60px',
            duration: 2500,
            delay: 500,
        }).reveal(`.skills__two`, {reset: true})
    }, [])
    return (
        <section className="skills section" id="skills">
            {/* <span className="section__subtitle">{t('skills.section_subtitle')}</span> */}
            <h2 className="section__title">{t('skills.section_title')}</h2>
            <div className="skills__container container grid">
                <div className="skills__content skills__one">
                    <h3 className="skills__title">{t('skills.frontend_title')}</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__level">{t('skills.skill_exce')}</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__level">{t('skills.skill_vgood')}</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__level">{t('skills.skill_vgood')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">Bootstrap</h3>
                                    <span className="skills__level">{t('skills.skill_vgood')}</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">Git</h3>
                                    <span className="skills__level">{t('skills.skill_good')}</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__level">{t('skills.skill_good')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills__content skills__two">
                    <h3 className="skills__title">{t('skills.backend_title')}</h3>
                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">PHP</h3>
                                    <span className="skills__level">{t('skills.skill_good')}</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">Node Js</h3>
                                    <span className="skills__level">{t('skills.skill_vgood')}</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__level">{t('skills.skill_good')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">MySQL</h3>
                                    <span className="skills__level">{t('skills.skill_vgood')}</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">Firebase</h3>
                                    <span className="skills__level">{t('skills.skill_good')}</span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <i className='bx bxs-badge-check'></i>
                                <div>
                                    <h3 className="skills__name">Express</h3>
                                    <span className="skills__level">{t('skills.skill_good')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
