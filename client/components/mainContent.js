import { Flex, Heading } from "@chakra-ui/react";

import TweetFeed from "./tweetFeed";

import { ethers } from "ethers";
import abi from "../../smart-contract/artifacts/contracts/Tweets.sol/Tweets.json";
import { useEffect, useState } from "react";
import TweetBox from "./tweetBox";

const TweetList = [
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1235992718171467776/PaX2Bz1S_400x400.jpg",
    name: "Netflix India",
    address: "NetflixIndia",
    description: `Ryan Reynolds time traveled just to punch Mark Ruffalo.`,
    reTweetCount: 123,
    commentsCount: 23,
    likesCount: 3,
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1278259160644227073/MfCyF7CG_400x400.jpg",
    name: "CNN",
    address: "CNN",
    description: `NBC recently announced a forthcoming two-hour TV event, titled "An Audience with Adele."`,
    reTweetCount: 123,
    commentsCount: 23,
    likesCount: 3,
  },
];

export default function MainContent() {
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_TWITTER_ADDRESS;
  const contractABI = abi.abi;

  const [tweetFeed, setTweetFeed] = useState([]);

  /*
   * Create a method that gets all waves from your contract
   */
  const getAllTweets = async () => {
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
         * Call the getAllTweets method from your Smart Contract
         */
        const tweets = await tweetsContract.getAllTweets();

        /*
         * We only need address, timestamp, and message in our UI so let's
         * pick those out
         */
        let tweetsCleaned = [];
        tweets.forEach((tweet) => {
          // console.log(tweet);

          tweetsCleaned.push({
            address: tweet.user,
            timestamp: new Date(tweet.timestamp * 1000),
            message: tweet.message,
          });
        });
        tweetsCleaned.sort((x, y) => y.timestamp - x.timestamp);
        setTweetFeed(tweetsCleaned);
        // console.log(tweetsCleaned);
        /*
         * Store our data in React State
         */
        // setAllWaves(wavesCleaned);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTweets();
  }, []);
  return (
    <Flex
      w="full"
      overflowY={"auto"}
      borderLeft="1px solid gray"
      borderRight="1px solid gray"
      direction={"column"}
      py={3}
    >
      <Flex
        direction={"column"}
        w="full"
        px={5}
        pb={5}
        borderBottom={"1px solid gray"}
      >
        <Heading size="md">Latest Tweets</Heading>
        <TweetBox done={getAllTweets}></TweetBox>
      </Flex>
      {tweetFeed.map((tweet, index) => (
        <TweetFeed key={index} {...tweet}></TweetFeed>
      ))}
    </Flex>
  );
}
