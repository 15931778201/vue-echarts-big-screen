const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors')
const app = new Koa();
const router = new Router();
const oneData = require("./mock/one.json");
const twoData = require("./mock/two.json");
const threeData = require("./mock/three.json");
const fourData = require("./mock/four.json");
const mapData = require('./mock/china.json');

router.get('/one', (ctx, next) => {
  ctx.body = oneData.chartData
  next()
})
router.get('/two', (ctx, next) => {
  ctx.body = twoData.chartData
  next()
})
router.get('/three', (ctx, next) => {
  ctx.body = threeData.chartData
  next()
})
router.get('/four', (ctx, next) => {
  ctx.body = fourData.chartData
  next()
})
router.get('/map', (ctx, next) => {
  ctx.body = mapData
  next()
})

app.use(router.routes())
    .use(router.allowedMethods())
    .use(cors());
app.listen(3000,()=>{
    console.log('starting at port 3000');
});