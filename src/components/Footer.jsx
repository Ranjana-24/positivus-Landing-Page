import Button from "../ui/Button";
export default function Footer() {
  return (
    <>
    <footer className="bg-black  text-white rounded-4xl w-full h-auto mb-5">
    <div className=" mt-10 flex justify-center items-center">
        <div className = "grid grid-cols-2 p-5 ">
            {/* left */}
            <div className="w-1/2 flex flex-col">
              <h3 className="bg-[#B9FF66] w-full md:w-31 h-7 text-center rounded mb-2 text-black" >
                Contact us :</h3>
              <p className="pb-2">Email: info@positivus.com</p>
              <p className="pb-2">Phone: 555-567-8901</p>
              <p className="pb-2">Address: 1234 Main St 
Moonstone City, Stardust State 12345</p>
            </div>
            {/* right */}
            <div className="w-1/2 flex flex-row mt-3 ">
            <div className="bg-[#191A23] flex flex-row items-center gap-2 
            rounded-2xl md:px-3">
                <Button variant="filled" >Email</Button>
                <Button variant="green">Subscribe to news</Button>
                </div>
            </div>
        </div>
        
 
    </div>
     {/* bottom */}
        <hr className="text-2xl text-gray h-3"></hr>
      <div className="flex">
        <p className="pr-5 px-3">© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
        </div>
        </footer>
    </>
  )}
