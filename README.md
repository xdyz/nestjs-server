

## Description

This project for test devops.

just a demo.

If you want to have a good project, you can basic with this project.

This project use typeorm, nestjs, sentry, redis, mysql

## RBAC
一个用户可以有个多个项目，用户属于项目的成员

项目内，每个成员都只有一种角色

平台管理员 拥有项目所有的权限 新建用户，菜单，配置角色，所有菜单栏权限

项目管理员 只拥有当前项目的所有权限，对于当前项目只能增删成员，配置项目信息，但是无法修改平台菜单，用户

成员角色不同，拥有的权限不一样，可访问的菜单不同

## code-gen
This project created by my friend [@kuangshp](https://github.com/kuangshp).

You can use it to reverse compile database tables as entities.    

[code-gen](https://github.com/kuangshp/nest-code-generate)



## document

语雀文档，有我对nestjs 使用的一些心得和技巧，感兴趣的朋友可以看看

[语雀地址](https://www.yuque.com/books/share/2f10e167-7083-43dc-999f-f25068f50653)


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
