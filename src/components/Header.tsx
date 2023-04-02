"use client";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { Button } from "../components/Button";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { UploadDesignModal } from "./UploadDesignModal";
export const Header: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/login";
  const isSignUpPage = pathname === "/signup";
  const isRequestPage = pathname === "/request";
  const isDesignPage = /\/design\/*/.test(pathname);
  const [isLogin, setIsLogin] = useState(false);

  console.log(isDesignPage);
  const [showUploadDesignModal, setShowUploadDesignModal] = useState(false);
  return (
    <Box h="100px" bg="white">
      <Container maxW="container.lg" h="100%">
        <Flex h="100%" alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Image
              src="/DevEgg.svg"
              alt="dev egg logo"
              width={100}
              height={100}
              priority
            />
          </Link>
          {isLogin ? (
            <Box>
              <Button
                onClick={() => router.push("/request")}
                hidden={isLoginPage || isSignUpPage || isRequestPage}
                label="依頼を投稿"
              />
              <Button
                onClick={() => setShowUploadDesignModal(true)}
                hidden={!isDesignPage}
                label="デザインを投稿"
              />
              <Button
                onClick={() => setIsLogin(false)}
                hidden={isLoginPage || isSignUpPage}
                label="ログアウト"
              />
            </Box>
          ) : (
            <Box>
              <Button
                // onClick={() => router.push("/login")}
                onClick={() => setIsLogin(true)}
                hidden={isLoginPage}
                label="ログイン"
              />
              <Button
                onClick={() => router.push("/signup")}
                hidden={isSignUpPage}
                style={{ ml: "10px" }}
                label="登録"
              />
            </Box>
          )}
        </Flex>
      </Container>
      <UploadDesignModal
        isOpen={showUploadDesignModal}
        onClose={() => setShowUploadDesignModal(false)}
      ></UploadDesignModal>
    </Box>
  );
};
