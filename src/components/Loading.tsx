"use client";
import { Box, Center, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/loading/egg.svg", "/loading/ware.svg", "/loading/hiyoko.svg"];

const Loading = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Center flexDirection="column" h="50vh">
      <Image src={images[index]} alt={"loading..."} width="200" height="200" />
      <Heading>Loading {".".repeat(index + 1)}</Heading>
    </Center>
  );
};

export default Loading;
