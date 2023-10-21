---
subject: Project structure
---
# Project structure

The project's source code is saved on the user's GitHub repository, and the project structure is as follows. (If you'd like a more detailed explanation of the structure, please provide it):

- apps
  - 应用安装目录
  - 所有 app 都应该安装在这个目录下. 用户可以开发或者从第三方获得不同的 app
- data
  - 全局数据目录
  - 所有 app 可以将共享的数据保存在这个目录下. 例如 项目信息, 用户信息, 评论信息, 粉丝信息, like 信息等. 所有 app 都可以访问这个目录下的这些信息.
- data/project.json
  - 这是整个项目的设置文件. 它设置了网站的名称, 地址, 支持的登录模块(google, github), logo文件url, 社交账号联系地址等全局信息.
- data/template
  - 项目共享的模版文件根目录. 例如 header, foot, comment 整个网站统一的模版文件保存在这个目录下.


- apps/root
  - root app 目录
  - 所有 HTTP 请求都会发送到默认 app 来处理.
- apps/root/bin
  - root app 的可执行 pages 程序根目录.
  - 这个目录下的所有wby 文件都被称作 page.
  - 所有 HTTP 请求 都会发送到 index.wby 这个 page 程序. index.wby 被称作为 router page. 默认 app 的 router page还负责根据 url 的格式将不同的 HTTP 请求发送给其它的 apps 和 pages.
  - root app 负责用户注册和登录, 用户 profile 编辑, 用户列表, 消息列表等features.

- apps/root/bin/modules
  - root app 的模块安装根目录
  - page 程序可以通过 import 语句访问这些模块. 模块包含可复用的函数和变量. page 可以通过 import 语句来访问模块和模块的函数和变量.
- apps/root/data
  - root app 的私有数据文件根目录
  - 可以把模版文件, json文件等数据文件保存在这个目录下.
- apps/root/data/public
  - root app 的 http 可下载文件目录. 例如 css, images 文件.
- apps/root/data/template
  - root app 的 mustache 模版文件目录.



- apps/blog
  - blog 是一款杀手级自媒体应用.
- apps/blog/bin
  - blog 的 可执行 pages 根目录
  - 所有 blog app 的 http 请求都会被转发到 index.wby router page. router page 再根据 url 转发到其它 pages.
- apps/blog/data
  - blog 私有数据目录
- apps/blog/data/public
  - blog 的 http 可下载文件目录. 例如 css, images 文件.
- apps/blog/data/template
  - blog 的 mustache 模版文件目录.
- apps/blog/data/blogs
  - blog 的 markdown 文件根目录
  

  

- apps/cookbook
  - cookbook 是一款杀手级文档应用.
- apps/cookbook/bin
  - cookbook 的 可执行 pages 根目录
  - 所有 cookbook app 的 http 请求都会被转发到 index.wby router page. router page 再根据 url 转发到其它 pages.
- apps/cookbook/data
  - cookbook 私有数据目录
- apps/blog/data/public
  - cookbook 的 http 可下载文件目录. 例如 css, images 文件.
- apps/blog/data/template
  - cookbook 的 mustache 模版文件目录.
- apps/blog/data/articles
  - cookbook 的 markdown 文件根目录


@[youtube](https://www.youtube.com/watch?v=lKNB3ZeTYiI)

## Project directory structure
```

---/project root
    ---/data
    ---/apps
        ---/root
            ---/bin
                ---/modules
            ---/data
                --- template
                --- public
        ---/cookbook
            ---/bin
                ---/modules
            ---/data
                --- template
                --- public
                --- articles
        --- blog
            ---/bin
                ---/modules
            ---/data
                --- template
                --- public
                --- blogs
   
```


- The `bin` directory is the root directory for all program source codes. The files saved under this folder are call `pages`. All http requests will be sent to the `bin/index.wby` page by default. Developer can create other `pages`.
- The `docs` is the root directory of project private documents. The documents can be mustache template files, json files. These files can not be publicly accessed.
- The `public` is the root folder of project public files. These files can be accessed publicly such as js, css and image files.
- The `bin/modules` directory is for user defined modules. The `pages` can `import` these modules by the `import statement`.


![project file system structure](/cookbook/public/images/project_file_structure.png)
