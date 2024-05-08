import { useState, useEffect } from "react";
import "boxicons";
import "../App.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BoxEvent from "../components/BoxEvent";

function LazyLoad() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalDuration = 5000;

  const slides = [
    { src: "/tiketshop.io/img/1710747974_EsrPUP.jpg", alt: "banner-1" },
    { src: "/tiketshop.io/img/1710821381_3gvZ60.jpg", alt: "banner-2" },
    { src: "/tiketshop.io/img/1711433074_WACB8D.jpg", alt: "banner-3" },
  ];

  function nextSlide() {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    if (currentSlide <= 0) {
      return;
    } else {
      setCurrentSlide((currentSlide - 1) % slides.length);
    }
  }
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, intervalDuration);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <section className="px-56 py-10 pt-20">
      <div className="lazy-loaded relative group ">
        <div className="banner-box relative rounded-2xl overflow-hidden flex flex-row ">
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index == currentSlide
                    ? "block  animate-[opacity_1s] w-[102rem] h-[20rem]  "
                    : "opacity-0 hidden transition-all duration-1000"
                }
              >
                <img src={slide.src} alt={slide.alt} />
              </div>
            );
          })}

          <div className="btn-nav">
            <button
              onClick={nextSlide}
              className=" transition-all  -translate-y-2/4 duration-10 absolute top-2/4 right-5 flex rounded-full bg-white border-none opacity-0 group-hover:opacity-100 group-hover:right-0"
            >
              <box-icon name="chevron-right" size="lg"></box-icon>
            </button>
            <button
              onClick={prevSlide}
              className=" transition-all -translate-y-2/4  duration-10 absolute top-2/4 left-5 flex rounded-full bg-white border-none opacity-0 group-hover:opacity-100 group-hover:left-0"
            >
              <box-icon name="chevron-left" size="lg"></box-icon>
            </button>
          </div>

          <div className="nav-banner absolute bottom-0 left-2/4    ">
            {slides.map((slide, index) => {
              return (
                <button
                  key={index}
                  className={
                    index == currentSlide
                      ? "transition-all  duration-10 mx-0.5  left-2/4 align-middle bg-gray-400   w-5 h-2  p-1 rounded-full"
                      : "transition-all  duration-10 mx-0.5  left-2/4 align-middle bg-gray-400   w-2 h-2  p-1 rounded-full"
                  }
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Event() {
  const [firstEvent, setFirstEvent] = useState(0);
  const [page, setPage] = useState(1);

  const eventsPerPage = 4;
  const maxpage = (events) => Math.ceil(events.length / eventsPerPage);

  function nextEvent() {
    if (page >= maxpage) {
      return;
    } else {
      setFirstEvent(firstEvent - 90);
      setPage(page + 1);
    }
  }
  function prevEvent() {
    if (firstEvent == 0) {
      return;
    } else {
      setFirstEvent(firstEvent + 90);
      setPage(page - 1);
    }
  }

  return (
    <section className="px-56 py-10 pt-5">
      <h1 className="font-bold text-5xl my-5">Event</h1>
      <div className="event-box flex relative   rounded-3xl   p-5  overflow-hidden group">
        <BoxEvent firstEvent={firstEvent} onEvent={maxpage} />
        <div className="btn-nav">
          <button
            onClick={nextEvent}
            className=" transition-all  -translate-y-2/4 duration-10 absolute top-2/4 right-5 flex rounded-full bg-white border-none opacity-0 group-hover:opacity-100 group-hover:right-0"
          >
            <box-icon name="chevron-right" size="lg"></box-icon>
          </button>
          <button
            onClick={prevEvent}
            className=" transition-all -translate-y-2/4  duration-10 absolute top-2/4 left-5 flex rounded-full bg-white border-none opacity-0 group-hover:opacity-100 group-hover:left-0"
          >
            <box-icon name="chevron-left" size="lg"></box-icon>
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="/tiketshop.io/ticket"
          className="transition-all duration-300  p-3 bg-slate-100 border border-color2 border-solid rounded-lg hover:bg-color2 hover:text-white"
        >
          Selengkapnya
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <LazyLoad />
      <Event />
      <Footer />
    </>
  );
}
