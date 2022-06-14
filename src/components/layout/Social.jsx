import instaLogo from '../assets/icon/instagram.png';
import whatsappLogo from '../assets/icon/whatsapp.png';
import facebookLogo from '../assets/icon/facebook.png';
import qrInsta from '../assets/qrcode/qrinstagram.png'
import qrWhatsapp from '../assets/qrcode/qrwhatsapp.png'
import { Link } from 'react-router-dom';

function Social() {
  return (
    <ul className="nav-link social-link-list flex justify-between items-center w-48 mb-20 relative">
      <li>
        <Link
          to="https://www.facebook.com/brmconfezioni/"
          className="nav-link "
        >
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
  );
}

export default Social;
