import React, { useState } from 'react'
import Tour from './Tour'
import { tourData } from './tourData'

const TourList = () => {
  const [tours, setTours] = useState(tourData)

  return (
    <section className='tourlist'>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} />  
      ))}
    </section>
  )
}

export default TourList


