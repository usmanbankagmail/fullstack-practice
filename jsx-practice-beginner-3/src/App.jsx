function App() {

  const myName = "Muhammad Usman Banka";
  const myAge = 30;


  return (
    <>
      <h1>My name is: {myName}</h1>
      <h2 className="digits profile">My age is: {myAge}</h2>
      <h3 style={{ color: "red", fontSize: "20px" }}>This line uses inline Style for practicing / demonstration purpose</h3>
    </>
  );
}

export default App;