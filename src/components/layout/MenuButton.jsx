import { RiScissorsFill } from 'react-icons/ri';

function MenuButton({ toggleSidebar }) {
  return (
    <div className="toggle-menu fixed top-3 left-3 z-50 bg-black p-2 rounded-3xl cursor-pointer transition duration-500  lg:hidden" onClick={toggleSidebar}>
      <RiScissorsFill className="text-4xl text-white" />
    </div>
  );
}

export default MenuButton;
