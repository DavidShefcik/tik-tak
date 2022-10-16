import { createServer } from "@graphql-yoga/node";
import SchemaBuilder from "@pothos/core";
import { config } from "dotenv";
import { exit } from "process";

config();

const builder = new SchemaBuilder({
  // @ts-ignore
  notStrict: true,
});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string({
          defaultValue: "",
        }),
      },
      resolve: (parent, { name }) => `hello, ${name || "World"}`,
    }),
  }),
});

if (!process.env.PORT) {
  console.error("Missing PORT environment variable!");

  exit(0);
}

const server = createServer({
  schema: builder.toSchema(),
  port: parseInt(process.env.PORT ?? "0000"),
});

server.start();
