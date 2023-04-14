import { db, storage } from "@/app/api/firebase/firebase-admin";
import { CreateDesignRequestInput } from "@/model/DesignRequest";
import { NextResponse } from "next/server";
// fetch("http://localhost:3000/api/request").then((res) => res.json()).then((res) => console.log(res));
export async function GET(
  req: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  const userId = params.id;
  try {
    const designURLs = await getDesignURLsByRequestUserId(req, userId);
    return NextResponse.json(designURLs);
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status: 500,
      message: "GET: design urls was failed",
    });
  }
}

const getDesignURLsByRequestUserId = async (req: Request, userId: string) => {
  console.log("getDesignURLsByRequestUserId", userId);
  const [files] = await storage.getFiles({
    prefix: `images/`,
  });
  // 24時間後の時刻を取得
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);

  const regExp = new RegExp(`^images/[^/]+/${userId}/.*$`);
  const userFiles = files.filter((f) => regExp.test(f.name));
  const downloadUrls = await Promise.all(
    userFiles.map(async (file) => {
      const [url] = await file.getSignedUrl({
        action: "read",
        expires: expirationDate, // URLの有効期限を指定
      });
      return url;
    })
  );
  return downloadUrls;
};
