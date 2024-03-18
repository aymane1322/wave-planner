import React from "react";
import BigEvent from "../../components/BigEvent";

function Home() {
  return (
    <div className="bg-slate-200 h-[65%] w-full overflow-scroll rounded-t-[2.3rem] flex flex-col items-center">
      <p className="text-sm pt-3 font-bold text-black text-center">Hot events This week 🔥</p>
      <BigEvent></BigEvent>
    </div>
  );
}

export default Home;
