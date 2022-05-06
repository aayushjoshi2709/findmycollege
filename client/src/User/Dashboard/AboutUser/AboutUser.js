import React from 'react'
import UpdateUser from './UpdateUser/UpdateUser';
import SideBar from '../SideBar/Sidebar';
function AboutUser({currentUser,setCurrentUser}) {
  return (
    <>
        <SideBar/>
        <div className="content bg-body" style={{height: '41.55rem'}}>
            <UpdateUser currentUser= {currentUser} setCurrentUser={setCurrentUser}/>
        </div>
    </>
  )
}

export default AboutUser