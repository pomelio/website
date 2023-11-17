---
subject: github_integration
---

# Github repository integration

To integrate with a GitHub repository and achieve the goals of accessing the repository's files and staying synchronized with changes, you need to follow these steps:

## Repository Access Permissions:

To access and modify the contents of a GitHub repository, your project will require the necessary access permissions. You typically need to create a Personal Access Token or use a GitHub App with the required permissions. Here are the steps:


- Generate an `access_token` from [personal-access-tokens](https://github.com/settings/personal-access-tokens/new)
- Put the `Expiration` long enough, because the platform needs to sync github resources through this access token
- Select the project, allow to readwrite the resources of the Reposit you specify
- Grant Permissions, Contents read-write permission
- Generate `acess token` and save it

The reason why the `readwrite` permission is required is that the program needs to store data on GitHub. For example, profile information after user login, website message information, like information, etc. The program uses GitHub as a hard disk, write permission is required.

![webhook](/cookbook/public/images/access_token_repository.png)

![webhook](/cookbook/public/images/access_token_content_readwrite.png)

## Webhook Integration:

To stay synchronized with changes in your GitHub repository, you can set up a webhook. A webhook sends HTTP POST requests to your project's server whenever there are changes in the repository. Here's how to set up a webhook:

### Create a Webhook:
- In your GitHub repository, go to "Settings."
- Select "Webhooks" or "Hooks" and click "Add webhook."
- Set the payload URL to the endpoint in your project where you want to receive webhook notifications.
- Choose the types of events that trigger the webhook (e.g., "push" for code changes).
- Configure any other webhook settings as needed.

- Set the `content Type` of the webhook to `application/json`
- Save the `Secret`. This secret is used for webhook signature verification

![webhook](/cookbook/public/images/webhook.png)
