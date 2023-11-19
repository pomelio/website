---
subject: google_login
---

# explain the google login from programming viewpoint.
When a http request hits your website, the [project secrets](/cookbook/project_secrets.md) will be decrypted and loaded into the current varaiables by the serverless cloud automatically. The built-in modules can access these variables. The google module can access these google secrets such as `google client id`, `google secrets` and the `callback url`.  That is the reason when your program calling the built-in API, you don't need to specify these parameters but the API still is working as expected.

### login url
google API generates a Login URL. When the google login button is clicked, the browser will be redirected to this URL.

[google source code](https://github.com/pomelio/website/blob/main/apps/root/bin/auth/google.wby)
```
import ext.google as google;
import ext.web as web;

let scopes = [
      'https://www.googleapis.com/auth/userinfo.profile'
];

let url = google.authorize_url(scopes, {});

web.body({url});
```

- line 4: the `scope` which allow the website to read the user info.
- line 6: calling the google module which reads the `google client id, secrets and callback url` and generate a login url. The `client id, secrets and callback url` are saved into the [project's secrets](/cookbook/project_secrets.md).
- line 8: response with the json data including the url.

### login callback
When the user permits your website to read the user info, google will redirect the browser into the callback url of your website. This is the web [page we developed](https://github.com/pomelio/website/blob/main/apps/root/bin/auth/callback.wby). 

```
import ext.web as web;
import ext.github as github;
import ext.google as google;
import std.array as array;
import ext.jwt as jwt;
import ext.mustache as mch;
import std.date as date;
import modules.common as common;

let {code} = web.query();

let user_info = undefined;

if from == 'google' {
      google.handle_auth_result(code, {});
      let uinfo = google.get_user_info();
      user_info = {
            provider: 'google',
            name: uinfo['name'],
            picture: uinfo['picture'],
            id: uinfo['id']
      };

} elsif from == 'github' {
      github.handle_auth_result(code, {});
      let uinfo = github.get_user_info();
      user_info = {
            provider: 'github',
            name: uinfo['login'],
            picture: uinfo['avatar_url'],
            id: uinfo['id'] + ''
      };
} else {
      throw({
            name: 'LOGIN_FROM_NOT_FOUND',
            message: 'login from is not found.'
      });
}


let project = {};
let project_json = github.get_global_content('/project.json');
if project_json {
      project = parse_json(project_json);
}

let header_html = mch.render_global_template('/template/header.mustache');
let footer_html = common.render_foot_html(project);


let users_path = '/users.json';
let users = [];

let users_json = github.get_global_content(users_path);
if users_json {
      users = parse_json(users_json);
}

let fuser_info = array.find(users, |u| => u['id'] == user_info['id']);
if !fuser_info || fuser_info != user_info {
      users = array.filter(users, |u| => u['id'] != user_info['id']);
      array.unshift(users, user_info);
      github.save_global_text(users_path, stringify_json(users));
}

let user_id = user_info['id'];
let provider = user_info['provider'];
let timestamp = date.value_of(date.from_number());
let user_token = jwt.sign({id: user_id, provider, timestamp});
user_info['token'] = user_token;

let user_info_json = stringify_json(user_info);

let html = mch.render_template('/template/auth/login_callback.mustache');

web.body(html);
```

- line 10: The google redirects the user's browser to your callback webpage with the `code` parameter.
- line 25: The google built-in module generates `access token` by the `code` paramter and set the `access token` in a varabile and can be used afterwards.
- line 26: The google built-in module retrieves the google user info by the saved `access token` varaible. These user info will be saved into github repository [user.json](https://github.com/pomelio/website/blob/main/data/users.json) afterwards.
