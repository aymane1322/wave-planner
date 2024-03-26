import React from "react";
import BigEvent from "../../components/BigEvent";
import HomeHeader from "../../components/HomeHeader";
import HomeFooter from "../../components/HomeFooter";
import HomeEvent from "../../components/HomeEvent";
import { fetchAllEvents } from "../../backend/fetchAllEvents";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function  Home() {
  // const {isAuthenticated} = getKindeServerSession()
  // const isauth = await isAuthenticated()
  // if(!isauth){
  //   redirect("/login")
  // }
  let allEvents = await fetchAllEvents()
  return (
    <>
    <div className="h-[20%] w-full  pt-5 ">
    <HomeHeader  gridRows="2"  showExtraButtons imgPath="/bgSurf.jpg"></HomeHeader>
    </div>
    <div className="bg-slate-200 h-[65%] w-full overflow-scroll rounded-t-[2.3rem] flex flex-col items-center ">
      <p className="text-sm pt-3 pb-2 font-bold text-black text-center">
        Hot events This week 🔥
      </p>
      <HomeEvent data={allEvents}/>
    </div>
    <HomeFooter></HomeFooter>
    </>
  );
}

export default Home;
