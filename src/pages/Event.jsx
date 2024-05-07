import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "boxicons";
import { useEffect } from "react";

function Header() {
  return (
    <section className="px-56 py-5 pt-20">
      <div className="information flex justify-center ">
        <div className="information-img w-[50rem] rounded-xl overflow-hidden m-5 shadow-xl flex justify-center align-middle">
          <img src="../../public/img/event1.jpg " alt="" className="" />
        </div>
        <div className="information-schedule w-96 h-96 bg-slate-200 m-5 p-10 shadow-xl rounded-2xl">
          <span>JUDUL</span>
          <div className="info-detail my-14">
            <div className="date">
              <box-icon type="solid" name="calendar" color="blue"></box-icon>
            </div>
            <div className="time">
              <box-icon name="time" color="blue"></box-icon>
            </div>
            <div className="location">
              <box-icon name="map" color="blue"></box-icon>
            </div>
          </div>
          <div className="author border border-t-1 border-gray-500"></div>
        </div>
      </div>
    </section>
  );
}

function Body() {
  const [ticket, setTicket] = useState(false);

  return (
    <section className=" px-56 py-5 pt-5">
      <div className="container justify-center flex ">
        <BodyContent ticket={ticket} setTicket={setTicket} />
        <ShopCart ticket={ticket} />
      </div>
    </section>
  );
}

function ShopCart({ ticket }) {
  return (
    <div className="about-event list w-96 h-96 bg-slate-200 m-5 p-10  shadow-xl rounded-2xl sticky top-16 ">
      <table>
        <thead>
          <tr>
            <td>
              <h3>My Ticket</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-3">NO.</td>
            <td className="px-10">Ticket</td>
            <td className="px-5">@</td>
            <td className="px-5">Prize</td>
          </tr>
          <tr>
            <td className="px-3">1.</td>
            <td className="px-10">{ticket ? "oke" : "ggl"}</td>
            <td className="px-5">1</td>
            <td className="px-5">1.000.000</td>
          </tr>
        </tbody>
      </table>
      <div className="author border border-t-1 border-gray-500 "></div>
      <div className="total justify-end flex">
        <span>1.000.000</span>
      </div>

      <div className="flex justify-end">
        <button className="px-5 py-3 my-5 bg-yellow-400 rounded-xl">Buy</button>
      </div>
    </div>
  );
}
function BodyContent({ ticket, setTicket }) {
  const [currentActive, setActive] = useState(true);

  return (
    <div className="banner-event w-[50rem] m-5  rounded-2xl">
      <NavContent currentActive={currentActive} setActive={setActive} />
      <div className="event-content h-[120vh] p-12">
        {currentActive ? (
          <AboutTicket />
        ) : (
          <Ticket ticket={Ticket} setTicket={setTicket} />
        )}
      </div>
    </div>
  );
}
function NavContent({ setActive, currentActive }) {
  function nextActive() {
    setActive((prevActive) => !prevActive);
  }
  return (
    <div className="navbar sticky top-0  ">
      <button
        className={
          currentActive
            ? "border-8 border-transparent  border-b-4 border-b-blue-900 w-1/2  py-5 rounded-md transition-all duration-100  "
            : "border  border-transparent  border-b-1 border-b-slate-400 w-1/2  py-5 rounded-md transition-all duration-100"
        }
        onClick={!currentActive ? nextActive : undefined}
      >
        DESKRIPSI
      </button>
      <button
        className={
          currentActive
            ? "border border-transparent border-b-1  border-b-slate-400 w-1/2  py-5 rounded-md transition-all duration-100 "
            : "border-8 border-transparent   border-b-4 border-b-blue-900 w-1/2  py-5 rounded-md transition-all duration-100  "
        }
        onClick={currentActive ? nextActive : undefined}
      >
        TICKET
      </button>
    </div>
  );
}

function AboutTicket() {
  return (
    <>
      <div>
        <h3 className="border rounded-md text-lg font-bold border-transparent border-l-4 border-l-blue-900 p-2 my-2">
          Description
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          cupiditate quos harum nesciunt rerum asperiores, unde, quisquam
          dolorum hic, mollitia labore esse quibusdam fugit non dolorem voluptas
          officiis earum beatae odit aliquid enim. Exercitationem et,
          perspiciatis nulla fuga facilis corporis, ut porro consequuntur
          tenetur nesciunt, explicabo vel at harum? Ut.
        </p>
        <h3 className="border rounded-md text-lg font-bold border-transparent border-l-4 border-l-blue-900 p-2 my-2">
          Syarat
        </h3>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            accusantium.
          </li>
        </ul>
        <h1 className="border rounded-md text-lg font-bold border-transparent border-l-4 border-l-blue-900 p-2 my-2">
          Label
        </h1>
        <ul>
          <li>unja</li>
        </ul>
      </div>
    </>
  );
}

function Ticket({ ticket, setTicket }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTicket(count !== 0);
  }, [count]);

  const handleSetTicket = () => {
    setTicket(!ticket);
  };

  function handleCount(btn) {
    btn
      ? setCount((count) => count + 1)
      : setCount((count) => (count ? count - 1 : 0));
  }

  function add() {}
  function min() {}
  return (
    <div>
      <div className="ticket  p-5 w-fit bg-slate-100 rounded-md shadow-md  ">
        <div className="ticket-item-top relative after:content-[''] after:absolute after:h-1 after:w-[40rem]  after:border-dashed after:border-b-2 after:border-gray-600  after:top-[7rem] after:translate-x-2 after:left-0 ">
          <div className="p-2">VVIP</div>
          <div className="p-2">
            Semua pembeli tiket kategori ini mendapatkan Kartu Prioritas Foto.
            Harga belum termasuk pajak dan biaya admin
          </div>
          <div className="p-2 my-5 flex">
            <box-icon name="time" color="red"></box-icon>
            <p className="px-1">Berakhir 30 September 2023 23:00 WIB</p>
          </div>
        </div>
        <div className="ticket-item-bot flex justify-between">
          <div className="ticket-prize">1.000.000</div>
          <div className="ticket-status">
            <div className="ticket-controler flex justify-around">
              <button onClick={() => handleCount(false)}>
                <box-icon name="minus-circle"></box-icon>
              </button>
              <input
                type="text"
                value={count}
                disabled
                className="w-5 text-center"
              />
              <button onClick={() => handleCount(true)}>
                <box-icon name="plus-circle"></box-icon>
              </button>
            </div>
            <p>ON GOING</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Event() {
  return (
    <>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </>
  );
}
