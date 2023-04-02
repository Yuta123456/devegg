"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Center flexDirection="column">
      <Heading pt="30px" pb="15px">
        Welcome to DevEgg!
      </Heading>
      <Image src="/DevEgg.png" alt="DevEgg logo" width={200} height={200} />
      <FormControl isInvalid={isError} maxW="500px">
        <FormLabel>メールアドレス</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            border: `1px solid #000000`,
          }}
        />
        {isError && (
          <FormErrorMessage>メールアドレスを入力してください</FormErrorMessage>
        )}
        <FormLabel pt="10px">パスワード</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            border: `1px solid #000000`,
          }}
        />
        {isError && (
          <FormErrorMessage>パスワードを入力してください</FormErrorMessage>
        )}
      </FormControl>
      <Button
        size="lg"
        bg="white"
        _hover={{ bg: "gray.100" }}
        variant="outline"
        mt="15px"
      >
        登録
      </Button>
      <Link href="./about">
        <Button
          size="lg"
          bg="black"
          _hover={{ bg: "gray.500" }}
          variant="outline"
          color="white"
          mt="30px"
        >
          Dev Eggについて <Icon as={ChevronRightIcon} />
        </Button>
      </Link>
    </Center>
  );
}
