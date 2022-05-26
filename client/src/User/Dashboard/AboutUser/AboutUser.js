import React,{useEffect} from 'react'
import UpdateUser from './UpdateUser/UpdateUser';
import SideBar from '../SideBar/Sidebar';
function AboutUser({currentUser,setCurrentUser,setHighlight, Highlight}) {
  useEffect(() => {
    setHighlight(1);
  })
  return (
    <>
        <SideBar Highlight = {Highlight}/>
        <div className="p-2 content d-flex justify-content-center bg-body" style={{height: '41.55rem'}}>
           <UpdateUser currentUser= {currentUser} setCurrentUser={setCurrentUser}/>
        </div>
    </>
  )
}

export default AboutUser