import React from "react";
import { Link } from "react-router-dom";
function CollegeCard({college}) {
  return (
    <div className="card shadow-lg m-2 bg-white rounded d-flex flex-row" >
      <img className="card-img-top w-25 p-1" src={college.imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{college.name}</h5>
        <p className="card-text">
          Location: {college.location}<br/>          
          Website: {college.website}
        </p>
        <Link to={"/colleges/about/" + college.id } className="btn btn-primary">
          View More...
        </Link>
      </div>
    </div>
  );
}

export default CollegeCard;
