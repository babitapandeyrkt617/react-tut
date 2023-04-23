

const ErrorExample = () => {
 let count= 0;

  const Handler=()=>{
  count= count+1;
  console.log(count);
  }
  return (
    <>
    <div>
  <h2>useState error example</h2>
  <h1>{count}</h1>
  </div>
  <div>
    <button onClick={Handler}  className='btn'>increse</button>
  </div>
  </>
  );
  }

export default ErrorExample;
