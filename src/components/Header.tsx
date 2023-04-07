"use client";
import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { Button } from "../components/Button";
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { UploadDesignModal } from "./UploadDesignModal";
import { useRecoilState } from "recoil";
import { userState } from "@/app/state/user";
export const Header: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  // pathname判定に切り出し
  const isLoginPage = pathname === "/login";
  const isSignUpPage = pathname === "/signup";
  const isRequestPage = pathname === "/request";
  const isDesignPage = /\/design\/*/.test(pathname);

  const [user, _] = useRecoilState(userState);

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
          {user ? (
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
            </Box>
          ) : (
            <Box>
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
      <UploadDesignModal
        isOpen={showUploadDesignModal}
        onClose={() => setShowUploadDesignModal(false)}
      ></UploadDesignModal>
    </Box>
  );
};
