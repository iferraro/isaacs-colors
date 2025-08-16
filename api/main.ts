/// <reference lib="deno.ns" />
import { Hono } from "@hono/hono";
import data from "./isaacs-custom-colors.json" with { type: "json" };

const app = new Hono();

app.get("/", (c) => {
  return c.text("Welcome to the isaacs-custom-colors API!");
});

app.get("/api/colors", (c) => {
  return c.json(data);
});

Deno.serve(app.fetch);