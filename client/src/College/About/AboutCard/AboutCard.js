import React from 'react'
function AboutCard({about}) {
  return (
    <>
      <div className="card shadow-lg m-2 bg-white rounded d-flex flex-row" >
        <div className="card-body">
          <h5 className="card-title"><u>About College</u></h5>
          <p className="card-text">
            {about}
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutCard