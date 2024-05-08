import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate =useNavigate();
  return (
    <nav className="flex flex-row justify-between  z-50 align-middle  px-10  py-5  bg-navy  ">
      <div className=" flex flex-row justify-start  ">
        <div className="logo flex">
          <a onClick={() => navigate("/tiketshop.io")} className="text-4xl text-white cursor-pointer" >
            TIKET
          </a>
        </div>

        <div className="searchBox flex">
          <input
            className=" placeholder-italic placeholder-white   bg-color3  border  border-none rounded-lg  w-[50rem] ml-10 py-2 pl-9 pr-3  shadow-sm focus:outline-none focus:border-color3 focus:ring-color3 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
          />
        </div>
      </div>

      <div className="boxNav flex justify-between w-[30rem] ">
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
    </nav>
  );
}
