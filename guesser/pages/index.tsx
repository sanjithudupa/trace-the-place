// import Link from 'next/link'

// import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Button, Flex, Heading } from "@chakra-ui/react"
import { useRouter } from "next/router";
import React from "react"


const IndexPage = () => {
    const router = useRouter();

    const handleClick = async () => {
        const res = await fetch("/api/create");
        const result = await res.json();
        
        if (result.id)
            router.push(`/game?id=${result.id}`);
    }

    return (
        <div>
            <Flex height="100vh" alignItems="center" justifyContent="center" textAlign="center">
                <Flex direction="column">
                    <Heading mb={3}>Guesser</Heading>
                    
                    <i>The most stimulating geography game.</i>
                    <br />
                    <Button colorScheme="green" mb={10} onClick={handleClick}>Begin</Button>
                </Flex>
            </Flex>
            <div style={{position: "absolute", bottom: "0", margin: "10", width: "100%", textAlign: "center"}}>
                <span>&copy;</span> 2021 Sanjith Udupa
                <br />
                <br />
            </div>
        </div>
    )
}

// const Login = () => {
//   const { toggleColorMode } = useColorMode();
//   const formBackground = useColorModeValue("gray.100", "gray.700");

//   return (
//     <Flex height="100vh" alignItems="center" justifyContent="center">
//       <Flex direction="column" background={formBackground} p={12} rounded={6}>
//         <Heading mb={6}>Log In</Heading>
//         <Input placeholder="name@domain.ext" variant="filled" mb={3} type="email" />
//         <Input placeholder="*******" variant="filled" mb={6} type="password" />
//         <Button colorScheme="teal">Log In</Button>
//         <Button mb={6} onClick={toggleColorMode}>Toggle Color Mode</Button>
//       </Flex>
//     </Flex>
//   )
// }

export default IndexPage
