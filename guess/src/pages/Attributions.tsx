import React from "react";
import Footer from "../components/Footer";

const Attributions = () => {
    return (
        <div>
            <div style={{textAlign: "center", position: "relative", top: 60}}>
                <h1>Attributions</h1>

                <br />
                <h6>Mapillary</h6>
                If you've ever wondered why Geoguessr isn't free anymore, it isn't because of greed. <br /> It is because of the pricing of the Google Maps Street View API. 
                Google has recently been raising the costs of using the api, <br />and for a site as large as Geoguessr, the prices might be hard for someone to pay for solely off of ad revenue.

                <br />
                <br />

                There aren't very many alternatives to Street View, though, so it is easy for developers to be locked into it. Luckily, <a href="https://www.mapillary.com">Mapillary</a> is a great alternative.
                <br />
                It's crowd-sourced, has quite a bit of coverage, and is <strong>extremely</strong> easy for developers to use. I'd recommend that all of you check it out. 
                <br />
                <br />

                <h6>MapBox</h6>
                Mapbox has been very well-established as the best and most developer-friendly toolkit for custom maps with embedding. <br /> The pricing is very forgiving and the customizability is insane. Check it out <a href="https://www.mapbox.com">here</a>.


                <br />
                <br />

                <h6>Other Open Source Libraries:</h6>
                See which libraries I use in the code <a href="#">here</a>.
            </div>
            <Footer />
        </div>
    )
}

export default Attributions;