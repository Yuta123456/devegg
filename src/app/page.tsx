"use client";
import { Inter } from "next/font/google";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { RequestCard } from "@/components/RequestCard";
import { DesignRequest } from "@/model/DesignRequest";
import { designRequests } from "@/mock/designRequests";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container maxW="container.lg" h="100%">
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        paddingTop="10px"
      >
        {designRequests !== undefined &&
          designRequests.map((req) => {
            return <RequestCard key={req.id} {...req} />;
          })}
      </SimpleGrid>
    </Container>
  );
}
