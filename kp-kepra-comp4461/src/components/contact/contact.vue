// contact.vue


// HTML
<template>
<div class="container home-container">
	<div class="home-title">
		<div class="home-logo"><img v-bind:src="pic.pic"></img></div>
		<h1>CONTACT US!</h1>
		<hr>
		<button type="button" class="btn btn-primary cbutton" @click="open">Subscribe!</button>

		<sweet-modal icon="success" ref="modal" title="SUBSCRIBE">
    		Success!
		</sweet-modal>

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
	padding: 15px !important;
}

.home-title {
	display: table-cell;
	text-align: center;
	vertical-align: middle;
	height: 100%;
	width: 400px;
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
	width: 84px;
	height: 84px;
	border-width: 2px;
	border-color: white;
	border-style: solid;
}

.home-logo > img {
	width: 80px;
	height:80px;
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
	font-size: 20px;
	font-family: Prestij_Light_Demo;
	font-weight: bold;
	letter-spacing: 2px;
}
</style>


// JS
<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

export default {
	name: 'contact',
	data: function(){
		return { 
			show: { },
			pic: {
				fb: 	require('./../../assets/fb.png'),
				g: 		require('./../../assets/google.png'),
				git: 	require('./../../assets/github.png'),
				in:  	require('./../../assets/linkedin.png'),
				pic: 	require('./../../assets/kp.png'),
			}
		};
	},

  	methods: {
  		open: function() {
  			this.$refs.modal.open();
  		}
  	},

  	components: {
  		SweetModal,
		SweetModalTab
  	}
}
</script>