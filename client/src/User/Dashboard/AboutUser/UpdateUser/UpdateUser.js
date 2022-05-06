import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function UpdateUser({currentUser,setCurrentUser}) {
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
      <div className="container mt-5 d-flex justify-content-center">
        <div className="col-lg-8 bg-light m-4 p-3">
          <form
            onSubmit={(evt) => {
              handleSubmit(evt);
            }}
          >
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
    </div>
  );
}

export default UpdateUser;
