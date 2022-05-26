import React,{useState} from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar(Highlight) {
  return (
    <div className="sidebar bg-dark">
      {
        Highlight.Highlight === 1?<Link className="active" to="/user/dashboard">About Me</Link>:
        <Link to="/user/dashboard">About Me</Link>
      }
      {
        Highlight.Highlight === 2?<Link className="active" to="/user/dashboard/MyColleges">My Colleges</Link>:
        <Link  to="/user/dashboard/MyColleges">My Colleges</Link>
      }
      {
        Highlight.Highlight === 3?<Link className="active" to="/user/dashboard/AccountSettings">Account Settings</Link>:
        <Link to="/user/dashboard/AccountSettings">Account Settings</Link>
      }
    </div>
  )
}

export default Sidebar