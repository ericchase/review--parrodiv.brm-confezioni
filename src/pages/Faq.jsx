import TitlePage from '../components/layout/TitlePage'
import FaqItem from '../components/layout/FaqItem'

function Faq() {
  const faqList = [
    {
      question: 'MINIMI DI PRODUZIONE / MOQ',
      answer:
        'I nostri minimi di produzione sono 80 capi per modello, divisibili in taglie. La campionatura non ha minimi.',
    },
    {
      question: 'TEMPO DI REALIZZAZIONE DEI CAMPIONI',
      answer:
        'Il tempo di realizzazione dei campioni cuciti e cartamodelli è di 7/14 giorni lavorativi dalla ricezione di tutti i materiali',
    },
    {
      question: 'SERVIZI OFFERTI',
      answer: 'I servizi offerti comprendono:',
      listArr: [
        'Progettazione, campionatura, cartamodelli.',
        'Produzione.',
        'Preformazione coppe.',
        'Etichettatura, codici a barre.',
        'Stiro, confezione, imbusto.',
        'Spedizione.',
      ],
    },
    {
      question: 'MATERIALI',
      answer:
        "Collaboriamo da anni con le maggiori realtà tessili produttive in Italia che certificano le loro materie con i più alti standard europei sull'impatto ambientale. Inoltre i services esterni da cui ci forniamo sono tutti situati nel raggio di massimo 50km, ciò permette di accorciare la filiera e ridurre le emissioni.",
    },
    {
      question: 'PRODUZIONE',
      answer:
        'La produzione viene fatta internamente presso la nostra sede visitabile. Ci serviamo di services esterni locali per lavorazioni particolari (applicazione siliconiche, saldatura tessuti ad ultrasuoni, taglio laser per grosse quantità, stampa sublimatica).',
    },
    {
      question: 'COSA DEVO FORNIRE',
      answer:
        "Al fine di fornire un preventivo più celere necessitiamo di: VISIVI (foto, disegni) o meglio ancora disegni tecnici (techpack), QUANTITATIVO D'ORDINE, TIPO DI TESSUTO e STAMPA IMPIEGATA.",
    },
  ]

  return (
    <section className='min-h-screen w-full p-5'>
      <TitlePage title={'FAQ'} />
      {faqList.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          listArr={item.listArr}
        />
      ))}
    </section>
  )
}

export default Faq
