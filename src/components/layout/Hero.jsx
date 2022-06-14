import imgHero from '../assets/bg/hero-1.png';
import cucitoGif from '../assets/gif/cucito.gif'
import cucitoHero from '../assets/gif/cucito-hero.gif'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen p-4 shadow-3xl"
        style={{ backgroundImage: `url(${cucitoHero})` }}
      >
        <div className="hero-overlay bg-opacity-50 w-3/4 h-3/4 p-3"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xs lg:max-w-lg">
            <h1 className="mb-5 text-4xl lg:text-7xl font-bold">
              <span className='block mb-3 tracking-widest'>BRM </span> CONFEZIONI
            </h1>
            <p className="leading-8 mb-5 text-xl lg:text-3xl font-semibold leading-loose ">
              Siamo un'azienda con 30 anni di esperienza nella prototipia e
              confezione di intimo, lingerie, costumi da bagno e sportswear. I
              nostri pilastri sono qualità, professionalità e innovazione.
            </p>
            <Link to="/contatti">
              <button className="btn btn-outline lg:btn-lg text-white md:hover:scale-110 transition duration-300">
                CONTATTACI
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
