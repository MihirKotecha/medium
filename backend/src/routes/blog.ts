import { Hono } from "hono";

export const blogRoute = new Hono<{
    Bindings : {
        DATABASE_URL: string,
        JWT_TOKEN: string
    }
}>();


blogRoute.post("/api/v1/blog", (c) => {
  return c.text("Hello World!!");
});

blogRoute.put("/api/v1/blog", (c) => {
  return c.text("Hello World!!");
});

blogRoute.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello World!!");
});

blogRoute.get("/api/v1/blog/bulk", (c) => {
  return c.text("Hello World!!");
});
