"use client";
import { SimpleGrid } from "@chakra-ui/react";
import { RequestCard } from "@/components/RequestCard";
import useSWR from "swr";
import { DesignRequest } from "@/model/DesignRequest";
import Loading from "@/components/Loading";

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.deadline);
      if (res && res.length !== 0) {
        const designRequests: DesignRequest[] = res.map((dr: any) => {
          const designRequest: DesignRequest = {
            ...dr,
            deadline: new Date(dr.deadline),
          };
          return designRequest;
        });
        return designRequests;
      } else {
        return [];
      }
    });
export default function Home() {
  const {
    data: designRequests,
    error,
    isLoading,
  } = useSWR<DesignRequest[]>("/api/request", fetcher);
  if (error || isLoading || !designRequests) {
    return <Loading />;
  }

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
