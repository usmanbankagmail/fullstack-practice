function App() {

  const var1String = "First Variable which is String";
  const var2Number = 10;
  const var3Boolean = true;
  let isError = true;
  let isLoggedIn = false;

  return (
    <>

      <h1 className="heading mainHeading">Welcome to the React JSX Practice Program</h1>
      <h2 style={{ color: "red", fontFamily: "cursive" }}>This is Variable 1 String: {var1String}</h2>
      <h3 style={{ color: var3Boolean ? "green" : "blue" }}>This is Variable 2 Number: {var2Number}</h3>
      <h4>This is Variable 3 Boolean: {var3Boolean}</h4>
      {isError && <p>Error</p>}
      {isLoggedIn ? <p>Welcome to DashBoard</p> : <p>Please Log In First</p>}
    </>
  )
}

export default App;