import React from "react";
import BigEvent from "../../components/BigEvent";
import HomeHeader from "../../components/HomeHeader";

function Home() {
  return (
    <>
    <HomeHeader  gridRows="2"  showExtraButtons imgPath="/bgSurf.jpg"></HomeHeader>
    <div className="bg-slate-200 h-[65%] w-full overflow-scroll rounded-t-[2.3rem] flex flex-col items-center">
      <p className="text-sm pt-3 pb-2 font-bold text-black text-center">
        Hot events This week 🔥
      </p>
      <BigEvent
        userName="Aymane"
        date="Wed, 27 July"
        title="Surf with Aymane"
        adress="Banana Point 😋"
        imgPath="/image.png"
      ></BigEvent>
    </div>
    </>
  );
}

export default Home;
