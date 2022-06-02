import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { MetamaskStateProvider } from "../providers/metmask";

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <MetamaskStateProvider>
        <Component {...pageProps} />
      </MetamaskStateProvider>
    </ChakraProvider>
  );
}

export default MyApp;
