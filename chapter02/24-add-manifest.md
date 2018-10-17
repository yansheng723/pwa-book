## 2.3 用户粘性

页面架构离线缓存的实现，使我们的站点能够在重复访问时快速响应，提供良好的用户体验。除此之外，接下来我们需要想办法留住用户，提高用户的留存率，或者说是增加用户粘性，如将站点入口添加到主屏幕、消息推送等。此处只给大家做简单的示例演示，具体技术细节请参照[用户留存]()。让用户能像访问一个原生 App 一样去访问站点页面。 

### 2.3.1 添加到主屏幕

要想站点能够添加到手机主屏幕，需要三方面的考量：

- 站点根目录需新增一个 `Manifest.json`的文件，该文件中可配主屏幕入口的icon、入口地址、页面显示动画、名称、全屏等。

- 浏览器辅助提供添加到主屏的功能，如Chrome、手机百度、百度浏览器、小米、Safari 提供了相应的功能，可通过菜单或是弹屏提示引导用户添加主屏入口，相信随着 PWA 的普及，该功能会成为所有浏览器的一个重要的基础部分。

- 手机对浏览器开放`添加到主屏幕`的权限。不同手机或同一手机的不同系统版本可能配置上存在一定差异，调试前，大家需要对应的权限管理，允许弹屏提示及允许添加到桌面等设置，否则部分功能可能会被手机直接屏蔽而影响效果。

``` json
{
  "name": "PWA Shopping", // Web App 名称
  "short_name": "PWA Shopping",
  "icons": [{ // 主屏幕显示的入口icon图片，多个大小供适配选择
    "src": "images/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    }, {
      "src": "images/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    }, {
      "src": "images/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    }, {
      "src": "images/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }, {
      "src": "images/icons/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    }],
  "start_url": "/index.html", // 主屏幕入口的访问地址
  "display": "standalone", // 主屏幕入口的访问地址
  "background_color": "#3E4EB8", // 主屏幕入口动画背景色
  "theme_color": "#2F3BA2" // 手机顶部条的主题色
}

```