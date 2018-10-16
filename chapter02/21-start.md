## 2.1 实战环境准备

本章节会给出一个简单的示例代码模板，后续章节的深入也将围绕这个模板来展开，所以如果想要跟随书中示例进行逐步操作，可以在 GitHub 上找到示例代码。

### 2.1.1 代码准备

本书的内容和是咧代码均托管在GitHub上：
代码地址： 

![](https://gss0.bdstatic.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/pwa/projects/1515680651561/appshell.png)
图2-1 App shell 架构示意图

### 2.1.2 App Shell 划分

如图 2-1 所示，给出了一个基本的页面 App Shell， 它包含头部底部导航、侧边导航、内容区等，是对于一个应用来说相对不变或较稳定的结构。

### 2.1.3 App Shell 怎么开发

App Shell 架构是构建 Progressive Web App 的一种方式，这种应用能可靠且即时地加载到您的用户屏幕上，与本机应用相似。

App“shell”是支持用户界面所需的最小的 HTML、CSS 和 JavaScript，如果离线缓存，可确保在用户重复访问时提供即时、可靠的良好性能。这意味着并不是每次用户访问时都要从网络加载 App Shell。 只需要从网络中加载必要的内容。

对于使用包含大量 JavaScript 的架构的单页应用来说，App Shell 是一种常用方法。这种方法依赖渐进式缓存 Shell（使用服务工作线程）让应用运行。接下来，为使用 JavaScript 的每个页面加载动态内容。App Shell 非常适合用于在没有网络的情况下将一些初始 HTML 快速加载到屏幕上
