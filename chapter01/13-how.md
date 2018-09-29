## 1.3 PWA 的核心内容

前文提到过，PWA 能做到原生应用的体验并不是仅仅依赖于某一项技术，而是使用一些新技术进行改进，从而在安全、性能和体验三个方面上都有了很大的提升。下面将简单介绍几个 PWA 应用中经常使用的技术与功能，后面的章节将进行详细描述。

* service worker

即服务工作线程，是浏览器在后台独立于网页运行的脚本，它拦截浏览器的请求，返回缓存数据。现在，它们已包括如推送通知和后台同步等功能。将来，服务工作线程将会支持如定期同步或地理围栏等其他功能。

图 3 --- 服务器浏览器桥梁图  

Service Worker 是 PWA 的功能关键所在，它是服务器端与浏览器端之间的桥梁，PWA 的每一个网络请求都是经过它的处理再返回结果。另外，Service Worker 只能在 https 上运行。由于 Service Worker 可以拦截网络请求并修改网络应答，因此中间人攻击将难以实施。Service Worker 在不使用的时候会停止，然后在需要的时候会重新开启。所以如果有信息需要在两次 Service Worker 中进行传递时，推荐使用 IndexedDB 来保存数据，而不是使用全局变量。Service Worker 广泛使用了 Promise，所以使用者需要对 Promise 有一定对了解。

Service Worker 使得应用可以控制网络请求，可以缓存请求结果来提高性能，并对缓存资源提供离线访问方式。Service Worker 主要依靠 Fetch 和 Cache 这两个 API 来实现应用离线可用的功能，其中前者是获取网络资源的标准实现，后者是应用数据的持久化存储方式。需要强调的是，Cache 是持久化的，并且和浏览器缓存和网络状态没有关系。所以 Cache 也是 PWA 离线可用技术的关键。

Service Worker 也是其他功能的基础，正是有了 Service Worker，以下功能才能发挥更大的作用：
- Notifications API：使用操作系统本地的通知功能来向用户展示系统通知。
- Push API：这个 API 可以让 PWA 订阅并接收服务器端的推送消息。推送消息会由 Service Worker 处理，可以用来更新本地状态，也可以用来展示系统通知。由于 Service Worker 的运行不依赖于应用本身，所以它可以在浏览器没有运行的时候接收消息通知。
- Background Sync API：这个 API 可以在用户网络条件不好的时候收集用户需要发送的内容，然后等到网络条件良好的时候再发送。这个 API 还可以接收服务器的定时更新，从而使得应用可以在下次打开时进行更新操作。
- Channel Messaging API：这个 API 让 Web Worker、Service Worker 和主应用可以互相传递消息。这个 API 可以用于新内容通知和软件更新等与用户有交互的操作。

每一个 Service Worker 大致可分为 3 个生命周期：
- 注册
- 安装
- 激活

安装一个 Service Worker 需要事先在 JavaScript 代码中进行注册。注册的生命周期是告诉浏览器 Service Worker 位于何处，然后在后台开始安装。

一旦浏览器成功注册了一个 Service Worker，那么安装工作将会开始。只要当前站点没有安装过 Service Worker，或者新旧 Service Worker 哪怕只有一比特的不同，那安装工作都会进行。

Service Worker 安装的时候会触发一个 `install` 事件，所以在 Service Worker 安装过程中可以设置一个 `install` 事件监听器来进行一些辅助工作。比如在安装的过程中可以去预缓存一些数据，从而在用户下次打开应用的时候可以快速响应。

一旦 Service Worker 安装成功，那么接下来就会进入激活阶段。如果有些页面是被旧的 Service Worker 控制，那么新的 Service Worker 会进入等待状态。新的 Service Worker 只有等到没有页面被旧的 Service Worker 控制的时候才会被激活。这保证了任何时候只有一个版本的 Service Worker 在运行。

当新的 Service Worker 被激活的时候，一个 `activate` 事件会被触发。这个事件监听器非常有用，可以用来清理一些过时的缓存。

Service Worker 是事件驱动的。安装和激活的时候会分别触发 `install` 和 `activate` 事件，此外还有其他事件 Service Worker 也能进行响应，比如 `fetch`、`push`、`sync` 和 `message` 等，其中 `message` 是 Service Worker 用来和其他脚本通信用的。
