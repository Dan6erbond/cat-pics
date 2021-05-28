import { Box, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import "@styles/globals.css";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
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
      {children}
    </>
  );
}
