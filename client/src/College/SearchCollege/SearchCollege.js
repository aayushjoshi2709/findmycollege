import React, { useState } from 'react'
import CollegeCard from '../ShowColleges/CollegeCard/CollegeCard'
function SearchCollege({colleges, setSearch}) {
  const [searchTemp, setSearchTemp] = useState("");
  function handleChange(evt){
    setSearchTemp(evt.target.value);
  }
  function handleSubmit(){
    setSearch(searchTemp);
  }
  return (
        <div className="align-items-center">
	        <div className="container p-5 wm-50 mt-5 pt-5">
		        <div className="row d-flex justify-content-center">
			        <div className="mb-3 col col-md-6 col-sm-8">
				        <input id="searchbox" type="text" className="form-control" onChange={(evt) => handleChange(evt)}  placeholder="Name/location/Course"/>
			        </div>
		        </div>
                <div className="row">
                    <div className="col col-md d-flex justify-content-center">
                        <input className="btn btn-success btn-lg" id="searchbutton" type="submit" onClick={()=>{handleSubmit()}} value="Search"/>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                {
                    Object.keys(colleges).map((id,i) => (
                        <CollegeCard key={id} college={colleges[id]}/>
                    ))
                }
            </div>
	    </div>
  )
}

export default SearchCollege