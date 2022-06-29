import Social from './Social';
import logo from '../../assets/logo/logo.png';
import SidebarList from './SidebarList';

function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <div className="sidebar">
      <nav
        className={
          sidebarOpen === false
            ? 'navbar flex flex-col justify-between fixed top-0 left-0 w-full bg-gray-100  h-full border-r-2 border-transparent -translate-x-full z-50 transition duration-300 ease-in-out lg:translate-x-0 md:w-80 shadow-4xl'
            : 'navbar flex flex-col justify-between fixed top-0 left-0 w-full bg-gray-100  h-full border-r-2 border-transparent z-50 transition duration-300 ease-in-out lg:translate-x-0 md:w-80 shadow-4xl'
        }
      >
        <div className="logo text-center py-6 mx-auto mt-9">
          <img src={logo} alt="logo" />
        </div>

        <SidebarList toggleSidebar={toggleSidebar}/>

        <Social />
      </nav>
    </div>
  );
}

export default Sidebar;
