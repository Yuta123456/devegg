// import { NextApiRequest, PageConfig } from "next";
// import { NextResponse } from "next/server";
// import { formidable } from "formidable";
// import { createWriteStream } from "fs";
// export const config: PageConfig = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function GET(req: Request) {
  const { userId, requestId } = await req.json();
}
// // 良いのか不安
// export async function POST(req: NextApiRequest) {
//   const res = new NextResponse();
//   const form = formidable({ multiples: true, uploadDir: __dirname });
//   form.onPart = (part) => {
//     if (part.originalFilename === "" || !part.mimetype) {
//       form._handlePart(part);
//     } else if (part.originalFilename) {
//       console.log(part.name);
//       // /public/imagesディレクトリがないと正常に動かないので作成すること
//       const path =
//         "./public/images/" + new Date().getTime() + part.originalFilename;
//       const stream = createWriteStream(path);
//       part.pipe(stream);
//       part.on("end", () => {
//         console.log(part.originalFilename + " is uploaded");
//         stream.close();
//       });
//     }
//   };

//   form.on("field", (userId, requestId) => {
//     console.log(userId);
//     console.log(requestId);
//   });

//   // これを実行しないと変換できない
//   form.parse(req);
// }
