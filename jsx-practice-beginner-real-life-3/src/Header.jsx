function Header({ bankName, isInternational }){
    return(
        <div className="header-box" style={{ padding: "10px", borderBottom: "2px solid black" }}>
            <h2 style={{ color: "navy" }}>{bankName}</h2>
            <p style={{ color: isInternational ? "green" : "red" }}>
                {isInternational ? "International Bank" : "Local Bank"}
            </p>
        </div>
    );
}
export default Header;