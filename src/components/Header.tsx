"use client";
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
export const Header: FC = () => {
  return (
    <Box h="100px" bg="white">
      <Container maxW="container.lg" h="100%">
        <Flex h="100%" alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Image
              src="/DevEgg.svg"
              alt="dev egg logo"
              width={100}
              height={100}
              priority
            />
          </Link>
          <Button
            size="lg"
            bg="yellow.100"
            _hover={{ bg: "yellow.200" }}
            variant="outline"
          >
            ログイン
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
