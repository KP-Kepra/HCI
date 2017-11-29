// about.vue


// HTML
<template>
<div class="container ab-container content-container">
	<div class="bg-title"><h2>ABOUT</h2></div>
	<div class="ab-logo"><img v-bind:src="pic"></img></div>

	<div class="ab-buttons-container ">
		<div class="ab-buttons">
			<div class="ab-button-holder" v-for="view in views">
				<div 	class="btn ab-button hvr-underline-reveal"
						v-bind:value="view.title"
						v-on:click="changeView(view)"
						:class="{ activeR: isActive(view) }">
						{{ view.title }}
				</div>
			</div>
		</div>
	</div>

	<div class="ab-group-container">
	<transition name="expand" mode="out-in">
		<span class="panel-group ab-group" :key="text1">
			<div class="ab-section">
				<div class="panel-heading ab-content-title"><h2 class="panel-title">{{ title1 }}</h2></div>
				<hr>
				<div class="panel-body content-body"><h4>{{ text1 }}</h4></div>
			</div>
			<div class="ab-section ab-image">
				<img v-bind:src="pic1" />
			</div>
		</span>
	</transition>

	<transition name="expand" mode="out-in">
		<span class="panel-group ab-group" :key="text2">
			<div class="ab-section ab-image">
				<img v-bind:src="pic2" />
			</div>

			<div class="ab-section">
				<div class="panel-heading ab-content-title"><h2 class="panel-title">{{ title2 }}</h2></div>
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
	margin-bottom: 15px;
}

.ab-logo {
	position: absolute;
	top: 2%;
	left: 45.5%;
}

.ab-logo > img {
	width: 75px;
	height: 75px;
}

.ab-button {
	background: #242424;
	text-align: right;
	height: 50px;
	vertical-align: middle;
	min-width: calc(100px + .1vw);
	border-radius: 0px;
	display: table-cell;
	letter-spacing: 5px;

	font-family: Prestij_Light_Demo; 
	font-size: 16px; 
	font-weight: bold;
}

.ab-container {
	height: 100% !important;
	display: inline-flex;
	margin-bottom: 0px;
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
	margin: 15px;
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
	width: auto;
	height: auto;
	border-style: solid;
	border-color: white;
	border-width: 2px;
}

.ab-image > img {
	max-height: 150px;
	max-width:200px;
	height: auto;
	width: auto;
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
	title1: "Title1",
	title2: "Title2",
	content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend pulvinar condimentum. Duis porta malesuada ligula, non aliquam quam tempor nec. ',
	content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend pulvinar condimentum. Duis porta malesuada ligula, non aliquam quam tempor nec. ',
},

{
	index: 2,
	title: "SKILLS",
	year: 2016,
	title1: "Title3",
	title2: "Title4",
	content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec enim arcu. Sed ullamcorper dui ut lacinia suscipit.',
	content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec enim arcu. Sed ullamcorper dui ut lacinia suscipit.',
},

{
	index: 3,
	title: "IDEALS",
	year: 2017,
	title1: "Title5",
	title2: "Title6",
	content1: 'Aenean rhoncus hendrerit mi, at placerat lectus finibus at. Sed eget blandit ligula, quis hendrerit ex. Nullam semper odio a interdum porttitor.',
	content2: ',Aenean rhoncus hendrerit mi, at placerat lectus finibus at. Sed eget blandit ligula, quis hendrerit ex. Nullam semper odio a interdum porttitor.',
}];

export default {
	name: 'timeline',
	data: function(){
		return { 
			views,
			pic: require('./../../assets/kp.png'),
			id: 1,
			activeR: 1,
			title1: views[0].title1,
			title2: views[0].title2,
			text1: views[0].content1,
			text2: views[0].content1,
			pic1: require("./bg1.png"),
			pic2: require("./bg2.png"),
		};
	},

  	methods: {
  		changeView: function(view){
  			this.id = view.index;
  			this.title1 = view.title1;
  			this.title2 = view.title2;
  			this.text1 = view.content1;
  			this.text2 = view.content2;
  			this.activeR = view.index;
  			this.pic1 = require("./bg1.png");
  			this.pic2 = require("./bg2.png");
  		},

  		isActive: function(menu) {
  			return this.activeR === menu.index
  		}
  	}
}
</script>