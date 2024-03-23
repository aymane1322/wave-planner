import React from "react";
import Image from "next/image";
import { IoIosArrowBack, IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import Disconnect from "./Disconnect";

type HomeHeader = {
  gridRows: string,
  imgPath?:string,
  showExtraButtons?: boolean;
  showBackArrow?:boolean
};
function HomeHeader({ gridRows, showExtraButtons ,imgPath ,showBackArrow}: HomeHeader) {
  return (
    <div
      className={`h-[20%] grid grid-cols-12 grid-rows-@${gridRows} items-end gap-y-3 justify-center text-center `}
    >
      <div className="col-start-1 col-end-4 flex justify-evenly items-end ">
        <div>
          {showBackArrow?<Link href={"/home"}>
          <IoIosArrowBack className=' text-myWhite absolute  text-4xl top-[0.6rem] left-0  ' />
          <div className="w-4"></div>
          </Link>:<Image
          src={"/Vector.svg"}
          alt="drawer icon"
          height={25}
          width={25}
        ></Image>}
        </div>
        <div>
          <Link href={"/userEvents"}>
            <Image 
              src={"/Vector2.svg"}
              alt="drawer icon"
              height={22}
              width={22}
            ></Image>
          </Link>
        </div>
      </div>

      <div className="col-start-4 col-end-10 text-white font-bold">
        Wave Planner
      </div>

      <div className="col-start-10 col-end-13 flex justify-evenly ">
        <div>
          <IoMdNotificationsOutline className="text-white text-3xl" />
        </div>
        <div className="text-white  ring-white rounded-full w-7 h-7 flex items-center justify-center overflow-hidden ">
          <Disconnect imgPath={imgPath}/>
          {/* user disconnect from her .... */}
        </div>
      </div>

      {showExtraButtons ? (
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
      ) : (
        <></>
      )}
    </div>
  );
}

export default HomeHeader;
