import axios from "axios";
import React, { useState } from "react";

function AddComments({ id, setReloadComments }) {
  const [Text, setText] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      text: Text,
      collegeId: id,
    };
    axios.post("/colleges/comments/", data).then((res) => {
      if (res.status == 201) {
        setReloadComments(true);
      }
    });
  }
  return (
    <div className="d-flex justify-content-center m-2">
      <form
        onSubmit={async (e) => {
          await handleSubmit(e);
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  placeholder="Add New Comments..."
                  type="text"
                  className="form-control my-2"
                  style={{width:"300px"}}
                />
              </td>
              <td>
                <button className="btn btn-success">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default AddComments;
