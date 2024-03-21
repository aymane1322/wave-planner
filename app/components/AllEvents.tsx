"use client";
import React, { useEffect, useState } from "react";
import SmallEvent from "./SmallEvent";
import { nanoid } from "nanoid";
import type { Event } from "../types/Event";

function AllEvents({data}) {
console.log(data)
  const [allEvents, setAllEvents] = useState<Event[]|null>(null);

  useEffect(()=>{
    setAllEvents(data)
  },[])

  console.log(allEvents)
  return (
    <>
      {allEvents && allEvents.map(evnt=>(
        <SmallEvent key={nanoid()}
        title={evnt.titreEvent}
        adress="Banana Point 😋"
        date={String(evnt.dateDebutEvent)}
        time="07:00"
        userName="Aymane"
        imgPath="/bgSurf.jpg"
      ></SmallEvent>
      ))}
    </>
  );
}

export default AllEvents;
