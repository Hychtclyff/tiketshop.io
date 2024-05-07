import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BoxEvent from "../components/BoxEvent";

function Log() {
  console.log("okeeee");
}

function FilterList({ SetFilterIsOn, onFilter, nameFilter, data }) {
  const [collapse, setCollapse] = useState(false);

  function handleFilter(key) {
    const currentFilters = data[key];
    onFilter(currentFilters);
  }

  return (
    <div className="container text-center relative ">
      <div className="name-filter py-3 flex justify-center text-left  ">
        <h3>{nameFilter}</h3>
      </div>

      <div className="main-filter ">
        <div className="icon-collapss absolute top-8  right-3 -translate-y-1/2    ">
          <button className=" " onClick={() => setCollapse((open) => !open)}>
            {collapse ? (
              <box-icon type="solid" size="sm" name="chevron-up"></box-icon>
            ) : (
              <box-icon type="solid" size="sm" name="chevron-down"></box-icon>
            )}
          </button>
        </div>

        <div
          className={` list-location relative text-center  transition-all duration-700 ease-in-out  w-full overflow-hidden border-transparent border-b-[1px]    border-b-gray-500 my-1 ${
            collapse ? "h-64 " : "h-0 "
          }`}
        >
          <div className="overflow-hidden overflow-y-scroll overflow-x-hidden h-full my-">
            <ul className="relative ">
              {data.map((data, key) => {
                return (
                  <li
                    key={key}
                    className="overflow-hidden hover:bg-white transition duration-500 hover:shadow-sm  border-transparent border-2 hover:border-blue-300 py-3 px-7 rounded-md m-1   "
                  >
                    <button
                      className="w-full"
                      onClick={() => handleFilter(key)}
                    >
                      {data}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterIsTrue({ filters, onFilter, nameFilter, isFilter }) {
  function handleFilterIsTrue() {
    const currentFilter = false;
    onFilter(currentFilter);
  }
  return (
    <div className="relative  px-10 p-3 rounded-lg  m-1 border-2 shadow-lg ">
      <div>{nameFilter} </div>
      <div className="font-bold">{isFilter}</div>
      <div className="btn-close absolute top-1 right-5   rounded-full w-7 h-7 flex justify-center align-middle  text-red-500 text-2xl">
        <button onClick={() => handleFilterIsTrue()}>x</button>
      </div>
    </div>
  );
}
function Filter() {
  const [useFilter, setUseFilter] = useState(Array(3).fill(false));
  const [collapse, setCollapse] = useState(false);
  const [filterIsOn, SetFilterIsOn] = useState(false);
  const Filters = [
    { name: "Lokasi", data: ["Jakarta", "Padang", "Medan", "Bandung"] },
    { name: "Waktu", data: ["Pagi", "Siang", "Sore", "Malam"] },
    { name: "Harga", data: ["Berbayar", "Gratis"] },
  ];

  function onFilter(filter, key) {
    const onFilter = useFilter.slice();
    onFilter[key] = filter;
    setUseFilter(onFilter);
  }

  const listFilters = Filters.map((aFilter, i) => {
    return (
      <div className={`${aFilter.name}  `} key={i}>
        {useFilter[i] ? (
          <FilterIsTrue
            nameFilter={aFilter.name}
            isFilter={useFilter[i]}
            onFilter={(filter) => onFilter(filter, i)}
            data={aFilter.data}
          />
        ) : (
          <FilterList
            nameFilter={aFilter.name}
            SetFilterIsOn={SetFilterIsOn}
            onFilter={(filter) => onFilter(filter, guti)}
            data={aFilter.data}
          />
        )}
      </div>
    );
  });

  return (
    <div className="relative container w-1/4 border border-slate-500 px-10 py-5 ">
      <div className="sticky top-10">
        <header className="text-center font-bold text-2xl">
          <h3>Filter</h3>
        </header>
        <main>
          <div className="list-filter  ">{listFilters}</div>
        </main>
      </div>
    </div>
  );
}
function Content() {
  const [firstEvent, setFirstEvent] = useState(0);
  function maxpage(event) {
    const temp = event;
  }

  return (
    <div className=" w-full  grid grid-cols-4 grid-flow-row gap-10 p-10  ">
      <BoxEvent firstEvent={firstEvent} onEvent={maxpage} />
    </div>
  );
}
function Body() {
  return (
    <div className="Body flex  ">
      <Filter />
      <Content />
    </div>
  );
}

export default function Ticket() {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}
