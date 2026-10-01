import Logo from "../assets/Logo.jpg";
import Navdata from "../data/Navdata";
import Button from "../ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="mt-2 md:mt-3 w-full h-17 sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between cursor-pointer">
        {/* logo */}
        <figure className="flex items-center">
          <img src={Logo} alt="logo" />
        </figure>

        {/* desktop nav links */}
        <div className="hidden lg:flex items-center gap-8 cursor-pointer">
          {Navdata.map((data) => (
            <ul key={data.name}>
              <li className="font-space">{data.name}</li>
            </ul>
          ))}

          {/* button */}
          <div className="hidden md:block">
            <Button variant="filled">Request a quote</Button>
          </div>
        </div>

        {/* hamburger */}
        <button
          className="block lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <ImCancelCircle /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* mobile nav links */}
      {menuOpen ? (
        <div
          className="flex flex-col gap-10 bg-slate-900  text-white p-10 relative h-100 
        rounded z-[90] 
        lg:hidden items-center mt-8"
        >
          {Navdata.map((data) => (
            <ul key={data.name}>
              <li className="text-lg lg:text-xl font-space">{data.name}</li>
            </ul>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
