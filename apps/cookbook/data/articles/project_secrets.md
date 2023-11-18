---
subject: project_secrets
---

# Project Secrets

Project secrets are used to store sensitive information about the project. This information is encrypted and stored in a cloud database.
This information can be GitHub repostory tokens, webhook secrets, or database usernames, passwords, server IP addresses, port numbers, and other information.


The following is an example, including the information required for GitHub repository integration, Github identity authentication information, and Google identity authentication information.

[https://github.com/pomelio/website](https://github.com/pomelio/website)

```
github_user=pomelio
github_repo=website
github_branch=main
github_token=github_pat_11ABLECPQ0mZ0xuDsR0h_XjI29kOjtKt1m6pff8G5F1771L6BlMeyEyBoMO82aAzIMCCSMMBH09jmlmu
github_webhook_secret=qqs#sd

github_auth_client_id=1271b32c758989112d4
github_auth_secret=13a1f5a1b15db7a1f6075b8df39742ba11273a90
github_auth_redirect_url=https://www.pagwe.net/auth/github/callback

google_auth_client_id=296504895747-2vbqkq1fbp9t1hv2rslssn4a4fssluf.apps.googleusercontent.com
google_auth_secret=GOCSPX-khbygUEIhz3it457N1jZDUxC9uN
google_auth_redirect_url=https://www.pagwe.net/auth/google/callback
```

- line 1 - 4 are for reading and writing of github repository
    - line 1: the github user name
    - line 2: the github repository name
    - line 3: the repository branch name
    - line 4: the repository access token. This access token allows reading and writing data to the repository

- line 5 is for notification of changes when repository contents are change.
    - line 5: webhook secrets
    
- line 7 - 9 are for Github login
    - line 7: github auth client id
    - line 8: github auth secrets
    - line 9: github auth redirect url

- line 11 - 13 are for google login
    - line 11: google auth client id
    - line 12: google auth secrets
    - line 13: google auth redirect url.
