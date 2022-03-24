import {
  Flex,
  Stack,
  Link,
  Text,
  Heading,
  useColorModeValue,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { TwitterBlue } from "../utils/constant";

import SearchBox from "./search";

const newsList = [
  {
    title: "War in Ukraine - LIVE",
    description:
      "Shelling in Ukraine cities continue as Russia and Ukraine poised to hold fresh talks",
    tweetCount: "12.5K",
  },
  {
    title: "Trending in India",
    description: "Shikara",
    tweetCount: "5,661",
  },
  {
    title: "Trending in India",
    description: "#TheKashmirFiles",
    tweetCount: "1.1M",
  },
  {
    title: "Trending in India",
    description: "#Paytm",
    tweetCount: "1,356",
  },
];

const followList = [
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1235992718171467776/PaX2Bz1S_400x400.jpg",
    name: "Netflix India",
    address: "NetflixIndia",
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1278259160644227073/MfCyF7CG_400x400.jpg",
    name: "CNN",
    address: "CNN",
  },
];

const RightSidebar = () => {
  return (
    <Flex
      pos="sticky"
      top={0}
      alignSelf="start"
      px={10}
      direction="column"
      h="100vh"
      pb={8}
    >
      <SearchBox></SearchBox>
      <Stack
        bg={useColorModeValue("gray.200", "gray.700")}
        borderRadius={10}
        p={4}
        minW={350}
        mt={5}
      >
        <Flex direction={"column"}>
          <Heading size={"md"} fontWeight="extrabold">
            What's Happening
          </Heading>
          {newsList.map((news, index) => (
            <Flex direction={"column"} key={index} mt={5}>
              <Flex align={"center"} justify="space-between">
                <Text fontSize={"xs"} color="gray.200">
                  {news.title}
                </Text>
                <Link href="/">
                  <Text fontSize={"lg"}>...</Text>
                </Link>
              </Flex>
              <Text
                fontSize={"md"}
                color={useColorModeValue("gray", "white")}
                fontWeight={"extrabold"}
              >
                {news.description}
              </Text>
              <Text fontSize={"xs"} color="gray.200">
                {news.tweetCount} Tweets
              </Text>
            </Flex>
          ))}
        </Flex>
      </Stack>
      <Stack
        bg={useColorModeValue("gray.200", "gray.700")}
        borderRadius={10}
        p={4}
        minW={350}
        mt={5}
      >
        <Flex direction={"column"}>
          <Heading size={"md"} fontWeight="extrabold">
            Who to follow
          </Heading>
          {followList.map((user, index) => (
            <Flex justify={"space-between"} mt={5} key={index}>
              <Flex align={"center"}>
                <Avatar src={user.avatar}></Avatar>
                <Flex direction={"column"} ml={5}>
                  <Flex direction="column">
                    <Heading size="sm">{user.name} &nbsp;</Heading>
                    <Text color="gray">@{user.address}</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Button bg={"gray"} borderRadius={20}>
                Follow
              </Button>
            </Flex>
          ))}
        </Flex>
      </Stack>
    </Flex>
  );
};

export default RightSidebar;
