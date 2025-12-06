function Header({ companyName, isVerified }) {
    return (
        <div className="bordered">
            <h1 style={{color:"green"}}>{companyName}</h1>
            <p style={{color:isVerified ? "green" : "red"}}>{isVerified ? "Verified Company" : "Unverified Company"}</p>
        </div>
    );
}
export default Header;