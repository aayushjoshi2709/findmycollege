import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutCard from "./AboutCard/AboutCard";
import CoursesCard from "./CoursesCard/CoursesCard";
import DescCard from "./DescCard/DescCard";
import ContactInfo from "./ContactInfo/ContactInfo";
import CommentsCard from "./CommentsCard/CommentsCard";

function About({currentUser}) {
  const { id } = useParams();
  const [collegeData, setCollegeData] = useState({});
  const [collegeComments, setCollegeComments] = useState({});
  const [ReloadComments, setReloadComments] = useState(false);
  useEffect(() => {
    axios.get("/colleges/" + parseInt(id)).then((res) => {
      setCollegeData(res.data);
    });
    axios
      .get("/colleges/comments/" + parseInt(id))
      .then((res) => {
        setCollegeComments(res.data);
      });
  }, [id]);
  useEffect(() => {
    if (ReloadComments == true) {
      axios
        .get("/colleges/comments/" + parseInt(id))
        .then((res) => {
          setCollegeComments(res.data);
        });
      setReloadComments(false);
    }
  }, [ReloadComments]);

  return (
    <div className="container">
      <DescCard college={collegeData} />
      <ContactInfo college={collegeData} />
      <AboutCard about={collegeData.about} />
      <CoursesCard courses={collegeData.courses} />
      <CommentsCard
        setReloadComments={setReloadComments}
        id={id}
        collegeComments={collegeComments}
        currentUser={currentUser}
      />
    </div>
  );
}

export default About;
