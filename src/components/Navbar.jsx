/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-row w-full  border-2border-red-500 justify-start  ">
      <div className="logo flex">
        <a
          onClick={() => navigate("/tiketshop.io")}
          className="text-4xl text-white cursor-pointer"
        >
          TIKET
        </a>
      </div>

      <div className="searchBox flex mx-4 w-fit ">
        <input
          className="overflow-hidden placeholder-italic placeholder-white  bg-color3  border  border-none rounded-lg   py-2  pl-3 desktop:pr-96  text-white  shadow-sm focus:outline-none focus:border-color3 focus:ring-color3 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
        />
      </div>
    </div>
  );
}

function OffCanvas({ offCanvas }) {
  return (
    <div className="offcanvas desktop:hidden  handphone:flex  relative z-10   ">
      <div
        className={` px-5 justify-start flex-col transition  duration-1000 absolute top-[60px] -right-10 ease-out flex   text-center bg-navy  h-[99vh]  w-[18rem]   ${
          offCanvas
            ? " translate-x-0 opacity-1 "
            : " translate-x-full opacity-0 "
        } `}
      >
        <div className="header font-bold text-4xl text-center text-white my-5">
          TIKET
        </div>
        <div className="about text-white hover:bg-white  hover:text-black rounded-md shadow-lg my-3 transition-colors duration-500 ">
          <a href="" className="  text-[1.5rem] py-2 px-5">
            About
          </a>
        </div>
        <div className="createEventBox  text-white hover:bg-white  hover:text-black rounded-md shadow-lg my-3 transition-colors duration-300">
          <a href="" className="  text-[1.5rem] py-2 px-5">
            Create Event
          </a>
        </div>
        <div className="loginBox  text-white hover:bg-white  hover:text-black rounded-md shadow-lg my-3 transition-colors duration-500 ">
          <button className="py-1 px-5 text-[1.5rem] ">Login</button>
        </div>
      </div>
    </div>
  );
}
function ButtonMenu({ setOffCanvas }) {
  return (
    <button
      className="desktop:hidden bg-white/30 backdrop-blur-md absolute right-3 flex  flex-col justify-center  rounded-lg  hover:bg-white"
      onClick={() => setOffCanvas((offCanvas) => !offCanvas)}
    >
      <box-icon name="menu" size="md"></box-icon>
    </button>
  );
}

function NavMenu() {
  return (
    <div className="boxNav desktop:flex justify-end handphone:hidden  w-full">
      <div className="about">
        <a
          href=""
          className="flex text-white hover:text-black text-[1.5rem] py-2 px-5"
        >
          about
        </a>
      </div>
      <div className="createEventBox ">
        <a className="group flex flex-row-reverse text-white text-[1.5rem]  align-middle  py-2 px-5 shadow-sm rounded-md hover:bg-color3 transition-colors">
          <span className="align-middle text-white   group-hover:text-black mx-3">
            create event
          </span>
          <box-icon
            color="white"
            size="md"
            animation="tada-hover"
            name="calendar-event"
          ></box-icon>
        </a>
      </div>
      <div className="loginBox group">
        <button className="align-middle  border border-none text-white bg-color2 border-color3 py-2 px-5  shadow-sm rounded-md text-[1.5rem] hover:bg-color3 group-hover:text-black transition-colors">
          Login
        </button>
      </div>
    </div>
  );
}
export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <nav>
      <div className="flex flex-row justify-between  sm:w-full z-50 align-middle  px-10  py-5  bg-navy   ">
        <Logo />
        <ButtonMenu setOffCanvas={setOffCanvas} />
        <OffCanvas offCanvas={offCanvas} />
        <NavMenu />
      </div>
    </nav>
  );
}
