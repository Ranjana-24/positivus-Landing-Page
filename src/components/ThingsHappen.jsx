import Frame from "../assets/Frame.png"
import Button from "../ui/Button";
export default function ThingsHappen() {
  return (
    <>
    <div className="w-full max-w-[1240px] min-h-[347px] border rounded-[45px] mt-10
        bg-[#F3F3F3] grid grid-cols-1 lg:grid-cols-2
        gap-8 lg:gap-[275px] px-6 py-8 lg:px-8 lg:py-0">
            <div className="flex h-full items-center mx-8">
       <div className = "max-w-[500px] h-[227px] gap-[26px] items-center ">
         <h3 className="font-[Space_Grotesk] font-medium text-xl
          text-[30px] h-9 w-[500px]
         leading-[100%]"
         >Let’s make things happen</h3>
         <p className="max-w-125 font-[Space_Grotesk] font-normal leading-[100%] pt-2 text-[18px]">
            Contact us today to learn more about how our digital marketing services can 
            help your business grow and succeed online.
            </p>
            <Button variant="filled"
            className="w-72 h-15 mt-3 rounded-[14px]" >Get your free proposal</Button>
       </div>
       </div>
       <div >
          <img src={Frame} alt="frame" className="h-88 md:h-99 w-124 w-[494px] "/>
       </div>
    </div>
    </>
  )}