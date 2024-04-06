/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';
import Setting from './components/setting/Setting';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const {i18n} = useTranslation();
  const scrollActive = () => {
    const sections = document.querySelectorAll('section[id]')
    const scrollY = window.pageYOffset;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          //console.log("xxx",document.querySelector('.nav__menu a[href*=' + sectionId + ']'));
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
  }
  window.addEventListener('scroll', scrollActive);
  const getColor = () => {
    const color = localStorage.getItem('theme-color');
    if(color) {
          document.documentElement.style.setProperty('--first-hue', color.split(',')[0])
          document.documentElement.style.setProperty('--sat', color.split(',')[1])
          document.documentElement.style.setProperty('--lig', color.split(',')[2])
    }
    else {
          document.documentElement.style.setProperty('--first-hue', '207')
          document.documentElement.style.setProperty('--sat', '90%')
          document.documentElement.style.setProperty('--lig', '72%')
          localStorage.setItem('theme-color', ['207', '90%', '72%'])
          localStorage.setItem('idx-col', 1)
    }
  }
  const getlang = () => {
    const lang = localStorage.getItem('lang');
    if(lang === 'ar') {
      i18n.changeLanguage('ar');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      i18n.changeLanguage('en');
      document.documentElement.setAttribute('lang', 'en')
    }
  }
  useEffect(() => {
    getColor()
    getlang()
    }, [])
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
