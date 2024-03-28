import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

function page() {
  return (
    <main className="h-full relative bg-gradient-to-r from-blue-500 to-cyan-500 w-full sm:hidden">
      <div className="h-[15%] grid grid-cols-6 place-items-center justify-center w-full ">
        {/* <Image className='-z-50 ' src={"/backGround.jpg"} alt='background' fill></Image> */}
        <Link href={"/"}>
          <IoIosArrowBack className="col-start-1 text-myWhite text-3xl" />
        </Link>
        <h1 className="text-myWhite font-myFont text-2xl font-bold text-center col-start-2 col-end-6 ">
          Wave Planner
        </h1>
      </div>

      <div className=" bg-white w-full h-[85%] rounded-t-[2.3rem] ">
        
          <h2 className="text-lg font-bold py-2 text-center pt-5 h-[15%]">Let’s Surf with friends!</h2>

          <div className="flex gap-2 w-full justify-center items-center h-[10%]">
            <LoginLink    className="bg-gradient-to-tr from-myBlue to-cyan-500 w-[40%] hover:from-myBlue hover:to-cyan-700 py-2  text-center text-md text-myWhite rounded-full hover:scale-105 font-semibold">Login</LoginLink>
            <RegisterLink className="bg-gradient-to-tr from-myBlue to-cyan-500 w-[40%] hover:from-myBlue hover:to-cyan-700 py-2  text-center text-md text-myWhite rounded-full hover:scale-105 font-semibold">Sign up</RegisterLink>
          </div>
          <div className="w-full h-[75%] z-50  flex flex-col justify-center items-center">
            <div className="w-[80%] h-[50%] absolute overflow-hidden">
              <Image className="rounded-2xl" src={"/surf.gif"} alt="gif" objectFit="cover" fill></Image>
            </div>
          </div>
        
      </div>
    </main>
  );
}

export default page;
