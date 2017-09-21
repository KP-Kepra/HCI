// about.vue


// HTML
<template>
<div class="container ab-container content-container">
	<div class="ab-buttons-container ">
		<div class="ab-buttons">
			<div class="ab-button-holder" v-for="view in views">
				<div 	class="btn ab-button hvr-underline-reveal"
						v-bind:value="view.title"
						v-on:click="changeView(view)"
						:class="{ activeR: isActive(view) }">
						{{view. title}}
				</div>
			</div>
		</div>
	</div>

	<div class="ab-group-container">
	<transition name="expand" mode="out-in">
		<span class="panel-group ab-group" :key="text1">
			<div class="ab-section">
				<div class="panel-heading ab-content-title"><h2 class="panel-title">Title 1</h2></div>
				<hr>
				<div class="panel-body content-body"><h4>{{ text1 }}</h4></div>
			</div>
			<div class="ab-section ab-image">
				Image
			</div>
		</span>
	</transition>

	<transition name="expand" mode="out-in">
		<span class="panel-group ab-group" :key="text2">
			<div class="ab-section ab-image">
				Image
			</div>

			<div class="ab-section">
				<div class="panel-heading ab-content-title"><h2 class="panel-title">Title 2</h2></div>
				<hr>
				<div class="panel-body content-body"><h4>{{ text2 }}</h4></div>
			</div>	
		</span>
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
	background: #242424;
	text-align: right;
	height: 40px;
	vertical-align: middle;
	min-width: calc(80px + .1vw);
	border-radius: 0px;
}

.ab-container {
	height: 100% !important;
	padding: 3%;
	display: inline-flex;
}

.ab-group-container {
	border-radius: 10px
}

.ab-group-container:before {
	content: "";
	display: block;
	float: left;
	border-radius: 20px 0 0 20px;
	background-color: #3561FF;
	width: 1%;
	height: 100%;
}

.ab-group-container {
	width: 100%;
	background: #404040;
	display: block;
}

.ab-group {
	display: flex;
	padding: 10px 30px 10px 30px;
	margin: 0px;
}

.ab-section {
	float: left;
}

.ab-content-holder {
	display: table;
}

.ab-content {
	display: table-cell;
	height: 30%;
	width: 100%;
}

.ab-image {
	width: 100%;
	height: 100%;
	border-style: solid;
	border-color: white;
	border-width: 2px;
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
	title: "ME",
	year: 2015,
	content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend pulvinar condimentum. Duis porta malesuada ligula, non aliquam quam tempor nec. ',
	content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend pulvinar condimentum. Duis porta malesuada ligula, non aliquam quam tempor nec. ',
},

{
	index: 2,
	title: "SKILLS",
	year: 2016,
	content1: 'Component B1',
	content2: 'Component B2',
},

{
	index: 3,
	title: "IDEALS",
	year: 2017,
	content1: 'Component C1',
	content2: 'Component C2',
}];

export default {
	name: 'timeline',
	data: function(){
		return { 
			views,
			id: 1,
			activeR: '1',
			text1: views[0].content1,
			text2: views[0].content1,
		};
	},

  	methods: {
  		changeView: function(view){
  			this.id = view.index;
  			this.text1 = view.content1;
  			this.text2 = view.content2;
  			this.activeR = view.index
  		},

  		isActive: function(menu) {
  			return this.activeR === menu.index
  		}
  	}
}
</script>