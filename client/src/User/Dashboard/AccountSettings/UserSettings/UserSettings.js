import axios from "axios";
import React, { useState } from "react";

function UserSettings({ currentUser, setCurrentUser }) {
  const [passwordStatus, setPasswordStatus] = useState(0);
  const [values, setValues] = useState({});
  function handleSubmit(evt) {
    evt.preventDefault();
    if (values.passnew !== values.cpassnew) {
        setPasswordStatus(2);
    } else {
      axios
        .post("/users/updatepass", values)
        .then((res) => {
          if (res.status === 201) {
            setPasswordStatus(1);
          }
        }).catch(function(error){
            if(error.response.status === 400)
              setPasswordStatus(3);
            else
              setPasswordStatus(4);
        });
    }
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
      <div className="card p-4 mt-5" style={{ width: "500px" }}>
        <h2 className="text-center">Update Password</h2>
        {passwordStatus === 2 ? (
          <div className="alert alert-danger my-3 text-center" role="alert">
            New Password and Confirm Password do not Match
          </div>
        ) : null}
        {passwordStatus === 3 ? (
          <div className="alert alert-danger my-3 text-center" role="alert">
            Wrong Password
          </div>
        ) : null}
        {passwordStatus === 4 ? (
          <div className="alert alert-danger my-3 text-center" role="alert">
            Error updating password
          </div>
        ) : null}
        {passwordStatus === 1 ? (
          <div className="alert alert-success my-3 text-center" role="alert">
            Password Updated Successfully!
          </div>
        ) : null}
        <form
          onSubmit={(evt) => {
            handleSubmit(evt);
          }}
        >
          <div className="m-2">
            <p>
              Old Password:
              <input
                onChange={(evt) => {
                  handleChange(evt);
                }}
                type="password"
                name="passold"
                className="form-control"
                id="passold"
              />
            </p>
          </div>
          <div className="m-2">
            <p>
              New Password:
              <input
                onChange={(evt) => {
                  handleChange(evt);
                }}
                type="password"
                name="passnew"
                className="form-control"
                id="passnew"
              />
            </p>
          </div>
          <div className="m-2">
            <p>
              Confirm Password:
              <input
                onChange={(evt) => {
                  handleChange(evt);
                }}
                type="password"
                name="cpassnew"
                className="form-control"
                id="cpassnew"
              />
            </p>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg m-2">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserSettings;
