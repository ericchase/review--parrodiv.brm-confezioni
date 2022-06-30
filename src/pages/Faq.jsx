import TitlePage from '../components/layout/TitlePage'
import FaqItem from '../components/layout/FaqItem'

function Faq() {
  const faqList = [
    {
      question: 'Quanti sono i minimi di produzione?',
      answer:
        'I nostri minimi di produzione sono 80 capi per modello, divisibili in taglie.',
    },
    {
      question: 'Quanti sono i minimi di produzione?',
      answer:
        'I nostri minimi di produzione sono 80 capi per modello, divisibili in taglie.',
    },
    {
      question: 'Quanti sono i minimi di produzione?',
      answer:
        'I nostri minimi di produzione sono 80 capi per modello, divisibili in taglie.',
    },
  ]

  return (
    <section className='min-h-screen w-full p-5'>
      <TitlePage title={'FAQ'} />
      {faqList.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer}/>
      ))}
    </section>
  )
}

export default Faq
