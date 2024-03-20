import React from "react";
import Image from "next/image";
import { AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";

function HomeFooter() {
  return (
    <div className="bg-slate-200 h-[15%] w-full flex flex-col justify-center  items-center">
        <div className="bg-white  w-[95%] h-[75%] rounded-full shadow-md flex justify-center items-center gap-9">
          <Image 
            src={"/homeButton.png"}
            alt="home icon"
            height={90}
            width={90}
          ></Image>
          <Link href={"/events"}>
          <Image 
            src={"/Group2.svg"}
            alt="events icon"
            height={20}
            width={20}
          ></Image>
          </Link>
          <Image 
            src={"/Group1.svg"}
            alt="groups icon"
            height={20}
            width={20}
          ></Image>
          <AiOutlineMessage className="text-myBlue text-2xl" />
        </div>
      </div>
  )
}

export default HomeFooter