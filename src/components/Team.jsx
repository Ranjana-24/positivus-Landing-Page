import TeamData from "../data/TeamData";
import Button from "../ui/Button";
export default function Team() {
  return (
    <>
      <section className="w-full  mt-10 ">
        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
          {TeamData.map((team) => (
            <div
              key={team.name}
              className="border border-b-4 w-full h-auto md:h-83 rounded-[45px] items-center p-7"
            >
              {/* Profile */}
              <div className="flex flex-row gap-10   ">
                {/* Image */}
                <div>
                  <img src={team.image} alt={team.name} />
                </div>

                {/* Name and Title */}
                <div className="mt-8">
                  <h3 className="font-space">{team.name}</h3>

                  <p className="font-space">{team.title}</p>
                </div>
              </div>
              <hr className="text-2xl text-gray h-4 mt-3"></hr>
              {/* Content */}
              <div className=" mt-10 md:mt-10 h-auto">
                <p className="h-auto font-space">{team.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex  md:justify-end lg:justify-end mt-3">
          <Button
            className=" w-full lg:w-67 h-12 md:h-17 rounded-[14px] font-space
           font-normal text-[20xl]"
          >
            See all team
          </Button>
        </div>
      </section>
    </>
  );
}
