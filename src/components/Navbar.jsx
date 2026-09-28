import Logo from "../assets/logo.jpg";
import Navdata from "../data/Navdata";
import Button from "../ui/button";

export default function Navbar() {
  return (
    <nav className="mt-5 w-full">
      <div className="flex items-center justify-between cursor-pointer">
        {/* logo */}
        <figure className="flex items-center">
          <img src={Logo} alt="logo" />
        </figure>

        {/* nav links */}
        <div className="hidden md:flex items-center gap-8 cursor-pointer">
          {Navdata.map((data) => (
            <ul key={data.name}>
              <li>{data.name}</li>
            </ul>
          ))}
        </div>

        {/* button */}
        <div className="hidden md:block">
          <Button variant="filled">Request a quote</Button>
        </div>

        {/* hamburger */}
        <button className="md:hidden">h</button>
      </div>
    </nav>
  );
}
