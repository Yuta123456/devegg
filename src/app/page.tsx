"use client";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { RequestCard } from "@/components/RequestCard";
import { designRequests } from "@/mock/designRequests";

export default function Home() {
  return (
    <Container maxW="container.lg" pb="30px">
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
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
