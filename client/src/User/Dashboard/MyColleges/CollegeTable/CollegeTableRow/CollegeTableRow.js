import React from 'react'

function CollegeTableRow({college}) {
  console.log(college)
  return (
    <tr>
      <th scope="row">1</th>
      <td>{college.name}</td>
      <td>{college.location}</td>
      <td><button className='btn btn-success'>Update</button></td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
  )
}

export default CollegeTableRow