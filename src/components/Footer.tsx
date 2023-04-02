"use client";
import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box h="100px" bg="white">
      <Container maxW="container.lg">
        <Flex
          as="footer"
          align="center"
          justify="space-between"
          wrap="wrap"
          py="6"
          px="8"
          bg="white"
          color="black"
          mt="auto"
        >
          <Text>&copy; Tanaka Yuta</Text>
          <Flex align="center">
            <Text>Powered by</Text>
            <Link href="https://nextjs.org/" isExternal ml="1">
              Next.js
            </Link>
            <Text>&amp;</Text>
            <Link href="https://chakra-ui.com/" isExternal ml="1">
              ChakraUI
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
