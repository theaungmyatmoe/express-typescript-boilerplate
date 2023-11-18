# Express and Typescript Boilerplate

Most of the time, I used to `ts-node` and `nodemon` for my **Typescript** + **Express** development.
But, web bundler were evolved especially the speed of compile time which reduces uncomfortable **Developer Experience**.
Hence, I decided
to
change my development workflow to speed up with  `ESbuild` which is
the successor of **Webpack** in **2022** which change the bundler world. This project is just a demo boilerplate which
uses `ESBuild` to speed up my workflow.

## Docker

### Development

```bash
docker compose up
``` 

### Production

```bash
docker compose -f docker-compose.prod.yaml up
```

## Local Development

### Requirements

- NodeJS 16+
- Pnpm
- Bun

### Installation

```bash 
pnpm install
```

### Development {id="development_1"}

```bash
pnpm dev
```

### Production {id="production_1"}

```bash 
pnpm build
```

## Publish as Package

```bash
pnpm publish
```

## Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Famm834%2Fexpress-typescript-boilerplate&project-name=express-typescript)
