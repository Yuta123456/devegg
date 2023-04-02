"use client";
import { imageURLList } from "@/mock/imageURLList";
import { Card, CardBody, Container, Image, SimpleGrid } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  useEffect(() => {}, []);
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      paddingTop="10px"
    >
      {imageURLList.map((url) => (
        <Card maxW="lg" key={url}>
          <CardBody>
            <Image src={url} borderRadius="lg" alt="design" />
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
}
