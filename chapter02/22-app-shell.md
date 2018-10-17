## 2.2 页面快速响应

页面快速响应主要集中解决两方面的问题，一个是减少正常访问的白屏等待时间，二是在断网和弱网情况下能够浏览已缓存的页面，避免白屏。

主要依赖 App Shell 和 Service Worker 来实现。
 
### 2.2.1 App Shell

如图 2-1 所示，在访问站点时能快速呈现页面的骨架，减少用户的白屏等待时间，其实这个页面骨架就是[App Shell]()，是对于一个应用来说相对不变或较稳定的结构，后面第三章节设计与体验中会详细讲解。本示例中的 App Shell， 它包含头部导航、侧边导航、内容区等。



![](https://gss0.bdstatic.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/pwa/projects/1515680651561/appshell.png)
图2-1 App shell 架构示意图

如图 2-1 所示，

### 2.2.1 离线缓存

但是，单有一个 App Shell 骨架并不能实现快速返回呢？不难理解，这种方法依赖渐进式缓存 App Shell（使用服务工作线程）让应用运行。接下来，为使用 JavaScript 的每个页面加载动态内容。App Shell 非常适合用于在没有网络的情况下将一些初始 HTML 快速加载到屏幕上。


