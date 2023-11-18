---
subject: response_to_static_file
---
# Response to static file
> js, css, images These files are placed in the public folder, when accessing these files, the `send_file` of the `web` module can return these files.


## send_file(path)
> response with the static resources.

- params:
  - path: the document path.
```
import ext.web as web;
import std.string as str;


let web_path = web.path();

if web_path == '/' || str.ends_with(web_path, '.md') {
  dispatch('/markdown', {});
} elsif str.starts_with(web_path, '/public') {
  web.send_file(web_path);
} else {
  web.set_status(404);
}
```

- line 9 - 10: when the `web_path` variable value starts with the `/public`, it sends the specified resources. such as `/public/images/entry_point.jpg`
