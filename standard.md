# PWA 书籍编写规范

## 准备工作

- 下载安装 [GitBook Editor](https://legacy.gitbook.com/editor)

- GitHub 项目代码`clone`到本地

`git clone https://github.com/lavas-project/pwa-book.git`

----

## 如何开发 & 注意事项

- 打开 GitBook Editor 会提示登录，可以选择 GitHub 账号授权登录，或是`do that later`跳过登录

![](img/0.0.1.jpg)


- 点击顶部导航栏的`GitBook Editor > open`打开刚刚`clone`下来的`pwa-book`文件夹，这时你会看到已有的文档书籍

![](img/0.0.2.jpg)

- 开始编写前还需要几个必要的配置：
   - 点击右下角`？`勾选`Edit Markdown`，此时，你嫩刚看到 md 的编写界面及预览界面；
   - 顶部导航选择`Book > Repository Settings` 看看是否是对应的书籍 GitHub 地址，便于后面两边文件的同步
   - 点击侧边栏的添加章节，在章节名右键新建章节子目录

![](img/0.0.3.jpg)

- **书写注意**：
   - 最多保留一级子目录，如 1.1.X 均合并在 1.1 章节写完
   - 章节层级标题从`# 第一章 xxxx`开始，章节内子目录层级标题从`## 1.1 xxxx` 开始，尽量文章中子标题都带上层级号，如 `1.1.1 xxxx`、`1.1.2 xxxx`
   - 图片/表格均以章节来区分，标注格式为“章节号-编号 说明”，如“图1-1 生命周期图”、“表1-2 属性列表”， 代码块暂时不用标注
   - 





- 侧边栏的`FILES`选项是对应生成的源码文件，会同步到 GitHub 上，如果对自动生成的文件名称不满意需要修改，可以在相应的文件右键`rename`(**注意：需要同步修改 SUMMARY.md 中的目录路径，书籍的目录顺序、嵌套等也可以在此调整**)

![](img/0.0.4.jpg)

- 代码同步，点击屏幕右上角的`sync` ，也可以点击顶部导航`BOOK > Sync/pull/push`等做相应的操作，由于多人合作，切记代码要认真核对是否覆盖删除等，同步完成后可以查看 GitHub 验证自己的修改