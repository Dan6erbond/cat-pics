import { Box, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

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
        <Heading size="lg">Cats API</Heading>
        <Spacer />
        <Link as={RouterLink} to="/liked" color="blue.500">
          Liked
        </Link>
      </Flex>
      <Box h={16} />
      {children}
    </>
  );
}
