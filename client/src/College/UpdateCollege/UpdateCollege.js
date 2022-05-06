import React,{useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
function UpdateCollege({setGetColleges}) {
    const [newCollege, setNewCollege] = useState({});
    const initialValues = {
        name: "",
        website: "",
        courses: "",
        address: "",
        phoneNo: "",
        about: "",
        location: "",
    };
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
          newCollege.phoneNo = parseInt(newCollege.phoneNo);
          axios.patch(`http://localhost:3000/colleges`, newCollege).then((response) => { 
          if(response.status === 201){
                setGetColleges(true);
          }
          }).catch(function (error) {
            console.log(error);
          });
       }
    }, [newCollege]);
  return (
    <div className='container mt-2 d-flex justify-content-center'>
        <div className='col-lg-8 bg-light m-4  p-3'>
            <form onSubmit={(evt)=>{handleSubmit(evt)} }>
                <h1 className='text-center display-2'>Add New College</h1>
                <div className="mb-1">
                    <p>College Name: <input onChange={(evt) =>{handleChange(evt)}} type="text" name='name' className="form-control" id="name"/></p>
                </div>
                <div className="mb-1">
                    <p>Website: <input onChange={(evt) =>{handleChange(evt)}} type="text" name='website' className="form-control" id="website"/></p>
                </div>
                <div className="mb-1">
                    <p>Courses Offered: <input onChange={(evt) =>{handleChange(evt)}} type="text" className="form-control" id="courses" name='courses'/></p>
                </div>
                <div className="mb-1">
                    <p>Address: <input onChange={(evt) =>{handleChange(evt)}} type="text" className="form-control" id='address' name='address'/></p>
                </div>
                <div className="mb-1">
                    <p>Phone No: <input onChange={(evt) =>{handleChange(evt)}} type="number" className="form-control" name='phoneNo' id='phoneNo'/></p>
                </div>
                <div className="mb-1">
                    <p>About: <input onChange={(evt) =>{handleChange(evt)}} type="text" className="form-control" id="about" name='about'/></p>
                </div>
                <div className="mb-1">
                    <p>Location: <input onChange={(evt) =>{handleChange(evt)}} type="text" className="form-control" id="location" name='location'/></p>
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary m-2">Submit</button>
                    <button type="reset" className="btn btn-danger m-2">Clear</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateCollege