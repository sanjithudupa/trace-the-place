// import Link from 'next/link'

import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import LandingLayout from "../components/layouts/LandingLayout"
import Hero from "../components/ui/hero"

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

const IndexPage = () => {
 return (
    <LandingLayout>
        <Hero
            title="Guesser"
            subtitle="The Ultimate Geography Challenge"
            image="https://source.unsplash.com/collection/404339/800x600"
            ctaText="Begin"
            ctaLink="Start New Game"
        />
    </LandingLayout>
 )
}

export default IndexPage
