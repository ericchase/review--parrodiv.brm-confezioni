import { NavLink } from "react-router-dom"

function SidebarListItem({img, name, toggleSidebar}) {
  return (
    <li className='flex w-40 py-4 justify-start md:hover:-translate-x-3 transition ease-in-out delay-100'>
      <span className='w-12 text-xl md:mr-3'>
        <img src={img} alt='name' className='w-9 w-12' />
      </span>
      <NavLink
        to={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
        className={({ isActive }) =>
          isActive
            ? 'underline underline-offset-4 font-semibold text-xl self-center'
            : 'font-semibold text-xl  self-center'
        }
        onClick={toggleSidebar}
      >
        {name}
      </NavLink>
    </li>
  )
}

export default SidebarListItem
