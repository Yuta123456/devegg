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
      message: "design request was failed",
    });
  }
  return NextResponse.json({
    status: 200,
    message: "design request was succeed",
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
