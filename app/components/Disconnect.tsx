"use client";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Disconnect = {
  imgPath?: string;
};
function Disconnect({ imgPath }: Disconnect) {
  const [showDisc, setShowDisc] = useState(false);
  const router = useRouter();

  function disconnect() {
    sessionStorage.removeItem("email");
    router.push("/login");
  }

  function userClick() {
    setShowDisc(!showDisc);
  }
  return (
    <>
      {!imgPath ? (
        <FaUserAlt onClick={userClick} />
      ) : (
        <Image
          onClick={userClick}
          className="rounded-full"
          src={imgPath}
          alt="user image"
          width={30}
          height={30}
        ></Image>
      )}
      {showDisc ? (
        <div>
          <p
            onClick={disconnect}
            className="absolute bg-gray-200 rounded-md py-[0.2rem] px-1 z-50 top-[3.2rem] text-red-600 text-sm right-2 font-bold opacity-90 hover:opacity-100 active:animate-ping"
          >
            Disconnect
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Disconnect;