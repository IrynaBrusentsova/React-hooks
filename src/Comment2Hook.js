import React, { useState } from "react";
import Comments2ListHook from "./Comments2ListHook";


function Comment2Hook() {
  const [data, setData] = useState([]);
  
  function selectHandler(e) {
    console.log(e.target.value);
    fetch("https://jsonplaceholder.typicode.com/posts/" + e.target.value +"/comments" )
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }
  return (
    <>
      <div>
        <hr/>
        <p>Choose post ID:</p>
        <select onChange={selectHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div>
          <Comments2ListHook data={data}/>
        </div>
      </div>
    </>
  );
}
export default Comment2Hook;
