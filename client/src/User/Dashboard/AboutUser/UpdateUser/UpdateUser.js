import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function UpdateUser({currentUser,setCurrentUser}) {
  
  const [updateUserSuccess, setUpdateUserSuccess] = useState(false);
  const [updateUserFailure, setUpdateUserFailure]  = useState(false);
  const initialValues = {
    fname: currentUser.fname,
    lname: currentUser.lname,
    username: currentUser.username,
    email: currentUser.email,
  };

  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  function handleSubmit(evt) {
    evt.preventDefault();
    axios.patch("http://localhost:3000/users", values).then((res) => {
      if (res.status === 200) {
        setCurrentUser(res.data);
        setUpdateUserSuccess(true);
      } else if (res.status === 400) {
        setUpdateUserFailure(true);
      }
    });
    return false;
  }
  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  return (
    <div>
      <div className="card p-4 mt-5" style={{width:"500px"}}>
         <form
            onSubmit={(evt) => {
              handleSubmit(evt);
            }}
          >
             <h2 className="text-center">About User</h2>
             {
              updateUserFailure?<div className="alert alert-danger my-3 text-center" role="alert">
                Error Updating User
              </div>:null
            }
            {
              updateUserSuccess?<div className="alert alert-success my-3 text-center" role="alert">
                User Updated Successfully!
              </div>:null
            }
             <div className="m-2">
              <p>
                First Name:
                <input
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                  type="text"
                  name="fname"
                  className="form-control"
                  id="fname"
                  placeholder={initialValues.fname}
                />
              </p>
            </div>
            <div className="m-2">
              <p>
                Last Name:
                <input
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                  type="text"
                  name="lname"
                  className="form-control"
                  id="lname"
                  placeholder={initialValues.lname}
                />
              </p>
            </div>
            <div className="m-2">
              <p>
                Username:{" "}
                <input
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder={initialValues.username}
                />
              </p>
            </div>
            <div className="m-2">
              <p>
                Email:
                <input
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder={initialValues.email}
                />
              </p>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg m-2">
                Update User
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}

export default UpdateUser;
