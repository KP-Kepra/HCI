// timeline.vue


// HTML
<template>
<div class="container ab-container">
	<div class="ab-buttons-container">
		<div class="ab-buttons">
			<div class="ab-button-holder" v-for="view in views">
				<input 	type="button" 
						class="btn btn-primary ab-button"
						v-bind:value="view.title"
						v-on:click="changeView(view)">
			</div>
		</div>
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
var views = 
[{
	index: 1,
	title: "Me",
	year: 2015,
	content: 'Component A1',
},

{
	index: 2,
	title: "Skills",
	year: 2016,
	content: 'Component B1',
},

{
	index: 3,
	title: "Ideals",
	year: 2017,
	content: 'Component C1',
}];

export default {
	name: 'timeline',
	data: function(){
		return { 
			views,
			id: 1,
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