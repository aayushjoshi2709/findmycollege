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
function App() {
  const [colleges, setColleges] = useState({});
  const [foundColleges, setFoundColleges] = useState({});
  const [search, setSearch] = useState({});
  const [newCollege, setNewCollege] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    setColleges({});
    axios.get('http://localhost:3000/colleges',{ withCredentials: true })
    .then((response) => {
      setColleges(response.data);
    }); 
  }, [])
  
  useEffect(() => {
    setFoundColleges({});
    axios.get(`http://localhost:3000/colleges/search/${search}`,{ withCredentials: true }).then((response) => {
      setFoundColleges(response.data);
    });
  }, [search]);
  
  useEffect(() => {
      if(Object.keys(newCollege).length !== 0){
        axios.post(`http://localhost:3000/colleges`, newCollege,{ withCredentials: true }).then((response) => {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });
     }
  }, [newCollege]);

  return (
    <>
      <Router>
        <Navbar currentUser = {currentUser} setCurrentUser= {setCurrentUser}/>
        <Routes>
          <Route path="/" element={<SearchCollege colleges = {foundColleges} setSearch={setSearch}/> }/>
          <Route path="colleges">
            <Route path="" element={<ShowColleges colleges = {colleges}/>} />
            <Route path="new" element={<AddCollege setNewCollege= {setNewCollege}/>} />
            <Route path="about/:id" element={<About/>}/>
          </Route>
          <Route path='user'>
            <Route path="" element={<Login setCurrentUser = {setCurrentUser}/>} />
            <Route path="new" element={<SignUp setCurrentUser = {setCurrentUser} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
