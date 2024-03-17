import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import RegisterForm from "../components/RegisterForm";

function page() {
  return (
    <main className="h-4/6 relative bg-gradient-to-r from-blue-500 to-cyan-500 ">
      <div className="h-[20%] grid grid-cols-6 place-items-center justify-center ">
        <Link href={"/login"}>
          <IoIosArrowBack className="col-start-1 text-myWhite text-3xl" />
        </Link>
        <h1 className="text-myWhite font-myFont text-2xl font-bold text-center col-start-2 col-end-6 ">
          Wave Planner
        </h1>
      </div>

      <div className=" bg-myWhite w-full h-[80%] rounded-t-[2.3rem] ">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-lg font-bold pt-2 self-start pl-5">Hello,</h2>
          <h2 className="text-lg font-bold pb-2 self-start pl-5">
            Register to get started!
          </h2>
          <RegisterForm>
          </RegisterForm>
        </div>
      </div>
    </main>
  );
}

export default page;
