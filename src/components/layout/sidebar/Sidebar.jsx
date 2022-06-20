import Social from './Social';
import logo from '../../assets/logo/logo.png';
import { NavLink } from 'react-router-dom';
import homeLogo from '../../assets/icon/home.svg';
import servicesLogo from '../../assets/icon/services.svg';
import contactLogo from '../../assets/icon/contact.svg';

function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <div className="sidebar transition ease-in-out duration-300">
      <nav
        className={
          sidebarOpen === false
            ? 'navbar flex flex-col justify-between fixed top-0 left-0 w-full bg-gray-100  h-full border-r-2 border-transparent -translate-x-full z-50 transition duration-300 ease-in-out lg:translate-x-0 md:w-80'
            : 'navbar flex flex-col justify-between fixed top-0 left-0 w-full bg-gray-100  h-full border-r-2 border-transparent z-50 transition duration-300 ease-in-out lg:translate-x-0 md:w-80'
        }
      >
        <div className="logo text-center py-6 mx-auto">
          <img src={logo} alt="logo" />
        </div>

        <ul className="flex flex-col mb-8">
          <li className="flex w-40 py-8 justify-start md:hover:-translate-x-3 transition ease-in-out delay-100">
            <span className="w-12 text-xl md:mr-3">
              <img src={homeLogo} alt="home" className="w-9 w-12" />
            </span>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-4 font-semibold text-xl self-center'
                  : 'font-semibold text-xl  self-center'
              }
              onClick={toggleSidebar}
            >
              Home
            </NavLink>
          </li>
          <li className="flex w-40 py-8 justify-start md:hover:-translate-x-3 transition ease-in-out delay-100">
            <span className="w-12 text-xl md:mr-3">
              <img
                src={servicesLogo}
                alt="service"
                className="w-9 w-12 align-center "
              />
            </span>
            <NavLink
              to="/servizi"
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-4 font-semibold text-xl self-center'
                  : 'font-semibold text-xl  self-center'
              }
              onClick={toggleSidebar}
            >
              Servizi
            </NavLink>
          </li>
          <li className="flex w-40 py-8 justify-start md:hover:-translate-x-3 transition ease-in-out delay-100">
            <span className="w-12 text-l  md:mr-3">
              <img src={contactLogo} alt="contact" className="w-9 w-12" />
            </span>
            <NavLink
              to="/contatti"
              className={({ isActive }) =>
                isActive
                  ? 'underline underline-offset-4 font-semibold text-xl  self-center'
                  : 'font-semibold text-xl self-center'
              }
              onClick={toggleSidebar}
            >
              Contatti
            </NavLink>
          </li>
        </ul>

        <Social />
      </nav>
    </div>
  );
}

export default Sidebar;
