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
import Link from "next/link";
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
  fontName,
  deadline,
}) => {
  return (
    <Link href={`/design/${id}`}>
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                {colorCode && (
                  <>
                    {colorCode.map((color: string) => (
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
              </Heading>
            </Box>
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
                {price}円
              </Text>
            </Box>
            {fontName && (
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  フォント
                </Heading>
                <Text pt="2" fontSize="sm">
                  {fontName}
                </Text>
              </Box>
            )}
            {deadline && (
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  期限
                </Heading>
                <Text pt="2" fontSize="sm">
                  {deadline.toLocaleString()}
                </Text>
              </Box>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};
