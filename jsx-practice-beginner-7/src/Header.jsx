import "./App.css";
import './index.css';

function Header({isPremium, headerTitle}) {
    // console.log(headerTitle);
    return (<>
    <h1 style={{color: isPremium ? "gold" : "black"}}>{headerTitle}</h1>
    <h2 className="header">{isPremium ? "Premium" : "Not Premium"}</h2>
    </>
    );
}

export default Header;