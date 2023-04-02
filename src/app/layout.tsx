import Provider from "@/components/Provider";
import StyleLayout from "@/components/StyleLayout";
export const metadata = {
  title: "Dev Egg",
  description: "開発者の卵とデザイナーの卵のマッチングサービス",
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
