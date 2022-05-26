import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function CollegeTableRow({id,college,setGetColleges, setDeleteCollegeFailure, setDeleteCollegeSuccess}) {
  function deletecollege(id){
    axios.delete('http://localhost:3000/colleges/' + id).then((res) =>{
      if(res.status === 200){
        setDeleteCollegeSuccess(true);
        setGetColleges(true);
      }
    }).catch(function(error){
      setDeleteCollegeFailure(true);
    })
  }
  return (
    <tr>
      <th scope="row">{parseInt(id) + 1}</th>
      <td>{college.name}</td>
      <td>{college.location}</td>
      <td><Link to={'/colleges/update/'+college.id} className='btn btn-success'>Update</Link></td>
      <td><button onClick={()=>{deletecollege(college.id)}} className='btn btn-danger'>Delete</button></td>
    </tr>
  )
}

export default CollegeTableRow