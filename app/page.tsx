import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-around items-center w-dvw h-dvh">
        <h1 className="text-myWhite font-myFont text-4xl font-bold">
          Wave Planner
        </h1>

        <div className="group relative h-24 w-11/12 cursor-pointer ">
          <div className="absolute -z-40 inset-0 bg-gradient-to-r from-gray-600/50 to-gray-700/50 opacity-90 shadow-md shadow-gray-600 max-w-96 mx-auto  group-hover:from-gray-800/50 group-hover:to-gray-900/50"></div>
          <div className="grid grid-cols-4 place-items-center grid-rows-4">
            <h2 className="text-myWhite font-myFont font-bold text-md col-start-1 col-end-5 ">
              Explore and check in to beach
            </h2>
            <h2 className="text-myWhite font-myFont font-bold text-md row-start-2 col-start-1 col-end-5 ">
              near you
            </h2>
            <p className="text-myWhite font-myFont text-sm row-start-3 col-start-1 col-end-5 ">
              Explore and find interesting beach
            </p>
            <p className="text-myWhite font-myFont text-sm row-start-4 col-start-1 col-end-5">
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
