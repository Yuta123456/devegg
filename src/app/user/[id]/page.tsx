"use client";
import { DesignRequest } from "@/model/DesignRequest";
import useSWR from "swr";
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
import { RequestCard } from "@/components/RequestCard";
type PageProps = {
  params: {
    id: string;
  };
};

const designFetcher = (url: string) => fetch(url).then((res) => res.json());
const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res && res.length !== 0) {
        const designRequests: DesignRequest[] = res.map((dr: any) => {
          const designRequest: DesignRequest = {
            ...dr,
            deadline: new Date(res.deadline),
          };
          return designRequest;
        });
        return designRequests;
      } else {
        return [];
      }
    });
export default function Home(props: PageProps) {
  const {
    params: { id },
  } = props;
  const { data: designRequests, isLoading } = useSWR<DesignRequest[]>(
    `/api/user/request/${id}`,
    fetcher
  );
  const { data: imageURLList } = useSWR<string[]>(
    `/api/user/design/${id}`,
    designFetcher
  );

  if (designRequests === undefined || imageURLList === undefined || isLoading) {
    return <div>Loading...</div>;
  }
  console.log(designRequests);
  return (
    <>
      <Box>
        <Heading as="h3" fontSize="22px" py="15px">
          あなたの依頼一覧
        </Heading>
        <Flex overflowX="scroll" pb="20px">
          {designRequests !== undefined &&
            designRequests.map((req) => {
              //             id: string;
              // title: string;
              // concept: string;
              return (
                <Box key={req.id} w="20vw" mr="8px" flexShrink={0}>
                  <RequestCard
                    id={req.id}
                    title={req.title}
                    concept={req.concept}
                    colorCode={req.colorCode}
                  />
                </Box>
              );
            })}
        </Flex>
      </Box>
      <Box>
        <Heading as="h3" fontSize="22px" py="15px">
          あなたが作成したデザイン一覧
        </Heading>
      </Box>
    </>
  );
}
