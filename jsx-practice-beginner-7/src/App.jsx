import Header from './Header';
import UserCard from './UserCard';
import Footer from './Footer';

function App() {
  const headerTitle = "User Management System";
  const isPremium = true;
  const name = "Muhammad Usman Banka";
  const age = 45;
  const country = "Pakistan";
  const verified = true;
  const author = "Usman Banka";
  return (
    <div>
      <Header isPremium={isPremium} headerTitle={headerTitle} />
      <UserCard name={name} age = {age} country = {country} verified={verified} />
      <UserCard name="Ali" age={22} country="Pakistan" verified={true} />
      <UserCard name="Sara" age={28} country="Dubai" verified={false} />
      <UserCard name="John" age={24} country="USA" verified={true} />

      <Footer author={author}/>
    </div>
  );
}


export default App;
