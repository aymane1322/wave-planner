import React from "react";
import HomeHeader from "../../components/HomeHeader";
import Image from "next/image";
import HomeFooter from "../../components/HomeFooter";
import AllEvents from "../../components/AllEvents";
import { fetchAllEvents } from "../../backend/fetchAllEvents";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


async function Events() {
let allEvents = await fetchAllEvents()
const {getUser} = getKindeServerSession()
const user = await getUser()
  return (
    <>
      <div className="h-[10%] w-full overflow-hidden pt-2">
        <HomeHeader gridRows="1" imgPath={user.picture}></HomeHeader>
      </div>
      <div className="h-[75%] flex flex-col items-center overflow-scroll relative">
        <div className="min-h-[14rem] w-[90%] bg-yellow-400 rounded-3xl z-30 absolute ">
          <Image
            className="rounded-3xl"
            fill
            objectFit="cover"
            src={"/eventPict.jpg"}
            alt="event img"
          ></Image>
        </div>
        <div className="min-h-[14rem] w-[90%] rounded-3xl z-30 shadow-md ">
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
        <AllEvents data={allEvents}/>
        
      </div>
      <HomeFooter/>
    </>
  );
}

export default Events;
