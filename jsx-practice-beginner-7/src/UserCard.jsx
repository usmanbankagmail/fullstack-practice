import './App.css';

function UserCard({name, age, country, verified}){
    return(
        <div className="border">
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <p style={{color: verified ? "green" : "gray"}}>Legal: {verified ? "A Legal Person" : "An Illegal Migrant"}</p>
            <p>{verified && "Thank God that he is not Illegal"}</p>
        </div>
    );

}

export default UserCard;