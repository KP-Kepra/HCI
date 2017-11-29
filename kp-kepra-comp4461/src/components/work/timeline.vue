// timeline.vue


// HTML
<template>
<div class="tl-container">
	<div class="tl-title"><h2>WORK</h2></div>
	<div class="tl-logo"><img v-bind:src="pic"></img></div>

	<div class="tl-group-container content-container">
	<transition name="expand" mode="out-in">
		<div class="panel-group tl-group" :key="text1">
			<div class="panel tl-image">
				<img v-bind:src="pic1" />
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
				<img v-bind:src="pic2" />
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

.tl-title {
	position: absolute;
	color: #565656;
	top: 42%;
	left: 18.5%;

	font-family: Prestij_Light_Demo;
	user-select: none;
	cursor: default;
}

.tl-title > h2 {
	font-size: 80px;
}

.tl-logo {
	position: absolute;
	top: 42.5%;
	left: 45.5%;
}

.tl-logo > img {
	width: 75px;
	height: 75px;
}

.tl-group-container {
	background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url('./../../assets/bg1.png');
}

.tl-group-container,
.tl-group {
	height: 43%;
	display: inline-flex;
	width: 100%;
	margin: 0px;
}

.tl-group {
	z-index : 1;
	padding: 20px;
	height: 100%;
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
	z-index: 2;
}

.tl-button-holder,
.tl-label {
	width: 25%;
	z-index: 2;
	color: white;
	font-size: 15px;
	font-family: Prestij_Light_Demo;
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
	vertical-align: middle;
	display: inherit;
	height: 100%;
	margin: 0px;
}

.tl-image > img {
	max-height: 150px;
	max-width:200px;
	vertical-align: middle;
	display: inline-block;
	height: auto;
	width: auto;
	margin: auto;
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
	content1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at purus sit amet enim tincidunt malesuada et in enim. Aliquam non felis vitae elit tempus fringilla quis sit amet quam. Donec id porta massa. Fusce tempor, dolor id pharetra pharetra, sapien sem dignissim nisi, ut ultricies massa neque vitae tortor. Suspendisse ac auctor enim. Morbi pharetra scelerisque consectetur. Suspendisse placerat risus odio, non aliquam libero commodo quis. Aliquam vel rhoncus lacus. Vestibulum sodales tellus ac mauris egestas dignissim. Donec pharetra est libero, quis gravida quam semper quis.',
	content2: 'In eget consectetur felis, eu pretium lorem. Donec mollis mattis arcu. Sed nec elementum sem, a euismod mi. Nulla vehicula sit amet elit laoreet lobortis. In eu auctor diam. Praesent cursus vestibulum diam, at vehicula quam interdum at. Donec sed turpis orci. Nulla quis metus quam. Maecenas a ornare ante. Phasellus ullamcorper dapibus risus, ut feugiat lectus dignissim a. Nam nibh neque, mollis non vestibulum in, bibendum gravida ligula. Fusce maximus erat nec lectus ultrices scelerisque. Maecenas et eleifend est. Pellentesque sit amet accumsan purus, ut tincidunt neque. Donec congue eget metus a laoreet. Aliquam finibus mi et purus dictum luctus.',
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
			pic: require('./../../assets/kp.png'),
			id: 1,
			activeC: 1,
			text1: views[0].content1,
			text2: views[0].content2,
			pic1: require("./img1.png"),
			pic2: require("./img2.png"),
		};
	},

  	methods: {
  		changeView: function(view){
  			this.id = view.index;
  			this.text1 = view.content1;
  			this.text2 = view.content2;
  			this.activeC = view.index;
  			this.pic1 = require("./img1.png");
  			this.pic2 = require("./img2.png");
  		},

  		isActive: function(menu) {
  			return this.activeC === menu.index
  		}
  	}
}
</script>