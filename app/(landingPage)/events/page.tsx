import React from "react";
import HomeHeader from "../../components/HomeHeader";
import Image from "next/image";
import SmallEvent from "../../components/SmallEvent";

function Events() {
  return (
    <>
      <div className="h-[10%] w-full overflow-hidden pt-2">
        <HomeHeader gridRows="1" imgPath="/bgSurf.jpg"></HomeHeader>
      </div>
      <div className="h-[75%]  flex flex-col items-center overflow-scroll relative">
        <div className="min-h-[12rem] w-[90%] bg-yellow-400 rounded-3xl absolute ">
          <Image
            className="rounded-3xl"
            fill
            objectFit="cover"
            src={"/eventPict.jpg"}
            alt="event img"
          ></Image>
        </div>
        <div className="min-h-[12rem] w-[90%] z-50 rounded-3xl shadow-md ">
          <div className="flex flex-col justify-end h-full w-full">
            <p className="text-myWhite font-medium pl-2 text-2xl">
              Create event with
            </p>
            <p className="text-myWhite font-medium pl-2 text-2xl">
              your friends
            </p>
            <p className="text-myWhite text-sm  pl-2 pb-3 ">create event now</p>
          </div>
        </div>
        <p className="text-myWhite text-[0.6rem] text-center pt-3 pb-2">
          Events nearby
        </p>
        {/* small Events go her ... */}
        <SmallEvent
          title="Surf with Aymane 🍉"
          adress="Banana Point 😋"
          date="Fri, 08 Jul 2022"
          time="07:00"
          userName="Aymane"
          imgPath="/bgSurf.jpg"
        ></SmallEvent>

        <SmallEvent
          title="Surf with Aymane 🍉"
          adress="Banana Point 😋"
          date="Fri, 08 Jul 2022"
          time="07:00"
          userName="Aymane" 
        ></SmallEvent>

        <SmallEvent
          title="Surf with Aymane 🍉"
          adress="Banana Point 😋"
          date="Fri, 08 Jul 2022"
          time="07:00"
          userName="Aymane"

        ></SmallEvent>
      </div>
    </>
  );
}

export default Events;
