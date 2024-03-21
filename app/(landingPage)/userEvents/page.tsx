import React from "react";
import HomeHeader from "../../components/HomeHeader";
import SmallEvent from "../../components/SmallEvent";
import Image from "next/image";

function Page() {
  return (
    <>
      <div className="h-[10%] w-full overflow-hidden pt-2">
        <HomeHeader gridRows="1" imgPath="/bgSurf.jpg"></HomeHeader>
      </div>
      <div className="h-[90%]  flex flex-col items-center overflow-scroll relative">
        <Image className="fixed bottom-7 right-4 z-50" src={"/addEvent.png"} alt="Button" width={120} height={120}></Image>
        <h1 className="text-white text-left w-full text-3xl pl-2 font-myFont font-bold pb-4">
          Your events
        </h1>
        <SmallEvent
          title="Surf with FaLFol 🎶"
          adress="Spider 🕷"
          date="21/03/2024"
          time="06:10"
          userName="FaLfoL"
          edit
          imgPath="/bgSurf.jpg"
        ></SmallEvent>
        <SmallEvent
          title="Surf with FaLFol 🎶"
          adress="Spider 🕷"
          date="21/03/2024"
          time="06:10"
          userName="FaLfoL"
          edit
          imgPath="/bgSurf.jpg"
        ></SmallEvent>
        <SmallEvent
          title="Surf with FaLFol 🎶"
          adress="Spider 🕷"
          date="21/03/2024"
          time="06:10"
          userName="FaLfoL"
          edit
          imgPath="/bgSurf.jpg"
        ></SmallEvent>
        <SmallEvent
          title="Surf with FaLFol 🎶"
          adress="Spider 🕷"
          date="21/03/2024"
          time="06:10"
          userName="FaLfoL"
          edit
          imgPath="/bgSurf.jpg"
        ></SmallEvent>
        <SmallEvent
          title="Surf with FaLFol 🎶"
          adress="Spider 🕷"
          date="21/03/2024"
          time="06:10"
          userName="FaLfoL"
          edit
          imgPath="/bgSurf.jpg"
        ></SmallEvent>
      </div>
    </>
  );
}

export default Page;
