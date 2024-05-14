import { useState } from "react";
import { Bar, Cross } from "../../assets/Svg";
import { Button } from "../Components";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenuClick = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      <div className="w-full  items-center justify-between py-5 none md:!flex ">
        <div>
          <a href="/">
            <img src="/atomize.svg" alt="" />
          </a>
        </div>
        <nav>
          <ul className=" flex gap-[2.5rem] items-center">
            <li className="navbar-menu ">
              <a className="" href="#">
                Features
              </a>
            </li>
            <li className="navbar-menu ">
              <a href="#">Github</a>
            </li>
            <li className="navbar-menu ">
              <a href="#">For Designers</a>
            </li>
            <li className="navbar-menu ">
              <Button className="bg-[#E1E4E8] font-[500]">Documentation</Button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full flex flex-col z-11  py-5 md:w-auto md:hidden relative">
        <div className="flex justify-between">
          <a href="/">
            <img src="/atomize.svg" alt="" />
          </a>
          <div onClick={handleMenuClick}>{menu ? <Cross /> : <Bar />}</div>
        </div>
        {menu ? (
          <nav className="absolute mt-[2.5rem] bg-white w-full pb-[1.2rem]">
            <ul className=" flex flex-col gap-[2.5rem]  w-full justify-start ">
              <li className="navbar-menu ">
                <a className="" href="#">
                  Features
                </a>
              </li>
              <li className="navbar-menu ">
                <a href="#">Github</a>
              </li>
              <li className="navbar-menu ">
                <a href="#">For Designers</a>
              </li>
              <li className="navbar-menu ">
                <Button className="bg-[#E1E4E8] font-[500]">
                  Documentation
                </Button>
              </li>
            </ul>
          </nav>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export { Navbar };
