import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    prisma : PrismaClient;
  };
}>();

app.use((c, next): any => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate()); 
  next();
});

app.post("/api/v1/user/signup", (c) => {

  return c.text("Hello World!!");
});

app.post("/api/v1/user/signin", (c) => {
  return c.text("Hello World!!");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Hello World!!");
});

app.put("/api/v1/blog", (c) => {
  return c.text("Hello World!!");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello World!!");
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("Hello World!!");
});

export default app;
