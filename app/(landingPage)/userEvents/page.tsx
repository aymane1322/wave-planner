import React from "react";
import HomeHeader from "../../components/HomeHeader";
import Image from "next/image";
import AllUserEvents from "../../components/AllUserEvents";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { fetchUserEvents } from "../../backend/fetchAllUserEvents";
import Link from "next/link";

async function Page() {
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  const allUserEvents = await fetchUserEvents()
  return (
    <>
      <div className="h-[10%] w-full  pt-2">
        <HomeHeader gridRows="1" imgPath={user.picture} showBackArrow goTo="/home"></HomeHeader>
      </div>
      <div className="h-[90%]  flex flex-col items-center overflow-scroll relative">
        <Link href={"/addEvent"}>
           <Image className="fixed cursor-pointer bottom-7 hover:scale-105 right-4 z-50" src={"/addEvent.png"} alt="Button" width={120} height={120}></Image>
        </Link>
        <h1 className="text-white text-left w-full text-3xl pl-2 font-myFont font-bold pb-4">
          Your events
        </h1>
        <AllUserEvents allUserEvents={allUserEvents}/>
        
      </div>
    </>
  );
}

export default Page;
