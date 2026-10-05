import WorkingProcessData from "../data/WorkingData";
import plusIcon from "../assets/plusIcon.png";
import { useState } from "react";
import minusIcon from "../assets/minusIcon.png";

export default function WorkingProcess() {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full mt-10 h-auto">
      {WorkingProcessData.map((process, index) => (
        <div
          key={index}
          className={`w-full rounded-[45px] border border-b-4 mb-5 px-10 py-8 ${
            open === index ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
          }`}
        >
          {/* Header */}
          <div className="w-full flex items-center justify-between">
            {/* Title */}
            <div className="flex items-center gap-6">
              <p className="hidden md:block font-space font-medium text-3xl md:text-6xl leading-none">
                {process.head}
              </p>

              <p className="font-space font-medium text-2xl md:text-3xl leading-none">
                {process.title}
              </p>
            </div>

            {/* Plus Icon */}
            <button>
              {open === index ? (
                <img
                  src={minusIcon}
                  alt="minus"
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => setOpen(null)}
                />
              ) : (
                <img
                  src={plusIcon}
                  alt="plus"
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => setOpen(index)}
                />
              )}
              {/* <img
                src={plusIcon}
                alt="plus"
                className="w-14 h-14 cursor-pointer"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
              /> */}
            </button>
          </div>

          {/* Detailed */}
          {open === index && (
            <div className="mt-6 border-t border-gray-400 pt-6">
              <p className="font-space text-lg md:text-xl max-w-4xl">
                {process.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
