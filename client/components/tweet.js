import { Avatar, Flex, Heading, IconButton, Box, Text } from "@chakra-ui/react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiHeart, FiUpload } from "react-icons/fi";

const Tweet = ({
  avatar,
  name,
  address,
  description,
  reTweetCount,
  commentsCount,
  likesCount,
}) => {
  return (
    <Flex borderBottom={"1px solid gray"} p={5}>
      <Avatar src={avatar}></Avatar>
      <Flex direction={"column"} ml={5}>
        <Flex align={"center"}>
          <Heading size="sm">{name} &nbsp;</Heading>
          <Text color="gray">@{address}</Text>
        </Flex>
        <Text>
          {description}
        </Text>
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

export default Tweet;
