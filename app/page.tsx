import Image from "next/image";
import Link from "next/link";


export default function Home() {

 
  return (
    <main className="w-full h-full sm:hidden">
      <div className="flex flex-col justify-around items-center w-full h-full ">
        <h1 className="text-myWhite font-myFont text-4xl font-bold sm:text-7xl sm:text-slate-50 pb-12">
          Wave Planner
        </h1>
       
        <div className="group relative h-24 w-11/12 cursor-pointer sm:h-32 ">
          <div className="glass"></div>
          <div className="" >
            <Link href={"/login"}>
            <h2 className="text-myWhite font-myFont font-bold text-md pt-3  sm:text-2xl text-center">
              Explore and check in to beach
            </h2>
            <h2 className="text-myWhite font-myFont font-bold text-md row-start-2  sm:text-2xl text-center ">
              near you
            </h2><br />
            <p className="text-myWhite font-myFont text-sm  sm:text-xl text-center">
              Explore and find interesting beach
            </p>
            <p className="text-myWhite font-myFont text-sm  sm:text-xl text-center">
              near you with other peaople!
            </p></Link>
          </div>
        </div>
      </div>
 
      <Image
        className="-z-50 object-cover absolute"
        src={"/bgSurf.jpg"}
        alt="background"
        fill
      />
    </main>
  );
}
