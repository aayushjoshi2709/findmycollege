import axios from "axios";
import React, { useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Login({ setCurrentUser }) {
  const initialValues = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);  
  function HandleSubmit(evt) {
    evt.preventDefault();
    axios.post("http://localhost:3000/users/signin", values).then((res) => {
      if (res.status === 201) {
        setCurrentUser(res.data);
        navigate('/');
        return true;
      } else if (res.status === 400) {
        console.log("error signing in");
        return false;
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
        <div className="col-lg-8 bg-light m-5 p-3">
          <form
            onSubmit={(evt) => {
              HandleSubmit(evt);
            }}
          >
            <h1 className="text-center display-2">Login</h1>
            <div className="mb-1">
              <p>
                Username:
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
                />
              </p>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary m-2">
                Login
              </button>
              <Link to="/user/new" className="btn btn-danger m-2">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
