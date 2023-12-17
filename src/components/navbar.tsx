import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

function Navbar({ idx }: { idx: number }) {
  const [navOpen, setNavOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("absolute bg-transparent");
  const [arsip, setArsip] = useState<boolean>(false);

  const stickNavbar = () => {
    const header = document.querySelector("nav");
    if (header != null) {
      window.scrollY > header.offsetTop
        ? setStickyClass("fixed bg-slate-100 bg-opacity-70 backdrop-blur-sm")
        : setStickyClass("absolute bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <>
      <nav
        className={`${stickyClass} z-50 flex h-20 lg:h-auto w-full items-center justify-between px-7 lg:pt-7 lg:pb-4 transition delay-100 ease-in-out`}
      >
        <button
          type="button"
          className={`${
            navOpen ? "bg-blue-primary" : "bg-transparent"
          } hamburger absolute z-10 h-[40px] w-[40px] cursor-pointer lg:hidden`}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span
            className={`${
              navOpen
                ? "top-[1.2em] h-[2px] rotate-[135deg] transition"
                : "top-[0.7em] h-[3px]"
            } hamburger line absolute left-0 right-0 mx-auto h-[3px] w-[28px] rounded-xl ${
              navOpen ? "bg-white" : "bg-blue-primary"
            } duration-300 ease-in-out`}
          ></span>
          <span
            id="span2"
            className={`${
              navOpen ? "h-[2px] scale-0 transition" : "top-[1.2em] h-[3px]"
            } hamburger line absolute left-0 right-0 mx-auto h-[3px] w-[28px] rounded-xl ${
              navOpen ? "bg-white" : "bg-blue-primary"
            } duration-300 ease-in-out`}
          ></span>
          <span
            id="span3"
            className={`${
              navOpen
                ? "top-[1.2em] h-[2px] rotate-45 transition"
                : "top-[1.7em] h-[3px]"
            } hamburger line absolute left-0 right-0 mx-auto h-[3px] w-[28px] rounded-xl ${
              navOpen ? "bg-white" : "bg-blue-primary"
            } duration-300 ease-in-out`}
          ></span>
        </button>
        <div
          className={`${
            navOpen
              ? "translate-x-0 shadow-lg"
              : "-translate-x-full lg:translate-x-0 shadow-none"
          } absolute left-0 top-0 h-screen w-[90%] bg-white duration-300 ease-in-out md:w-[70%] lg:static lg:block lg:h-auto lg:w-auto lg:bg-transparent lg:py-0 lg:shadow-none`}
        >
          <div className="w-full h-screen lg:h-auto flex flex-col justify-between lg:justify-start px-12 lg:px-0 py-8 lg:py-0">
            <div className="flex flex-col mt-32 gap-8 lg:mt-0 lg:flex-row lg:items-center lg:gap-16 ">
              <img
                src="/assets/itebe.svg"
                alt=""
                className="w-20 h-20 hidden lg:block"
              />
              <NavLink
                to="/"
                className={`${
                  idx == 0 ? "font-bold" : "font-medium"
                } text-[16px] md:text-[20px] font-bold hover:font-bold`}
              >
                Home
              </NavLink>
              <NavLink
                to="/virtual"
                className={`${
                  idx == 1 ? "font-bold" : "font-medium"
                } text-[16px] md:text-[20px] hover:font-bold`}
              >
                3D Virtual Gallery 2022
              </NavLink>
              <div
                onClick={() => setArsip(!arsip)}
                className={`${
                  idx == 2 ? "font-bold" : "font-medium"
                } text-[16px] md:text-[20px] flex items-center cursor-pointer`}
              >
                <p className="hover:font-bold">Arsip </p>
                <span>
                  <IoChevronDownOutline />
                </span>
                {arsip && (
                  <div
                    id="dropdown"
                    className="absolute flex w-fit mt-40 flex-col bg-white shadow-lg bg-opacity-75 rounded-xl"
                  >
                    <NavLink className="py-4 px-6 text-[16px] md:text-[20px] font-normal hover:font-bold hover:bg-gray-300 rounded-t-xl" to={"/arsip"}>
                      Gallery 2022
                    </NavLink>
                    <NavLink className="py-4 px-6 text-[16px] md:text-[20px] font-normal hover:font-bold hover:bg-gray-300 rounded-b-xl" to={"/arsip"}>
                      Gallery 2021
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink
                to="/aboutus"
                className={`${
                  idx == 3 ? "font-bold" : "font-medium"
                } text-[16px] md:text-[20px] font-bold hover:font-bold`}
              >
                About
              </NavLink>
            </div>
            <div className="w-full flex items-center justify-between lg:hidden">
              <img
                src="/assets/itebe.svg"
                alt=""
                className="w-12 h-12 lg:hidden block"
              />
              <img
                src="/assets/desain.svg"
                alt=""
                className="w-20 h-16 lg:hidden block"
              />
            </div>
          </div>
        </div>

        <img
          src="/assets/merdeka.svg"
          alt=""
          className="w-32 h-16 hidden lg:block"
        />
      </nav>
    </>
  );
}

export default Navbar;
