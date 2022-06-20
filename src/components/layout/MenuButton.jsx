import { RiScissorsFill } from 'react-icons/ri';

function MenuButton({ toggleSidebar }) {
  return (
    <div className="toggle-menu fixed top-6 left-8 z-50 bg-black  cursor-pointer transition duration-500 btn btn-circle lg:hidden" onClick={toggleSidebar}>
      <button>
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </button>
    </div>
  );
}

export default MenuButton;
