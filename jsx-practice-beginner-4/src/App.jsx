function App(){
  
  const myName = "Muhammad Usman Banka";
  const isError = true;


  return (
    <>
      <h1>This is JSX Practice Beginner Task # 4</h1>
      <h2 style = {{color:"brown", fontSize:"50px"}}>This demonstrate dynamic InLine Style</h2>
      <h3>Oh, let me tell you that I am {myName} and we have used the variable named isError whose value currently is set to {isError}</h3>
      <h4 className="className1 className2">This is demonstrating how to give a class to an element</h4>
      <p style={{color: isError ? "red" : "green", fontSize: isError ? "90px" : "20px"}}>Is this an error?</p>





    </>
  );  
}

export default App;