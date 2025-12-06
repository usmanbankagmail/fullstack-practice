function Summary({ totalAccounts, activeAccounts, inActiveAccounts }){
    return(
        <div>
            <h3>Accounts Summary</h3>
            <p>Total Accounts: {totalAccounts}</p>
            <p>Active Accounts: {activeAccounts}</p>
            <p>Inactive Accounts: {inActiveAccounts}</p>
        </div>
    );
}
export default Summary;
