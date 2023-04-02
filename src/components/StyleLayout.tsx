"use client";
import { Box, Container, Flex } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
export default function StyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex direction="column" minH="100vh">
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
