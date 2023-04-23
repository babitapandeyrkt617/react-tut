import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const[isLoading , setIsLoading]=useState(true);
  const[isError , setIsError]=useState(false);
  const[user , setUser]=useState(null);
  useEffect(()=>{
    const fetchUser= async()=>{
      try{
      const respons= await fetch(url);
      const user = await respons.json();
    setUser(user)
      }
      catch(error){
        console.log(error);
      }
    };
   fetchUser();
  },[]);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return  <h2>Fetch Data </h2>;


};
export default MultipleReturnsFetchData;
