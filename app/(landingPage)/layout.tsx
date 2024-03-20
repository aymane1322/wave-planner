import React from "react";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import HomeHeader from "../components/HomeHeader";
import HomeFooter from "../components/HomeFooter";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 -z-50 sm:hidden ">
      
      {children}
      <HomeFooter></HomeFooter>
    </main>
  );
}

export default layout;
