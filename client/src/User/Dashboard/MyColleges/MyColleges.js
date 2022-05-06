import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import CollegeTable from './CollegeTable/CollegeTable';
function MyColleges({colleges, currentUser}) {
  Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );
  const filteredCollege = Object.filter(colleges, college => college.userid == currentUser.id); 

  return (
    <>
      <Sidebar/>
      <div className="content d-flex justify-content-center bg-body" style={{height: '41.55rem'}}>
          <CollegeTable colleges = {filteredCollege}/>
      </div>
    </>
  )
}

export default MyColleges