function Footer({year,author}){
    return(
        <div className="bordered">
            <p style={{color:"brown"}}>{year} | Built by {author}</p>
        </div>

    );
}
export default Footer;