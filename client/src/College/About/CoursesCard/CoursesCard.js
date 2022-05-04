import React from 'react'
function CoursesCard({courses}) {
  return (
    <>
      <div className="card shadow-lg m-2 bg-white rounded d-flex flex-row" >
        <div className="card-body">
          <h5 className="card-title"><u>Courses Avalable</u></h5>
          <p className="card-text">
            {
               courses
            }
          </p>
        </div>
      </div>
    </>
  )
}

export default CoursesCard