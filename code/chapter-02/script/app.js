/**
 *  app.js 主页面js，事件绑定和处理
 */

'use strict'

var app = {
	sidebarShow: false,
	loadingShow: true,
	homeListTemplate: document.querySelector('.main-list-item'),
	detailTemplate: document.querySelector('.main-detail')
};

/*******************
* 页面
*******************/

app.refresh = function () {
	var url = './assets/mockData/homelist.json';
	app.getData(url, 'homeListTemplate');
}

app.getData = function(url, templateName) {
	app.showLoading();
  // // TODO add cache logic here
  // if ('caches' in window) {
  //   /*
  //    * Check if the service worker has already cached this data
  //    * data. If the service worker has the data, then display the cached
  //    * data while the app fetches the latest data.
  //    */
  //   caches.match(url).then(function(response) {
  //     if (response) {
  //       response.json().then(function updateFromCache(json) {
  //         var results = json.data.list;
  //         app.hideLoading();
  //         app.updateTemplate(results, templateName);
  //       });
  //     }
  //   });
  // }
  // Fetch the latest data.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.response);
      var results = response.data.list;
      app.updateTemplate(results, templateName);
    }
    else {
      console.error('Get data fail')
    }
  };
  xhr.open('GET', url);
  xhr.send();
};

/**
 * [updateTemplate 更新页面
 * @param  {[type]} data         获取的数据
 * @param  {[type]} templateName 数据对应模板名称
 * @return {[type]}              [description]
 */
app.updateTemplate = function (data, templateName) {
  app.hideLoading();
	if (templateName === 'homeListTemplate') {
		var container = document.querySelector('.main-list')
		container.textContent = '';
		data.forEach(function (item) {
			var tpl = app.homeListTemplate.cloneNode(true);
			tpl.querySelector('a').setAttribute('href', item.url);
			tpl.querySelector('img').setAttribute('src', item.img);
			tpl.querySelector('.name').textContent = item.name;
			tpl.querySelector('.price').textContent = '$' + item.price;
			tpl.querySelector('.decs').textContent = item.description;
			container.appendChild(tpl);
		})
	}
}


/*******************
* 事件监听
*******************/

// sidebar btn
document.querySelector('.sidebar').addEventListener('click', function () {
	app.closeSidebar();
})

document.querySelector('.icon-category').addEventListener('click', function () {
	app.openSidebar();
})

document.querySelector('.mask').addEventListener('click', function () {
	app.closeSidebar();
})


document.querySelector('.icon-refresh').addEventListener('click', function () {
	app.refresh();
})


app.openSidebar = function () {
	if (app.sidebarShow) return;
	document.querySelector('.mask').classList.remove('hide');
	document.querySelector('.sidebar').classList.remove('hide');
	app.sidebarShow = true;
}

app.closeSidebar = function () {
	if (!app.sidebarShow) return;
	document.querySelector('.mask').classList.add('hide');
	document.querySelector('.sidebar').classList.add('hide');
	app.sidebarShow = false;
}

app.showLoading = function () {
	if (app.loadingShow) return;
	document.querySelector('.loading').classList.remove('hide');
	app.loadingShow = true;
}

app.hideLoading = function () {
	if (!app.loadingShow) return;
	document.querySelector('.loading').classList.add('hide');
	app.loadingShow = false;
}


// 请求数据并更新
app.refresh();
	
