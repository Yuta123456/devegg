"use client";
import { Inter } from "next/font/google";
import { Container } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Container maxW="container.lg" h="100%"></Container>;
}
