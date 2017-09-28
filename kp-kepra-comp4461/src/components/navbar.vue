// navBar.vue


// HTML
<template>
<nav class="navbar-fixed-bottom">
	<ul class="nav-justified" width="100%">
		<div 	v-for="button in buttons" 
				v-on:click="greet" 
				class="navbar-nav">
			{{ button.name }}
		</div>
	</ul>
</nav>
</template>


// JS
<script>
var buttons = 
[{
	name: 'HOME',
},

{
	name: 'ABOUT',
},

{
	name: 'WORK',
},

{
	name: 'BLOG',
},

{
	name: 'CONTACT',
}];

export default {
	name: 'navbar',
	data: function()
	{
		return { buttons };
	},

	methods: 
	{
		greet: function() {
			alert('Hello');
		}
	}
}
</script>