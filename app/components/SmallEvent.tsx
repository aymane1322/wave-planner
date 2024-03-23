import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";

type SmallEvent = {
    userName:string,
    imgPath?: string,
    date:string,
    time:string,
    title:string,
    adress:string,
    edit?:boolean
}

function SmallEvent({userName,imgPath,date,title,adress,time,edit}:SmallEvent) {
  return (
    <div className="bg-white w-[90%] min-h-[8rem] mb-2 rounded-3xl flex justify-center items-center relative">
      <div className="bg-white w-[95%] h-[90%] rounded-3xl flex">
      <div className="bg-green-800 h-[90%] w-[36%] rounded-3xl absolute ">
          {/* fill image go her ... */}
          <Image className="rounded-3xl" src={"/event1.jpg"} alt="event img" fill objectFit="cover"></Image>
        </div>
        <div className=" h-full w-[40%]  "></div>
        <div className=" h-full w-[60%] flex flex-col justify-center pl-1">
            <p className="text-[0.8rem] font-bold pl-[2px] truncate">{title}</p>
            <p className="flex pb-2">
                <IoLocationSharp className="text-myBlue text-[1rem] pt-[1px]" />
                <span className="text-black text-[0.7rem]  font-semibold">{adress}</span>
            </p>
            <p className="text-myBlue text-[0.7rem]  font-semibold">{date}</p>
            <p className="text-myBlue text-[0.7rem] pb-2 font-semibold">{time}</p>
            <div className="flex items-center">
                <div className=" w-[1.2rem] h-[1.2rem] mr-1 rounded-full overflow-hidden">
                    {!imgPath?<FaUserAlt />:<Image className="rounded-full" src={imgPath} alt="user image" objectFit="cover" width={30} height={30}></Image>}
                </div>
                <p className="text-black text-[0.7rem] font-bold">{userName}</p>
                {edit?
                <button className="absolute right-1 bottom-2 w-20 h-8 bg-slate-200 rounded-full shadow-md font-bold text-myBlue text-[0.8rem]">Edit</button>
                :
                <button className="absolute right-1 bottom-2 w-20 h-8 bg-myBlue rounded-full shadow-md font-bold text-white text-[0.8rem]">GO!</button>
                }
            </div>
        </div>
      </div>
    </div>
  );
}

export default SmallEvent;
