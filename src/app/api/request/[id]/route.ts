import { CreateDesignRequestInput } from "@/model/DesignRequest";
import { NextResponse } from "next/server";
import { db } from "../../firebase/firebase-admin";
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
  const id = params.id;
  try {
    const designRequests = await getDesignRequestsById(req, id);
    return NextResponse.json(designRequests);
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status: 500,
      message: "GET: design request was failed",
    });
  }
}

const getDesignRequestsById = async (req: Request, requestId: string) => {
  const query = db
    .collection(COLLECTION_NAME)
    .where("designRequest.id", "==", requestId);
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

  // const newDocRef = db.collection(COLLECTION_NAME);
  // let designRequests: CreateDesignRequestInput[] = [];
  // await newDocRef.get().then((snapshot) => {
  //   snapshot.forEach((doc) => {
  //     console.log(doc.data());
  //     designRequests.push(doc.data() as CreateDesignRequestInput);
  //   });
  // });
  return designRequests[0].designRequest;
};
