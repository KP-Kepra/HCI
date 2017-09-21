// contact.vue


// HTML
<template>
<div class="container home-container">
	<div class="home-title">
		<h1>CONTACT US!</h1>
		<hr>
		<h2>Sub-title</h2>
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
</style>


// JS
<script>
export default {
	name: 'contact',
	data: function(){
		return { 
			show: { }
		};
	},

  	methods: {
  	}
}
</script>