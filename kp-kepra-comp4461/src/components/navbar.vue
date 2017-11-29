// navBar.vue


// HTML
<template>
<nav class="navbar-fixed-bottom">
	<ul class="nav-justified" width="100%">
		<div 	v-for="button in buttons" 
				v-on:click="changeView(button.id)" 
				class="navbar-nav hvr-overline-from-center"
				:class="{ activeN: isActive(button.id) }">
			{{ button.name }}
		</div>
	</ul>
</nav>
</template>


// JS
<script>
import eventBus from './../eventBus.js';

var buttons = 
[{
	id: 0,
	name: 'HOME',
},

{
	id: 1,
	name: 'ABOUT',
},

{
	id: 2,
	name: 'WORK',
},

{
	id: 3,
	name: 'BLOG',
},

{
	id: 4,
	name: 'CONTACT',
}];

export default {
	name: 'navbar',
	data: function() {
		return { 
			buttons,
			activeN: '0'
		};
	},

	methods: {
		changeView: function(n){
     		eventBus.$emit("changeView", n)
     		this.activeN = n
    	},

    	isActive: function(menu) {
  			return this.activeN == menu
  		}
	}
}
</script>