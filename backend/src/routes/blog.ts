import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify, decode } from "hono/jwt";

export const blogRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_TOKEN: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRoute.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  try {
    const user = await verify(authHeader, c.env.JWT_TOKEN);
    if (user) {
      // @ts-ignore
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      c.json({
        message: "You are not authorized!!",
      });
    }
  } catch (e) {
    c.status(403);
    c.json({ message: "Anauthorized !!" });
  }
});

blogRoute.post("/post", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const authorId = c.get("userId");

  const blog = await prisma.post.create({
    data: { title: body.title, content: body.content, authorId: authorId },
  });

  return c.text("Hello World!!");
});

blogRoute.put("/post", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const response = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.json({
    response,
  });
});

blogRoute.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = c.req.param("id");
  try {
    const blog = await prisma.post.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            username: true,
          }
        }
      }
    });
    return blog
      ? c.json(blog)
      : c.json({
          message: "Blog Does not exist!!",
        });
  } catch (e) {
    c.status(411);
    c.json({
      message: "Error in fetching post",
    });
  }
});

blogRoute.get("/posts/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.post.findMany({
    select:{
      title: true,
      id: true,
      content: true,
      author:{
        select:{
          username: true,
        }
      } 
    }
  });

  return c.json(blogs);
});
