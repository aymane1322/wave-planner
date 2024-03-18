import React from "react";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 sm:hidden">
      <div className="h-[20%] grid grid-cols-12 grid-rows-2 items-end gap-y-3 justify-center text-center">
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
      </div>
      {children}
      <div className="bg-slate-200 h-[15%] w-full flex flex-col  items-center">
        <div className="bg-white mt-1 w-[95%] h-[80%] rounded-full shadow-md flex justify-center items-center gap-9">
          <Image 
            src={"/homeButton.png"}
            alt="home icon"
            height={90}
            width={90}
          ></Image>
          <Image 
            src={"/Group2.svg"}
            alt="events icon"
            height={20}
            width={20}
          ></Image>
          <Image 
            src={"/Group1.svg"}
            alt="groups icon"
            height={20}
            width={20}
          ></Image>
          <AiOutlineMessage className="text-myBlue text-2xl" />
        </div>
      </div>
    </main>
  );
}

export default layout;
