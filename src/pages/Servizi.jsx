import ServiceLayout from '../components/layout/services/ServiceLayout';
import campImg from '../components/assets/bg/service-1.png';
import prodImg from '../components/assets/bg/service-2.jpg';
import TitlePage from '../components/layout/TitlePage';
import { motion, AnimatePresence } from 'framer-motion';

function Servizi() {
  const services = [
    {
      title: 'CAMPIONATURA',
      text: 'Offriamo servizio di campionatura, cartamodelli e prototipia per ogni tipo di articolo.',
      photo: campImg,
      position: 'left',
    },
    {
      title: 'PRODUZIONE',
      text: 'Nel nostro laboratorio interno produciamo secondo i più alti standard qualitativi. Un metodo di produzione scalabile che garantisce di soddisfare le richieste più esigenti.',
      photo: prodImg,
    },
    {
      title: 'RICERCA MATERIALI',
      text: 'Forniamo servizio di ricerca materiali tra cui tessuti, accessori, packaging.',
      photo:  campImg ,
      position: 'left',
    },
    {
      title: 'PREFORMAZIONE',
      text: 'Preformiamo coppe di ogni misura internamente.',
      photo:  campImg ,
    },
    {
      title: 'CONFEZIONE',
      text: 'Consegnamo il prodotto finito, stirato, etichettato e confezionato',
      photo:  campImg ,
      position: 'left'
    },
  ];

  return (
    <section className="services-container min-h-screen w-full p-5 ">
      <TitlePage title={'Servizi'} />
      <div className="services-container z-0 mt-12">

        {services.map((service, index) => (
              <ServiceLayout
                key={index}
                title={service.title}
                text={service.text}
                photo={service.photo}
                position={service.position}
              />
          ))}
      </div>
    </section>
  );
}

export default Servizi;
