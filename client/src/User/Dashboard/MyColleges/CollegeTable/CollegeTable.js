import React from 'react'
import CollegeTableRow from './CollegeTableRow/CollegeTableRow'
function CollegeTable({colleges}) {
  return (
    <div className="container mt-4">
        <table class="table table-dark h-75 w-100 ml-5 mt-5">
            <thead >
                <tr>
                    <th scope="col">Sno</th>
                    <th scope="col">Name of College</th>
                    <th scope="col">Location</th>
                    <th scope="col" style={{width:  "8.33%"}}>Update</th>
                    <th scope="col" style={{width:  "8.33%"}}>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(colleges).map((id, i) => (
                        <CollegeTableRow college={colleges[id]}/>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default CollegeTable