---
id: ext_mustache
---
# mustache
> import ext.mustache as m;

## render_template(path)
> render from an app mustache template with all available variables. All variables defined before this statement and in the scope or parents scopes are available for the mustache template.

- params:
  - path: the template path which is under `apps/${app}/data/template`

- return value:
  > string value which is from the template and variables.


## render_global_template(path)
> render from a global mustache templat with all available variables. All variables defined before this statement and in the scope or parents scopes are available for the mustache template.

- params:
  - path: the template path which is under website's `data/template` folder.

- return value:
  > string value which is from the template and variables.

## init(path)
> init an app template for the future render.

- params:
  - path: the template path which is under `apps/${app}/data/template`

## init_global(path)
> init an global template for future render.
- params:
  - path: the template path which is under website's `data/template` folder.

## render()
> render a template with all available variables

- return value:
  > string value of the template and variables.
