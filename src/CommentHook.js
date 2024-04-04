import React, { useState } from "react";

function CommentHook() {
  const [data, setData] = useState([]);

  function selectHandler(e) {
    console.log(e.target.value);
    fetch(
      "https://jsonplaceholder.typicode.com/posts/" +  e.target.value + "/comments"
    )
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
        setData(data );
      });
  }
  return (
    <>
      <div>
        <hr />
        <p>Choose post ID:</p>
        <select onChange={selectHandler} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div >
        <h1>Comments</h1>
        {data.map((item, index) => (
          <section key={item.id}>
            <p>
              <b>
                {index + 1}. {item.email}
              </b>
            </p>
            <p>{item.body}</p>
          </section>
        ))}
      </div>
    </>
  );
}
export default CommentHook;
