import React,{useEffect} from 'react'
import SideBar from '../SideBar/Sidebar';
import UserSettings from './UserSettings/UserSettings';
function AccountSettings({currentUser, setHighlight, Highlight}) {
  useEffect(() => {
    setHighlight(3);
  })
  return (
    <>
        <SideBar Highlight = {Highlight}/>
        <div className="content d-flex justify-content-center bg-body" style={{height: '41.55rem'}}>
          <UserSettings/>   
        </div>
    </>
  )
}
export default AccountSettings