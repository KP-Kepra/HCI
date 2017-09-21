// timeline.vue


// HTML
<template>
<div class="container tl-container">
	<div class="tl-group-container content-container">
	<transition name="expand" mode="out-in">
		<div class="panel-group tl-group" :key="text1">
			<div class="panel tl-image">
			This is an image
			</div>

			<div class="panel tl-content">
				<div class="panel-heading"><h2 class="panel-title">Title 1</h2></div>
				<hr></hr>
				<div class="panel-body tl-content-body"><h4>{{ text1 }}</h4></div>
			</div>
		</div>
	</transition>
	</div>

	<div class="tl-buttons-container content-container">
		<div class="tl-buttons">
			<div class="tl-button-holder" v-for="view in views">
				<div	class="tl-button hvr-rectangle-out"
						v-on:click="changeView(view)"
						:class="{ activeC: isActive(view) }">
				</div>
			</div>
		</div>

		<div class="tl-labels">
			<div class="tl-label" v-for="view in views">
			<label>{{ view.year }}</label>
			</div>
		</div>
	</div>

  	<div class="tl-group-container content-container">
	<transition name="expand" mode="out-in">
		<div class="panel-group tl-group" :key="text2">
			<div class="panel tl-content">
				<div class="panel-heading"><h3 class="panel-title">Title 2</h3></div>
				<hr></hr>
				<div class="panel-body tl-content-body"><h4>{{ text2 }}</h4></div>
			</div>

			<div class="panel tl-image">
			This is an image
			</div>
		</div>
	</transition>
	</div>
</div>
</template>


// CSS
<style>
.tl-container {
	height: 100% !important;
	width: 100%;
	margin: 0px;
}

.tl-group-container {
	background: #404040;
}

.tl-group-container,
.tl-group {
	height: 43%;
	display: inline-flex;
	width: 100%;
	margin: 0px;
}

.tl-buttons-container {
	height: 10%;
	display: inline-block;
}

.tl-buttons,
.tl-labels {
	width: 100%;
	display: inline-flex;
	text-align: center;
	margin: 15 0 15 0;
}

.tl-button-holder,
.tl-label {
	width: 25%;
}

.tl-button {
	display: inline-flex;
	background-color: #333333;
	width: 40px;
	height: 40px;
	border-radius: 100%;
	border-width: 2px !important;
	border-style: solid;
	border-color: #333333;
	cursor: pointer;
}

.tl-content-body {
	width: 100%;
}

.tl-content {
	height: 30%;
	width: 100%;
}

.tl-image {
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
	year: 2015,
	content1: 'Component A1',
	content2: 'Component A2',
},

{
	index: 2,
	year: 2016,
	content1: 'Component B1',
	content2: 'Component B2',
},

{
	index: 3,
	year: 2017,
	content1: 'Component C1',
	content2: 'Component C2',
},

{
	index: 4,
	year: 2018,
	content1: 'Component D1',
	content2: 'Component D2',
}];

export default {
	name: 'timeline',
	data: function(){
		return { 
			views,
			id: 1,
			activeC: '1',
			text1: 'Component A1',
			text2: 'Component A2',
		};
	},

  	methods: {
  		changeView: function(view){
  			this.id = view.index;
  			this.text1 = view.content1;
  			this.text2 = view.content2;
  			this.activeC = view.index
  		},

  		isActive: function(menu) {
  			return this.activeC === menu.index
  		}
  	}
}
</script>