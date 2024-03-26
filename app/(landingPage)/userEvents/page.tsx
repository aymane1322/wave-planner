import React from "react";
import HomeHeader from "../../components/HomeHeader";
import SmallEvent from "../../components/SmallEvent";
import Image from "next/image";
import AllUserEvents from "../../components/AllUserEvents";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Page() {
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  return (
    <>
      <div className="h-[10%] w-full  pt-2">
        <HomeHeader gridRows="1" imgPath={user.picture} showBackArrow></HomeHeader>
      </div>
      <div className="h-[90%]  flex flex-col items-center overflow-scroll relative">
        <Image className="fixed bottom-7 right-4 z-50" src={"/addEvent.png"} alt="Button" width={120} height={120}></Image>
        <h1 className="text-white text-left w-full text-3xl pl-2 font-myFont font-bold pb-4">
          Your events
        </h1>
        <AllUserEvents/>
        
      </div>
    </>
  );
}

export default Page;
