import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Icon,
  SimpleGrid,
  useBreakpointValue,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import Link from "next/link";
import Wallet from "./wallet";
import useMetamask from "../hooks/useMetamask";
import { ethers } from "ethers";

export default function Login() {
  const { connect } = useMetamask();

  const onWalletSelect = async (value) => {
    switch (value) {
      case "metamask":
        try {
          await connect(ethers.providers.Web3Provider, "any");
        } catch (error) {
          console.log(error);
        }
        break;
    }
  };

  return (
    <Box position={"relative"}>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            zIndex={1}
          >
            Get started with{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              <ChakraLink as={Link} href="/">
                Twitter
              </ChakraLink>
            </Text>
          </Heading>
        </Stack>
        <Wallet onSelect={onWalletSelect}></Wallet>
      </Container>
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
