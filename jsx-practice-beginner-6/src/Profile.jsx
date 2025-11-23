function Profile({name , age , country, toggle}) {
    const dangerous = true;
    return (
        <>
            <h2 className="name">Name: {name}</h2>
            <h3 style={{color:"red", fontFamily:"fantasy"}}>Age: {age}</h3>
            <p style={{color: dangerous ? "red" : "green"}}>Country: {country}</p>
            <p>The country is {dangerous ? "dangerous" : "not dangerous"}</p>
            <p>The country is {toggle && "dangerous"}</p>
        </>
    );
}

export default Profile;