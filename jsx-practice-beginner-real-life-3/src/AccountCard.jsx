function AccountCard({ accountHolder, accountType, balance, isActive }){
    return(
        <div className="account-card" style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", backgroundColor: "#ddd" }}>
            <h3 style={{ color: "blue" }}>{accountHolder}</h3>
            <p>Account Type: {accountType}</p>
            <p>Balance: PKR {balance}</p>
            {balance>500000 && <p style={{ color: "purple" }}>High NetWorth Customer</p>}
            <p style={{ color: isActive ? 'green' : 'red'}}>Account Status: {isActive ? "Active" : "Inactive"}</p>
        </div>
    );
}
export default AccountCard;