import amazon from "../assets/websites/amazon.png";
import dribble from "../assets/websites/dribble.png";
import hubspot from "../assets/websites/hubspot.png";
import notion from "../assets/websites/notion.png";
import netflix from "../assets/websites/netflix.png";
import zoom from "../assets/websites/zoom.png";
export default function Websites() {
  return (
    <>
      <div className="w-full">
        <figure
          className="flex  mt-10 md:mt-20 flex-wrap gap-5 
      items-center  md:flex-row md:gap-20  "
        >
          <img src={amazon} className=" w-28 h-10 md:w-31 md:h-12 brightness-0"></img>
          <img src={dribble} className="w-28 h-10 md:w-31 md:h-12"></img>
          <img src={hubspot} className="w-28 h-10 md:w-31 md:h-12 brightness-0"></img>
          <img src={notion} className="w-28 h-10 md:w-31 md:h-12"></img>
          <img src={netflix} className="w-28 h-10 md:w-31 md:h-12 brightness-0"></img>
          <img src={zoom} className="w-28 h-10 md:w-31 md:h-12 brightness-0"></img>
        </figure>
      </div>
    </>
  );
}
