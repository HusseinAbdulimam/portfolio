/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <ul className="footer__social">
            <a href="https://facebook.com/HusseinAbdulimam" target="_blank" className="footer__social-link icon">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://instagram.com/java_fx" target="_blank" className="footer__social-link icon">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://x.com/java_fx7" target="_blank" className="footer__social-link icon">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.snapchat.com/add/java_fx" target="_blank" className="footer__social-link icon">
            <i className='bx bxl-snapchat' ></i>
            </a>
            <a href="https://www.tiktok.com/@java_fx" target="_blank" className="footer__social-link icon">
            <i className='bx bxl-tiktok' ></i>
            </a>
            <a href="https://t.me/java_fx" target="_blank" className="footer__social-link icon">
            <i className='bx bxl-telegram' ></i>
            </a>
            <a href="https://github.com/HusseinAbdulimam" target="_blank" className="footer__social-link icon">
            <i className='bx bxl-github' ></i>
            </a>
          </ul>
          <span className="footer__copy">&#169; Mr. Hussein Abdulimam</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
