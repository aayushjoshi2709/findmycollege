import React from 'react'
import axios from 'axios';
function CollegeTableRow({college,setGetColleges}) {
  function deletecollege(id){
    axios.delete('http://localhost:3000/colleges/' + id).then((res) =>{
      console.log(res);
      if(res.status === 200){
        setGetColleges(true);
      }
    })
  }
  console.log(college)
  return (
    <tr>
      <th scope="row">1</th>
      <td>{college.name}</td>
      <td>{college.location}</td>
      <td><button className='btn btn-success'>Update</button></td>
      <td><button onClick={()=>{deletecollege(college.id)}} className='btn btn-danger'>Delete</button></td>
    </tr>
  )
}

export default CollegeTableRow