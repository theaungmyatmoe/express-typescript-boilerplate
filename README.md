# Express and Typescript Boilerplate

Most of the time, I used to `ts-node` and `nodemon` for my **Typescript** + **Express** development.
But, web bundler were evolved epically the speed of compile time which reduces uncomfortable **DX**. Hence, I decided to
change my development workflow to speed up with  `ESbuild` which is
the successor of **Webpack** in **2022** which change the bundler world. This project is just a demo boilerplate which
uses `ESBuild` to speed up my workflow.

# Setup

Clone or fork this repository and then install `node_modules` as follows.

```bash 
pnpm install
```

That's all for you. You don't need to setup extra something like `webpack`.

# Serving Express

To serve your express web server, run the following command in you terminal. It'll serve at `localhost:8000`.

```bash
pnpm serve
```

# Bundling Modules

To protect from malicious user, you can protect your source code by bundling and minifying.
But, it won't cover your security flaw.

```bash 
pnpm build
```

As of I said, this project uses `Typescirpt` for static type checking. So, in build time `Typescript` compiler make sure
you from wrong typing because `ESBuild` didn't check your types.

# Publish as Package

You can use this boilerplate to make your own `npm` package. Just attach a custom name in the `name` field, other
tooling stuffs automatically ignited for you.

```bash
pnpm publish
```
