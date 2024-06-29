import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRoute } from "./routes/blog";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_TOKEN: string;
  };
}>();

app.use("/*",cors());

app.route('/api/v1/user',userRouter);
app.route('/api/v1/blog',blogRoute);

export default app;
