import TeamData from "../data/TeamData";
import Button from "../ui/Button";
export default function Team() {
  return (
    <>
      <section className="w-full  mt-10  px-5">
        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
          {TeamData.map((team) => (
            <div
              key={team.name}
              className="border w-97 h-83 rounded-[45px] border-black p-7"
            >
              {/* Profile */}
              <div className="flex flex-row gap-10 border-b-2  ">
                {/* Image */}
                <div>
                  <img src={team.image} alt={team.name} />
                </div>

                {/* Name and Title */}
                <div className="mt-8">
                  <h3 className="">{team.name}</h3>

                  <p className="">{team.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="mt-16">
                <p>{team.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-3">
          <Button
            className="w-[269px] h-17 rounded-[14px] font-[Space_Grokset]
           font-normal text-[20xl]"
          >
            see all team
          </Button>
        </div>
      </section>
    </>
  );
}
