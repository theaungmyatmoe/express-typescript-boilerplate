# for base
FROM oven/bun:latest AS base

WORKDIR /app

COPY package*.json .
COPY bun.lockb .
COPY tsconfig*.json .

RUN bun install

COPY . .

CMD ["bun", "run", "dev"]

# for lint
FROM base AS linter

WORKDIR /app

RUN bun run lint

# for build
FROM linter AS builder

WORKDIR /app

RUN bun run build

# for production
FROM node:21-alpine AS production
RUN npm install -g pnpm

WORKDIR /app

COPY package*.json .
COPY pnpm-lock.yaml .

COPY --from=builder /app/dist ./dist

RUN pnpm install --production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

ENTRYPOINT ["node", "dist/index.mjs"]



