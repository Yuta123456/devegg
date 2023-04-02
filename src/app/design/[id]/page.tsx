"use client";
import { designRequests } from "@/mock/designRequests";
import { imageURLList } from "@/mock/imageURLList";
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
} from "@chakra-ui/react";
type PageProps = {
  params: {
    id: string;
  };
};
export default function Home(props: PageProps) {
  const {
    params: { id },
  } = props;
  // エラーあり得る
  const designRequest: DesignRequest = designRequests.filter(
    (d) => d.id === id?.toString()
  )[0];
  if (designRequest === undefined) {
    return null;
  }

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
              <Text>{designRequest.fontName}</Text>
            </Flex>
          </ListItem>
        </List>
      </Box>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        paddingTop="10px"
      >
        {imageURLList.map((url) => (
          <Card maxW="lg" key={url}>
            <CardBody>
              <Image src={url} borderRadius="lg" alt="design" />
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
