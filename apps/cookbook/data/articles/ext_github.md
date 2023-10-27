
---
subject: ext github
---
# Github
> Github API to access github repository files and authentication.


> import ext.github as github;

## authorize_url(scopes, options)
> generate a url which trigger the github authorization steps.

- params:
  - scopes: the authorization scope names.
  - options:


- return value:
  > the url to trigger the steps.

```
import ext.github as github;
import ext.web as web;

let scope = 'read:user';

let url = github.authorize_url(scope, {});

web.body({url});
```


## get_auth_result(code, options)
## get_access_token(result)
## get_user_info(access_token)
## get_app_content(path)
## get_global_content(path)
## save_app_text(path)
## save_global_text(path)

> redirect request to the specified url

- params:
  - url: the new url/
    > the value can be `back` which is from `Referrer`



## has(field)
> check response header existing.

- params:
  - field: the header name

- return value:
  > boolean: header existing or not



## set(field, val)
> set the response header value

- params:
  - field: the header name
  - value: the header value


## append(field, val)
> append the response header value

- params:
  - field: the header name
  - value: the header value

## flush_headers()
> Flush any set headers and begin the body



## get_status()
> return status code of http response

- return value:
  > return the response http status code.

## has_header_sent()
> heck if a header has been written to the socket.

- return value:
  > boolean value of whether the response headers sent


## set_status(code)
> set the response status code

- params:
  - code: the status code

## set_content_type(val)
> set the response content type header

- params:
  - value: the value of contentType

## set_last_modified(val)
> set the response last modified header type

- params:
  - value: the value of last modified header.

## set_etag(val)
> set response etag

- params:
  - value: the etag value

## get_status_message()
> get response status message

## body(val)
> set the response body

- params:
  - value: string text, map value and stream

## set_length(n)
> set the response body length

### get(field)
> get the request header value

- params:
  - field: request header name


## is(types...)
> Check if the incoming request contains the "Content-Type"

- params:
  - types: the contentType to be checked

- return value:
  - If there is no request body, `null` is returned.
  - If there is no content type, `false` is returned.
  - Otherwise, it returns the first `type` that matches.

## querystring()
> get the request query string


## search()
> get the url search

## method()
> get the request method

## path()
> get the request url path

## origin()
> Get origin of URL.

## href()
> Get full request URL.

## protocol()
> get the request protocol

## host()
> get the request host

## hostname()
> get the request hostname

## secure()
> is the request https

## stale()
> Check if the request is stale,

## fresh()
> Check if the request is fresh,

## ip()
> get the request ip

## files()
> get the request uploaed files



## send_file(path)
> response with the static resources.

- params:
  - path: the document path.
```
import ext.web as web;
import std.string as str;


let web_path = web.path();

if web_path == '/' {
  web_path = '/docs/start.md';
}

if str.ends_with(web_path, '.md') {
  dispatch('/markdown', {});
} elsif str.starts_with(web_path, '/docs') {
  web.send_file(web_path);
} else {
  web.set_status(404);
}
```

- line 14 - 15: when the `web_path` variable value starts with the `/public`, it downloads the specified resources. such as `/cookbook/public/images/entry_point.png`
