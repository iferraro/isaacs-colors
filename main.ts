/// <reference lib="deno.ns" />
import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import data from "./api/isaacs-custom-colors.json" with { type: "json" };

const app = new Hono();

// API routes
app.get("/api/colors", (c) => {
  return c.json(data);
});

// Serve static files from the dist directory (built frontend)
app.use("/*", serveStatic({ root: "./dist/" }));

// Fallback to index.html for client-side routing
app.get("*", serveStatic({ path: "./dist/index.html" }));

Deno.serve(app.fetch);
