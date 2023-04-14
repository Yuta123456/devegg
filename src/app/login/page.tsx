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
  Stack,
  useToast,
} from "@chakra-ui/react";
import {
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../state/user";
import { useRouter } from "next/navigation";
// import
export default function Home() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isGithubLoginLoading, setIsGithubLoginLoading] = useState(false);

  const router = useRouter();
  const toast = useToast();
  const [user, setUser] = useRecoilState(userState);

  const loginWithEmailAndPassWord = () => {
    setIsLoginLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast({
          title: "ログインに成功しました",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setUser(user);
        router.push("/");
      })
      .catch((e) => {
        // TODO: error握りつぶしてる
        toast({
          title: "ログインに失敗しました",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        console.log(e);
      })
      .finally(() => {
        setIsLoginLoading(false);
      });
  };
  const loginWithGithub = () => {
    setIsGithubLoginLoading(true);
    signInWithPopup(auth, githubAuthProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        if (credential === null) {
          // TODO: Error処理
          return;
        }
        const token = credential.accessToken;
        if (token) {
          sessionStorage.setItem("accessToken", token);
        }
        const user = result.user;
        setUser(user);
        toast({
          title: "ログインに成功しました",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        router.push("/");
      })
      .catch((e) => {
        // TODO: error握りつぶしてる
        toast({
          title: "ログインに失敗しました",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        console.log(e);
      })
      .finally(() => {
        setIsGithubLoginLoading(false);
      });
  };
  return (
    <Center flexDirection="column">
      <Heading pt="30px" pb="15px">
        Welcome back to DevEgg!
      </Heading>
      <Image src="/DevEgg.png" alt="DevEgg logo" width={200} height={200} />
      <FormControl isInvalid={isError} maxW="500px" pb="20px">
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
      <Stack>
        <Button
          size="lg"
          bg="white"
          _hover={{ bg: "gray.100" }}
          variant="outline"
          mt="15px"
          onClick={loginWithEmailAndPassWord}
          isLoading={isLoginLoading}
        >
          ログイン
        </Button>
        <Button
          size="lg"
          bg="white"
          _hover={{ bg: "gray.100" }}
          variant="outline"
          mt="15px"
          onClick={loginWithGithub}
          isLoading={isGithubLoginLoading}
        >
          <Image
            src="/Github.svg"
            alt="Dev Egg logo"
            width="20"
            height="20"
            style={{ marginRight: "5px" }}
          />
          GitHubでログイン
        </Button>
      </Stack>
    </Center>
  );
}
