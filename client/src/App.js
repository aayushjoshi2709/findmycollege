import { useState, useEffect } from 'react';
import Navbar from './Common/Navbar/Navbar';
import ShowColleges from './College/ShowColleges/ShowColleges';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import SearchCollege from './College/SearchCollege/SearchCollege';
import AddCollege from './College/AddCollege/AddCollege';
import Login from './User/Login/Login';
import SignUp from './User/Signup/SignUp';
import About from './College/About/About';
import AboutUser from './User/Dashboard/AboutUser/AboutUser';
import MyColleges from './User/Dashboard/MyColleges/MyColleges';
function App() {
  axios.defaults.withCredentials = true;
  const [colleges, setColleges] = useState({});
  const [foundColleges, setFoundColleges] = useState({});
  const [search, setSearch] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [getColleges, setGetColleges] = useState(true);
  useEffect(() => {
    if(getColleges){
      setColleges({});
      axios.get('http://localhost:3000/colleges')
      .then((response) => {
        setColleges(response.data);
        setGetColleges(false);
      }); 
    }
  }, [getColleges])
  
  useEffect(() => {
    setFoundColleges({});
    axios.get(`http://localhost:3000/colleges/search/${search}`).then((response) => {
      setFoundColleges(response.data);
    });
  }, [search]);
  
 

  return (
    <>
      <Router>
        <Navbar currentUser = {currentUser} setCurrentUser= {setCurrentUser}/>
        <Routes>
          <Route path="/" element={<SearchCollege colleges = {foundColleges} setSearch={setSearch}/> }/>
          <Route path="colleges">
            <Route path="" element={<ShowColleges colleges = {colleges}/>} />
            <Route path="new" element={<AddCollege setGetColleges = {setGetColleges}/>} />
            <Route path="about/:id" element={<About/>}/>
          </Route>
          <Route path='user'>
            <Route path="dashboard" >
              <Route path='' element={<AboutUser currentUser= {currentUser} setCurrentUser={setCurrentUser}/>}/>  
              <Route path ='MyColleges' element = {<MyColleges colleges = {colleges} currentUser= {currentUser}/>}/>
            </Route>
            <Route path="login" element={<Login setCurrentUser = {setCurrentUser}/>} />
            <Route path="new" element={<SignUp setCurrentUser = {setCurrentUser} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;