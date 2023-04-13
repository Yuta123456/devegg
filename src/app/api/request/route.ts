import { CreateDesignRequestInput } from "@/model/DesignRequest";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/firebase-admin";

const COLLECTION_NAME = "requests";

export async function POST(req: Request) {
  try {
    postDesignRequest(req);
  } catch {
    return NextResponse.json({
      status: 500,
      message: "POST: design request was failed",
    });
  }
  return NextResponse.json({
    status: 200,
    message: "POST: design request was succeed",
  });
}

const postDesignRequest = async (req: Request) => {
  const docRef = db.collection(COLLECTION_NAME).doc();
  const insertData: CreateDesignRequestInput = await req.json();
  // 一意なidを振る
  const id = uuidv4();
  insertData.designRequest.id = id;
  docRef.set(insertData);
};
// fetch("http://localhost:3000/api/request").then((res) => res.json()).then((res) => console.log(res));
export async function GET(req: Request) {
  try {
    const designRequests = await getDesignRequests(req);
    return NextResponse.json(designRequests);
  } catch {
    return NextResponse.json({
      status: 500,
      message: "GET: design request was failed",
    });
  }
}

const getDesignRequests = async (req: Request) => {
  // NOTE: reqでsort順とかfilterとかあれば追加
  const docRef = db.collection(COLLECTION_NAME);
  let designRequests: CreateDesignRequestInput[] = [];
  await docRef.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      designRequests.push(doc.data() as CreateDesignRequestInput);
    });
  });
  return designRequests.map((designRequests) => designRequests.designRequest);
};
