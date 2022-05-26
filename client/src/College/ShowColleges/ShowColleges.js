import React from 'react'
import CollegeCard from './CollegeCard/CollegeCard'

function ShowColleges({colleges}) {
  return (
    <div className='container mt-5'>
        {
            Object.keys(colleges).map((id, i) => (
                <CollegeCard key={id} college={colleges[id]}/>
            ))
        }
    </div>
  )
}

export default ShowColleges