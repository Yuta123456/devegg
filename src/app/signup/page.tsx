"use client";
import { auth } from "@/firebase/firebase";
import { githubAuthProvider } from "@/firebase/login";
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
import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { userState } from "../state/user";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const router = useRouter();
  const [_, setUser] = useRecoilState(userState);

  const signUpWithEmailAndPassWord = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        router.push("/");
      })
      .catch((e) => {
        // TODO: error握りつぶしてる
        console.log(e);
      });
  };
  const signInWithGithub = () => {
    signInWithPopup(auth, githubAuthProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        if (credential === null) {
          // TODO: Error処理
          return;
        }
        // TODO: token save
        console.log(result, credential, result.user);
        const token = credential.accessToken;
        if (token) {
          sessionStorage.setItem("accessToken", token);
        }
        const user = result.user;
        setUser(user);
        router.push("/");
      })
      .catch((e) => {
        // TODO: error握りつぶしてる
        console.log(e);
      });
  };
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
        onClick={signUpWithEmailAndPassWord}
      >
        登録
      </Button>
      <Button
        size="lg"
        bg="white"
        _hover={{ bg: "gray.100" }}
        variant="outline"
        mt="15px"
        onClick={signInWithGithub}
      >
        GitHubでログイン
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
