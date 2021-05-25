import { ChakraProvider, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import { AppProps } from "next/app";
import NextLink from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Flex align="center" py={4} px={6} shadow="base">
          <Heading size="lg">Cats</Heading>
          <Spacer />
          <NextLink href="/liked">
            <Link color="blue.500">Liked</Link>
          </NextLink>
        </Flex>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
