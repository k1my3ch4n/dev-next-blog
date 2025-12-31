import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { typeDefs, resolvers } from "@/lib/graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => {
    // API Key 검증 (선택적)
    const apiKey = req.headers.get("x-api-key");
    const validApiKey = process.env.VALIDATED_API_KEY;

    // API Key가 설정되어 있으면 검증
    if (validApiKey && apiKey !== validApiKey) {
      throw new Error("Unauthorized: Invalid API Key");
    }

    return {};
  },
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
