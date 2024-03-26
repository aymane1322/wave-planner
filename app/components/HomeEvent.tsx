"use client";
import React, { useEffect, useState } from "react";
import BigEvent from "./BigEvent";
import { JoinEvent } from "../types/types";

function HomeEvent({ data }) {
  const options = {
    weekday: "short" as const,
    day: "2-digit" as const,
    month: "short" as const,
    hour: "2-digit" as const,
    minute: "2-digit" as const,
    timeZoneName: "short" as const,
  };
  const [allEvents, setAllEvents] = useState<JoinEvent[] | null>(null);

  useEffect(() => {
    setAllEvents(data);
  }, [data]);
  let evnt;

  if(allEvents){
    evnt = allEvents[allEvents.length - 1];
  }
  return (
    <>
      {allEvents && (
        <BigEvent
          title={evnt.titreEvent}
          adress={evnt.spotsdesurf.localisation}
          date={evnt.dateDebutEvent
            .toLocaleString("en-US", options)
            .split(",")[0]
            .concat(", ")
            .concat(
              evnt.dateDebutEvent.toLocaleString("en-US", options).split(",")[1]
            )}
          userName={evnt.assosiation_utilisateur_evenement[0]?.utilisateur.nomU}
          imgPath={evnt.assosiation_utilisateur_evenement[0]?.utilisateur.imgProfileU}
         
        ></BigEvent>
      )}
    </>
  );
}

export default HomeEvent;
