import { Avatar, Flex, Heading, IconButton, Box, Text } from "@chakra-ui/react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiHeart, FiUpload } from "react-icons/fi";
import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import shorten from "../utils/shorten";

const TweetFeed = ({
  avatar,
  name,
  address,
  message,
  reTweetCount,
  commentsCount,
  likesCount,
  timestamp,
}) => {
  dayjs.extend(relativeTime);

  return (
    <Flex borderBottom={"1px solid gray"} p={5}>
      <Avatar src={avatar}></Avatar>
      <Flex direction={"column"} ml={5}>
        <Flex align={"center"}>
          <Heading size="sm">{name} &nbsp;</Heading>
          <Text color="gray">
            @{shorten(address)}
          </Text>
          <Text color="gray" ml={5} fontSize="sm">{dayjs(timestamp).fromNow()}</Text>
        </Flex>
        <Text>{message}</Text>
        <Box d="flex" w="80%" justifyContent={"space-between"}>
          <IconButton
            variant={"ghost"}
            isRound
            colorScheme={"blue"}
            fontSize="20px"
            icon={<FaRegComment></FaRegComment>}
          ></IconButton>
          <IconButton
            variant={"ghost"}
            isRound
            colorScheme={"blue"}
            fontSize="20px"
            icon={<AiOutlineRetweet></AiOutlineRetweet>}
          ></IconButton>
          <IconButton
            variant={"ghost"}
            isRound
            colorScheme={"blue"}
            fontSize="20px"
            icon={<FiHeart></FiHeart>}
          ></IconButton>
          <IconButton
            variant={"ghost"}
            isRound
            colorScheme={"blue"}
            fontSize="20px"
            icon={<FiUpload></FiUpload>}
          ></IconButton>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TweetFeed;
