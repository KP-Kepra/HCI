// timeline.vue


// HTML
<template>
<div class="container tl-container">
	<div class="tl-group-container1">
	<transition name="expand" mode="out-in">
		<div class="panel-group tl-group1" :key="text1">
			<div class="panel tl-image1">
			This is an image
			</div>

			<div class="panel tl-content1">
				<div class="panel-heading"><h3 class="panel-title">Title 1</h3></div>

				<div class="panel-body tl-content-body1"><h5>{{ text1 }}</h5></div>
			</div>
		</div>
	</transition>
	</div>

	<div class="tl-buttons-container">
		<div class="tl-buttons">
			<div class="tl-button-holder" v-for="view in views">
				<input 	type="button" 
						class="btn btn-primary tl-button"
						v-on:click="changeView(view)">
			</div>
		</div>

		<div class="tl-labels">
			<div class="tl-label" v-for="view in views">
			<label>{{ view.year }}</label>
			</div>
		</div>
	</div>

  	<div class="tl-group-container2">
	<transition name="expand" mode="out-in">
		<div class="panel-group tl-group2" :key="text2">
			<div class="panel tl-content2">
				<div class="panel-heading"><h3 class="panel-title">Title 2</h3></div>

				<div class="panel-body tl-content-body2"><h5>{{ text2 }}</h5></div>
			</div>

			<div class="panel tl-image2">
			This is an image
			</div>
		</div>
	</transition>
	</div>
</div>
</template>


// CSS
<style>
.tl-buttons-container {
	width: 100%;
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
	height: 25px;
	border-radius: 100%;
}

.tl-container {
	height: 100% !important;
}

.tl-group-container1 {
	background: red;
}

.tl-group-container2{
	background: blue;
}

.tl-group-container1,
.tl-group1,
.tl-group-container2,
.tl-group2 {
	width: 100%;
	display: inline-flex;
}

.tl-content-body1,
.tl-content-body2 {
	width: 100%;
}

.tl-content1,
.tl-content2 {
	height: 30%;
	width: 100%;
}

.tl-image1,
.tl-image2 {
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
			text1: 'Component A1',
			text2: 'Component A2',
		};
	},

  	methods: {
  		changeView: function(view){
  			this.id = view.index;
  			this.text1 = view.content1;
  			this.text2 = view.content2;
  		}
  	}
}
</script>