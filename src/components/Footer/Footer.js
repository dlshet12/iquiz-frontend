import React from "react";
import "./footer.css"

function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return(
        <footer>
            <p className="footer">copyright @ {year} </p>
        </footer>
    );
}
export default Footer;