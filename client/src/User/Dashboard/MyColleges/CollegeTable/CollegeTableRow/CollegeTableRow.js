import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function CollegeTableRow({college,setGetColleges}) {
  function deletecollege(id){
    axios.delete('http://localhost:3000/colleges/' + id).then((res) =>{
      if(res.status === 200){
        setGetColleges(true);
      }
    })
  }
  return (
    <tr>
      <th scope="row">1</th>
      <td>{college.name}</td>
      <td>{college.location}</td>
      <td><Link to={'/colleges/update/'+college.id} className='btn btn-success'>Update</Link></td>
      <td><button onClick={()=>{deletecollege(college.id)}} className='btn btn-danger'>Delete</button></td>
    </tr>
  )
}

export default CollegeTableRow