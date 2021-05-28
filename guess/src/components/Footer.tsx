import React from "react";

const Footer: React.FC<{sticky?: boolean}> = ({sticky}) => {
    return (
        <footer style={{textAlign: "center", position: sticky ? "sticky" : "absolute", bottom: "5px", width: "100%", color: "gray"}}>
            This project is <a href="https://github.com/sanjithudupa/trace-the-place">Open Source.</a>
            <br/>
            <span>&#169;</span> 2021 <a href="https://youtube.com/sanjithar">Sanjith Udupa</a>, All Rights Reserved.
        </footer>
    )
}

export default Footer;