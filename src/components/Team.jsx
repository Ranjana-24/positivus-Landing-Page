import TeamData from "../data/TeamData";
import Button from "../ui/Button";
export default function Team() {
  return (
    <>
      <section className="w-full  mt-10 ">
        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] ">
          {TeamData.map((team) => (
            <div
              key={team.name}
              className="border border-b-4 w-full h-83 rounded-[45px] items-center p-7"
            > 
              {/* Profile */}
              <div className="flex flex-row gap-10   ">
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
              <hr className="text-2xl text-gray h-4 mt-3"></hr>
              {/* Content */}
              <div className=" mt-10 md:mt-10">
                <p>{team.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex  md:justify-end lg:justify-end mt-3">
          <Button
            className="w-67 h-12 md:h-17 rounded-[14px] font-[Space_Grokset]
           font-normal text-[20xl]"
          >
            see all team
          </Button>
        </div>
      </section>
    </>
  );
}
