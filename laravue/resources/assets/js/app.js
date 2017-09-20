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
import about from './components/about.vue';
import timeline from './components/timeline.vue';

Vue.component('app-menu-list', appMenuList);
Vue.component('nav-bar', navBar);
Vue.component('about', about);
Vue.component('timeline', timeline);

var app = new Vue({
	el: '#app',

	data: { },
})