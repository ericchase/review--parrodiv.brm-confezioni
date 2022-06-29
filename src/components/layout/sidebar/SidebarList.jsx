import { NavLink } from 'react-router-dom'
import homeLogo from '../../assets/icon/home.svg'
import servicesLogo from '../../assets/icon/services.svg'
import contactLogo from '../../assets/icon/contact.svg'
import SidebarListItem from './SidebarListItem'


function SidebarList({toggleSidebar}) {
  const linksNav = [
    {
      img: homeLogo,
      name: 'Home',
    },
    {
      img: servicesLogo,
      name: 'Servizi',
    },
    {
      img: contactLogo,
      name: 'Contatti',
    },
    {
      img: homeLogo,
      name: 'Faq',
    },
  ]
  return (
    <ul className='flex flex-col mb-8'>
      {linksNav.map((item) => (
        <SidebarListItem img={item.img} name={item.name} toggleSidebar={toggleSidebar} />
      ))}
    </ul>
  )
}

export default SidebarList
