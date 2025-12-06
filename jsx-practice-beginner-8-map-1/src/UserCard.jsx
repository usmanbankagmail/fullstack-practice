function UserCard({ name, age, country, isAdult }) {
    return (
        <div>
            <h1 style={{color:"green"}}>Hello {name}</h1>
            <p className="age">Age: {age}</p>
            <p>Country: {country}</p>
            <p style={{color: isAdult ? "green" : "blue"}}>{isAdult && name + " is an adult"}</p>
        </div>
    );

}

export default UserCard;