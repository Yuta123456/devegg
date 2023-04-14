"use client";
import { DesignRequest } from "@/model/DesignRequest";
import useSWR from "swr";
import { Box, Card, CardBody, Flex, Heading, Image } from "@chakra-ui/react";
import { RequestCard } from "@/components/RequestCard";
import { UserDesign } from "@/app/api/user/design/[id]/route";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
  const { data: userDesigns } = useSWR<UserDesign[]>(
    `/api/user/design/${id}`,
    designFetcher
  );

  const router = useRouter();
  if (designRequests === undefined || userDesigns === undefined) {
    return <div>Loading...</div>;
  }

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
        <Flex overflowX="scroll">
          {userDesigns !== undefined &&
            userDesigns.map((ud) => {
              //             id: string;
              // title: string;
              // concept: string;
              return (
                <Box key={ud.url} mr="8px" flexShrink={0}>
                  <Link href={ud.requestId ? `design/${ud.requestId}` : ""}>
                    <Card maxW="lg">
                      <CardBody>
                        <Image
                          src={ud.url}
                          borderRadius="lg"
                          alt="design"
                          h="30vh"
                        />
                      </CardBody>
                    </Card>
                  </Link>
                </Box>
              );
            })}
        </Flex>
      </Box>
    </>
  );
}
