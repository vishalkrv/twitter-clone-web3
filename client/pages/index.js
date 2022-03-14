import {
  Flex,
  useColorModeValue,
  Box,
  Stack,
  Text,
  Link,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import Head from "next/head";
import LeftSidebar from "../components/leftSidebar";
import MainContent from "../components/mainContent";
import RightSidebar from "../components/rightSidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex minH="100vh">
        <LeftSidebar></LeftSidebar>
        <MainContent></MainContent>
        <RightSidebar />
      </Flex>
    </div>
  );
}