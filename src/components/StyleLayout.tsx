"use client";
import { Box, Container, Flex } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Noto_Sans_JP } from "@next/font/google";
import { useRecoilState } from "recoil";
import { userState } from "@/state/user";
const notojp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});
export default function StyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [_, setUser] = useRecoilState(userState);
  return (
    <Flex direction="column" minH="100vh" className={notojp.className}>
      <Header />
      <Box as="main" flex="1">
        <Container maxW="container.lg" pb="30px">
          {children}
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
}
