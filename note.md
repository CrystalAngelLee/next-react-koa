## Package.json 版本说明

大版本升级可能导致API变更

不同版本可能出现一些无法预期的BUG

```json
"dependencies": {

	"@zeit/next-css": "^1.0.1"

}
```

版本号 "^aa.bb.cc"

^ 表示自动安装当前大版本号下最新的（ 会自动升级小版本，不会升级大版本）

aa 表示大版本号，一般只有breaking changes的时候才会更新

bb 一般是修复较大的BUG

cc 是一些细微的修改

安装指定版本： yarn add koa@2.7.0



## 项目搭建

### 创建next项目

- 手动创建

安装 react react-dom next 模块

手动创建pages目录（放置所有的页面）

配置package.json下 scripts



- 使用create-next-app

npx  【npx create-next-app projectname】

yarn create 【yarn create create-next-app projectname】

直接调用create-next-app



### KOA 

Next.js 无法处理服务端数据接口，数据库连接，session状态

Koa是一个轻量级的nodeJS服务端框架

**API**

App.use

Ctx 对象

Request、response、req、res的关系



### Redis数据库

docker安装redis https://kb.objectrocket.com/redis/run-redis-with-docker-compose-1055

内存数据结构存储

可持久存储

支持多种数据结构

**使用**

https://redis.io/commands

setex 设置过期时间

KEYs * 可以查找所有key

DEL a 删除某一个key

Node 连接 redis=> ioredis



### And design 集成



## Next 基础部分

