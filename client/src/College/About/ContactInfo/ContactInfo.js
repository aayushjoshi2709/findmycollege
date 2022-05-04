import React from "react";
import { Link } from "react-router-dom";
function ContactInfo({college}) {
  return (
    <div className="card shadow-lg m-2 bg-white rounded d-flex flex-row" >
       <div className="card-body">
        <h5 className="card-title"><u>Contact Information</u></h5>
        <p className="card-text">
          <b>Address:</b> {college.location}<br/>          
          <b>PhoneNo:</b> {college.phoneNo}<br/>
          <b>Website:</b> {college.website}<br/>
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
