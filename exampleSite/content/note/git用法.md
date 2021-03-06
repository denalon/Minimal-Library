---
title: "入门git教程"
date: 2021-04-14T08:20:45+08:00
description: "入门git教程"
draft: false
url: /web/course/2021041401.html
author: denalon
---


## 前言 

此教程指导入门者初步接触git和使用git从代码托管服务商下载和推送代码，并不系统性介绍git各种概念和原理。

本教程的目录是为了让入门者初步使用代码。参考[Git 简明指南](https://www.runoob.com/manual/git-guide/)


## git的作用

Git（读音为/gɪt/）是一个开源的分布式版本控制系统，hexo的代码可以通过git命令实现代码管理和自动构建。

<p class="text-success">通过git clone命令你可以从github获取项目代码</p>

<p class="text-warning">通过git push 命令你可以将自己代码推送到github</p>


## 下载项目代码

<div>
    <span class="form-inline "><p>如果你只是为了</p><p class="text-success">获取</p><p>项目代码，可以使用下载工具直接下载zip包</p>
    </span>
</div>

**在github下载缓慢可以选择coding或gitee下载**

![直接下载zip包](https://base.oribos.city/images/2021/04/202104140001.png)

<div>
    <span class="form-inline "><p>如果你需要</p><p class="text-warning">推送代码</p><p>到github就需要以下操作:</p>
    </span>
</div>

<hr>

## git使用

推送代码到github或使用项目的自动构建需要下列操作:


#### 安装git 

访问[git官网](https://git-scm.com/)下载git，然后按照提示安装(一直下一步什么都不需要改)


#### 配置本地git用户信息

```
git config --global user.name "用户名"
git config --global user.email "邮箱"
```


#### 配置github仓库

##### 1 注册github账户

在github官方注册github用户，获得用户名和密码

如果github无法访问，可以使用coding或gitee进行代码托管。


##### 2 任选一种方式连接github

2.1 选择 https方式连接 推送代码时需要提供用户名和密码

![https方式](https://base.oribos.city/images/2021/04/202104140003.png)

2.2 ssh免密方式连接，需要使用密钥对

![ssh方式](https://base.oribos.city/images/2021/04/202104140004.png)

需要在本地电脑上使用以下命令生成密钥对
 
```
ssh-keygen -t rsa -C "GitHub 邮箱"
```

然后一路回车。生成的两个文件中，后缀名为.pub的文件为公钥，无后缀名或后缀名为.key的文件为私钥。


2.3 提交公钥给github，


使用记事本打开.pub文件，将文件内代码复制然后在github网站`settings`-`SSH and GPG keys`

![ssh方式](https://base.oribos.city/images/2021/04/202104140002.png)


**私钥需要妥善保管**，系统对私钥有严格要求，用于验证时权限不能太大，避免文件被改写影响验证。


私钥：当前系统的SYSTEM，Administrators用户组，拥有该文件的完全控制权限；该文件的所有者拥有修改权限。**删除其他用户或Everyone读取和执行权限**

公钥：除去私钥的所有权限设置外，可以允许Everyone拥有读取和执行权限



### 下载代码到本地

使用zip下载不会携带.git文件， 使用git clone方式下载的代码需要删掉项目根目录下的.git文件夹再执行如下操作。

> 进阶操作：你可以通过git remote github xxx.git 配置github仓库而不需要删除.git


### 推送代码到github

修改项目根目录下的文件，比如config.yml和CNAME文件，通过以下代码将整个仓库代码推送到github。

```
git init //初始化仓库。 
git add . //添加文件到暂存区。(注意有点号.) 
git commit -m "更新说明" //将暂存区内容添加到仓库中。标识“更新说明” 
git remote add origin XXXX.git  //添加到远程仓库操作，将xxxx.git设置为远程仓库origin 
git push -u origin master  //推送master分支到origin仓库

```

## 注意

使用git 方式部署代码是将整个博客项目上传到github，这就会导致**源码公开**，请根据自己需要决定是否将仓库设置私有。


## 进阶操作

私有仓库使用pages可以购买github 会员或者修改项目目录.github/workflows的代码，在段修改仓库地址到其他开源仓库。这样只有生成的html文件才会开源。

假如你的仓库开源。.github/workflows的代码和项目的文件**绝不要填写私钥信息或密码**，这些内容会被泄露。你可以在workflows文件使用变量名，然后在github项目管理里填入密码信息。

你可以将仓库的基本文件公开，使用`git submodule`引入私有仓库的内容和私密配置文件以保密自己的文章源码。此时需要在workflows文件里配置访问私有仓库的密码信息。这些密码信息应使用变量调用。

使用git submodule 调用文章仓库，可以使文章的撰写同服务器环境脱离，适合后台撰写，手机客户端，自动转载，自动搜集文章等复杂功能。

使用.gitignore忽略node_modules或resources文件，避免源码仓库过大。这些被忽略的文件会再自动构建中重新生成。

<hr>

## 使用coding代码托管

如果github访问异常，可以选择使用coding进行代码托管和自动构建
在coding上的hexo有两种部署方式

方式一: 使用coding的静态网站部署

**由于使用的hexo和npm版本过高，coding的静态网站部署并无法正常使用该项目文件。**

方式二：使用项目里的.coding/ci.yml自动构建文件,将自己的账户密码和仓库https地址对应以下变量

https://${USER}:${TOKRN}@${HTTP_URL}

![ssh方式](https://base.oribos.city/images/2021/04/202104140005.png)


![ssh方式](https://base.oribos.city/images/2021/04/202104140006.png)


![ssh方式](https://base.oribos.city/images/2021/04/202104140007.png)


构建完成后，手动在静态网站部署选择该项目的pages分支