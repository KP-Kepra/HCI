import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import VueAgile from 'vue-agile';
Vue.use(VueAgile);

import appMenuList from './components/appMenuList.vue';
import navBar from './components/navBar.vue';
import home from './components/home.vue';
import about from './components/about/about.vue';
import timeline from './components/timeline.vue';
import blog from './components/blog.vue';
import tree from './components/tree.vue';
import treeview from './components/tree-view.vue';
import contact from './components/contact.vue';
import eventBus from './eventBus.js'

Vue.component('app-menu-list', appMenuList);
Vue.component('nav-bar', navBar);
Vue.component('home', home);
Vue.component('about', about);
Vue.component('timeline', timeline);
Vue.component('blog', blog);
Vue.component('tree', tree);
Vue.component('tree-view', treeview);
Vue.component('contact', contact);

var app = new Vue({
	el: '#app',

	data: { },
})