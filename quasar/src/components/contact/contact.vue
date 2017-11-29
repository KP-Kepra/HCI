// contact.vue


// HTML
<template>
	<div 
		class="layout-padding fullscreen window-width column"
		style="padding-top: 0px">
		<div class="row items-center"
			style="height: 90vh">
			<div class="row col">
			<div 
				class="col justify-around">
				<h3 class="text-center text-white col-5">CONTACT US!</h3>
				<hr class="items-center" style="width: 60%">
				<h5 class="text-center text-white col-5">
					<q-btn 
						color="primary" 
						@click="$refs.basicModal.open()"
						style="width: 50vw"><h5>Open</h5></q-btn>
					<q-modal 
						class="minimized text-center" 
						ref="basicModal"
						:content-css="{padding: '20px'}">
					  <h4>SUCCESS</h4>
					  <q-btn color="primary" @click="$refs.basicModal.close()">Close</q-btn>
					</q-modal>
				</h5>
				<hr class="items-center" style="width: 60%">
			
				<h2 class="text-center">
					<a class="link-icon" href="https://www.facebook.com/" target="_blank">
						<img 
							v-bind:src="pic.fb"
							style="height: 50px; padding-right: 1vw; padding-left: 1vw"/></a>

					<a class="link-icon" href="https://www.google.com" target="_blank">
						<img 
							v-bind:src="pic.g"
							style="height: 50px; padding-right: 1vw; padding-left: 1vw"/></a>

					<a class="link-icon" href="https://github.com/KP-Kepra" target="_blank">
						<img 
							v-bind:src="pic.git"
							style="height: 50px; padding-right: 1vw; padding-left: 1vw"/></a>

					<a class="link-icon" href="https://www.linkedin.com/in/kevin-pratama-8bab01131/" target="_blank">
						<img 
							v-bind:src="pic.in"
							style="height: 50px; padding-right: 1vw; padding-left: 1vw"/></a>
				</h2>
			</div>
		</div>
		</div>
	</div>
</template>


// JS
<script>
/* eslint-disable */
import {
	QModal,
	QBtn
} from 'quasar';

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
			},
			types: [
        {
          label: 'Basic',
          ref: 'basicModal'
        },
       ]
		};
	},

	components: {
		QModal,
		QBtn
	},

  methods: {
  }
}
/* eslint-disable */
</script>