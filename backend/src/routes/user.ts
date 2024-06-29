import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signUpInpout,signInInput } from "@mihirkotecha/medium-project";

export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_TOKEN : string,
    }
}>();


userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();

    const result = signUpInpout.safeParse(body);
    console.log(result.success);
    if(!result.success){
      c.status(403)
      return c.json({
        message: "Invalid Inputs!!"
      })
    }
  
    try {
      const result = await prisma.users.create({
        data: {
          username: body.username,
          password: body.password,
          email: body.email ? body.email : null,
        },
      });
      const token = await sign(result, c.env.JWT_TOKEN);
      return c.json(token);
    } catch (e) {
      c.status(411);
      return c.text("User already exists!!");
    }
  });
  
userRouter.post("/signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();

    const success = signInInput.safeParse(body);

    if(!success){
      c.status(403)
      c.json({
        message: "Invalid Input"
      })
    }

    try {
      const user = await prisma.users.findFirst({
        where: {
          username: body.username,
          password: body.password,
        },
      });
  
      if(!user){
        c.status(403);
        return c.json({
          message: "Invalid Credentials"
        })
      }
  
      const toker = await sign(user,c.env.JWT_TOKEN);
      return c.json(toker);
  
    } catch (e) {
      c.status(500)
      return c.text("Something Went Wrong!!");
    }
  });