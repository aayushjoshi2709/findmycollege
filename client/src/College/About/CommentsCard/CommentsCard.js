import React from "react";
import AddComments from "./AddComments/AddComments";
import Comments from "./Comments/Comments";
function CommentsCard({ currentUser, collegeComments, id, setReloadComments} ) {
  console.log(collegeComments);
  return (
    <>
      <div className="card shadow-lg m-2 mb-5 bg-white rounded d-flex flex-row">
        <div className="card-body">
          <h5 className="card-title">
            <u>Comments</u>
          </h5>
          <div className="card-text">
            <AddComments id={id} setReloadComments= {setReloadComments}/>
          </div>
          {
            collegeComments
            ? Object.keys(collegeComments).map((id, key) => {
                return <Comments setReloadComments= {setReloadComments} currentUser={currentUser} key={id} comment ={collegeComments[key]}/>
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default CommentsCard;
