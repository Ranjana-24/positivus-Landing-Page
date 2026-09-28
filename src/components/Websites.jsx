import amazon from "../assets/websites/amazon.png";
import dribble from "../assets/websites/dribble.png";
import hubspot from "../assets/websites/hubspot.png";
import notion from "../assets/websites/notion.png";
import netflix from "../assets/websites/netflix.png";
import zoom from "../assets/websites/zoom.png";
export default function Websites() {
  return (
    <>
      <figure className="h-12 max-w-[1440px] flex mt-70 flex-wrap gap-12 
      items-center md:mt-2 md:flex-row md:gap-20 space-between  ">
        <img src={amazon} className="w-31 h-12 brightness-0"></img>
        <img src={dribble} className="w-31 h-12"></img>
        <img src={hubspot} className="w-31 h-12 brightness-0"></img>
        <img src={notion} className="w-31 h-12"></img>
        <img src={netflix} className="w-31 h-12 brightness-0"></img>
        <img src={zoom} className="w-31 h-12 brightness-0"></img>
      </figure>
    </>
  );
}
