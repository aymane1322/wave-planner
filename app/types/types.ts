
export type JoinEvent={
    idEvent: number,
    titreEvent: string,
    descriptionEvent: string,
    imgEvent: null,
    maxUsersEvent: null,
    isPublic: null,
    isCoach: null,
    dateEvent: Date,
    dateDebutEvent: Date,
    numberOfJoinedUser: number,
    idSpot: number,
    spotsdesurf: { localisation: string },
    assosiation_utilisateur_evenement: [
      {
        Column1: number,
        idUtilisateur: number,
        idEvent: number,
        isAdmin: boolean,
        utilisateur: { nomU: string }
      }
    ]
  }

