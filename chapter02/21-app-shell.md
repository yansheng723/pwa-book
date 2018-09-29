## 2.1 App Shell 架构

引入 App shell 是为了减少用户进入页面时的白屏等待时间，让用户一进入页面就能快速的看到页面的一个架构，从而更好的提升用户留存率。

### 2.1.1 什么是 App Shell

App Shell ，从字面理解就是一个应用的外壳，即页面的一个基本结构，如图 2-1 所示。从理论上讲，App Shell 是 PWA 界面展现所需的最小资源，即支持用户界面所需的最小的 HTML、CSS 和 JavaScript。我们希望在用户访问页面时，App shell 能迅速呈现在用户面前，并且不依赖网络的情况。这意味着并不是每次用户访问时都要从网络加载 App Shell， 只需要从网络中加载必要的内容。不难理解，这种方法依赖渐进式缓存App Shell（使用服务工作线程）让应用运行。接下来，为使用 JavaScript 的每个页面加载动态内容。App Shell 非常适合用于在没有网络的情况下将一些初始 HTML 快速加载到屏幕上。

图2-1 App shell 架构示意图
![](https://gss0.bdstatic.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/pwa/projects/1515680651561/appshell.png)

### 2.1.2 App Shell 划分

待填充。。。

### 2.1.3 App Shell 怎么开发

App Shell 架构是构建 Progressive Web App 的一种方式，这种应用能可靠且即时地加载到您的用户屏幕上，与本机应用相似。

App“shell”是支持用户界面所需的最小的 HTML、CSS 和 JavaScript，如果离线缓存，可确保在用户重复访问时提供即时、可靠的良好性能。这意味着并不是每次用户访问时都要从网络加载 App Shell。 只需要从网络中加载必要的内容。

对于使用包含大量 JavaScript 的架构的单页应用来说，App Shell 是一种常用方法。这种方法依赖渐进式缓存 Shell（使用服务工作线程）让应用运行。接下来，为使用 JavaScript 的每个页面加载动态内容。App Shell 非常适合用于在没有网络的情况下将一些初始 HTML 快速加载到屏幕上
