"use client";
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <Box h="100px" bg="white">
      <Container maxW="container.lg" h="100%">
        <Flex h="100%" alignItems="center" justifyContent="space-between">
          <Heading fontSize="2xl">Dev Egg</Heading>
          <Button size="lg" bg="yellow.100" _hover={{ bg: "yellow.200" }}>
            ログイン
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
