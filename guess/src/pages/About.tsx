import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
    return (
        <div style={{textAlign: "center", position: "relative", top: 80}}>
            <h1>About This Project</h1>
            <h6>I created this project as a free alternative to <a href="https://www.geoguessr.com">GeoGuessr</a>, an extremely popular streetview game.</h6>
            GeoGuessr is very well-made and better featured than this. This is just an alternative that people can use <br /> if they don't wish to pay for the premium version of GeoGuessr to play more than one round.

            <br />
            <br />

            <strong>Who am I?</strong> <br />
            My name is Sanjith Udupa. I'm a programmer and like creating <a href="https://github.com/sanjithudupa">open source projects</a> like this and documenting them on my <a href="https://youtube.com/sanjithar">YouTube channel.</a>
            
            <br />
            <br />
            <strong>Contact:</strong>
            <i className="fab fa-twitter"> <a href="https://twitter.com/SanjithUdupa">@SanjithUdupa</a></i>
            <br />
            <i className="fab fa-github"> <a href="https://github.com/SanjithUdupa">@sanjithudupa</a></i>
            <br />
            <i className="fab fa-youtube"> <a href="https://youtube.com/sanjithar">youtube.com/sanjithar</a></i>
            <br />
            <i className="fas fa-envelope"></i> <a href="mailto:sanjithar.yt@gmail.com">sanjthar.yt@gmail.com</a>

            <br />
            <br />

            <strong>Context For This Project:</strong>
            <br />
            <a href="#">Code</a>
            <br />
            <a href="#">Video Explanation</a>

            <br />
            <br />

            <strong>Credit</strong>
            <br />
            The idea for this project obviously came from GeoGuessr, so thank you to them. <br /> You guys should play their game and just use this one if you run out of your daily free games <i className="far fa-laugh-wink"></i>
            <br />
            More credit can be found in the <Link to="/attributes">Attributions</Link> page
            
        </div>
    )
}

export default About;