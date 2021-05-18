import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";
// import Footer from "../sections/Footer";

const LandingLayout: React.FC = (props) => {
    return (
        <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        {...props}
        >
            <Header />
            {props.children}
        {/* <Footer /> */}
        </Flex>
    )
}

export default LandingLayout;