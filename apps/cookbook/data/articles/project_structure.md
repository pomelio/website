---
subject: Project structure
---
# Project structure

The project's source code is saved under the user's GitHub repository, and the project structure is as bellows. 

- apps
  - Application installation directory
  - All apps should be installed in this directory. Users can develop or obtain different apps from third parties.
- data
  - Global data directory
  - All apps can store shared data in this directory, such as project information, user information, comments, fan information, like information, and other shared information. All apps can access this data directory.
- data/project.json
  - This is the project's configuration file. It sets global information like the website's name, address, supported login modules (Google, GitHub), logo file URL, social media contact information, and other global settings.
- data/template
  - Root directory for project-shared template files. For example, header, footer, and comment templates that are uniform across the entire website are stored in this directory.


- apps/root
  - `root` app directory. This is the default app of the website.
  - All HTTP requests are sent to the default app for processing.
- apps/root/bin
  - `root` app's executable pages program directory.
  - All files in this directory with the ".wby" extension are referred to as "pages." All HTTP requests are sent to the "index.wby" page program, known as the `router page`. The default app's router page is responsible for routing different HTTP requests to other apps and pages based on the URL format. The root app is responsible for features like user registration and login, user profile editing, user lists, message lists, etc.
  
- apps/root/bin/modules
  - `root` app's module installation directory
  - Page programs can access these modules via the import statement. Modules contain reusable functions and variables. Pages can access these modules and their functions and variables through the `import` statements.
- apps/root/data
  - `root` app's private data file directory.
  - Template files, JSON files, and other data files can be stored in this directory.
- apps/root/data/public
  - root app's HTTP-downloadable file directory, e.g., CSS and image files.
- apps/root/data/template
  - root app's Mustache template file directory.


## Blog App

- apps/blog
  - Blog is a powerful social media application.
- apps/blog/bin
  - Blog's executable pages program directory.
  - All HTTP requests for the blog app are forwarded to the "index.wby" router page, which further forwards requests to other pages based on the URL.
- apps/blog/data
  - Blog's private data directory
- apps/blog/data/public
  - Blog's HTTP-downloadable file directory, e.g., CSS and image files.
- apps/blog/data/template
  - Blog's Mustache template file directory.
- apps/blog/data/blogs
  - Blog's Markdown file directory.
  

## Cookbook App

- apps/cookbook
  - Cookbook is a powerful document application.
- apps/cookbook/bin
  - Cookbook's executable pages program directory.
- apps/cookbook/data
  - Cookbook's private data directory.
- apps/blog/data/public
  - Cookbook's HTTP-downloadable file directory, e.g., CSS and image files.
- apps/blog/data/template
  - Cookbook's Mustache template file directory.
- apps/blog/data/articles
  - Cookbook's Markdown file directory.


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
