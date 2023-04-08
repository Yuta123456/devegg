"use client";
import { SimpleGrid } from "@chakra-ui/react";
import { RequestCard } from "@/components/RequestCard";
import { designRequests } from "@/mock/designRequests";

export default function Home() {
  // const designRequests = useSWR();
  return (
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
  );
}
