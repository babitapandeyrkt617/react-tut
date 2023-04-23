import { useState } from 'react';

const UseStateObject = () => {
  const[name , setName]=useState(
    {
      name:'peter',
      age: 21,
      hobby:'reading book'
    }
  

  )
  const Handerler=()=>{
    setName({ name: 'john', age: 28, hobby: 'scream at the computer'})
  
  }
  return (
    <div>
  <h2>{name.name}</h2>
  <h2>{name.age}</h2>
  <h2>Enjoys To:{ name.hobby}</h2>
  <button onClick={Handerler} className='btn'>click</button>
  </div>
  )
};

export default UseStateObject;
