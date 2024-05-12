/* eslint-disable react/prop-types */
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BoxEvent from "../components/BoxEvent";

function Log() {
  console.log("okeeee");
}

function FilterList({
  onFilter,
  nameFilter,
  data,
  logoFilter,
  setOpenFilter,
  openFilter,
}) {
  const [collapse, setCollapse] = useState(false);

  function handleFilter(key) {
    const currentFilters = data[key];
    onFilter(currentFilters);
  }
  return (
    <div className=" text-center relative ">
      <div className="name-filter py-3 flex justify-center text-left  ">
        <div
          className={`${
            openFilter ? "handphone:block" : "handphone:hidden"
          } desktop:block`}
        >
          {nameFilter}
        </div>
        <div
          className={`${
            openFilter ? "handphone:hidden" : "handphone:block"
          } desktop:hidden handphone:block`}
        >
          <IconFilter open={setOpenFilter}>
            <box-icon name={logoFilter}></box-icon>
          </IconFilter>
        </div>
      </div>

      <div className="main-filter  ">
        <div
          className={`${
            openFilter ? "handphone:block" : "handphone:hidden"
          } icon-collapss absolute top-8  right-3 -translate-y-1/2  desktop:block  `}
        >
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
          <div
            className={`${
              openFilter ? "handphone:block" : "handphone:hidden"
            } overflow-hidden overflow-y-scroll overflow-x-hidden h-full my-1 desktop:block`}
          >
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

function FilterIsTrue({
  onFilter,
  nameFilter,
  isFilter,
  openFilter,
  setOpenFilter,
  logoFilter,
}) {
  function handleFilterIsTrue() {
    const currentFilter = false;
    onFilter(currentFilter);
  }
  return (
    <>
      <div
        className={`relative  px-10 p-3 rounded-lg  m-1 border-2 shadow-lg ${
          openFilter ? "handphone:block" : "handphone:hidden"
        } desktop:block`}
      >
        <div>{nameFilter}</div>
        <div className="font-bold">{isFilter}</div>
        <div className="btn-close absolute top-1 right-5   rounded-full w-7 h-7 flex justify-center align-middle  text-red-500 text-2xl">
          <button onClick={() => handleFilterIsTrue()}>x</button>
        </div>
      </div>

      <div>
        <div
          className={`${
            openFilter ? "handphone:hidden" : "handphone:block"
          } desktop:hidden handphone:block flex justify-center`}
        >
          <IconFilter open={setOpenFilter}>
            <box-icon name={logoFilter} color="blue"></box-icon>
          </IconFilter>
        </div>
      </div>
    </>
  );
}

function Filter() {
  const [useFilter, setUseFilter] = useState(Array(3).fill(false));
  const [collapse, setCollapse] = useState(false);
  const [filterIsOn, SetFilterIsOn] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const Filters = [
    {
      name: "Lokasi",
      logo: `map`,
      data: ["Jakarta", "Padang", "Medan", "Bandung"],
    },
    { name: "Waktu", logo: "time", data: ["Pagi", "Siang", "Sore", "Malam"] },
    { name: "Harga", logo: "wallet", data: ["Berbayar", "Gratis"] },
  ];

  function onFilter(filter, key) {
    const onFilter = useFilter.slice();
    onFilter[key] = filter;
    setUseFilter(onFilter);
  }

  function handleClose() {
    setOpenFilter((open) => !open);
    setCollapse((open) => !open);
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
            openFilter={openFilter}
            logoFilter={aFilter.logo}
            SetFilterIsOn={SetFilterIsOn}
          />
        ) : (
          <FilterList
            nameFilter={aFilter.name}
            setOpenFilter={setOpenFilter}
            logoFilter={aFilter.logo}
            SetFilterIsOn={SetFilterIsOn}
            openFilter={openFilter}
            onFilter={(filter) => onFilter(filter, i)}
            data={aFilter.data}
          />
        )}
      </div>
    );
  });
  return (
    <div
      className={`${
        openFilter ? "handphone:w-1/2" : "handphone:w-10"
      } relative container desktop:w-1/4  border border-slate-500 handphone:p-0 transition-all desktop:px-10 py-5 overflow-hidden `}
    >
      <div className="button-close sticky top-10 ">
        <div
          className={`relative p-2 desktop:hidden ${
            openFilter ? "handphone:block" : "handphone:hidden"
          }`}
        >
          <button
            onClick={handleClose}
            className="absolute -top-2 right-3 text-red-400 font-bold text-2xl"
          >
            x
          </button>
        </div>

        <div>
          <header className="text-center font-bold text-2xl ">
            <div
              className={`${
                openFilter ? "handphone:block" : "handphone:hidden"
              }  desktop:block `}
            >
              Filter
            </div>
            <div
              className={`${
                openFilter ? "handphone:hidden" : "handphone:block"
              }  desktop:hidden`}
            >
              <IconFilter open={setOpenFilter}>
                <box-icon name="filter"></box-icon>
              </IconFilter>
            </div>
          </header>
          <main>
            <div className={`list-filter`}>{listFilters}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

function IconFilter({ children, open }) {
  return (
    <>
      <button
        onClick={() => open((open) => !open)}
        className={` py-2  rounded-lg px-2 `}
      >
        {children}
      </button>
    </>
  );
}

function Content() {
  const [firstEvent, setFirstEvent] = useState(0);
  function maxpage(event) {
    const temp = event;
  }

  return (
    <div className=" w-full   desktop:grid-cols-3 tablet:grid-cols-2 handphone:grid-cols-1 grid-flow-row  handphone:gap-5  handphone:py-5  grid ">
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
    <div className="overflow-hidden">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
