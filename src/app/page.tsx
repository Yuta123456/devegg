"use client";
import { SimpleGrid } from "@chakra-ui/react";
import { RequestCard } from "@/components/RequestCard";
import useSWR from "swr";
import { DesignRequest } from "@/model/DesignRequest";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Home() {
  const {
    data: designRequests,
    error,
    isLoading,
  } = useSWR<DesignRequest[]>("/api/request", fetcher);
  if (error || isLoading || !designRequests) {
    <div>loading...</div>;
  }
  console.log(designRequests);
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
