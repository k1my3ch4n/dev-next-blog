import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { GraphQLError } from "graphql";
import { NextRequest } from "next/server";
import { typeDefs, resolvers } from "@/lib/graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => {
    if (req.method === "POST") {
      const apiKey = req.headers.get("x-api-key");
      const validApiKey = process.env.VALIDATED_API_KEY;

      if (validApiKey && apiKey !== validApiKey) {
        throw new GraphQLError("Unauthorized: Invalid API Key", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      }
    }

    return {};
  },
});

export async function GET(request: NextRequest) {
  const response = await handler(request);
  response.headers.set(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400",
  );
  return response;
}

export async function POST(request: NextRequest) {
  return handler(request);
}
