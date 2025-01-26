import { Link } from "react-router-dom";

function MenuButton({ icon: Icon, text, linkTo }) {
  return (
    <>
      <Link to={linkTo}z>
        <button className="z-10 font-nasa font-bold text-white flex items-center px-4 py-3 gap-4 hover:text-[#EF3E51] transition-colors duration-200">
          <Icon className="size-5" />
          <span className="p-4">{text}</span>
        </button>
      </Link>
      <hr className="border-[#4CB99F] mx-4" />
    </>
  );
}

export default MenuButton;
