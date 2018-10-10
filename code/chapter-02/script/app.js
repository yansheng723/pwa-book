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


	app.goSearch = function () {

	}


	
})()
