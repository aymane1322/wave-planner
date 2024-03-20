import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";

type BigEvent = {
    userName:string,
    imgPath?: string,
    date:string,
    title:string,
    adress:string,
}

function BigEvent({userName,imgPath,date,title,adress}:BigEvent) {
  return (
  <div className="bg-myWhite w-[90%] min-h-[22rem] rounded-3xl flex flex-col justify-center items-center shadow-md relative mb-2">
    
    <div className="w-[93%] h-[93%] rounded-3xl flex flex-col justify-between">
        {/* fill image go her ...🏄‍♀️ */}
        <Image className="object-cover rounded-3xl p-3 " src={"/event1.jpg"} alt="event image" fill></Image>
        <div className="z-10  w-full h-[11%] flex justify-between mt-3">
            <div className="bg-myWhite w-fit ml-2 rounded-full h-[100%] flex items-center justify-center">
                <div className=" w-[1.6rem] h-[1.6rem] rounded-full ml-2 flex items-center justify-center overflow-hidden">
                    {/* profile image go her ...🙊 */}
                    {!imgPath?<FaUserAlt />:<Image className="rounded-full" src={imgPath} alt="user image" width={30} height={30}></Image>}
                </div>
                <p className="text-black text-[0.7rem] font-bold pl-1 pr-2">{userName}</p>
            </div>
            <div className="bg-myWhite w-fit px-4 mr-2 rounded-full h-[100%] text-black text-[0.7rem] font-bold flex justify-center items-center">{date}</div>
        </div>
        <div className=" w-full h-[35%] z-10">
            <h2 className="text-myWhite text-md font-bold font-sans pl-2">{title}</h2>
            <p className="flex"><IoLocationSharp className="text-myBlue pl-2 text-2xl" /><span className="text-myWhite text-md  font-myFont">{adress}</span></p>
            <div className="w-full flex justify-center">
                <button className="text-myWhite text-sm font-bold font-sans bg-myBlue px-7 py-3 rounded-full mt-3 ">Join!</button>
            </div>
        </div>
        {/* more decoration ... */}
        <div className="absolute bg-myWhite w-2 h-[88%] rounded-r-full -right-1 top-5 shadow-md"></div>
        <div className="absolute bg-myWhite w-2 h-[70%] rounded-r-3xl -right-2 top-14 shadow-md"></div>
    </div>
  </div>);
}

export default BigEvent;
