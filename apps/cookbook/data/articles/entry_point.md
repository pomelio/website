---
id: entry_point
---
# Project entry point

In the project structure you've described, the entry point for the project can typically be found within the "root" app, which is often the default app that handles all incoming HTTP requests. Specifically, the entry point is likely the "index.wby" file located in the "apps/root/bin" directory. This "index.wby" file is referred to as the "router page" and is responsible for routing HTTP requests to other pages or apps within the project based on the URL format.

So, `apps/root/bin/index.wby` can be considered the main entry point for the project, where the initial request processing and routing take place. From there, this router page may direct the request to other pages or apps depending on the URL and the desired functionality.

📄 [https://github.com/pomelio/website/blob/main/apps/root/bin/index.wby](https://github.com/pomelio/website/blob/main/apps/root/bin/index.wby) 


