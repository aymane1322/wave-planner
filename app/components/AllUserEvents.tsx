'use client'
import React from 'react'
import SmallEvent from './SmallEvent'
import { fetchUserEvents } from '../backend/fetchAllUserEvents'

function AllUserEvents() {
    
    
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
  )
}

export default AllUserEvents