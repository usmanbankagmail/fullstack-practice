import Profile from './Profile';


function App(){
const name = "Muhammad Usman Banka";
const age = 30;
const country = "Pakistan";
const toggle = true;

  
  return(
    <Profile name={name} age = {age} country={country} toggle = {toggle} />
  );
}

export default App;