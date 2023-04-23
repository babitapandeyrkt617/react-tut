import { data } from '../../../data';
import { useState } from "react";


const UseStateArray = () => {
  const[people , setPeople]= useState(data);

  const removeItem=(id)=>{
    console.log(id);
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
  <div>
{people.map((person)=>{
 {/* console.log(person); */}
 {/* const{id ,name}=  person; */}
 return <div key={person.id}>
          {person.name}
          <button onClick={()=>removeItem(person.id)}>Remove</button>
          </div>
       
})}
<button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
</div>
  

  );
};

export default UseStateArray;
