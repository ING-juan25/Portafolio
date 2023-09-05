import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { SlInfo, SlFolder, SlEyeglass, SlUser } from "react-icons/Sl";
const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      <AiOutlineMenu
        size={25}
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] sm:hidden cursor-pointer "
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 pl-4">
          <a
            href="#Home"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiOutlineHome size={20} />
            <span className="px-5">Home</span>
          </a>
          <a
            href="#About"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <SlInfo size={20} />
            <span className="px-5">About</span>
          </a>
          <a
            href="#Projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <SlFolder size={20} />
            <span className="px-4">Projects</span>
          </a>
          <a
            href="#Skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <SlEyeglass size={20} />
            <span className="px-6">Skills</span>
          </a>
          <a
            href="#Contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <SlUser size={20} />
            <span className="px-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="sm:block hidden fixed top-[30%] z-10 pl-4">
        <div className="flex flex-col">
          <a
            href="#Home"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#About"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <SlInfo size={20} />
          </a>
          <a
            href="#Projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <SlFolder size={20} />
          </a>
          <a
            href="#Skills"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <SlEyeglass size={20} />
          </a>
          <a
            href="#Contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <SlUser size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Sidenav;
