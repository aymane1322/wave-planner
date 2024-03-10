import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-4/6">
      <div className="flex flex-col justify-around items-center w-full h-full ">
        <h1 className="text-myWhite font-myFont text-4xl font-bold sm:text-7xl sm:text-slate-50">
          Wave Planner
        </h1>
        <div className="group relative h-24 w-11/12 cursor-pointer sm:h-32 ">
          <div className="glass"></div>
          <div className="grid grid-cols-4 place-items-center grid-rows-4">
            <h2 className="text-myWhite font-myFont font-bold text-md col-start-1 col-end-5 sm:text-2xl">
              Explore and check in to beach
            </h2>
            <h2 className="text-myWhite font-myFont font-bold text-md row-start-2 col-start-1 col-end-5 sm:text-2xl ">
              near you
            </h2>
            <p className="text-myWhite font-myFont text-sm row-start-3 col-start-1 col-end-5 sm:text-xl">
              Explore and find interesting beach
            </p>
            <p className="text-myWhite font-myFont text-sm row-start-4 col-start-1 col-end-5 sm:text-xl">
              near you with other peaople!
            </p>
          </div>
        </div>
      </div>
      <Image
        className="-z-50 object-cover absolute"
        src={"/bgSurf.jpg"}
        alt="background"
        layout="fill"
      />
    </main>
  );
}
