import React, { useEffect, useState } from "react";

function PlaceholderPostHook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <section >
      {data.map((item) => (
        <div key={item.id}> 
          <h2>
            {item.id} {item.title}
          </h2>
          <p> {item.body}</p>
        </div>
      ))}
    </section>
  );
}
export default PlaceholderPostHook;
