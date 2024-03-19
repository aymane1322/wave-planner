import React from "react";
import HomeHeader from "../../components/HomeHeader";
import Image from "next/image";

function Events() {
  return (
    <>
      <div className="py-4">
      <HomeHeader height="10%" gridRows="1" items="center"></HomeHeader>
      </div>
      <div className="h-[75%]  flex flex-col items-center relative">
        <div className="h-[50%] w-[90%] bg-yellow-400 rounded-3xl absolute ">
          <Image
            className="rounded-3xl"
            fill
            objectFit="cover"
            src={"/eventPict.jpg"}
            alt="event img"
          ></Image>
          <p className="absolute">text on top1</p>
          <p className="">text on top2</p>
          <p className="">text on top3</p>
        </div>
        <p className="text-myWhite text-[0.6rem] text-center pt-3 pb-2">
          Events nearby
        </p>
      </div>
    </>
  );
}

export default Events;
