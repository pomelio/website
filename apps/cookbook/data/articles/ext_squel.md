---
subject: ext_squel
---
# squel
> import ext.squel as sql;

## select()
> create a `select` statement


## field(field, alias)
> set a field in the statement

- params:
  - field: the `field` column name to be returned from the select statement.
  - alias: optional. The alias name of the `field`
  `


## from( from, alias)
> set the `from` of the statement

- params:
  - from: the `from`
  - alias: optional. The alias name of the `table` name

## group(value)
> set the `group` of the statement

- params:
  - value: the `group by` column name


## join(value, alias, on)
> set the `join` of the statement

- params:
  - value: the join `table` name
  - alias: optional. The join `table` alias
  - on: optional. The join `on` column name
  

## outer_join(value, alias, on)
> set the `outter join` of the `statement

- params:
  - value: the join `table` name
  - alias: optional. The join `table` alias
  - on: optional. The join `on` column name
  


## left_join(value, alias, on)
> set the `left join` of the statement

- params:
  - value: the join `table` name
  - alias: optional. The join `table` alias
  - on: optional. The join `on` column name
  


## right_join(value, alias, on)
> set the `right join` of the statement

- params:
  - value: the join `table` name
  - alias: optional. The join `table` alias
  - on: optional. The join `on` column name


## where(value, ...params)
> set the `where` of the statement

- params:
  - value: the where criteria.
  - params: optional. The values of the where criteria parameters


## order(value, desc)
> set the `order by` of the statement

- params:
  - value: the `order by` column.
  - desc: optional. boolean of asc.
  

## limit(value)
> set to return limited number of rows

- params:
  - value: the number of rows.


## offset(value)
> set to return  of rows offset

- params:
  - value: the position of offset of rows.
  

## update();
> create an `update` statement


## table(value)
> set to update  table name

- params:
  - value: the update table name.
  

## set(name, value)
> set to update  table name column name and value

- params:
  - name: the update column name
  - value: the update column value
  

## delete()
> create an `delete` statement


## insert()
> create an `insert` statement



## into(value)
> set the insert into table name

- params:
  - value: the insert table name
  


## get_sql_text()
> return a sql text.
  
- return value:
  > return the sql string

## get_sql_values()
> return a sql prepared statment values.

  
- return value:
  > return the sql prepared statement values

## to_string()
> return a string of the sql
