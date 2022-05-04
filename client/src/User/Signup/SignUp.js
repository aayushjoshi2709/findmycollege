import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function SignUp({setCurrentUser}) {
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
    axios.post("http://localhost:3000/users", values, { withCredentials: true }).then((res) => {
      if (res.status === 201) {
        setCurrentUser(res.data);
        navigate('/');
      } else if (res.status === 400) {
        console.log("error signing up");
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
      <div className="container mt-2 d-flex justify-content-center">
        <div className="col-lg-8 bg-light m-4 p-3">
          <form
            onSubmit={(evt) => {
              handleSubmit(evt);
            }}
          >
            <h1 className="text-center display-2">SignUp</h1>
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
                />
              </p>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary m-2">
                SignUp
              </button>
              <Link to="/user" className="btn btn-danger m-2">
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
