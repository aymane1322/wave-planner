import React from "react";
import Image from "next/image";
import Link from "next/link";
function page() {
  return (
    <main className="bg-gradient-to-tr from-blue-700 to-green-400 w-full h-full flex flex-col justify-center items-center space-y-8 sm:hidden">
      <Image src={"/Sticker.png"} alt="stiker" height={70} width={70}></Image>

      <div>
        <p className="text-myWhite text-center font-bold text-lg">All set</p>
        <p className="text-myWhite text-center text-sm ">
          Your account has been created
        </p>
        <p className="text-myWhite text-center text-sm ">succssfully</p>
      </div>

      <Link href={"/login"}>
        <button className="text-myBlue bg-myWhite py-2 px-16 rounded-full ">
          Continue
        </button>
      </Link>
    </main>
  );
}

export default page;
