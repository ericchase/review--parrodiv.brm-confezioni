import instaLogo from '../../assets/icon/instagram.png';
import whatsappLogo from '../../assets/icon/whatsapp.png';
import facebookLogo from '../../assets/icon/facebook.png';
import qrInsta from '../../assets/qrcode/qrinstagram.png';
import qrWhatsapp from '../../assets/qrcode/qrwhatsapp.png';
import { ExternalLink } from 'react-external-link';

function Social() {
  return (
    <ul className="nav-link social-link-list flex justify-between items-center w-48 mb-20 relative">
      <li>
        <ExternalLink href="https://www.facebook.com/brmconfezioni/">
          <img
            src={facebookLogo}
            alt="facebook"
            width={40}
            className="w-8 md:w-12"
          />
        </ExternalLink>
      </li>
      <li className="social-elem">
        <div className="social-qr absolute left-2/4 w-20 md:w-28 bottom-11 md:bottom-14 -translate-x-2/4  hidden">
          <img src={qrInsta} alt="qrInsta" className="transition" />
        </div>
        <ExternalLink href="https://www.instagram.com/brmconfezioni/?hl=it">
          <img
            src={instaLogo}
            alt="instagram"
            width={40}
            className="w-8 md:w-12"
          />
        </ExternalLink>
      </li>
      <li className="social-elem">
        <div className="social-qr absolute left-2/4 w-20 md:w-28 bottom-11 md:bottom-14 -translate-x-2/4 hidden">
          <img src={qrWhatsapp} alt="qrInsta" />
        </div>
        <ExternalLink href="https://api.whatsapp.com/send?phone=390376550373">
          <img
            src={whatsappLogo}
            alt="whatsapp"
            width={40}
            className="w-8 md:w-12"
          />
        </ExternalLink>
      </li>
    </ul>
  );
}

export default Social;
