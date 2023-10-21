---
subject: Project structure
---
# Project structure

The project's source code is saved on the user's GitHub repository, and the project structure is as follows. (If you'd like a more detailed explanation of the structure, please provide it):

- apps/(应用安装目录)
  - 所有 app 都应该安装在这个目录下. 用户可以开发或者从第三方获得不同的 app
- data/(全局数据目录)
  - 所有 app 可以将共享的数据保存在这个目录下. 例如 项目信息, 用户信息, 评论信息, 粉丝信息, like 信息等. 所有 app 都可以访问这个目录下的这些信息.

- apps/root/(默认 app 目录)
  - 默认 app 根目录, 所有 HTTP 请求都会发送到默认 app 来处理.

- apps/root/bin/(默认 app 可执行目录)
  - 默认 app 的可执行 pages 程序根目录. 这个目录下的所有wby 文件都被称作 page.
  - 所有 HTTP 请求 都会发送到 index.wby 这个 page 程序. index.wby 被称作为 router page. 默认 app 的 router page还负责根据 url 的格式将不同的 HTTP 请求发送给其它的 apps 和 pages.
  - 默认 app 负责用户注册和登录, 用户 profile 编辑, 用户列表, 消息列表等features.

- apps/root/bin/modules/(默认 app 模块安装目录)
  - 默认 app 的模块安装根目录, page 程序可以通过 import 语句访问这些模块. 模块包含可复用的函数和变量. page 可以通过 import 语句来访问模块和模块的函数和变量.
- apps/root/data/(默认 app 数据目录)
  - 默认 app 的私有数据文件根目录. 可以把模版文件, json文件等数据文件保存在这个目录下.



- apps/blog/(blog app 目录)
  - blog 是开发的一款杀手级自媒体应用.
- apps/blog/bin/(blog app 可执行目录)
  - blog 的 可执行 pages 根目录. 所有 blog app 的 http 请求都会被转发到 index.wby router page. router page 再根据 url 转发到其它 pages.
- apps/blog/data/(blog app 数据目录)
  - blog 私有数据目录
- apps/blog/data/public
  - blog 的 http 可下载文件目录. 例如 css, images 文件.
- apps/blog/data/template
  - blog 的 mustache 模版文件目录.

  

- apps/cookbook/(cookbook app 目录)
- apps/cookbook/bin/(cookbook app 可执行目录)
- apps/cookbook/bin/modules/(cookbook app 模块安装目录)
- apps/cookbook/data/(cookbook app 数据目录)

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
        ---/cookbook
            ---/bin
                ---/modules
            ---/data
        --- blog
            ---/bin
                ---/modules
            ---/data
   
```


- The `bin` directory is the root directory for all program source codes. The files saved under this folder are call `pages`. All http requests will be sent to the `bin/index.wby` page by default. Developer can create other `pages`.
- The `docs` is the root directory of project private documents. The documents can be mustache template files, json files. These files can not be publicly accessed.
- The `public` is the root folder of project public files. These files can be accessed publicly such as js, css and image files.
- The `bin/modules` directory is for user defined modules. The `pages` can `import` these modules by the `import statement`.


![project file system structure](/cookbook/public/images/project_file_structure.png)
