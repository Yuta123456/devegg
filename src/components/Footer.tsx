"use client";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <Box bg="white">
      <Container maxW="container.lg">
        <Flex as="footer" justify="space-between" py="6">
          <Flex flexDirection="column">
            <Text fontWeight="bold" pb="7px">
              Links
            </Text>
            <Link href="/about">
              <Text color="gray.500" pb="4px">
                DevEggについて
              </Text>
            </Link>
            <Link href="https://twitter.com/nayuta999999">
              <Text color="gray.500" pb="4px">
                Twitter
              </Text>
            </Link>
          </Flex>
          <Flex flexDirection="column">
            <Image
              src="/DevEgg.svg"
              alt="Dev Egg logo"
              width="100"
              height="100"
            />
            <Text fontWeight="bold">&copy; 2023 Tanaka Yuta</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
