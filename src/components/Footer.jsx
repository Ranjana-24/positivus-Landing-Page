import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-4xl w-full  mb-5 p-5 md:p-8 lg:p-10">
      <div className="flex flex-col gap-8">
        {/* top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* left */}
          <div className="flex flex-col">
            <h3 className="bg-[#B9FF66] w-fit px-2 h-7 text-center rounded mb-3 text-black">
              Contact us :
            </h3>

            <p className="pb-2">Email: info@positivus.com</p>

            <p className="pb-2">Phone: 555-567-8901</p>

            <p className="max-w-100">
              Address: 1234 Main St Moonstone City, Stardust State 12345
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

        {/* line */}
        <hr className="border-gray-500" />

        {/* bottom */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
