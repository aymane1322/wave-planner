"use client";
import React, { useEffect, useState } from "react";
import SmallEvent from "./SmallEvent";
import { nanoid } from "nanoid";
import type { JoinEvent } from "../types/types";
import { split } from "postcss/lib/list";


function AllEvents({data}) {
  const options = {
    weekday: 'short' as const,
    day: '2-digit',
    month: 'short' as const,
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short' as const,
  };

  const [allEvents, setAllEvents] = useState<JoinEvent[]|null>(null);

  useEffect(()=>{
    setAllEvents(data)
  },[])

 
  return (
    <>
      {allEvents && allEvents.map(evnt=>(
        <SmallEvent key={nanoid()}
        title={evnt.titreEvent}
        adress={evnt.spotsdesurf.localisation}
        date={evnt.dateDebutEvent.toLocaleString('en-US', options).split(",")[0]
        .concat(", ").concat(evnt.dateDebutEvent.toLocaleString('en-US', options).split(",")[1])}
        time={evnt.dateDebutEvent.toLocaleString('en-US', options).split(",")[2]}
        userName={evnt.assosiation_utilisateur_evenement[0].utilisateur.nomU}
        imgPath="/bgSurf.jpg"
      ></SmallEvent>
      ))}
    </>
  );
}

export default AllEvents;
