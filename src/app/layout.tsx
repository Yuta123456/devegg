import Provider from "@/components/Provider";
import StyleLayout from "@/components/StyleLayout";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dev Egg",
  description: "開発者の卵とデザイナーの卵のマッチングサービス",
  openGraph: {
    images: "/DevEgg.png",
  },
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Provider>
          <StyleLayout>{children}</StyleLayout>
        </Provider>
      </body>
    </html>
  );
}
