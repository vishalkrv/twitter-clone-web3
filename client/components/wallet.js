import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  useRadio,
  useRadioGroup,
  HStack,
  CloseButton,
  Icon,
} from "@chakra-ui/react";

import { FaEthereum } from "react-icons/fa";
import { SiBinance, SiCoinbase } from "react-icons/si";
import Link from "next/link";
import { TwitterBlue } from "../utils/constant";

const Metamask = (props) => (
  <Icon
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox={`0 0 318.6 318.6`}
    {...props}
    xmlSpace="preserve"
  >
    <style>
      {
        ".st1,.st2,.st3,.st4,.st5,.st6,.st9{fill:#e4761b;stroke:#e4761b;stroke-linecap:round;stroke-linejoin:round}.st2,.st3,.st4,.st5,.st6,.st9{fill:#d7c1b3;stroke:#d7c1b3}.st3,.st4,.st5,.st6,.st9{fill:#233447;stroke:#233447}.st4,.st5,.st6,.st9{fill:#cd6116;stroke:#cd6116}.st5,.st6,.st9{fill:#e4751f;stroke:#e4751f}.st6,.st9{fill:#f6851b;stroke:#f6851b}.st9{fill:#763d16;stroke:#763d16}"
      }
    </style>
    <path
      style={{
        fill: "#e2761b",
        stroke: "#e2761b",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      d="m274.1 35.5-99.5 73.9L193 65.8z"
    />
    <path
      className="st1"
      d="m44.4 35.5 98.7 74.6-17.5-44.3zM238.3 206.8l-26.5 40.6 56.7 15.6 16.3-55.3zM33.9 207.7 50.1 263l56.7-15.6-26.5-40.6z"
    />
    <path
      className="st1"
      d="m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zM214.9 138.2l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zM177.9 230.9l33.9 16.5-4.7-39.3z"
    />
    <path
      className="st2"
      d="m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zM106.8 247.4l31.5 14.9-.2-9.3 2.5-22.1z"
    />
    <path
      className="st3"
      d="m138.8 193.5-28.2-8.3 19.9-9.1zM179.7 193.5l8.3-17.4 20 9.1z"
    />
    <path
      className="st4"
      d="m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zM230.8 162.1l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zM110.6 185.2l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
    />
    <path
      className="st5"
      d="m87.8 162.1 23.6 46-.8-22.9zM208.1 185.2l-1 22.9 23.7-46zM144.1 164.6l-5.3 28.9 6.6 34.1 1.5-44.9zM174.6 164.6l-2.7 18 1.2 45 6.7-34.1z"
    />
    <path
      className="st6"
      d="m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zM110.6 185.2l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
    />
    <path
      style={{
        fill: "#c0ad9e",
        stroke: "#c0ad9e",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      d="m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
    />
    <path
      style={{
        fill: "#161616",
        stroke: "#161616",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      d="m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
    />
    <path
      className="st9"
      d="m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
    />
    <path
      className="st6"
      d="m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zM103.6 138.2l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zM174.6 164.6l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
    />
  </Icon>
);

const WalletConnect = (props) => (
  <Icon
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 318.6 318.6"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"WalletConnect"}</title>
    <path
      d="M61.439 36.256c48.91-47.888 128.212-47.888 177.123 0l5.886 5.764a6.041 6.041 0 0 1 0 8.67l-20.136 19.716a3.179 3.179 0 0 1-4.428 0l-8.101-7.931c-34.122-33.408-89.444-33.408-123.566 0l-8.675 8.494a3.179 3.179 0 0 1-4.428 0L54.978 51.253a6.041 6.041 0 0 1 0-8.67l6.46-6.327ZM280.206 77.03l17.922 17.547a6.041 6.041 0 0 1 0 8.67l-80.81 79.122c-2.446 2.394-6.41 2.394-8.856 0l-57.354-56.155a1.59 1.59 0 0 0-2.214 0L91.54 182.37c-2.446 2.394-6.411 2.394-8.857 0L1.872 103.247a6.041 6.041 0 0 1 0-8.671l17.922-17.547c2.445-2.394 6.41-2.394 8.856 0l57.355 56.155a1.59 1.59 0 0 0 2.214 0L145.57 77.03c2.446-2.394 6.41-2.395 8.856 0l57.355 56.155a1.59 1.59 0 0 0 2.214 0L271.35 77.03c2.446-2.394 6.41-2.394 8.856 0Z"
      fill="#3B99FC"
      fillRule="nonzero"
    />
  </Icon>
);

const Polygon = (props) => (
  <Icon
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    viewBox="0 0 560 400"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M349.439 153.825c-4.935-2.82-11.28-2.82-16.92 0l-39.477 23.264-26.789 14.804-38.773 23.264c-4.934 2.82-11.279 2.82-16.919 0l-30.313-18.33c-4.935-2.82-8.46-8.459-8.46-14.803v-35.248c0-5.64 2.82-11.28 8.46-14.805l30.313-17.624c4.935-2.82 11.28-2.82 16.92 0l30.313 18.33c4.934 2.82 8.46 8.459 8.46 14.803v23.264l26.788-15.509v-23.969c0-5.64-2.82-11.279-8.46-14.804L228.185 83.33c-4.934-2.82-11.279-2.82-16.919 0l-57.806 33.838c-5.64 2.82-8.46 8.46-8.46 14.1v66.266c0 5.64 2.82 11.28 8.46 14.804l57.101 33.133c4.935 2.82 11.28 2.82 16.92 0l38.772-22.559 26.789-15.509 38.773-22.559c4.934-2.82 11.279-2.82 16.919 0l30.313 17.624c4.935 2.82 8.46 8.46 8.46 14.805v35.248c0 5.64-2.82 11.279-8.46 14.804l-29.608 17.624c-4.935 2.82-11.28 2.82-16.92 0l-30.313-17.624c-4.934-2.82-8.46-8.46-8.46-14.804v-22.56l-26.788 15.51v23.264c0 5.64 2.82 11.28 8.46 14.804l57.102 33.133c4.934 2.82 11.279 2.82 16.919 0l57.102-33.133c4.934-2.82 8.46-8.46 8.46-14.804v-66.972c0-5.64-2.82-11.279-8.46-14.804z"
      fill="#8247e5"
      fillRule="nonzero"
    />
  </Icon>
);

export default function Wallet({ onSelect }) {
  const networkOptions = [
    {
      value: "ethereum",
      label: "Ethereum",
      icon: FaEthereum,
      disabled: false,
    },
    {
      value: "polygon",
      label: "Polygon",
      icon: Polygon,
      disabled: true,
    },
    {
      value: "binance",
      label: "Binance",
      icon: SiBinance,
      disabled: true,
    },
  ];

  const walletOptions = [
    {
      value: "metamask",
      label: "Metamask",
      icon: Metamask,
      disabled: false,
    },
    {
      value: "coinbase",
      label: "Coinbase",
      icon: SiCoinbase,
      disabled: false,
    },
    {
      value: "walletConnect",
      label: "Wallet Connect",
      icon: WalletConnect,
      disabled: false,
    },
  ];

  function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} disabled={props.disabled} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          _checked={{
            bg: "blue.700",
            color: "white",
            borderColor: "blue.500",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    );
  }

  const networkRadioGroup = useRadioGroup({
    name: "network",
    defaultValue: "ethereum",
    onChange: (value) => {
      console.log("Selected value", value);
    },
  });

  const walletRadioGroup = useRadioGroup({
    name: "wallet",
    defaultValue: null,
    onChange: (value) => {
      onSelect(value);
    },
  });

  const networkgroup = networkRadioGroup.getRootProps();
  const walletGroup = walletRadioGroup.getRootProps();

  return (
    <Flex
      rounded="lg"
      pos="relative"
      direction={"column"}
      py={5}
      px={5}
      h="100%"
    >
      {/* <CloseButton
        pos={"absolute"}
        right={0}
        top={0}
        variant="ghost"
        _focus={{ outline: "none" }}
      ></CloseButton> */}
      <Text fontSize={"2xl"} fontWeight="bold">
        Connect your wallet
      </Text>
      <Text fontSize={"sm"} fontWeight="thin">
        Select the preferred blockchain network and the wallet from below
      </Text>
      <Box mt={10}>
        <Text fontSize={"lg"} fontWeight="bold">
          Choose Blockchain Network
        </Text>
        <HStack {...networkgroup}>
          {networkOptions.map(({ value, label, icon, disabled }) => {
            const radio = networkRadioGroup.getRadioProps({ value });
            return (
              <RadioCard key={value} disabled={disabled} {...radio}>
                <Flex
                  alignItems={"center"}
                  direction="column"
                  w="full"
                  minW={120}
                >
                  <Icon w={10} h={10} as={icon}></Icon>
                  <Text textTransform={"capitalize"}>{label}</Text>
                </Flex>
              </RadioCard>
            );
          })}
        </HStack>
      </Box>
      <Box mt={10}>
        <Text fontSize={"lg"} fontWeight="bold">
          Choose Wallet
        </Text>
        <HStack {...walletGroup}>
          {walletOptions.map(({ value, label, icon, disabled }) => {
            const radio = walletRadioGroup.getRadioProps({ value });
            return (
              <RadioCard key={value} disabled={disabled} {...radio}>
                <Flex
                  alignItems={"center"}
                  direction="column"
                  w="full"
                  minW={120}
                >
                  <Icon w={10} h={10} as={icon}></Icon>
                  <Text textTransform={"capitalize"}>{label}</Text>
                </Flex>
              </RadioCard>
            );
          })}
        </HStack>
      </Box>
    </Flex>
  );
}
