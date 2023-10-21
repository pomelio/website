---
id: ext_mustache
---
# mustache
> import ext.mustache as m;

## render(path)
> render from a mustache template with all available variables. All variables defined before this statement and in the scope or parents scopes are available for the mustache template.

- params:
  - path: the template path.

- return value:
  > string value which is from the template and variables.


```
import ext.web as web;
import ext.MarkDownIt as md;
import std.string as str;
import ext.mustache as mch;
import ext.Docs as docs;
import std.array as array;

let web_path = web.path();
if web_path == '/' {
  web_path = '/docs/start.md';
}

let side_bar_data = docs.get_data('/docs/side_bar.json');

let side_bar_json = parse_json(side_bar_data);

let sections = side_bar_json['sections'];

let section_html_list = [];

for (let i = 0; i < len(sections); i++) {
  let section = sections[i];
  let topics = section['topics'];
  topics = array.map(topics, |t|=>{
    return {...t, active: t['md'] == web_path};
  });
  
  let title = section['title'];
  let section_html = mch.render('/docs/sidebar_section.mustache');
  array.push(section_html_list, section_html);
}

let title = side_bar_json['title'];
let sections_html = array.join(section_html_list, '');

let side_bar_html = mch.render('/docs/sidebar.mustache');

let PAGE_URL = 'https://' + web.hostname() + web_path;
let PAGE_IDENTIFIER = web_path;

let md_result = md.render(web_path);
let title = md.get_meta(md_result, 'title');
let content = md.get_html(md_result);
if title == undefined {
  title = 'chatsarah.com';
}
let discription = md.get_meta(md_result, 'discription');
let html = mch.render('/docs/layout.mustache');

web.body(html);

```