---
id: ext_markdownit
---
# MarkDownIt
> Markdown parser, done right. 100% CommonMark support, extensions, syntax plugins & high speed


> import ext.ShowDown as sd;

## render(path)
> translate the markedown document to `html`. It will extract the first heading as the `title` and first paragraph as the `excerpt`. These can be set in the page `title` and `meta` tag of `description` to improve the `SEO` ranking.

- params:
  - path: the markdown document path.

- return value:
  > return render result userdata


## get_html(result)
> return the `html` from the render result userdata 

## get_meta(result, key)
> return the `title` from the render result userdata 

## get_mtas(result)
> return the `excerpt` from the render result userdata 


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
let description = md.get_meta(md_result, 'description');
let html = mch.render('/docs/layout.mustache');

web.body(html);
```