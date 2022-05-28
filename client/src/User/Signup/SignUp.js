import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function SignUp({setCurrentUser}) {
  const [SuccessState, setSuccessState] = useState(0);
  const initialValues = {
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  function handleSubmit(evt) {
    evt.preventDefault();
    axios.post("/users", values).then((res) => {
      if (res.status === 201) {
        setSuccessState(1);
        setCurrentUser(res.data);
        navigate('/');
      }
    }).catch(function(error){
      setSuccessState(2);
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
      <div className="container mt-2 d-flex justify-content-center">
        <div className="col-lg-8 bg-light m-4 p-3">
          <form
            onSubmit={(evt) => {
              handleSubmit(evt);
            }}
          >
            <h1 className="text-center display-2">SignUp</h1>
            {
              SuccessState == 2?<div className="alert alert-danger my-3 text-center" role="alert">
                Username/ Email already taken.
              </div>:null
            }
            {
              SuccessState == 1?<div className="alert alert-success my-3 text-center" role="alert">
                User signedUp Successfully!
              </div>:null
            }
            <div className="mb-1">
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
                  required
                />
              </p>
            </div>
            <div className="mb-1">
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
                  required
                />
              </p>
            </div>
            <div className="mb-1">
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
                  required
                />
              </p>
            </div>
            <div className="mb-1">
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
                  required
                />
              </p>
            </div>
            <div className="mb-1">
              <p>
                Password:
                <input
                  onChange={(evt) => {
                    handleChange(evt);
                  }}
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  required
                  title="Password must contain: Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                />
              </p>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary m-2">
                SignUp
              </button>
              <Link to="/user/login" className="btn btn-danger m-2">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
