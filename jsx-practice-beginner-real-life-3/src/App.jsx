import Header from "./Header.jsx";
import Summary from "./Summary.jsx";
import AccountCard from "./AccountCard.jsx";
import Footer from "./Footer.jsx";
const accounts = [
  {
    accountHolder: "Ali",
    accountType: "Savings",
    balance: 250000,
    isActive: true
  },
  {
    accountHolder: "Noman",
    accountType: "Current",
    balance: 300000,
    isActive: true
  },
  {
    accountHolder: "Yousuf",
    accountType: "Savings",
    balance: 70000,
    isActive: true
  },
  {
    accountHolder: "Fawwaz",
    accountType: "Savings",
    balance: 520000,
    isActive: true
  },
  {
    accountHolder: "Ishaq",
    accountType: "Savings",
    balance: 503000,
    isActive: true
  },
  {
    accountHolder: "Aiza",
    accountType: "Current",
    balance: 251003,
    isActive: false
  },
  {
    accountHolder: "Shahmoona",
    accountType: "Current",
    balance: 202000,
    isActive: true
  },
  {
    accountHolder: "Banka",
    accountType: "Savings",
    balance: 10001,
    isActive: true
  },
  {
    accountHolder: "Usman",
    accountType: "Current",
    balance: 60030,
    isActive: false
  },
  {
    accountHolder: "Ramzan",
    accountType: "Savings",
    balance: 700070,
    isActive: true
  },
];

function App(){
  return(
    <div>
      <h1>Customer Account Dashboard</h1>
      <Header bankName="Banka International" isInternational={true} />
      <Summary 
      totalAccounts={10} 
      activeAccounts={8}
      inActiveAccounts={2}  
      />
      {accounts.map((account) => (
        <AccountCard
          key={account.accountHolder}
          accountHolder={account.accountHolder}
          accountType={account.accountType}
          balance={account.balance}
          isActive={account.isActive}
        />
      ))}
      <Footer year="2025" author="Muhammad Usman Banka" />
      
    </div>
  );
}
export default App;