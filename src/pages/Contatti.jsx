import TitlePage from "../components/layout/TitlePage"
import ContactItem from "../components/layout/contacts/ContactItem";
import message from '../components/assets/icon/message.svg'
import mail from '../components/assets/icon/mail.svg'
import location from '../components/assets/icon/location.svg'


function Contatti() {
  const contatti = [
    {
      name: 'Whatsapp',
      link: 'https://api.whatsapp.com/send?phone=390376550373',
      contact: '+39 0376550373',
      img: message,
    },
    {
      name: 'Email',
      link: 'mailto:commerciale@brmconfezioni.it',
      contact: 'commerciale@brmconfezioni.it',
      img: mail,
    },
    {
      name: 'Posizione',
      link: 'https://www.google.com/maps/dir//Via+Sandro+Pertini,+2+46020+Tabino+Mottelle+MN/@44.9908894,10.8441455,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x477f872205655187:0xd87eacbd10c9bb46!2m2!1d10.8441455!2d44.9908894',
      contact: 'Via Sandro Pertini 2/A - Pegognaga (MN) 46020',
      img: location,
    },
  ];

  return (
    <section className="min-h-screen w-full p-5 ">
      <TitlePage title={'Contatti'} />
      <div className="lg:w-4/5 w-full p-3 mx-auto">
        {contatti.map((contatto, index) => (
          <ContactItem key={index}
          name={contatto.name}
          link={contatto.link}
          contact={contatto.contact}
          img={contatto.img}
          />
        ))}
      </div>
    </section>
  );
}

export default Contatti
