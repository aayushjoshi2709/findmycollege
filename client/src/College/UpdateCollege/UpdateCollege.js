import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams,Navigate } from 'react-router-dom';
function UpdateCollege({setGetColleges}) {
    const { id } = useParams();
    const [collegeData, setCollegeData] = useState({});
    const [newCollege, setNewCollege] = useState({});
    const [updateCollegeStatus, setUpdateCollegeStatus] = useState(0);
    useEffect(() => {
      axios.get('/colleges/' + parseInt(id)).then((res)=>{
        setCollegeData(res.data);
      });
    }, [id])
    
    const initialValues = collegeData;
    const [values, setValues] = useState(initialValues);
    function handleSubmit(evt){    
        evt.preventDefault();
        setNewCollege(values);
    }
    function handleChange(evt){
        const { name, value } = evt.target;
        setValues({
        ...values,
        [name]: value,
        });
    }
    useEffect(() => {
        if(Object.keys(newCollege).length !== 0){
          axios.patch(`/colleges/${id}`, newCollege).then((response) => { 
          if(response.status === 200){
                setGetColleges(true);
                setUpdateCollegeStatus(2);
          }
          }).catch(function (error) {
            setUpdateCollegeStatus(1);
          });
       }
    }, [newCollege]);
  
    return (
    <div className='container mt-2 d-flex justify-content-center'>
        <div className='col-lg-8 bg-light m-4  p-3'>
            <form onSubmit={(evt)=>{handleSubmit(evt)} }>
                <h1 className='text-center display-2'>Update College</h1>
                {
              updateCollegeStatus == 1?<div className="alert alert-danger my-3 text-center" role="alert">
                Error Updating College
              </div>:null
            }
            {
              updateCollegeStatus == 2?<div className="alert alert-success my-3 text-center" role="alert">
                College Updated Successfully!
              </div>:null
            }
                <div className="mb-1">
                    <p>College Name: <input onChange={(evt) =>{handleChange(evt)}} type="text" name='name' className="form-control" id="name" value={collegeData.name}/></p>
                </div>
                <div className="mb-1">
                    <p>Website: <input onChange={(evt) =>{handleChange(evt)}} type="url" name='website' className="form-control" id="website" value={collegeData.website}/></p>
                </div>
                <div className="mb-1">
                    <p>Courses Offered: <input onChange={(evt) =>{handleChange(evt)}} type="text" className="form-control" id="courses" name='courses' value={collegeData.courses}/></p>
                </div>
                <div className="mb-1">
                    <p>Address: <input onChange={(evt) =>{handleChange(evt)}} type="text" className="form-control" id='address' name='address' value={collegeData.address}/></p>
                </div>
                <div className="mb-1">
                    <p>Phone No: <input onChange={(evt) =>{handleChange(evt)}} type="number" className="form-control" name='phoneNo' id='phoneNo' value={collegeData.phoneNo}/></p>
                </div>
                <div className="mb-1">
                    <p>About: <input onChange={(evt) =>{handleChange(evt)}} type="text" className="form-control" id="about" name='about' value={collegeData.about}/></p>
                </div>
                <div className="mb-1">
                    <p>Location: <input onChange={(evt) =>{handleChange(evt)}} type="text" className="form-control" id="location" name='location' value={collegeData.location}/></p>
                </div>
                <div className="mb-1">
                    <p>Image Url: <input onChange={(evt) =>{handleChange(evt)}} type="url" className="form-control" id="iurl" name='imageUrl' value={collegeData.imageUrl}/></p>
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary m-2">Update</button>
                    <button type="reset" className="btn btn-danger m-2">Clear</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateCollege