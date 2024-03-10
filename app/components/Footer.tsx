import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { footerData } from "../data/data";
import { nanoid } from "nanoid";
import Image from "next/image";

function Footer() {

  const renderIcon = (socialMedia:string) => {
    switch (socialMedia) {
      case footerData.social[0]:
        return <BsInstagram className="text-orange-500 text-xl cursor-pointer" />;
      case footerData.social[1]:
        return <FaFacebook className="text-orange-500 text-xl cursor-pointer" />;
      case footerData.social[2]:
        return <FaTwitter className="text-orange-500 text-xl cursor-pointer" />;
      default:
        return null;
    }
  };

  return (
    <footer className="h-1/6 bg-black/40 flex flex-col items-center justify-evenly">
      <Image className="rounded-full brightness-90 " src={"/favicon.png"} alt="icon" width={35} height={25}></Image>
      <ul className="flex items-center justify-center">
        {footerData.social.map((e) => (
          <li className="text-white px-3 flex flex-col items-center justify-center sm:px-8 md:px-12 sm:text-xl pb-1 font-myFont" key={nanoid()}>
            {e} {renderIcon(e)}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
