import TitlePage from '../components/layout/TitlePage'

function Faq() {
  const faq = [
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
    <section className='min-h-screen w-full p-5 '>
      <TitlePage title={'FAQ'} />
      <div className='faq-container w-3/4 mx-auto'>
        <div class='collapse mb-3'>
          <input type='checkbox' class='peer' />
          <div class='collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
            Click me to show/hide content <span></span>
          </div>
          <div class='collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
            <p>tabindex="0" attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div class='collapse mb-3'>
          <input type='checkbox' class='peer' />
          <div class='collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
            Click me to show/hide content <span></span>
          </div>
          <div class='collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
            <p>tabindex="0" attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
