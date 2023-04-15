"use client";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { Button } from "../components/Button";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { UploadDesignModal } from "./UploadDesignModal";
import { useRecoilState } from "recoil";
import { userState } from "@/state/user";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
export const Header: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  // pathname判定に切り出し
  const isLoginPage = pathname === "/login";
  const isSignUpPage = pathname === "/signup";
  const isRequestPage = pathname === "/request";
  const isDesignPage = /\/design\/*/.test(pathname);

  const [user, _] = useRecoilState(userState);
  return (
    <Box bg="white">
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
          {user ? (
            <Box textAlign={"right"} py="10px">
              <Button
                onClick={() => router.push("/request")}
                hidden={isLoginPage || isSignUpPage || isRequestPage}
                label="依頼を投稿"
                style={{ mr: "10px" }}
              />
              <Avatar
                hidden={!user}
                // TODO: 画像変更
                src={user.photoURL || ""}
                onClick={() => router.push(`/user/${user.uid}`)}
                style={{ cursor: "pointer" }}
              />
            </Box>
          ) : (
            <Box textAlign={"right"} py="10px">
              <Button
                onClick={() => router.push("/login")}
                // onClick={() => setIsLogin(true)}
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
    </Box>
  );
};
