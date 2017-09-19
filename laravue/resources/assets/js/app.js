import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import VueAgile from 'vue-agile';
Vue.use(VueAgile);

import appMenuList from './components/appMenuList.vue'
import navBar from './components/navBar.vue'

Vue.component('app-menu-list', appMenuList);
Vue.component('nav-bar', navBar);

var app = new Vue({
	el: '#app',

	data: {
		view: 'v-a'
  	},

  	components: {
    	'v-a': {
      		template: '<div>Component A</div>'
    	},
    	'v-b': {
     		template: '<div>Component B</div>'
    	}
  	},

  	methods: {
  		changeView: function(num){
  			switch(num) {
  				case 1:
  					this.view = 'v-a';
  					break;

  				case 2:
  					this.view = 'v-b';
  					break;
  			}
  		}
  	}
})