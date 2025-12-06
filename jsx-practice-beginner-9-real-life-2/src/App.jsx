import "./App.css";
import Header from "./Header";
import EmployeeCard from "./EmployeeCard";
import Footer from "./Footer";
const employees = [
  {
    name: "Ali",
    age: 28,
    department: "Finance",
    isPermanent: true
  },
  {
    name: "Imran",
    age: 38,
    department: "Admin",
    isPermanent: false
  },
  {
    name: "Usman",
    age: 29,
    department: "I.T.",
    isPermanent: true
  },
  {
    name: "Banka",
    age: 47,
    department: "Human Resources",
    isPermanent: true
  },
  {
    name: "Kamran",
    age: 19,
    department: "Centralized Operations",
    isPermanent: false
  }];
function App() {
  return (
    <div>
      <h1 className="bordered" style={{ color: "green" }}>Employee Directory</h1>
      <Header companyName={"Banka's Company"} isVerified={true} />
      {employees.map((employee) => {
        return (
        <EmployeeCard
        key={employee.name}
        name={employee.name} age={employee.age} department={employee.department} isPermanent={employee.isPermanent} />);
      })}
      <Footer year={"2019"} author={"Usman Sb"} />
    </div>
  );
}
export default App;