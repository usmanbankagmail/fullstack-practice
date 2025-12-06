import UserCard from "./UserCard";
import './App.css';

const users = [
  { name: "Usman", age: 45, country: "Pakistan" },
  { name: "Ali", age: 22, country: "Pakistan" },
  { name: "Sara", age: 28, country: "Dubai" },
  { name: "John", age: 24, country: "USA" }
];

function App() {  
  return (  
    <>
      <h1>Users List</h1>
        {users.map((user,index) => (
          <div className="userCard" key={user.name} >
          <UserCard name={user.name} age={user.age} country={user.country} isAdult={index%2===0 ? true : false} />
          </div>         
        ))}      
    </>);
}
export default App; 