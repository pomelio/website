---
subject: Project structure
---
# Project structure

The design goals for the project directory structure include:
- Modularity: The structure is organized to allow for the modular development of different components and applications within the project. This modularity makes it easier to manage and scale the project.
- Data Separation: The separation of data directories, such as the "data" directory, allows for the storage of shared project data and configuration settings in a centralized location. This promotes data sharing and consistency among different apps.
- Global Settings: The "data/project.json" file centralizes global project settings, making it easy to configure and manage project-wide parameters like the website's name, supported login modules, and contact information.
- Reusability: The "data/template" directory contains shared template files, promoting the reuse of common design elements and ensuring a consistent look and feel across the entire project.
- App Isolation: Each app has its own directory structure, including executable pages, data, public files, and templates. This isolation helps manage and organize the code, data, and resources specific to each application.
- Routing: The use of a "router page" ("index.wby") in the root app allows for the routing of HTTP requests to the appropriate pages within the app or to other apps. This promotes a clear and organized request handling mechanism.
- Extensibility: The structure supports the easy addition of new apps and modules, making it extensible and adaptable to evolving project requirements.
- Consistency: The use of consistent naming conventions and organization within each app directory ensures that developers can easily understand and work with different components.

Overall, the project directory structure is designed to provide a well-organized, modular, and flexible framework for developing and maintaining a complex web project.


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


