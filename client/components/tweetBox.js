import { Button, Flex, IconButton, Box, Textarea } from "@chakra-ui/react";
import UserAvatar from "./userAvatar";
import { TwitterBlue } from "../utils/constant";
import { FaImage } from "react-icons/fa";
import { useFormik } from "formik";
import { ethers } from "ethers";
import abi from "../../smart-contract/artifacts/contracts/Tweets.sol/Tweets.json";

const TweetBox = ({ done }) => {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_TWITTER_ADDRESS;
  const contractABI = abi.abi;

  const sendTweet = async (message) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const tweetsContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        /*
         * Execute the actual tweet from your smart contract
         */
        const tweetTxn = await tweetsContract.postTweet(message);
        console.log("Mining...", tweetTxn.hash);

        await tweetTxn.wait();
        console.log("Mined -- ", tweetTxn.hash);

        // let count = await tweetsContract.getTotalTweets();
        // console.log("Retrieved total wave count...", count);
        // getAllTweets();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: async ({ message }, { setSubmitting }) => {
      await sendTweet(message);
      done();
      setSubmitting(false);
      formik.resetForm();
    },
  });
  return (
    <Flex mt={5} w="full">
      <UserAvatar></UserAvatar>
      <Flex
        as={"form"}
        onSubmit={formik.handleSubmit}
        direction={"column"}
        ml={5}
        w="full"
      >
        <Textarea
          placeholder="What's happening?"
          fontSize={20}
          fontWeight="semibold"
          p={0}
          variant="unstyled"
          overflow={"hidden"}
          resize={"none"}
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
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
          <Button
            borderRadius={30}
            bg={TwitterBlue}
            type="submit"
            disabled={formik.isSubmitting || formik.values.message === ""}
          >
            Tweet
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TweetBox;
