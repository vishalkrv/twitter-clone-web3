import {
  Flex,
  Stack,
  Link,
  Icon,
  Text,
  Button,
  Avatar,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaTwitter, FaHashtag } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiHomeCircle, BiEnvelope } from "react-icons/bi";
import { HiOutlineBookmark, HiOutlineUser } from "react-icons/hi";
import { CgNotes, CgMoreO } from "react-icons/cg";
import { RiHome7Fill } from "react-icons/ri";
import { IconSize, TwitterBlue } from "../utils/constant";
import UserAvatar from "./userAvatar";

const menuList = [
  {
    label: "Home",
    icon: RiHome7Fill,
  },
  {
    label: "Explore",
    icon: FaHashtag,
  },
  {
    label: "Notifications",
    icon: IoNotificationsOutline,
  },
  {
    label: "Messages",
    icon: BiEnvelope,
  },
  {
    label: "Bookmarks",
    icon: HiOutlineBookmark,
  },
  {
    label: "Lists",
    icon: CgNotes,
  },
  {
    label: "Profile",
    icon: HiOutlineUser,
  },
  {
    label: "More",
    icon: CgMoreO,
  },
];

const LeftSidebar = () => {
  return (
    <Flex
      pos="sticky"
      top={0}
      alignSelf="start"
      px={70}
      direction="column"
      justify={"space-between"}
      h="100vh"
      pb={8}
    >
      <Stack mt={2}>
        <NextLink href="/" passHref>
          <Link>
            <Flex>
              <Icon as={FaTwitter} fontSize={IconSize} />
            </Flex>
          </Link>
        </NextLink>
        {menuList.map((menu, index) => (
          <NextLink href="/" passHref key={index}>
            <Link _hover={{ textDecoration: "none" }}>
              <Flex
                _hover={{ bg: "gray.300", borderRadius: 30 }}
                align={"center"}
                fontWeight={"semibold"}
                py={2}
                px={2}
              >
                <Icon fontSize={IconSize} as={menu.icon} mr={5} />
                <Text fontSize={"xl"}>{menu.label}</Text>
              </Flex>
            </Link>
          </NextLink>
        ))}
        <Button
          bg={TwitterBlue}
          color={"white"}
          borderRadius={30}
          p={"6"}
          fontWeight="bold"
        >
          Tweet
        </Button>
      </Stack>
      <Flex>
        <UserAvatar></UserAvatar>
        <Flex direction={"column"} pl={5}>
          <Text fontWeight={"semibold"}>Vishal👨‍💻👨‍🍳🛌</Text>
          <Text fontSize={"sm"} color={"gray"}>
            @vishalkrv
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LeftSidebar;
