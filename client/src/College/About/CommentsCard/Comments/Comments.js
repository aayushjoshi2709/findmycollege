import axios from 'axios'
import React from 'react'

function Comments({comment,currentUser, setReloadComments}) {
  function deleteComment(){
    axios.delete("/colleges/comments/"+parseInt(comment.id)).then((res)=>{
      if(res.status == 200){
        setReloadComments(true);
      }
    })
  }
  return (
    <div className='card d-flex p-2 px-3 m-2'>
        <div>
            <h5 style={{marginBottom:"0px"}}>{comment.user.username}</h5>
            <p style={{paddingLeft:"15px"}}><i>{comment.text}</i></p>
        </div>
        { currentUser.id == comment.userid?
        <div>
            <button onClick={()=>deleteComment()} className='btn btn-danger'><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>:null
        }
    </div>
  )
}

export default Comments