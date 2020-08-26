# iceream's blog

个人网站。

- `perferction`分支

    第四个分支，慢慢改善。

- 关于 `editor` 分支

    第三个分支，现在的主分支。

  - 该分支完成了前后端分离
    前端使用`nodejs/koa2`搭建静态代理服务器；
    使用服务器代理解决跨域问题，为了方便直接使用`koa-server-http-proxy`中间件。据观察，在后端使用`CORS`,无论是使用`cors`中间件还是手动设置白名单，在这种情况下前端获取响应头的时候回受到限制，而使用服务器代理则没有这种问题。

  - 发布页面加入[editormd](http://editor.md.ipandao.com/)让编辑更加方便；同时在博客详情页也引用`editormd`进行渲染，使页面更加美观。

  - 修改数据库表结构以适应`editormd`的使用
    
    DDL for posts

    ```sql
    CREATE TABLE `posts` (
      `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
      `contentmd` varchar(10000) DEFAULT NULL,
      `contenthtml` varchar(10000) DEFAULT NULL,
      `time` datetime DEFAULT NULL,
      UNIQUE KEY `id_UNIQUE` (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8
    ```

  - 登录拦截。

  - 换肤功能改良（替换样式表）。

- 关于`rework`分支

    第二个分支。
  
  - 使用的是`koa2`加`nunjucks`模板引擎进行服务端渲染的方式。

  - 加入了`mysql`数据库进行数据的持久化存储。

  - 代码优化。

  - 分页功能。

- `master`分支

    第一个分支。

  - 完成基本的页面布局和视图显示。

  - 页面自适应效果。

  - 夜间换肤功能（通过DOM操作）。
