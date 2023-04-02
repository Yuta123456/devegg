"use client";
import { Center, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center flexDirection="column">
      <Heading py="30px" as="h1" size="xl">
        DevEggとは？
      </Heading>
      <Heading size="lg">
        開発者の卵とデザイナーの卵のマッチングサービス
      </Heading>
      <Heading as="h1" size="lg">
        For Developers
      </Heading>
      <Text>
        フロントエンド開発をしているときに、切っても切れない関係にあるUIデザイン。
        <br />
        しかし、デザインには知識やスキルが必要で、自分の世界観を表現したいけど、そこまで興味もない...
      </Text>
      <Heading as="h1" size="lg">
        For Designers
      </Heading>
      <Text>
        デザインのインプットを諸々した後に、アウトプットをしたいけど、始めから案件を受けるのは不安...
        <br />
        でも、ポートフォリオには残しておきたいし、エンジニアと共同で開発したという実績も欲しい。
        <br />
        また、案件だとポートフォリオに乗せられないことも多い...
      </Text>
    </Center>
  );
}
