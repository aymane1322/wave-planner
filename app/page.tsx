import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-myBlack font-myFont text-3xl font-bold">Ubuntu</h1>
      <h1 className="text-myGray">hello aymane</h1>
      <h1 className="text-myWhite">hello aymane</h1>
      <h1 className="text-myBlue">hello aymane</h1>
      <h1 className="text-myGreen">hello aymane</h1>
      <h1 className="text-myRed">hello aymane</h1>
      <Image src={"/backGround.jpg"} alt="background"  fill ></Image>
    </main>
  );
}
