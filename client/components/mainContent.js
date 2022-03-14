import {
  Avatar,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  Box,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { TwitterBlue } from "../utils/constant";
import { FaImage } from "react-icons/fa";
import Tweet from "./tweet";
import UserAvatar from "./userAvatar";

const TweetList = [
  {
    avatar: "https://pbs.twimg.com/profile_images/1235992718171467776/PaX2Bz1S_400x400.jpg",
    name: "Netflix India",
    address: "NetflixIndia",
    description:
      `Ryan Reynolds time traveled just to punch Mark Ruffalo.`,
    reTweetCount: 123,
    commentsCount: 23,
    likesCount: 3,
  },
  {
    avatar: "https://pbs.twimg.com/profile_images/1278259160644227073/MfCyF7CG_400x400.jpg",
    name: "CNN",
    address: "CNN",
    description:
      `NBC recently announced a forthcoming two-hour TV event, titled "An Audience with Adele."`,
    reTweetCount: 123,
    commentsCount: 23,
    likesCount: 3,
  },
];

const MainContent = () => {
  return (
    <Flex
      w="full"
      overflowY={"auto"}
      borderLeft="1px solid gray"
      borderRight="1px solid gray"
      direction={"column"}
      py={3}
    >
      <Flex direction={"column"} w="full" px={5} pb={5} borderBottom={"1px solid gray"}>
        <Heading size="md">Latest Tweets</Heading>
        <Flex mt={5} w="full">
          <UserAvatar></UserAvatar>
          <Flex direction={"column"} ml={5} w="full">
            <Textarea
              placeholder="What's happening?"
              fontSize={20}
              fontWeight="semibold"
              p={0}
              variant="unstyled"
              overflow={"hidden"}
              resize={"none"}
            ></Textarea>
            <Flex justify={"space-between"}>
              <Box d="flex">
                <IconButton
                  variant={"ghost"}
                  isRound
                  colorScheme={"blue"}
                  fontSize="20px"
                  icon={<FaImage></FaImage>}
                ></IconButton>
                <IconButton
                  variant={"ghost"}
                  isRound
                  colorScheme={"blue"}
                  fontSize="20px"
                  icon={<FaImage></FaImage>}
                ></IconButton>
                <IconButton
                  variant={"ghost"}
                  isRound
                  colorScheme={"blue"}
                  fontSize="20px"
                  icon={<FaImage></FaImage>}
                ></IconButton>
              </Box>
              <Button borderRadius={30} bg={TwitterBlue}>
                Tweet
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {TweetList.map((tweet, index) => (
        <Tweet {...tweet}></Tweet>
      ))}
    </Flex>
  );
};

export default MainContent;
