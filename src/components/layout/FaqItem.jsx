function FaqItem({ question, answer }) {
  return (
    <>
      <div className='collapse mb-4 collapse-arrow w-full lg:w-3/4 mx-auto bg-white rounded-box border border-base-300 shadow-3xl'>
        <input type='checkbox' class='peer' />
        <div className='collapse-title text-xl font-bold text-center peer-checked:bg-gray-100'>
          {question} <span></span>
        </div>
        <div className='collapse-content  text-xl text-center peer-checked:bg-gray-100'>
          <p>{answer}</p>
        </div>
      </div>
    </>
  )
}

export default FaqItem
