"use client";

import { CreateDesignRequestInput, DesignRequest } from "@/model/DesignRequest";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Box,
  useToast,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../state/user";
import { useRouter } from "next/navigation";

export default function Home() {
  const [title, setTitle] = useState("");
  const [concept, setConcept] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [price, setPrice] = useState("");
  const [colorCode, setColorCode] = useState<string[]>([""]);
  const [fontName, setFontName] = useState<string>("");
  const [deadline, setDeadline] = useState<Date | undefined>();

  const [user, _] = useRecoilState(userState);
  const toast = useToast();
  const router = useRouter();
  const onSubmit = () => {
    if (!user) {
      toast({
        title: "ログインして下さい",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    if (!title || !concept || !price || !targetAudience) {
      toast({
        title: "必須項目を入力してください",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const createDesignRequest: CreateDesignRequestInput = {
      userId: user?.uid,
      designRequest: {
        title,
        concept,
        targetAudience,
        price: Number(price),
        colorCode,
        fontName,
        deadline,
      },
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };
    fetch("/api/request", {
      method: "POST",
      body: JSON.stringify(createDesignRequest),
    })
      .then(() => {
        toast({
          title: "依頼を作成しました",
          position: "bottom",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Center flexDirection="column">
      <Heading py="30px" size="lg">
        デザイナーさんにデザインを依頼する
      </Heading>
      <Stack spacing="4" maxW="600px" w="100%">
        <Box>
          <FormControl isRequired>
            <FormLabel>タイトル</FormLabel>
            <Input
              style={{
                border: `1px solid #000000`,
              }}
              placeholder="タイトルを入力してください"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired>
            <FormLabel>コンセプト</FormLabel>
            <Input
              style={{
                border: `1px solid #000000`,
              }}
              placeholder="コンセプトを入力してください"
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired>
            <FormLabel>ターゲット層</FormLabel>
            <Input
              style={{
                border: `1px solid #000000`,
              }}
              placeholder="ターゲット層を入力してください"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired>
            <FormLabel>値段</FormLabel>
            <Input
              placeholder="半角数字を入力してください"
              value={price}
              style={{
                border: `1px solid #000000`,
              }}
              onChange={(e) => {
                if (e.target.value.match(/^[0-9]*$/)) {
                  setPrice(e.target.value);
                }
              }}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>納期</FormLabel>
            <Input
              placeholder="納期を入力してください"
              value={getDateString(deadline)}
              type="date"
              style={{
                border: `1px solid #000000`,
              }}
              onChange={(e) => {
                const newDeadline = new Date(e.target.value);
                setDeadline(newDeadline);
              }}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>フォント</FormLabel>
            <Input
              placeholder="フォントを入力してください"
              value={fontName}
              onChange={(e) => setFontName(e.target.value)}
              style={{
                border: `1px solid #000000`,
              }}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>カラーコード</FormLabel>
            {colorCode && (
              <>
                {colorCode.map((color: string) => {
                  if (color === "" || !color.startsWith("#")) {
                    return undefined;
                  }
                  return (
                    <span
                      key={color}
                      style={{
                        display: "inline-block",
                        width: "20px",
                        height: "20px",
                        margin: "0 5px",
                        backgroundColor: color,
                        border: `2px solid ${
                          color === "#FFFFFF" ? "#E2E8F0" : color
                        }`,
                      }}
                    ></span>
                  );
                })}
              </>
            )}
            {colorCode.map((cc, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "6px",
                }}
              >
                <Input
                  placeholder="#38B2AC"
                  value={cc}
                  width="80%"
                  onChange={(e) => {
                    const newColorCode = [...colorCode];
                    newColorCode[index] = e.target.value;
                    setColorCode(newColorCode);
                  }}
                  style={{
                    border: `1px solid #000000`,
                  }}
                />
              </div>
            ))}
            <IconButton
              aria-label="minus"
              bg="white"
              _hover={{ bg: "gray.100" }}
              icon={<MinusIcon />}
              isDisabled={colorCode.length <= 1}
              onClick={() => {
                setColorCode((prevColorCode) => {
                  const newColorCode = [...prevColorCode];
                  newColorCode.pop();
                  return newColorCode;
                });
              }}
              marginRight="5px"
            />
            <IconButton
              aria-label="add"
              bg="white"
              _hover={{ bg: "gray.100" }}
              icon={<AddIcon />}
              isDisabled={colorCode.length >= 3}
              onClick={() => {
                setColorCode((prevColorCode) => {
                  const newColorCode = [...prevColorCode];
                  newColorCode.push("");
                  return newColorCode;
                });
              }}
            />
          </FormControl>
        </Box>
        <Button
          size="lg"
          bg="white"
          _hover={{ bg: "gray.100" }}
          variant="outline"
          mt="15px"
          onClick={onSubmit}
        >
          依頼する
        </Button>
      </Stack>
    </Center>
  );
}
const getDateString = (date: Date | undefined) => {
  if (date === undefined) {
    return "";
  }
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};
