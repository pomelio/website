---
subject: ext google
---

# Google
> Google API to authentication.


> import ext.github as github;

## authorize_url(scopes, options)
> generate a url which trigger the github authorization steps.

- params:
  - scopes: the authorization scope names.
  - options:


- return value:
  > the url to trigger the steps.

## handle_auth_result(code, options)
> The function get_auth_result is used to process authentication results, which primarily include obtaining the access_token. This is typically used to complete the user authentication process, such as obtaining an access token through OAuth 2.0 or other authentication mechanisms to access protected resources. The access_token is commonly used to authorize user access to specific APIs or services.

- params:
  - code: the code return from github.
  - options: empty map object by default.

## get_access_token()
> Get the `accsss_token` from the auth result.


- return value:
  > string: the string value of the `access_token`.

## get_user_info()
> get the github `user info`


- return
  - map : the map object of the github user info.

📄 [https://github.com/pomelio/website/blob/main/apps/root/bin/auth/callback.wby](https://github.com/pomelio/website/blob/main/apps/root/bin/auth/callback.wby) 

```
import ext.web as web;
import ext.github as github;
import ext.google as google;
import std.array as array;
import ext.jwt as jwt;
import ext.mustache as mch;
import std.date as date;


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
      let auth_result = github.handle_auth_result(code, {});
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


let footer_links = [];

if project['footer']['links'] {
    let f_links = project['footer']['links'];
    let keys = keys(f_links);
    array.for_each(keys, |k| => {
        let title = k;
        let url = f_links[k];
       
        array.push(footer_links, {
            title, url
        });
  });
}

let header_html = mch.render_global_template('/template/header.mustache');
let footer_html = mch.render_global_template('/template/footer.mustache');


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