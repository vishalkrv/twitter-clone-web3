import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  Button,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import Upload from "rc-upload";
import { create } from "ipfs-http-client";

const ipfs = create(process.env.NEXT_PUBLIC_IPFS_URL);

const ChangeProfilePic = ({ isOpen, onClose }) => {
  const opts = {
    type: "drag",
    accept: ".jpeg,.jpg",
    multiple: false,
    onStart: async (file) => {
      console.log("adding file");
      const { path } = await ipfs.add(file);

      const imageMetadata = JSON.stringify({
        name: "Profile Image",
        description: "Update profile Image",
        image: `ipfs://${path}`,
      });
      const metadata = await ipfs.add(imageMetadata);

      console.log(metadata);
    },
    onError(err) {
      console.log("I m here");
      console.error(err);
      // if (err.status === 405) return;
      // toast({
      //   title: "An error occurred. Please try again",
      //   status: "error",
      //   isClosable: true,
      // });
    },
    style: {
      display: "inline-block",
      width: "100%",
      height: "100%",
    },
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Profile Picture</ModalHeader>
          <ModalCloseButton _focus={{ outline: "transparent" }} />
          <ModalBody>
            <Box borderWidth="3px" borderStyle="dashed">
              <Upload {...opts}>
                <Flex
                  justify={"center"}
                  alignItems="center"
                  direction="column"
                  py={5}
                >
                  <Text fontSize="lg" color={"gray.600"}>
                    Drag n drop a jpeg image
                  </Text>
                  <Text fontSize="lg" color={"gray.600"}>
                    or
                  </Text>
                  <Text fontSize="lg" color={"gray.600"}>
                    Click to upload
                  </Text>
                </Flex>
              </Upload>
            </Box>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Done
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangeProfilePic;
