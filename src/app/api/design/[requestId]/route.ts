import { CreateDesignRequestInput } from "@/model/DesignRequest";
import { NextResponse } from "next/server";
import { storage } from "../../firebase/firebase-admin";
import { ref } from "firebase/storage";
const COLLECTION_NAME = "requests";

// fetch("http://localhost:3000/api/request").then((res) => res.json()).then((res) => console.log(res));
export async function GET(
  req: Request,
  {
    params,
  }: {
    params: { requestId: string };
  }
) {
  const requestId = params.requestId;
  try {
    const designURLs = await getDesignURLsByRequestId(req, requestId);
    return NextResponse.json(designURLs);
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status: 500,
      message: "GET: design urls was failed",
    });
  }
}

const getDesignURLsByRequestId = async (req: Request, requestId: string) => {
  console.log("requestId: ", requestId);
  const [files] = await storage.getFiles({
    prefix: `images/${requestId}/`,
  });
  // 24時間後の時刻を取得
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);

  const downloadUrls = await Promise.all(
    files.map(async (file) => {
      const [url] = await file.getSignedUrl({
        action: "read",
        expires: expirationDate, // URLの有効期限を指定
      });
      return url;
    })
  );
  console.log(downloadUrls);
  return downloadUrls;
};
