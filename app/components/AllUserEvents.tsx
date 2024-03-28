"use client";
import React, { useEffect, useState } from "react";
import SmallEvent from "./SmallEvent";
import { fetchUserEvents } from "../backend/fetchAllUserEvents";
import { nanoid } from "nanoid";

function AllUserEvents({allUserEvents}) {

  const options = {
    weekday: 'short' as const,
    day: '2-digit' as const,
    month: 'short' as const,
    hour: '2-digit' as const,
    minute: '2-digit'as const,
    timeZoneName: 'short' as const,
  };


  return (
    <>
      {allUserEvents && allUserEvents.map(evnt=>(
        <SmallEvent key={nanoid()}
        title={evnt.evenement.titreEvent}
        adress={evnt.evenement.spotsdesurf.localisation}
        date={evnt.evenement.dateDebutEvent.toLocaleString('en-US', options).split(",")[0]
        .concat(", ").concat(evnt.evenement.dateDebutEvent.toLocaleString('en-US', options).split(",")[1])}
        time={evnt.evenement.dateDebutEvent.toLocaleString('en-US', options).split(",")[2]}
        userName={evnt?.utilisateur?.nomU}
        imgPath={evnt?.utilisateur?.imgProfileU}
        edit
      ></SmallEvent>
      ))}
    </>
  );
}

export default AllUserEvents;
