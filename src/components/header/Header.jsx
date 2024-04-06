/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState } from "react";
import { useEffect } from "react";
import { SiGoogletranslate } from "react-icons/si";
import { CgMenuRight, CgColorPicker} from "react-icons/cg";
import { FaGreaterThan, FaLessThan, FaXmark } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import Setting from "../setting/Setting";

const Header = () => {
  const {i18n} = useTranslation();
  const [showMenu, setShowMenu] = useState(false)
  const head = useRef()
  const scrollHeader = () => {
    if(window.pageYOffset >= 50) head.current.classList.add('scroll-header');
    else head.current.classList.remove('scroll-header')
  }
/*************************************************/
  const themeButton = useRef();
  const lightTheme = 'light-theme'
  const iconTheme = 'bx-sun'
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')
  const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.current.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'
  useEffect(() => {
    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
      themeButton.current.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
    }
    window.addEventListener('scroll', () => {
      scrollHeader();
    })
  }, [])
  const handleBtnTheme = () => {
    document.body.classList.toggle(lightTheme)
    themeButton.current.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  }
  const handleLang = () => {
    if(i18n.language === 'ar') {
      i18n.changeLanguage('en')
      localStorage.setItem('lang', 'en')
      document.documentElement.setAttribute('lang', 'en')
    }
    else {
      i18n.changeLanguage('ar')
      localStorage.setItem('lang', 'ar')
      document.documentElement.setAttribute('lang', 'ar')
    }
  }
  return (
    <>
      <header className="header" id="header" ref={head}>
        <nav className="nav container">
          <a href="#home" className="nav__logo">
            <div className="logo">
            <FaLessThan />Mr. Hussein /<FaGreaterThan />
            </div>
          </a>
          <div className={`nav__menu ${showMenu ? 'show': ''}`}>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="bx bx-home-alt"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="bx bx-user"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="bx bx-book"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i className="bx bx-briefcase-alt-2"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="bx bx-message-square-detail"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="tools">
            <Setting />
            <SiGoogletranslate onClick={handleLang} />
            <i className="bx bx-moon change-theme" id="theme-button" onClick={handleBtnTheme} ref={themeButton}></i>
            {showMenu ? <FaXmark onClick={() => {setShowMenu(!showMenu)}} /> : <CgMenuRight onClick={() => {setShowMenu(!showMenu)}} />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
