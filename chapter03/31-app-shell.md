## 3.1 App Shell

App Shell 架构是构建 PWA 的一种推荐的方式，这种应用能可靠且即时地加载到您的用户屏幕上，与本机应用相似。

引入 App shell 是为了减少用户进入页面时的白屏等待时间，让用户一进入页面就能快速的看到页面的一个架构，提升用户体验，从而提高用户留存率。

### 3.1.1 什么是 App Shell

一个 App 从显示内容上可以粗略划分为内容部分(content)和外壳部分(shell)。
App Shell，从字面理解就是一个 App 的外壳部分，即页面的一个基本结构，如图 3-1 所示。

![](https://gss0.bdstatic.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/pwa/projects/1515680651561/appshell.png)

图 3-1 App Shell 架构示意图

从概念上讲，App Shell 是 PWA 界面展现所需的最小资源，即支持用户界面所需的最小的 HTML、CSS 和 JavaScript，因此每个页面都需要加载这一部分。如果我们有办法把这部分主动缓存起来，就能够在加载页面时不再请求外壳，而只需要那些每个页面变化的主体内容即可，从而降低一些请求的流量和渲染的时间。

既然提到了主动可控的缓存，就容易联想到了 PWA 的另一项技术 Service Worker。所以 App Shell 模型依赖 Service Worker 来实现，也需要开发者对于页面内容进行适当的划分，识别出哪些属于 Shell，而哪些属于页面可变的主体内容。

### 3.1.2 App Shell 的划分

如图 3-1 所示，给出了一个基本的页面 App Shell， 它包含头部底部导航、侧边导航、内容区等，是对于一个应用来说相对不变或较为稳定的结构。

对于复杂的应用来说，也可能包含多个 Shell。以一个电商网站为例，所有商品的详情页，营销活动详情页等共用一个 Shell；而商品的列表，搜索等页面使用另外一个 Shell；最后首页可能没有 Shell（或者说 Shell 没有显示部分）。

如果站点是一个单页应用，那么通常会有一个“容器节点”用来担任 App 的主画布，在路由切换时重新渲染以达到切换页面的目的。在 Vue 中通常是 `<router-view>`，而在 React 中则是 `<Router>` 根节点。换言之，在这些节点之外的内容则可以认为是外壳部分，可能包含头部，尾部，侧边栏，全局共用的脚本，样式，meta 设置等等，在某些网页设计的概念中也被称为 layout。

### 3.1.3 何时使用 App Shell 模型

关于具体的代码编写（包括站点代码和 Service Worker 两个部分）将在后续章节详细介绍，在直接使用之前，我们应该花一点时间了解它的使用场景和优劣，从而做出正确的判断。

App Shell 模型的劣势主要源自于开发或者改造的成本，主要包括：

1. 必须是 HTTPS 协议的站点，因为 Service Worker 必须运行在 HTTPS 协议下。

2. 需要开发者将站点内容划分出 Shell 部分和主体部分。对于现代前端框架搭建的站点来说并不复杂，但对于古老的站点（例如每个页面都是一个 html，或者使用某些模板引擎如 jsp, php直接拼装返回的）就没有那么幸运了。因为它们每个页面都是独立的，要调整页面之间的组织结构，抽离共有部分会变得比较困难。

3. 需要额外的 Service Worker 和 caches API 的学习、运维和开发成本，毕竟这两项技术还不算前端基础技术。

4. 需要开发者考虑 Service Worker 缓存的管理问题，尤其是版本更迭时的更新和清理，避免版本失配和容量无限增长之类的问题。

而 App Shell 模型带来的优势主要集中于体验上，大致有：

1. 打开页面时 Shell 率先从缓存中取出，因此速度非常快，能尽早给用户呈现部分内容，大大提升首屏性能，缩短白屏时间。

2. 减少获取重复内容的网络请求意味着减少网络流量的消耗，这点在移动端尤其较重要。

3. 配合 Service Worker 的缓存策略，可以做到离线支持，获取和本机 APP 类似的交互体验。

### 3.1.4 App Shell 的案例分析

我们通过一个线上的采用 App Shell 模型的例子，来分析一下 App Shell 的效果。案例来自 [https://app-shell.appsport.com](https://app-shell.appsport.com)，这是由 Google 开发的一个 DEMO 性质的站点，目的就是为了演示 App Shell 的页面组成结构和加载效果。
    
图 3-2 可以看到，通过 Service Worker 配合，整个页面的外壳部分被缓存起来，在下次访问时由 Service Worker 取出并返回。如果把网络切换成离线 (Offline) 再进行刷新，页面依然能够正常展现，也是依赖了这些缓存。
    
![](http://boscdn.bpc.baidu.com/assets/lavas/book/app-shell.appspot.png)

图 3-2 缓存中的 App Shell

从性能上看，整个站点的首屏时间 (从开始加载到页面触发 `onload`) 是 500 ms 左右，但因为页面内容简单，这个值的大小不具有太多的参考意义。真正值得我们关注的是它渲染的顺序，如图 3-3 所示。

![](http://boscdn.bpc.baidu.com/assets/lavas/book/app-shell.appspot-2.png)

图 3-3 优先显示 Shell 部分内容

在加载页面时，Shell 部分不通过网络请求直接从缓存中获取，因此速度比主体内容快得多，也优先展示，几乎消灭了白屏时间。这对于用户来说无疑是一个特别良好的感官体验。

如果您觉得这个站点过于简单，无法体现差异的话，下面将列出 2 个更加复杂的站点，同样使用了 App Shell 模型，您可以亲自体验一下。

1. [https://lavas.baidu.com/game/](https://lavas.baidu.com/game/)
    
    这是由百度 Lavas 团队开发的一个比较复杂的 DEMO，参考的是一个游戏聚合网页。这个站点同样把 App Shell 缓存起来，同样的离线可用，加上一些简单的 fadeIn/fadeOut 动画，提升了整体的使用体验。效果如图 3-4 所示。
    
    ![](http://boscdn.bpc.baidu.com/assets/lavas/book/game.png)
    
    图 3-4 可以支持离线访问和提示

2. [https://lavas.baidu.com/12306/](https://lavas.baidu.com/12306/)

    这是 Lavas 团队开发的另外一个 DEMO，参考中国铁路的在线售票系统。和前面两者相同，也都支持离线访问。不过略有不同的是，因为铁路售票对实时性要求高，因此如果是离线状态下，主体内容并不渲染，而是提示网络问题。很显然这样的体验要比一个浏览器默认的 404 报错页面好得多。效果如图 3-5 所示。
    
    ![](http://boscdn.bpc.baidu.com/assets/lavas/book/12306.png)

    图 3-5 离线状态下友好的错误提示
