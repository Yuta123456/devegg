"use client";
import { FC, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
export type RequestCardProps = {
  id: string;
  title: string;
  concept: string;
  targetAudience: string;
  price: number;
  colorCode?: string[];
  fontName?: string;
  deadline?: Date;
};
export const RequestCard: FC<RequestCardProps> = ({
  id,
  title,
  concept,
  targetAudience,
  price,
  colorCode,
  fontName: fontNames,
  deadline,
}) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                コンセプト
              </Heading>
              <Text pt="2" fontSize="sm">
                {concept}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                ターゲット層
              </Heading>
              <Text pt="2" fontSize="sm">
                {targetAudience}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                値段
              </Heading>
              <Text pt="2" fontSize="sm">
                {price}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
