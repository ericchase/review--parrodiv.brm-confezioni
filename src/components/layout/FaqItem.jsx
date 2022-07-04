function FaqItem({ question, answer, listArr }) {
  return (
    <>
      <div className='collapse mb-8 collapse-arrow w-full lg:w-3/4 mx-auto bg-white rounded-box border border-base-300 shadow-3xl'>
        <input type='checkbox' class='peer' />
        <div className='collapse-title text-xl font-bold text-center peer-checked:bg-gray-100'>
          {question} <span></span>
        </div>
        <div className='collapse-content  text-xl text-center peer-checked:bg-gray-100'>
          <p>{answer}</p>
          {listArr && (
            <ul className="list-none">
              {listArr.map((item) => (
                <li><span className='mr-3'>➥</span>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default FaqItem
