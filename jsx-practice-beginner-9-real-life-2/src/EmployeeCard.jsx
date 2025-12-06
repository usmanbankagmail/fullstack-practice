function EmployeeCard({name,age,department,isPermanent}){
    return(
        <div className="styledBox">
            <h3 style={{color:"blue"}}>{name}</h3>
            <p>Age: {age}</p>
            <p>Department: {department}</p>
            <p style={{color:isPermanent ? "green" : "grey"}}>{isPermanent ? "Permanent Employee" : "Contract Employee"}</p>
            <p>{isPermanent && "Alhamdulillah! " + name + " is a permanent employee."}</p>
        </div>
    );
}
export default EmployeeCard;