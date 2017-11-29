// contact.vue


// HTML
<template>
<div class="container home-container">
	<div class="home-title">
		<h1>CONTACT US!</h1>
		<hr>
		<button type="button" class="btn btn-primary cbutton">Subscribe!</button>
		<hr>
		<h2>
			<a class="link-icon" href="https://www.facebook.com/" target="_blank">
				<img v-bind:src="pic.fb"></img></a>

			<a class="link-icon" href="https://www.google.com" target="_blank">
				<img v-bind:src="pic.g"></img></a>

			<a class="link-icon" href="https://github.com/KP-Kepra" target="_blank">
				<img v-bind:src="pic.git"></img></a>

			<a class="link-icon" href="https://www.linkedin.com/in/kevin-pratama-8bab01131/" target="_blank">
				<img v-bind:src="pic.in"></img></a>
		</h2>
	</div>
</div>
</template>


// CSS
<style>
.home-container {
	display: table;
}

.home-title > h1 {
	color: #ffffff; 
	font-family: Prestij_Light_Demo; 
	font-size: 54px; 
	font-weight: 300; 
	line-height: 58px;
	vertical-align: middle;
	text-align: center;
	margin: 0 0 0 0;
}

.home-title > h2 {
	color: #ABABAB;
	margin: 0 0 0 0;
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0; 
}

.home-logo {
	display: inline-block;
	width: 80px;
	height: 80px;
	border-width: 2px;
	border-color: white;
	border-style: solid;
}

.link-icon {
	margin-right: 20px;
	margin-left: 20px;
}

.link-icon > img {
	width: 50px;
}

.cbutton {
	width: 100% !important;
}
</style>


// JS
<script>
export default {
	name: 'contact',
	data: function(){
		return { 
			show: { },
			pic: {
				fb: 	"./../../../../img/fb.png",
				g: 		"./../../../../img/google.png",
				git: 	"./../../../../img/github.png",
				in:  	"./../../../../img/linkedin.png",
			}
		};
	},

  	methods: {
  	}
}
</script>