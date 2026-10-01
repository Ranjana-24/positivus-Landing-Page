import Button from "../ui/Button";
import star from "../assets/star.png";

export default function Contact() {
  return (
    <section className="w-full h-auto rounded-[45px] bg-[#F3F3F3] mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left bar */}
        <form className="p-6 md:p-10">
          {/* Checkbox */}
          <div className="flex gap-8 mb-8">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label>Say Hi</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label>Get a Quote</label>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                className="border rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Message</label>
              <textarea
                placeholder="Message"
                className="border rounded-lg p-3 h-32"
              />
            </div>
          </div>

          <Button className="mt-3">Send a Message</Button>
        </form>

        {/* Right bar */}
        <div className="hidden justify-end md:flex items-center">
          <img src={star} alt="star" className="w-173 h-162 mt-5 " />
        </div>
      </div>
    </section>
  );
}
