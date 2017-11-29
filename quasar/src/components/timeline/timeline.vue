// timeline.vue


// HTML
<template>
	<div class="layout-padding column full-height no-padding">
		<q-card 
			class="col-auto bg-tertiary text-white layout-padding no-margin row"
			style="min-height: 30vh; padding: 15px 25px 15px 25px">
			<div class="col-md-3 col-xs-12 text-center">
	  		<img 
					v-bind:src="pic1"
					style="height: 25vh; width: auto"/>
			</div>

			<div class="col">
			<q-card-title class="no-padding">
	    	<h5>{{ title1 }}</h5><hr>
	    </q-card-title>
  		<p class="text-justify col">{{ text1 }}<br><b>{{ text1b }}</b></p>
  		</div>
  	</q-card>
  
  	<q-card 
  		class="col-auto row bg-dark text-white layout-padding no-margin justify-center"
  		style="padding: 10px 40px 10px 40px"> 
  		<q-slider 
  			class="col-9 justify-center"
  			v-model="id" 
  			:min="2015" 
  			:max="2018" 
  			:step="1" 
  			snap 
  			markers 
  			label-always
  			fill-handle-always
  			style="width: 100vw"
  			@change="changeView"/>
  	</q-card>
  
  	<q-card 
  		class="col-auto bg-tertiary text-white layout-padding no-margin"
  		style="min-height:30vh; padding: 25px"> 
  		<q-card-title class="no-padding">
	    	<h5>{{ title2 }}</h5><hr>
	    </q-card-title>
  		<p class="text-justify">{{ text2 }}<br><b>{{ text2b }}</b></p>
  	</q-card>
	</div>
</template>


// JS
<script>
/* eslint-disable */
import {
	QCardTitle,
	QCard,
	QSlider
} from 'quasar'

import views from './views'

export default {
	name: 'timeline',
	components: {
		QCardTitle,
		QCard,
		QSlider
	},

	data: function(){
		return { 
			views,
			show: { },
			id: 2017,
			title1: views[2].title1,
			title2: views[2].title2,

			text1: views[2].content1,
			text2: views[2].content2,

			text1b: views[2].content1b,
			text2b: views[2].content2b,

			pic1: views[2].pic1,
			pic2: views[2].pic2,
			mutOpt: this.option,
		};
	},

	props: {
		option: {
			2015: "2015",
			2016: "2016",
			2017: "2017",
			2018: "2018"
		}
	},

	methods: {
		test: function() {
			console.log("test");
		},

		changeView: function() {
			for (var i = 0; i < 4; i++) {
				if (views[i].year == this.id) {
					this.title1 = views[i].title1;
					this.title2 = views[i].title2;

					this.text1 = views[i].content1;
	  			this.text2 = views[i].content2;

	  			this.text1b = views[i].content1b;
	  			this.text2b = views[i].content2b;

	  			this.pic1 = views[i].pic1;
	  			this.pic2 = views[i].pic2;
	  			return;
				}
			}

	  },
 	}
}
/* eslint-disable */
</script>