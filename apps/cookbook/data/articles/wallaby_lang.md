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

For example, this is a page program to render the current markdown document into a webpage.

📄 [https://github.com/pomelio/website/blob/main/apps/cookbook/bin/article.wby](https://github.com/pomelio/website/blob/main/apps/cookbook/bin/article.wby) 

```
import ext.web as web;
import ext.markdownit as md;
import std.string as str;
import ext.mustache as mch;
import ext.github as github;
import std.array as array;
import std.date as dt;


fn render_comments_html(clazz, doc, users) {
  let comments = [];

  let comments_json = github.get_global_content('/comments.json');
  if comments_json {
    comments = parse_json(comments_json);
  }

  comments = array.filter(comments, |c| => c['clazz'] == clazz && c['doc'] == doc);

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

  return array.join(comments_html, '');
}

fn render_foot_html(project) {
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

  return mch.render_global_template('/template/footer.mustache');
}

fn render_sidebar(app, doc) {

  let sections = app['navi'];

  let section_html_list = [];
  mch.init('/template/sidebar_section.mustache');

  for (let i = 0; i < len(sections); i++) {
      let section = sections[i];
      
      let topics = section['topics'];
      topics = array.map(topics, |t|=>{
          
          return {...t, md: '/' + __APP__ + '/' + t['md'], active: t['md'] == doc};
      });
      
      let title = section['title'];
      let section_html = mch.render();
      array.push(section_html_list, section_html);
  }


  let side_bar_content_html = array.join(section_html_list, '');

  return mch.render_template('/template/sidebar.mustache');
}

fn find_prev_next(app, md) {
  let navi = app['navi'];
  let navi_len = len(navi);
  let topic_list = []; 
  for (let i = 0; i < navi_len; i++) {
    let topics = navi[i]['topics'];
    topic_list = array.concat(topic_list, topics);
  }

  let prev = null;
  let next = null;
  let topics_len = len(topic_list);
  let md_index = array.find_index(topic_list, |t| => t['md'] == md);
  if md_index != -1 {
    if md_index > 0 {
      prev = topic_list[md_index - 1];
      if md_index < topics_len - 1 {
        next = topic_list[md_index + 1];
      }
    } else {
      if md_index < topics_len - 1 {
        next = topic_list[md_index + 1];
      }
    }
  }

  return [prev, next];
}

fn get_doc_name() {

  let web_path = web.path();

  let fidx = str.last_index_of(web_path, '/');
  if fidx == -1 {
    throw({
      message: 'markdown not found.'
    });
  }
  return str.substring(web_path, fidx + 1);
}


let project = {};
let project_json = github.get_global_content('/project.json');
if project_json {
  project = parse_json(project_json);
}

let doc_name = get_doc_name();

let app = {};
let app_json = github.get_app_content('/app.json');
if app_json {
  app = parse_json(app_json);
}

let users_path = '/users.json';
let users = [];

let users_json = github.get_global_content(users_path);
if users_json {
  users = parse_json(users_json);
}

let [prev, next] = find_prev_next(app, doc_name);

let side_bar_html = render_sidebar(app, doc_name);


let header_html = mch.render_global_template('/template/header.mustache');
let footer_html = render_foot_html(project);


let DOC_NAME = doc_name;
let HOST_NAME = web.hostname();

let comments_html = render_comments_html('cookbook', doc_name, users);

md.render('/articles/' + doc_name);
let article_content = md.get_html();
let metas = md.get_metas();

let html = mch.render_template('/template/article.mustache');

web.body(html);
```