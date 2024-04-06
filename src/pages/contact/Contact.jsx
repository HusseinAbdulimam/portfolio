/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2'

const Contact = () => {
    const [t] = useTranslation();
    useEffect(() => {
        ScrollReveal({
            origin: 'left',
            distance: '60px',
            duration: 2500,
            delay: 500,
        }).reveal(`.contact__one`, {reset: true})
        ScrollReveal({
            origin: 'right',
            distance: '60px',
            duration: 2500,
            delay: 500,
        }).reveal(`.contact__two`, {reset: true})
    }, [])

    const form = useRef();
    const name = useRef();
    const email = useRef();
    const msg = useRef();
    const [lod, setLod] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    setLod(true)
    emailjs
      .sendForm('service_gckq92i', 'template_st8bbsr', form.current, {
        publicKey: 'SHtKqkpvTrKrcf24q',
      })
      .then(
        () => {
          name.current.value = ""
          email.current.value = ""
          msg.current.value = ""
          setLod(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: t('contact.btn_send_done'),
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
            setLod(false);
            Swal.fire({
                position: "center",
                icon: "success",
                title: t('contact.btn_send_fild'),
                showConfirmButton: false,
                timer: 1500
            });
        },
      );
  };

    return (
        <section className="contact section" id="contact">
            {/* <span className="section__subtitle">{t('contact.section_subtitle')}</span> */}
            <h2 className="section__title">{t('contact.section_title')}</h2>
            <div className="contact__container container grid">
                <div className="contact__content contact__one">
                    <h3 className="contact__title">{t('contact.contact_title')}</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <a href={`mailto:${t('contact.box_email_data')}`} target="_blank" className="contact__button">
                                <i className='bx bx-mail-send contact__card-icon'></i>
                                <h3 className="contact__card-title">{t('contact.box_email_title')}</h3>
                                <span className="contact__card-data">{t('contact.box_email_data')}</span>
                            </a>
                        </div>
                        <div className="contact__card">
                            <a href="https://t.me/java_fx" target="_blank" className="contact__button">
                                <i className='bx bxl-telegram contact__card-icon'></i>
                                <h3 className="contact__card-title">{t('contact.box_telegram_title')}</h3>
                                <span className="contact__card-data">{t('contact.box_telegram_data')}</span>
                            </a>
                        </div>
                        <div className="contact__card">
                            <a href="https://instagram.com/java_fx" target="_blank" className="contact__button">
                                <i className='bx bxl-instagram contact__card-icon'></i>
                                <h3 className="contact__card-title">{t('contact.box_instagram_title')}</h3>
                                <span className="contact__card-data">{t('contact.box_instagram_data')}</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact__content contact__two">
                    <h3 className="contact__title">{t('contact.form_title')}</h3>
                    <form className="contact__form" ref={form} onSubmit={sendEmail}>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">{t('contact.form_name')}</label>
                            <input type="text" name="from_name" placeholder={t('contact.form_name_place')} className="contact__form-input" ref={name} required/>
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">{t('contact.form_email')}</label>
                            <input type="email" name="from_email" placeholder={t('contact.form_email_place')} className="contact__form-input" ref={email} required/>
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">{t('contact.form_msg')}</label>
                            <textarea name="message" id="" cols="30" rows="10" placeholder={t('contact.form_msg_place')} className="contact__form-input" ref={msg} required></textarea>
                        </div>
                        <button className={`button ${lod ? "dis": ""}`} type='submit'>{`${lod ? t('contact.btn_send_lod') : t('contact.btn_send')}`}</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
