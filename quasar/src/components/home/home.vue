// home.vue


// HTML
<template>
	<div 
		class="layout-padding fullscreen window-width column no-margin no-padding"
		style="height: 88vh">
		<div 
			class="row full-height items-center">
			<div class="row full-width">
			<div class="col justify-around">
				<div class="text-center">
					<img
						v-bind:src="pic"
						style="height: 12vh"/>
				</div>
				<h3 class="text-center text-white col-5">Kevin Pratama</h3>
				<hr class="items-center" style="width: 50vw">
				<h5 class="text-center text-white col-5">Passionate &#9679; Curious &#9679; Adept</h5>
			</div>
		</div>
		</div>
	</div>
</template>


// JS
<script>
/* eslint-disable */
export default {
	name: 'home',
	data: function(){
		return { 
			show: { },
			pic: require('./../../assets/kp.png'),
		};
	},

  	methods: {
  	}
}
/* eslint-disable */
</script>