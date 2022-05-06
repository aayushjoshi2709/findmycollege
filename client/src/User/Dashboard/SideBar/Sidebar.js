import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div class="sidebar bg-dark">
      <Link class="active" to="/user/dashboard">About Me</Link>
      <Link to="/user/dashboard/MyColleges">My Colleges</Link>
      <Link to="/user/dashboard/AccountSettings">Account Settings</Link>
    </div>
  )
}

export default Sidebar