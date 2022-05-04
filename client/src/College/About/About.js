import axios from 'axios';
import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import AboutCard from './AboutCard/AboutCard';
import CoursesCard from './CoursesCard/CoursesCard';
import DescCard from './DescCard/DescCard';
import ContactInfo from './ContactInfo/ContactInfo';
function About(props) {
  const { id } = useParams();
  const [collegeData, setCollegeData] = useState({});
  useEffect(() => {
    axios.get('http://localhost:3000/colleges/' + parseInt(id)).then((res)=>{
      console.log(res);
      setCollegeData(res.data);
    });
  }, [id])
  return (
    <div className='container'>
        <DescCard college={collegeData}/>
        <ContactInfo college={collegeData}/>
        <AboutCard about={collegeData.about}/>
        <CoursesCard courses={collegeData.courses}/>
    </div>
  )
}

export default About