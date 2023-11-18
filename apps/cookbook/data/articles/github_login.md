---
subject: github_login
---

# Github Login
This article describes how to add Github login support to your application.

Create a [Github Auth application](https://github.com/settings/applications/new)

![Github Auth application](/cookbook/public/images/github-auth-new.jpg)

Your App `github Authorization callback URL` should be: `https://yourdomainname/auth/github/callback`.  such as `https://creek.pagwe.net/auth/github/callback1`

You need to upload a logo and website name and description to remind user to login to your website.

![Github Auth application](/cookbook/public/images/github-auth-settings.jpg)

## login secrets
You need to copy the github auth `client id` and `secrets`  and save them into the [project secrets](/cookbook/project_secrets.md).

## login data saved
The login users' profile will be saved at the `/data/users.json` file.

## enable github login
set the value to `true` in the file `/apps/root/data/app.json`. This will result the `github login` button is showed.

![enable Github login](/cookbook/public/images/login_enabled.jpg)

![enable Github login button](/cookbook/public/images/login-screen.jpg)



