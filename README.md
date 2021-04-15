
# 说明

本主题是采用[docsy主题](https://github.com/google/docsy.git)进行魔改的主题，你可以通过[https://example.docsy.dev/](https://example.docsy.dev/)了解原版docsy的设计。访问[Docsy Getting Started Guide](https://docsy.dev/docs/getting-started/)获得教程。


你可以通过[demo](https://example-cyan.vercel.app/)站点预览主题效果。



本主题属于测试阶段，代码并不完善。请优先使用原版主题。

# 使用主题

> 请确保你已经按照[hugo教程](https://gohugo.io/getting-started/installing/)正确安装了hugo

> 由于主题需要`PostCSS`组件，需要使用npm包管理器，需要按照[nodejs](https://nodejs.org/en/download/)安装npm


### 第一步 下载主题 

在博客themes目录下执行以下命令:

```
git clone https://github.com/elsatar/library.git

```

或使用[备用站点](https://elsatar.coding.net/public/project/library/git/files)

```
git clone https://e.coding.net/elsatar/project/library.git

```

### 第二步 添加内容



#### 方法一 使用example内容

将example目录下所有文件复制到博客根目录下

然后执行npm ci安装主题所需的组件


#### 方法二 自行安装`PostCSS`组件和内容

正常运行本主题需要安装`PostCSS`，通过以下命令安装该组件：

  ```
  sudo npm install -D --save autoprefixer
  sudo npm install -D --save postcss-cli
  ```

修改 config.toml文件内的代码`theme = ["library"]`或将example目录下的config.toml复制到项目根目录下

### 第三步 执行hugo

使用hugo生成页面

如果使用example，你同样可以使用`npm run build`命令使用hugo生成页面


# 修改事项

本主题相比原主题修改了以事项（包括但不仅限于以下内容）

修改了背景颜色，主题颜色，标题颜色，导航栏颜色，分割线颜色。

替换了源主题的bootstrap，font awesome 谷歌字体的链接。

增加了添加了ICP变量，打赏功能，全站灰色代码，返回页面顶部，评论组件等功能。

修改了页面的模板，以增添更多功能。

新增的全空白的单独页模板，单独文章页面模板。

添加了vue框架。

# 开源协议

本主题继承原主题的 Apache License 2.0，请参照原主题说明。[LICENSE.md](https://github.com/google/docsy/blob/master/LICENSE)
