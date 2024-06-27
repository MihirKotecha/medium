import { Hono } from 'hono'

const app = new Hono()


app.post('/api/v1/user/signup', (c) => {
  return c.text('Hello World!!');
});

app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello World!!');
});

app.post('/api/v1/blog', (c) => {
  return c.text('Hello World!!');
});

app.put('/api/v1/blog', (c) => {
  return c.text('Hello World!!');
});

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello World!!');
});

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello World!!');
});

export default app


//DIRECT_URL="postgresql://meduimDb_owner:nwM30lHajYQX@ep-shy-darkness-a1uwpuo6.ap-southeast-1.aws.neon.tech/meduimDb?sslmode=require"
//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZmVhOWQxYzYtNjllNi00MDU5LWIzOGEtY2NkNjI3NTA0MDBiIiwidGVuYW50X2lkIjoiNTZmNTc4NTU4OTMyYjc2Yzc4OWJiZGRkOTc2YzNlNTM5Y2I1OTcyN2UxYzg5NmFhY2UzNDE2Y2ZiNDgxMzlmNiIsImludGVybmFsX3NlY3JldCI6IjhhMGIzZDc1LWE3OTMtNGViMS04NjU2LTQwODY4MDY0MTNkZSJ9.gQBGPgfkQGtPTvNnb7NXr7OfQRI3ZEqypp7aXbTBvm0"