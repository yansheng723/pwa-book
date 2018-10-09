/**
 *  app.js 页面主要的时间监听及处理
 * 
 * 
 */

(function () {

	'use strict'

	var app = {
		sidebarShow: false
	};

	// sidebar btn
	document.querySelector('.icon-category').addEventListener('click', function () {
		app.openSidebar();
	})

	document.querySelector('.sidebar').addEventListener('click', function () {
		app.closeSidebar();
	})

	document.querySelector('.mask').addEventListener('click', function () {
		app.closeSidebar();
	})


	document.querySelector('.icon-refresh').addEventListener('click', function () {
		app.refresh();
	})


	app.refresh = function () {
		window.location.reload();
	}

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

	app.getList = function(key, label) {
    var url = 'https://bos'
    // TODO add cache logic here
    if ('caches' in window) {
      /*
       * Check if the service worker has already cached this city's weather
       * data. If the service worker has the data, then display the cached
       * data while the app fetches the latest data.
       */
      caches.match(url).then(function(response) {
        if (response) {
          response.json().then(function updateFromCache(json) {
            var results = json.query.results;
            results.key = key;
            results.label = label;
            results.created = json.query.created;
            app.updateForecastCard(results);
          });
        }
      });
    }
    // Fetch the latest data.
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          var response = JSON.parse(request.response);
          var results = response.query.results;
          results.key = key;
          results.label = label;
          results.created = response.query.created;
          app.updateForecastCard(results);
        }
      } else {
        // Return the initial weather forecast since no data is available.
        app.updateForecastCard(initialWeatherForecast);
      }
    };
    request.open('GET', url);
    request.send();
  };


	app.goSearch = function () {

	}


	
})()
