---
subject: google_integration
---

# Google Login integration
This section is for integration with the google login to allow the google user to login to your website.

## create a project in google cloud console

Please beware, your website's google login callback url is `https://yourdomain/auth/google/callback`

- create a [new project](https://console.cloud.google.com/projectcreate)
- goto APIs & Service
![APIs & Service](/cookbook/public/images/google_apis_service.jpg)
- create a oauth screen
![APIs & Service](/cookbook/public/images/google_oauth_screen.jpg)
- create `credentials` oauth client id
![APIs & Service](/cookbook/public/images/google_oauth_client_id.jpg)
- enable google login by set the value to `true`.
![enable Github login](/cookbook/public/images/login_enabled.jpg)


Once these steps done. you should have the google auth id, google auth secrets and callback url which is `https://yourdomain/auth/google/callback`. You should save all these values into your [project secrets](/cookbook/project_secrets.md)



