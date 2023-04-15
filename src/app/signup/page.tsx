"use client";
import { auth } from "@/firebase/firebase";
import { githubAuthProvider } from "@/firebase/login";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
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
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { userState } from "../../state/user";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");

  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  const [isGithubSignUpLoading, setIsGithubSignUpLoading] = useState(false);

  const [password, setPassword] = useState("");

  const router = useRouter();
  const [_, setUser] = useRecoilState(userState);

  const toast = useToast();

  const signUpWithEmailAndPassWord = () => {
    setIsSignUpLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast({
          title: "アカウントを作成しました",
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
          title: "アカウントの作成に失敗しました",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        console.log(e);
      })
      .finally(() => {
        setIsSignUpLoading(false);
      });
  };
  const signInWithGithub = () => {
    setIsGithubSignUpLoading(true);
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
        toast({
          title: "アカウントを作成しました",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        router.push("/");
      })
      .catch((e) => {
        // TODO: error握りつぶしてる
        console.log(e);
      })
      .finally(() => {
        setIsGithubSignUpLoading(false);
      });
  };
  return (
    <Center flexDirection="column">
      <Heading pt="30px" pb="15px">
        Welcome to DevEgg!
      </Heading>
      <Image src="/DevEgg.png" alt="DevEgg logo" width={200} height={200} />
      <FormControl isInvalid={isError} maxW="500px" pb="20px">
        <FormLabel>メールアドレス</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          bg="gray.50"
          _focus={{ bg: "white" }}
        />
        {isError && (
          <FormErrorMessage>メールアドレスを入力してください</FormErrorMessage>
        )}
        <FormLabel pt="10px">パスワード</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          bg="gray.50"
          _focus={{ bg: "white" }}
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
          isLoading={isSignUpLoading}
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
          isLoading={isGithubSignUpLoading}
        >
          <Image
            src="/Github.svg"
            alt="Dev Egg logo"
            width="20"
            height="20"
            style={{ marginRight: "5px" }}
          />
          GitHubで登録
        </Button>
      </Stack>
    </Center>
  );
}
