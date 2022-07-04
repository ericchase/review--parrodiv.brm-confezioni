import message from '../../assets/icon/message.svg'

function ContactItem({name, link, contact, img}) {
  return (
    <div className="flex flex-col  lg:flex-row align-center my-4 lg:my-20">
      <div className=" self-center text-center">
        <img src={img} alt="message" className='hover:scale-110 transition w-20 lg:w-28'/>
      </div>
      <div className="mx-auto self-center text-center ">
        <h3 className='font-semibold text-3xl self-center'>{name}</h3>
        <a href={link} className='text-xl md:text-2xl' target='_blank'>{contact}</a>
      </div>
    </div>
  );
}

export default ContactItem
