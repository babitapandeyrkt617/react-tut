import { useState } from "react";
const UseStateGotcha = () => {
  const[value , setValue]=useState(0);

  const handler=()=>{

    setTimeout(() => {
      console.log('clicked the button');
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  }

  
  return( <><h2>useState "gotcha"</h2>
  <h1>{value}</h1>
  <button onClick={handler} className="btn">increse</button>
  </>
  )
}


export default UseStateGotcha;
