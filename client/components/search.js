import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

const SearchBox = () => {
  return (
    <Flex minW={350} mt={1}>
      <InputGroup
        bg={useColorModeValue("gray.200", "gray.700")}
        borderRadius={30}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<RiSearchLine color="gray.900" fontSize={20} />}
        />
        <Input
          border={"none"}
          _focus={{ outline: "transparent" }}
          py={5}
          borderRadius={30}
          type="text"
          placeholder="Search Twitter"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchBox;
