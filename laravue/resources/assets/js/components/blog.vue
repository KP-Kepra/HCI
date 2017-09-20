// blog.vue

// HTML
<template>
<div class="container ab-container">
	<div class="ab-buttons-container">
		<tree :data="blog_menu" :link="blog_menu"></tree>
	</div>

	<div class="ab-group-container">
	<transition name="expand" mode="out-in">
		<div class="panel-group ab-group" :key="text">
			<div class="panel ab-image">
			This is an image
			</div>

			<div class="panel ab-content">
				<div class="panel-heading"><h3 class="panel-title">Title 1</h3></div>

				<div class="panel-body ab-content-body"><h5>{{ text }}</h5></div>
			</div>
		</div>
	</transition>
	</div>

</div>
</template>

// CSS
<style>
.ab-buttons-container {
	display: block;
}

.ab-buttons {
	text-align: center;
	margin: 15 0 15 0;
}

.ab-button-holder {
	width: 25%;
}

.ab-button {
	height: 30px;
	width: auto;
}

.ab-container {
	height: 100% !important;
	display: inline-flex;
}

.ab-group-container {
	background: red;
}

.ab-group-container,
.ab-group {
	width: 100%;
	display: inline-flex;
}

.ab-content-body {
	width: 100%;
}

.ab-content {
	height: 30%;
	width: 100%;
}

.ab-image {
	float: left;
}

.expand-enter-active, .expand-leave-active {
	transition: opacity .5s ease-out;
}

.expand-enter, .expand-leave-to {
	opacity: 0;
}

.expand:not(.delay) {
	display: none;
}
</style>

// JS
<script>
import tree from './tree.vue';
Vue.component('tree', tree);

let blog_menu = 
{
	2016: "Test",
	
	2017: {
		December: {
			BlogA1: "Test",
		},

		November: {
			BlogA2: "Test",
		}
	},

	2015: {
		December: {
			BlogA1: "Test",
		},

		November: {
			BlogA2: "Test",
		}
	},
};

export default {
	name: 'blog',
	data: function(){
		return { 
			blog_menu,
			show: {},
			text: 'Component A1'
		};
	},

  	methods: {
  		changeView: function(view){
  			this.id = view.index;
  			this.text = view.content;
  		}
  	}
}
</script>