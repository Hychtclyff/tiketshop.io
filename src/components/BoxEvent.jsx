export default function Event({ firstEvent, onEvent }) {
  const events = [
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-1" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-2" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-3" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-4" },
    { src: "/tiketshop.io/public/img/20240324100854_65ff99465d799.jpg", alt: "event-5" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-1" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-2" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-3" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-4" },
    { src: "/tiketshop.io/public/img/20240205125720.jpg", alt: "event-5" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-1" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-2" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-3" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-4" },
    { src: "/tiketshop.io/public/img/20240324100854_65ff99465d799.jpg", alt: "event-5" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-1" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-2" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-3" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-4" },
    { src: "/tiketshop.io/public/img/20240324100854_65ff99465d799.jpg", alt: "event-5" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-1" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-2" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-3" },
    { src: "/tiketshop.io/public/img/event1.jpg", alt: "event-4" },
    { src: "/tiketshop.io/public/img/20240324100854_65ff99465d799.jpg", alt: "event-5" },
  ];
  

  const tempEvent = events;
  onEvent(tempEvent);

  return (
    <>
      {events.map((event, index) => {
        const translateX = `translateX(${firstEvent}rem)`;
        return (
          <a
            key={index}
            href="/event"
            style={{ transform: translateX }}
            className={`transition-all duration-1000   event-card shrink-0 bg-gray-200 w-[20rem] h-[20rem] rounded-2xl overflow-hidden drop-shadow-lg mx-5`}
          >
            <header>
              <img src={event.src} alt={event.alt} className="w-[20rem] h-30" />
            </header>
            <main className="p-4">
              <h3>Judul</h3>
              <p>date</p>
              <h5>prize</h5>
            </main>

            <footer className="p-4 border border-t-1 border-t-gray-300">
              <span>penyelenggara</span>
            </footer>
          </a>
        );
      })}
    </>
  );
}
