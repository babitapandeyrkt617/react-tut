import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(1));
  const[count ,setCount]=useState(0);

  const handelbutton=()=>{
    setCount(count + 1);
  };
  const handelbtn=()=>{
    setCount(count - 1);
  };


  return (
  <>
  <h2>you click {count} times</h2>
  <button onClick={handelbutton} className="btn">increse</button>
  <button onClick={handelbtn} className="btn">decrese</button>
  </>
  );
};

export default UseStateBasics;
