# 使用 Lighthouse 审查 WebApp

Lighthouse 是一个开源的自动化工具，能够对 WebApp 多方面的效果指标进行评测，并给出建议以帮助开发者改进 WebApp 的质量。它的使用方法也非常简单，我们只需要提供一个要审查的网址，它将针对此页面运行一连串的测试，然后生成一个有关页面性能的报告。通过报告我们就可以知道需要采取哪些措施来改进应用的性能和体验。

## 使用入门

针对不同的适用场景，我们可以通过多种方式来安装并使用 Lighthouse：

- Chrome 插件的形式提供了更加友好的用户界面，方便读取报告。
- Chrome DevTools 的方式集成在最新版本的 Chrome 浏览器中，无需安装即可使用。
- 命令行工具则方便将 Lighthouse 集成到持续集成系统。
- 我们也能通过 Node.js 模块引入 Lighthouse，以编程的形式来使用它。

下面我们依次介绍上述这几种使用方法。

### Chrome 插件

下载 Google Chrome 52 或更高版本。

安装 [Ligthouse Chrome 插件](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)

打开需要进行审查的页面，并点击 Chrome 工具栏上的 Lighthouse 图标 ![icon](./img/9.0.1.png)

如果在工具栏上没有看到此图标，它可能隐藏在 Chrome 的主菜单中。

点击此图标后，我们会看到一个展开菜单，如下图

![menu](./img/9.0.2.png)

在 `Options` 选项里，可以选择需要的审查项。

![menu](./img/9.0.3.png)

点击 Generate report 按钮以针对当前打开的页面运行 Lighthouse 测试。

在完成审查后，Lighthouse 将打开一个新标签，并在页面的结果上显示一个报告。

![report](./img/9.0.4.png)

在这里，我们就能看到关于 PWA, Performance, Accessibility, Best Practices 四个方面存在的问题以及相关建议。根据这些去优化你的站点吧！

### Chrome DevTools

在最新版本的 Chrome 浏览器中，Lighthouse 已经直接集成到了调试工具 DevTools 中了，因此不需要进行任何安装或下载。我们先打开需要进行测试的页面，打开 Chrome DevTools，选择 `Audits` 面板，就能看到 Lighthouse 工具的一些配置选项，选择需要的配置后，点击 `Run audits`，工具就会对当前页面进行性能的测评。

![menu](./img/9.0.0.png)

### 命令行工具

安装 [Node](https://nodejs.org/zh-cn/download/)，需要 Node 8 LTS(8.9) 及以上版本。

以全局方式安装：

```npm
npm install -g lighthouse
```

针对一个页面运行 `lighthouse` 命令，进行审查：

```shell
lighthouse https://www.example.com/
```

输入 `--help` 选项可以查看可用的输入、输出选项

```shell
lighthouse --help
```

Lighthouse 可以直接把测试报告以 JSON 或者 HTML 页面的方式输出

```shell
lighthouse --output json --output-path ./myfile.json

lighthouse --output html --output-path ./report.html
```

### 编程的使用方式

我们可以把 Lighthouse 当做 Node.js 的模块引入到项目代码中，结合 `chrome-launcher` 模块即可以编程的方式随心所欲的使用了。

```javascript
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      return chrome.kill().then(() => results)
    });
  });
}

const opts = {
  chromeFlags: ['--show-paint-rects']
};

launchChromeAndRunLighthouse('https://example.com', opts).then(results => {
  // Use results!
});
```

更多的选项和文档可以参考官方的文档 [lighthouse](https://github.com/GoogleChrome/lighthouse)
