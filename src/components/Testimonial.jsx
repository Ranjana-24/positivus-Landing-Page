import TestimonialData from "../data/TestimonialData";

export default function Testimonial() {
    return (
        <section className="w-full bg-[#191A23] text-white h-156 rounded-[45px] mt-10 overflow-hidden">

            <div className="flex gap-10 p-20 w-max">

                {TestimonialData.map((testimonial) => (
                    <div key={testimonial.content} className="w-151">

                        {/* Testimonial Box */}
                        <div className="w-151 h-66
                            border border-[#B9FF66]
                            rounded-[45px]
                            px-13 py-12
                            font-[Space-Grotesk]">

                            <p className="text-[18px] font-normal leading-[1.35]">
                                {testimonial.content}
                            </p>

                        </div>

                        {/* Author */}
                        <div className="ml-20 mt-10 font-[Space-Grotesk]">
                            <h4 className="text-[#B9FF66] text-[18px]">
                                John Smith
                            </h4>

                            <p className="text-[18px]">
                                Marketing Director at XYZ Corp
                            </p>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}