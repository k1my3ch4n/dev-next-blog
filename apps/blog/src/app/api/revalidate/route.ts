import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");

  if (apiKey !== process.env.VALIDATED_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag("posts");

  return NextResponse.json({ revalidated: true });
}
