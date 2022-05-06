import React from "react";
import { Link } from "react-router-dom";
function DescCard({college}) {
  return (
    <div className="card shadow-lg mt-5 m-2 bg-white rounded d-flex flex-row" >
      <img className="card-img-top w-25 p-1" src={college.imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{college.name}</h5>
        <p className="card-text">
          <b>Location:</b> {college.location}<br/>          
          <b>Website:</b> {college.website}
        </p>
        <a href={college.website} target="_blank" className="btn btn-primary">
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default DescCard;
