import React,{useState} from 'react'
import CollegeTableRow from './CollegeTableRow/CollegeTableRow'
function CollegeTable({colleges, setGetColleges}) {
  const [deleteCollegeFailure, setDeleteCollegeFailure] = useState(false);
  const [deleteCollegeSuccess, setDeleteCollegeSuccess] = useState(false);
  return (
    <div className="card p-4 my-5" style={{border:"none"}}>
        <h2 className="text-center">My Colleges</h2>
        {
              deleteCollegeFailure?<div className="alert alert-danger my-3 text-center" role="alert">
                Error Deleting College
              </div>:null
            }
            {
               deleteCollegeSuccess?<div className="alert alert-success my-3 text-center" role="alert">
                College Deleted Successfully!
              </div>:null
            }
        <table className="table table-responsive" style={{width:"100%"}}>
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
                    colleges?Object.keys(colleges).map((id, i) => (
                        <CollegeTableRow key={id} id={id} college={colleges[id]} setDeleteCollegeFailure= {setDeleteCollegeFailure} setDeleteCollegeSuccess={setDeleteCollegeSuccess} setGetColleges = {setGetColleges}/>
                    )):null
                }  
            </tbody>
        </table>
    </div>
  )
}

export default CollegeTable