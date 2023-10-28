---
subject: Wallaby Programming Language
---

# Wallaby Programming Language

The Wallaby language is a network-oriented language designed for Serverless computing, and as such, it does not have concepts of local resources. In Wallaby, all resources are considered to be network resources. This approach requires the language to be optimized and supportive of I/O operations, eliminating the need for distinctions between local and remote resources.

By focusing on network resources and optimizing I/O, Wallaby aims to accelerate and simplify the developer's workload from both a performance and syntax perspective. This design choice helps developers work with Serverless architectures more efficiently and effectively.

The Wallaby programming language is a functional language. When designing Wallaby, the language aimed to achieve the following goals:

- Concise syntax with strong expressive power. Wallaby strives to express clear, precise, and powerful purposes with minimal lines of code. For example, it incorporates features like object spread (similar to ES6's object spread), coroutines, block scope, defer statements, tuple objects, and destructuring assignment.

- I/O optimization. Wallaby language doesn't include keywords like async and await, but any Wallaby API does not block I/O, and there's no need to annotate calls to these APIs with await. Calling these APIs is indistinguishable from calling regular functions. This approach significantly reduces the learning curve and programming complexity for developers.

- Extensibility. The Wallaby runtime is easily extensible. Users are encouraged to suggest new features, and the development team will consider and add appropriate extensions to meet these requirements.

For example, this is a page program to render a markdown document into a webpage.

📄 [https://github.com/pomelio/website/blob/main/apps/cookbook/bin/article.wby](https://github.com/pomelio/website/blob/main/apps/cookbook/bin/article.wby) 

```
import ext.web as web;
import ext.MarkDownIt as md;
import std.string as str;
import ext.mustache as mch;
import ext.github as github;
import std.array as array;
import std.date as dt;

let web_path = web.path();

let fidx = str.last_index_of(web_path, '/');
if fidx == -1 {
  throw({
    message: 'markdown not found.'
  });
}
let doc_name = str.substring(web_path, fidx + 1);

let app = {};
let app_json = github.get_app_content('/app.json');
if app_json {
  app= parse_json(app_json);
}

let sections = app['navi'];

let section_html_list = [];
le mch.init('/template/sidebar_section.mustache');

for (let i = 0; i < len(sections); i++) {
  let section = sections[i];
  
  let topics = section['topics'];
  topics = array.map(topics, |t|=>{
    
    return {...t, md: '/' + __APP__ + '/' + t['md'], active: t['md'] == doc_name};
  });
  
  let title = section['title'];
  let section_html = mch.render();
  array.push(section_html_list, section_html);
}


let side_bar_content_html = array.join(section_html_list, '');

let side_bar_html = mch.render_template('/template/sidebar.mustache');

let project_json = github.get_global_content('/project.json');
let project = parse_json(project_json);

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


let PAGE_IDENTIFIER = web_path;

let DOC_NAME = doc_name;
let HOST_NAME = web.hostname();

let comments = [];

let comments_json = github.get_global_content('/comments.json');
if comments_json {
  comments = parse_json(comments_json);
}

comments = array.filter(comments, |c| => c['clazz'] == 'cookbook' && c['doc'] == DOC_NAME);

let users_path = '/users.json';
let users = [];

let users_json = github.get_global_content(users_path);
if users_json {
  users = parse_json(users_json);
}

let comments_html = [];

mch.init_global('/template/comment.mustache');
let comments_count = len(comments);

for (let i = 0; i < comments_count; i++) {
  let comment = comments[i];
  let md_comment_result = md.render_source(comment['value']);
  let comment_content = md.get_html(md_comment_result);
  let metas = md.get_metas(md_comment_result);
  let comment_time = dt.from_now(dt.from_number(comment['create_time']));
  let user = array.find(users, |u| => u['id'] == comment['user_id']);
  let comment_html = mch.render();
  array.push(comments_html, comment_html);
}

comments_html = array.join(comments_html, '');

let md_result = md.render('/articles/' + doc_name);
let article_content = md.get_html(md_result);
let metas = md.get_metas(md_result);

let html = mch.render_template('/template/article.mustache');

web.body(html);
```