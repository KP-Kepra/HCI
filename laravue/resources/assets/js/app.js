import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import appMenuList from './components/appMenuList.vue'

Vue.component('app-menu-list', appMenuList);

var app = new Vue({
	el: '#app',
	data: { }
})