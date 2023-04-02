import { DesignRequest } from "@/model/DesignRequest";

export const designRequests: DesignRequest[] = [
  {
    id: "1",
    title: "ロゴのデザイン",
    concept: "クリーンでモダンな印象を与えるロゴが欲しい",
    targetAudience: "20代から30代のビジネスパーソン",
    price: 50000,
    colorCode: ["#FFFFFF", "#000000"],
    fontName: "Helvetica Neue",
    deadline: new Date("2023-04-30"),
  },
  {
    id: "2",
    title: "ポスターのデザイン",
    concept: "遊び心を取り入れた、若者向けのポップなポスターが欲しい",
    targetAudience: "10代から20代の若者",
    price: 20000,
    colorCode: ["#FF66CC", "#00CCFF", "#FFFF66"],
    fontName: "Comic Sans MS",
    deadline: new Date("2023-05-10"),
  },
  {
    id: "3",
    title: "Webサイトのデザイン",
    concept: "シンプルで使いやすい、企業向けのWebサイトが欲しい",
    targetAudience: "企業関係者",
    price: 100000,
    colorCode: ["#FFFFFF", "#000000", "#33CCFF"],
    fontName: "Arial",
    deadline: new Date("2023-06-30"),
  },
  {
    id: "4",
    title: "フライヤーのデザイン",
    concept: "高級感を演出した、ホテルの宣伝用フライヤーが欲しい",
    targetAudience: "30代から50代の旅行者",
    price: 40000,
    colorCode: ["#FF9999", "#000000", "#FFFFFF"],
    fontName: "Times New Roman",
    deadline: new Date("2023-05-15"),
  },
  {
    id: "5",
    title: "バナー広告のデザイン",
    concept: "落ち着いた雰囲気の、高級感のあるバナー広告が欲しい",
    targetAudience: "40代以上のビジネスパーソン",
    price: 25000,
    colorCode: ["#CCCCCC", "#333333"],
    fontName: "Georgia",
    deadline: new Date("2023-04-20"),
  },
];
