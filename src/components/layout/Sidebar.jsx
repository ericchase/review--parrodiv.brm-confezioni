import logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';

import qrInsta from '../../assets/qrcode/qrinstagram.png';
import qrWhatsapp from '../../assets/qrcode/qrwhatsapp.png';
import homeLogo from '../../assets/icon/home.svg';
import servicesLogo from '../../assets/icon/services.svg';
import contactLogo from '../../assets/icon/contact.svg';
import instaLogo from '../../assets/icon/instagram.png';
import whatsappLogo from '../../assets/icon/whatsapp.png';
import facebookLogo from '../../assets/icon/facebook.png';

function Sidebar() {
  return (
    <nav className="navbar flex flex-col justify-between fixed top-0 left-0 w-80 bg-base-100  h-full border-r-2 border-transparent z-100">
      <div className="logo text-center py-6 mx-auto ">
        <img src={logo} alt="logo" />
      </div>

      <ul className="flex flex-col mb-8">
        <li className="flex py-8 w-40 justify-start">
          <span className="w-12 text-xl md:mr-3">
            <img src={homeLogo} alt="home" className="w-9 md:w-16" />
          </span>
          <Link
            to="/"
            className="font-semibold text-xl md:text-2xl self-center  "
          >
            Home
          </Link>
        </li>
        <li className="flex py-8 w-40 justify-start">
          <span className="w-12 text-xl md:mr-3">
            <img src={servicesLogo} alt="service" className="w-9 md:w-16" />
          </span>
          <Link
            to="/servizi"
            className="nav-link font-semibold text-xl md:text-2xl self-center"
          >
            Servizi
          </Link>
        </li>
        <li className="flex w-40 py-8 justify-start">
          <span className="w-12 text-l  md:mr-3">
            <img src={contactLogo} alt="contact" className="w-9 md:w-16" />
          </span>
          <Link
            to="/contatti"
            className="nav-link font-semibold text-xl  md:text-2xl self-center"
          >
            Contatti
          </Link>
        </li>
      </ul>

      <ul className="nav-link social-link-list flex justify-between items-center w-48 mb-20 relative">
        <li>
          <Link to="https://www.facebook.com/brmconfezioni/" className="nav-link">
            <img
              src={facebookLogo}
              alt="facebook"
              width={40}
              className="w-8 md:w-12"
            />
          </Link>
        </li>
        <li>
          <div className="social-qr absolute left-2/4 w-20 md:w-28 bottom-11 md:bottom-14 -translate-x-2/4 hidden">
            <img src={qrInsta} alt="qrInsta" />
          </div>
          <Link to="https://www.instagram.com/brmconfezioni/?hl=it">
            <img
              src={instaLogo}
              alt="instagram"
              width={40}
              className="w-8 md:w-12"
            />
          </Link>
        </li>
        <li>
          <div className="social-qr absolute left-2/4 w-20 md:w-28 bottom-11 md:bottom-14 -translate-x-2/4 hidden ">
            <img src={qrWhatsapp} alt="qrInsta" />
          </div>
          <Link to="tel:+39 0376550373">
            <img
              src={whatsappLogo}
              alt="whatsapp"
              width={40}
              className="w-8 md:w-12"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
