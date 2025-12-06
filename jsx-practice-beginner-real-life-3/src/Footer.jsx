function Footer({ year, author }){
    return(
        <div 
        className="footer-box" 
        style={{
            marginTop: "20px",
            padding: "10px",
            borderTop: "2px solid black"
         }}>
            <p style={{ color: "brown" }}>© {year} | Dashboard designed by {author}</p>
        </div>
    );
}
export default Footer;