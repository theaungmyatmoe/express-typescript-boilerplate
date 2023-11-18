# base
FROM oven/bun:latest AS base

WORKDIR /app

COPY package*.json .
COPY bun.lockb .

RUN bun install

COPY . .

# lint

FROM base AS lint

WORKDIR /app

RUN bun lint




