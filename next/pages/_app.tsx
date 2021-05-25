import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { AppProps } from "next/app";
import NextLink from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Flex
          align="center"
          py={4}
          px={6}
          position="fixed"
          shadow="base"
          w="full"
          top={0}
          right={0}
          left={0}
          zIndex="overlay"
          bg="white"
        >
          <NextLink href="/">
            <Link as={Heading} _hover={{ textDecoration: "none" }} size="lg">
              Cats
            </Link>
          </NextLink>
          <Spacer />
          <NextLink href="/liked">
            <Link color="blue.500">Liked</Link>
          </NextLink>
        </Flex>
        <Box h={16} />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
