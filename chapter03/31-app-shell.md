## 3.1 App Shell

App Shell 架构是构建 PWA 的一种推荐的方式，这种应用能可靠且即时地加载到您的用户屏幕上，与本机应用相似。

引入 App shell 是为了减少用户进入页面时的白屏等待时间，让用户一进入页面就能快速的看到页面的一个架构，提升用户体验，从而提高用户留存率。

### 3.1.1 什么是 App Shell

一个 App 从显示内容上可以粗略划分为内容部分(content)和外壳部分(shell)。
App Shell，从字面理解就是一个 App 的外壳部分，即页面的一个基本结构，如图 3-1 所示。

![](https://gss0.bdstatic.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/pwa/projects/1515680651561/appshell.png)
图3-1 App Shell 架构示意图

从概念上讲，App Shell 是 PWA 界面展现所需的最小资源，即支持用户界面所需的最小的 HTML、CSS 和 JavaScript，因此每个页面都需要加载这一部分。如果我们把这个部分缓存起来，就能够在加载页面时不用再请求这些重复的内容，而只需要那些每个页面变化的主体内容即可。

提到了主动可控的缓存，就联想到了 PWA 的另一项技术 Service Worker。所以 App Shell 模型依赖 Service Worker 来实现，也需要开发者对于页面内容进行适当的划分，识别出哪些属于 Shell，而哪些不属于。

### 3.1.2 App Shell 划分

如图 3-1 所示，给出了一个基本的页面 App Shell， 它包含头部底部导航、侧边导航、内容区等，是对于一个应用来说相对不变或较为稳定的结构。

对于复杂的应用来说，也可能包含多个 Shell。以一个电商网站为例，所有商品的详情页，营销活动详情页等共用一个 Shell；而商品的列表，搜索等页面使用另外一个 Shell；最后首页可能没有 Shell（或者说 Shell 没有显示部分）。

### 3.1.3 App Shell 怎么开发

App Shell 架构是构建 Progressive Web App 的一种方式，这种应用能可靠且即时地加载到您的用户屏幕上，与本机应用相似。

App“shell”是支持用户界面所需的最小的 HTML、CSS 和 JavaScript，如果离线缓存，可确保在用户重复访问时提供即时、可靠的良好性能。这意味着并不是每次用户访问时都要从网络加载 App Shell。 只需要从网络中加载必要的内容。

对于使用包含大量 JavaScript 的架构的单页应用来说，App Shell 是一种常用方法。这种方法依赖渐进式缓存 Shell（使用服务工作线程）让应用运行。接下来，为使用 JavaScript 的每个页面加载动态内容。App Shell 非常适合用于在没有网络的情况下将一些初始 HTML 快速加载到屏幕上
