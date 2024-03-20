import React from "react";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";

type HomeHeader ={
    height : string,
    gridRows:string,
    items:string,
    showExtraButtons?: boolean
}
function HomeHeader({height,gridRows,items,showExtraButtons}:HomeHeader) {
  return (
    <div className={`h-[${height}] grid grid-cols-12 grid-rows-${gridRows} items-${items} gap-y-3 justify-center text-center`}>
    <div className="col-start-1 col-end-4 flex justify-evenly">
      <div>
        <Image
          src={"/Vector.svg"}
          alt="drawer icon"
          height={25}
          width={25}
        ></Image>
      </div>
      <div>
        <Image
          src={"/Vector2.svg"}
          alt="drawer icon"
          height={22}
          width={22}
        ></Image>
      </div>
    </div>

    <div className="col-start-4 col-end-10 text-white font-bold">
      Wave Planner
    </div>

    <div className="col-start-10 col-end-13 flex justify-evenly">
      <div>
        <IoMdNotificationsOutline className="text-white text-3xl" />
      </div>
      <div className=" bg-myWhite rounded-full w-7 h-7">rip</div>
    </div>

    {showExtraButtons?
    <div className="col-start-1 row-start-2 col-end-6 flex justify-evenly items-start h-full ">
    <div className="row-start-2 col-start-2 col-span-2 self-start">
      <Image
        src={"/navButton.svg"}
        alt="drawer icon"
        height={35}
        width={35}
      ></Image>
    </div>
    <div className="row-start-2 col-start-4  col-span-2 self-start">
      <Image
        src={"/navButton1.svg"}
        alt="drawer icon"
        height={35}
        width={35}
      ></Image>
    </div>
    <div className="row-start-2 col-start-6 col-span-2 self-start">
      <Image
        src={"/navButton2.svg"}
        alt="drawer icon"
        height={35}
        width={35}
      ></Image>
    </div>
  </div>
    :<></>}
  </div>
  )
}

export default HomeHeader