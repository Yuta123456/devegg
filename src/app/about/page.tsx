"use client";
import { Center, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex flexDirection="column">
          <Flex py="20px">
            <Heading fontFamily="Impact" letterSpacing="3px">
              What is DevEgg ?
            </Heading>
          </Flex>
          <Flex py="20px">
            <Text color="gray.500" w="400px">
              開発者の卵とデザイナーの卵のマッチングサービスです。開発者の人は、デザインの依頼を投稿します。デザイナーの方は、それに応えるような形で、デザインを投稿することが出来ます。
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Image
            src="/DevEgg.svg"
            alt="Dev Egg logo"
            width="300"
            height="300"
          />
        </Flex>
      </Flex>

      <SimpleGrid columns={2} spacing={10}>
        <Flex flexDirection="column">
          <Heading fontFamily="Impact" letterSpacing="3px" py="20px">
            For Developers
          </Heading>
          <Image
            src="/engineer2.svg"
            alt="Dev Egg logo"
            width="300"
            height="300"
          />
          <Text color="gray.500">
            開発者の卵の方は日々Webサイトやアプリ、その他様々なUIデザインをする必要に迫られていると思います。
            ロゴやバナーであっても例外ではありません。「なんか自分の作ったWebサイト、淡白なんだよなぁ」って思った事はないですか？
            そのデザイン、デザイナーの卵に任せてみませんか？
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Heading fontFamily="Impact" letterSpacing="3px" py="20px">
            For Designers
          </Heading>
          <Image
            src="/designer.svg"
            alt="Dev Egg logo"
            width="300"
            height="300"
          />
          <Text color="gray.500">
            デザイナーになるためには、デザインの練習が欠かせません。デザイナーの卵である皆さんはIllustrator等で日々デザインのスキルを磨いていることでしょう。
            ところで、実際の現場ではクライアントの要望を聞いたり、アプリのコンセプトに沿ったデザインを開発者と行っていく必要があります。
            そのような経験が積みたくても積めない...といった悩みはありませんか？
            自己満足のポートフォリオではなく、より実務に沿ったデザインをポートフォリオに載せることで、あなたのキャリアに大きく役立つことでしょう。
          </Text>
        </Flex>
      </SimpleGrid>
    </>
  );
}
// {
/* <Center flexDirection="column">
      <Heading py="30px" as="h1" size="xl">
        DevEggとは？
      </Heading>
      <Heading size="lg">
        
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
    </Center> */
// }
