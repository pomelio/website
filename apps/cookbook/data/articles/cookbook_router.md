---
subject: router_page
---
# router page
> Every http `request` will be sent to the `router Page`, and then `dispatch` to other `Pages` by the `router page`.




## register the cookbook app 

All http requests will be sent to the default app's router page.

📄  [default app's router page](https://github.com/pomelio/website/blob/main/apps/root/bin/index.wby) 

```
import ext.web as web;
import std.string as str;
import std.array as array;


let apps = [
  'cookbook',
  'blog'
];

let web_path = web.path();
let method = web.method();

let app = array.find(apps, |a| => str.starts_with(web_path, '/' + a));

if app {
  dispatch(app, '/index', {});
} elsif web_path == '/login' {
  dispatch(__APP__, '/auth/login', {});
} elsif web_path == '/user/like' {
  dispatch(__APP__, '/user/like', {});
} elsif method == 'GET' && web.match('/profile/:user_id') {
  dispatch(__APP__, '/user/profile', {});
} elsif method == 'POST' && web_path== '/profile/save' {
  dispatch(__APP__, '/user/profile_save', {});
} elsif method == 'GET' && web_path == '/users' {
  dispatch(__APP__, '/user/users', {});
} elsif method == 'GET' && web_path == '/messages' {
  dispatch(__APP__, '/comment/comments', {});
} elsif method == 'GET' && str.starts_with(web_path, '/public') {
  web.send_file(__APP__, web_path);
} elsif web_path == '/auth/github' {
  dispatch(__APP__, '/auth/github', {});
} elsif web_path == '/auth/github/callback' {
  dispatch(__APP__, '/auth/callback', {from: 'github'});
} elsif web_path == '/auth/google' {
  dispatch(__APP__, '/auth/google', {});
} elsif web_path == '/auth/google/callback' {
  dispatch(__APP__, '/auth/callback', {from:'google'});
} elsif method == 'POST' && web_path == '/comment/save' {
  dispatch(__APP__, '/comment/save', {});
} elsif method == 'POST' && web_path == '/comment/remove' {
  dispatch(__APP__, '/comment/remove', {});
} elsif method == 'GET' &&  web.match('/comment/:id') {
  dispatch(__APP__, '/comment/get', {});
} else {
  dispatch(__APP__, '/template', {});
}
```

explanation:
- line 7: add the `cookbook` to the app list.
- line 14: match the app with the url path.
- line 17: the requests will be dispatched to the app's router page when the url matches the app name.


## Cookbook router page
All url path starts with `/cookbook` will be dispatched into the cookbook's router page.

📄  [cookbook app's router page](https://github.com/pomelio/website/blob/main/apps/cookbook/bin/index.wby) 

```
import ext.web as web;
import std.string as str;

let web_path = web.path();
let app_len = len('/' + __APP__);
let app_path = str.substring(web_path, app_len);

if str.ends_with(app_path, '.md') {
  dispatch(__APP__, '/article', {});
} elsif str.starts_with(app_path, '/public') {
  web.send_file(__APP__, app_path);
} else {
  web.set_status(404);
}
```