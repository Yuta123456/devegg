import { db } from "@/app/api/firebase/firebase-admin";
import { CreateDesignRequestInput } from "@/model/DesignRequest";
import { NextResponse } from "next/server";

const COLLECTION_NAME = "requests";

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
    const designRequests = await getDesignRequestsById(req, userId);
    return NextResponse.json(designRequests);
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status: 500,
      message: "GET: design request was failed",
    });
  }
}
const getDesignRequestsById = async (req: Request, userId: string) => {
  const query = db.collection(COLLECTION_NAME).where("userId", "==", userId);
  const designRequests: CreateDesignRequestInput[] = [];
  await query.get().then((snapshot) => {
    if (snapshot.empty) {
      console.log("empty");
    } else {
      snapshot.forEach((doc) => {
        designRequests.push(doc.data() as CreateDesignRequestInput);
      });
    }
  });

  return designRequests.map((dr) => dr.designRequest);
};
