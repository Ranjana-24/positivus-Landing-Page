import Navdata from "../data/Navdata";
import facebook from "../assets/footerNavIcons/facebook.png";
import twitter from "../assets/footerNavIcons/twitter.png";
import linkedin from "../assets/footerNavIcons/linkedin.png";
import Logo from "../assets/footerLogo.png";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-4xl w-full h-auto p-3 mt-5 mb-5">
      {/* top */}
      <nav className="mt-2 md:mt-3 w-full">
        <div className="flex items-center justify-between cursor-pointer px-2 sm:px-4 md:px-6">
          
          {/* logo */}
          <figure className="flex items-center">
            <img
              src={Logo}
              alt="logo"
              className="w-28 sm:w-32 md:w-36 lg:w-40"
            />
          </figure>

          {/* nav links */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-8 underline">
            {Navdata.map((data) => (
              <ul key={data.name}>
                <li>{data.name}</li>
              </ul>
            ))}
          </div>

          {/* icons */}
          <figure className="hidden lg:block">
            <div className="flex flex-row gap-2">
              <img
                src={facebook}
                alt="facebook"
                className="w-5 h-5"
              />
              <img
                src={twitter}
                alt="twitter"
                className="w-5 h-5"
              />
              <img
                src={linkedin}
                alt="linkedin"
                className="w-5 h-5"
              />
            </div>
          </figure>
        </div>
      </nav>

      {/* middle section */}
      <div className="mt-8 sm:mt-10 flex justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center p-3 sm:p-5 md:p-10">

          {/* left */}
          <div className="w-full flex flex-col text-gray-400">
            <h3 className="bg-[#B9FF66] w-31 h-7 text-center rounded mb-3 text-black">
              Contact us :
            </h3>

            <p className="pb-2 text-sm sm:text-base">
              Email: info@positivus.com
            </p>

            <p className="pb-2 text-sm sm:text-base">
              Phone: 555-567-8901
            </p>

            <p className="pb-2 text-sm sm:text-base">
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>

          {/* right */}
          <div className="w-full flex items-start md:justify-end">
            <div className="bg-[#191A23] w-full max-w-125 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-2xl p-4">
              <Button variant="filled" className="w-full sm:w-auto">
                Email
              </Button>

              <Button variant="green" className="w-full sm:w-auto">
                Subscribe to news
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* line */}
      <hr className="border-gray-500" />

      {/* bottom */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0 p-4 text-gray-400 text-center md:mt-13">
        <p className="sm:pr-5 text-sm sm:text-base">
          © 2023 Positivus. All Rights Reserved.
        </p>

        <p className="text-sm sm:text-base">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
}