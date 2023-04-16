"use client";
import { DesignRequest } from "@/model/DesignRequest";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import useSWR from "swr";
import { useState } from "react";
import { UploadDesignModal } from "@/components/UploadDesignModal";
import { useRecoilState } from "recoil";
import { userState } from "@/state/user";
type PageProps = {
  params: {
    id: string;
  };
};
const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const designRequest: DesignRequest = {
        ...res,
        deadline: new Date(res.deadline),
      };
      return designRequest;
    });
export default function Home(props: PageProps) {
  const [showUploadDesignModal, setShowUploadDesignModal] = useState(false);
  const [user, _] = useRecoilState(userState);
  const toast = useToast();
  const {
    params: { id },
  } = props;
  // エラーあり得る
  const { data: designRequest } = useSWR<DesignRequest>(
    `/api/request/${id}`,
    fetcher
  );
  const { data: imageURLList } = useSWR<string[]>(`/api/design/${id}`, (url) =>
    fetch(url).then((res) => res.json())
  );
  if (!designRequest || !imageURLList) {
    return null;
  }

  const isAbleAddDesign = imageURLList.length <= 5;

  const addDesign = () => {
    if (!user) {
      toast({
        title: "デザインを投稿にするにはログインして下さい",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setShowUploadDesignModal(true);
  };
  return (
    <>
      <Box pt="15px">
        <Heading as="h3" fontSize="22px" pb="15px">
          {designRequest.title}
        </Heading>
        <List spacing={3}>
          <ListItem>
            {designRequest.colorCode && (
              <>
                {designRequest.colorCode.map((color: string) => (
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
                ))}
              </>
            )}
          </ListItem>
          <ListItem>
            <Flex mb="2">
              <Text fontWeight="bold" w="30%">
                コンセプト
              </Text>
              <Text>{designRequest.concept}</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex mb="2">
              <Text fontWeight="bold" w="30%">
                Deadline:
              </Text>
              <Text>{designRequest.deadline?.toLocaleDateString()}</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex mb="2">
              <Text fontWeight="bold" w="30%">
                ターゲット層
              </Text>
              <Text>{designRequest.targetAudience}</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex mb="2">
              <Text fontWeight="bold" w="30%">
                金額
              </Text>
              <Text>{designRequest.price}円</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex mb="2">
              <Text fontWeight="bold" w="30%">
                フォント
              </Text>
              <Text fontFamily={designRequest.fontName}>
                {designRequest.fontName}
              </Text>
            </Flex>
          </ListItem>
          {designRequest.emailAddress && (
            <ListItem>
              <Flex mb="2">
                <Text fontWeight="bold" w="30%">
                  依頼者のメールアドレス
                </Text>
                <Text>{designRequest.emailAddress}</Text>
              </Flex>
            </ListItem>
          )}
        </List>
      </Box>
      {imageURLList?.length === 0 ? (
        <Heading fontSize="18px" py="15px">
          デザインがまだ投稿されていません
        </Heading>
      ) : (
        <Heading fontSize="18px" py="15px">
          デザイン一覧
        </Heading>
      )}

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        paddingTop="10px"
      >
        {imageURLList !== undefined &&
          imageURLList.map((url) => (
            <Card maxW="lg" key={url}>
              <CardBody>
                <Image src={url} borderRadius="lg" alt="design" />
              </CardBody>
            </Card>
          ))}
        {isAbleAddDesign && (
          <Card
            maxW="lg"
            backgroundColor={"transparent"}
            onClick={addDesign}
            style={{ cursor: "pointer" }}
            color="gray.500"
            transition="background-color 0.2s ease-in-out"
            _hover={{ background: "white" }}
          >
            <CardBody>
              <Flex
                h="100%"
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <AddIcon w="20%" h="20%" />
                <Text pt="30px">デザインを追加</Text>
              </Flex>
            </CardBody>
          </Card>
        )}
      </SimpleGrid>
      <UploadDesignModal
        isOpen={showUploadDesignModal}
        onClose={() => setShowUploadDesignModal(false)}
      />
    </>
  );
}
