FROM node:20-alpine AS deps

WORKDIR /app

ENV PNPM_HOME="/usr/local/pnpm"
ENV PATH="$PNPM_HOME:$PATH" 

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY apps/portfolio/package.json apps/portfolio/
COPY packages/components/package.json packages/components/
COPY packages/hooks/package.json packages/hooks/

RUN pnpm install --frozen-lockfile

FROM node:20-alpine AS build

ARG NEXT_PUBLIC_SERVER_URI
ARG NEXT_PUBLIC_VALIDATED_API_KEY

ENV NEXT_PUBLIC_SERVER_URI=${NEXT_PUBLIC_SERVER_URI}
ENV NEXT_PUBLIC_VALIDATED_API_KEY=${NEXT_PUBLIC_VALIDATED_API_KEY}

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=deps /app/pnpm-workspace.yaml ./pnpm-workspace.yaml

ENV PNPM_HOME="/usr/local/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY . .


RUN npm install -g pnpm && \
    pnpm add turbo --global

RUN pnpm install --frozen-lockfile

RUN turbo run build --filter=portfolio --no-daemon

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=build /app/apps/portfolio/.next/standalone ./
COPY --from=build /app/apps/portfolio/.next/static apps/portfolio/.next/static

EXPOSE 80

CMD ["node", "apps/portfolio/server.js"]