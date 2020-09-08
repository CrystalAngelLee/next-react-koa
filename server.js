const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(async (ctx, next) =>{
    // 获取用户数据
    ctx.session = ctx.session || {}
    ctx.session.user = {
      username: 'test'
    }
    await next();
  })

  router.get('/a/:id', async (ctx) => {
    const id = ctx.params.id;
    await handle(ctx.req, ctx.res, {
      pathname: '/a',
      query: { id },
    });
    ctx.respond = false;
  });
  server.use(router.routes());

  server.use(async (ctx, next) => {
    ctx.cookies.set('id', 'userid: ***')
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(3000, () => {
    console.log('koa server listening on 3000');
  });
});
