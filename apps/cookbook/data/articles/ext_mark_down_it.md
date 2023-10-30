---
subject: ext_markdownit
---
# MarkDownIt
> Markdown parser, done right. 100% CommonMark support, extensions, syntax plugins & high speed


> import ext.ShowDown as sd;

## render(path)
> translate the markedown document to `html`. It will extract the first heading as the `title` and first paragraph as the `excerpt`. These can be set in the page `title` and `meta` tag of `description` to improve the `SEO` ranking.

- params:
  - path: the markdown document path.



## render_source(source)
> translate the markedown document to `html`. It will extract the first heading as the `title` and first paragraph as the `excerpt`. These can be set in the page `title` and `meta` tag of `description` to improve the `SEO` ranking.

- params:
  - source: the markdown document string value.




## get_html()
> return the `html` from the render

## get_meta(key)
> return the string value from the render meta key

## get_mtas()
> return a map object from the render 

## get_meta_list()
> return a array of meta object , each meta object with `name` and `value` keys.
