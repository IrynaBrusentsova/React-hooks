import React, { useEffect, useState } from "react";

function Comments2ListHook(props) {
  const [data, setData] = useState([]);

  function onlyEven() {
    // console.log("hi");
    let a = data;
    let evenPost = a.filter((item, index) => {
      if (index % 2 === 0) {
        return true;
      }
    });

    setData(evenPost);
    console.log(evenPost);
  }

  useEffect(() => {
    console.log("effect");
    if (props.data.length > 0) setData(props.data);
  }, [props]);

  return (
    <>
      <div>
        <div>
          <button onClick={onlyEven}>Only even comments</button>
        </div>
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
export default Comments2ListHook;
