import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import Image from "next/image";

function BigEvent() {
  return (
  <div className="bg-myWhite w-[90%] min-h-[22rem] rounded-3xl flex flex-col justify-center items-center shadow-md relative">
    
    <div className="w-[93%] h-[93%] rounded-3xl flex flex-col justify-between">
        {/* fill image go her ...🏄‍♀️ */}
        <Image className="object-cover rounded-3xl p-2 " src={"/event1.jpg"} alt="event image" fill></Image>
        <div className="z-10  w-full h-[11%] flex justify-between mt-2">
            <div className="bg-myWhite w-[30%] ml-2 rounded-full h-[100%] flex items-center justify-evenly">
                <div className="bg-gray-600 w-[1.7rem] h-[1.7rem] rounded-full">
                    {/* profile image go her ...🙊 */}
                </div>
                <p className="text-black text-[0.7rem] font-bold">NUE</p>
            </div>
            <div className="bg-myWhite w-[42%] mr-2 rounded-full h-[100%] text-black text-[0.7rem] font-bold flex justify-center items-center">Wed, 27 July</div>
        </div>
        <div className=" w-full h-[35%] z-10">
            <h2 className="text-myWhite text-md font-bold font-sans pl-2">Surf with NUE</h2>
            <p className="flex"><IoLocationSharp className="text-myBlue pl-2 text-2xl" /><span className="text-myWhite text-md  font-myFont">Balagan beach</span></p>
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
