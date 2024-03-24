"use client";
import React, { useEffect, useState } from "react";
import SmallEvent from "./SmallEvent";
import { fetchUserEvents } from "../backend/fetchAllUserEvents";

function AllUserEvents() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let email = sessionStorage.getItem("email");
    async function fetch(){
    await  fetchUserEvents(email).then((events)=>{
        setData(events)
        console.log(data);
      }).catch((error)=>console.log("error fetching user Events",error)
      )
    }
    fetch();
  }, []);

  return (
    <>
      <SmallEvent
        title="Surf with FaLFol 🎶"
        adress="Spider 🕷"
        date="21/03/2024"
        time="06:10"
        userName="FaLfoL"
        edit
        imgPath="/bgSurf.jpg"
      />
    </>
  );
}

export default AllUserEvents;
