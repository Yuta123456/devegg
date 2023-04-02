"use client";
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export const Header: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/login";
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
            onClick={() => router.push("/login")}
            hidden={isLoginPage}
          >
            ログイン
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
