// about.vue


// HTML
<template>
	<div 
		class="layout-padding row"
		style="padding-bottom: 0">
		<div class="col-md-2 col-xs-12 row content-start" slot="header">
			<q-btn 
				class="bg-tertiary text-white big col-md-12 col-xs-4 float-right" 
				style="height: 50px"
				icon="assignment_ind"
				@click="changeContent(0)">
				<h6>About</h6>
			</q-btn>

			<q-btn 
				class="bg-tertiary text-white big col-md-12 col-xs-4 float-right" 
				style="height: 50px" 
				icon="extension"
				@click="changeContent(1)">
				<h6>Skills</h6>
			</q-btn>

			<q-btn 
				class="bg-tertiary text-white big col-md-12 col-xs-4 float-right" 
				style="height: 50px" 
				icon="lightbulb_outline"
				@click="changeContent(2)">
				<h6>Ideals</h6>
			</q-btn>
		</div>
		<div class="col-md-10 round-borders">
			<q-card 
				class="layout-padding bg-tertiary text-white row"
				style="margin-bottom: 10px; padding: 25px">
     		<div class="col-md-3 col-xs-12 float-right text-center">
     			<img
						v-bind:src="pic1"
						style="height: 25vh"/>
     		</div>

				<div class="col">
					<q-card-title class="no-padding">
	        	<h5>{{ title1 }}</h5>
	      	</q-card-title>

	      	<hr>

	      	<q-card-main class="no-padding">
	       		<pre><p>{{ text1 }}</p></pre>
	     	 	</q-card-main>
     		</div>
			</q-card>
			
			<q-card 
				class="layout-padding bg-tertiary text-white"
				style="padding: 25px">
     	 <q-card-title class="no-padding">
        	<h5>{{ title2 }}</h5>
      	</q-card-title>

      	<hr>

      	<q-card-main 
      		class="no-padding">
        	<pre><p>{{ text2 }}</p></pre>
      </q-card-main>
			</q-card>
		</div>
	</div>
</template>


// JS
<script>
/* eslint-disable */
import {
	QBtn,

	QCard,
	QCardTitle,
	QCardMain
} from 'quasar';

import views from './views';

export default {
	name: 'about',
	data: function(){
		return { 
			views,
			show: { },
			title1: views[0].title1,
			title2: views[0].title2,
			text1: views[0].content1,
			text2: views[0].content2,
			pic1: views[0].pic1,
		};
	},

	components: {
		QBtn,

		QCard,
		QCardTitle,
		QCardMain
	},

  methods: {
  	changeContent: function(i) {
  			this.id = views[i].index;
  			this.title1 = views[i].title1;
  			this.title2 = views[i].title2;
  			this.text1 = views[i].content1;
  			this.text2 = views[i].content2;
  			this.pic1 = views[i].pic1;
  	}
  }
}
/* eslint-disable */
</script>