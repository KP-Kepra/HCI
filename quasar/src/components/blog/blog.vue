// blog.vue


// HTML
<template>
	<div class="row layout-padding">
		<div class="col-md-2 col-xs-12 row content-start" slot="header">
			<q-btn 
				class="bg-tertiary text-white big col-md-12 col-xs-4 float-right" 
				style="height: 50px"
				@click="changeContent(0)">
				<h6>Personal Page</h6>
			</q-btn>

			<q-btn 
				class="bg-tertiary text-white big col-md-12 col-xs-4 float-right" 
				style="height: 50px" 
				@click="changeContent(1)">
				<h6>Redesigning Light</h6>
			</q-btn>

			<q-btn 
				class="bg-tertiary text-white big col-md-12 col-xs-4 float-right" 
				style="height: 50px" 
				@click="changeContent(2)">
				<h6>HR Interaction</h6>
			</q-btn>
		</div>
		
		<q-card 
			class="col layout-padding no-margin bg-tertiary text-white"
			style="padding: 25px">
			<q-card-title 
				class="no-padding">
       	<h5>{{ title }}</h5>
      </q-card-title>

     	<hr>

     	<q-card-main class="no-padding">
      	<p class="text-justify col">{{ text }}
       		<div v-if="id == 0">Full link to the diary available 
       		<a href="https://kp-kepra.github.io/comp4461diary/p1" target="_blank">HERE</a>
       		</div>

			<div v-if="id == 1">Full link to the diary available 
       		<a href="https://kp-kepra.github.io/comp4461diary/p2" target="_blank">HERE</a>
       		</div>

			<div v-if="id == 2">Full link to the diary available
			<a href="https://kp-kepra.github.io/comp4461diary/p3" target="_blank">HERE</a>
			</div>
       	</p>
     	</q-card-main>
		</q-card>
	</div>
</template>


// JS
<script>
/* eslint-disable */
import { 
	QLayout,
	QToolbar,
	QTree, 
	QIcon,
	QBtn,
	QScrollArea,
	QSideLink,

	QCardMain,
	QCardTitle,
	QCard
} from 'quasar'

import views from './views';

export default {
	name: 'blog',

	components: {
		QLayout,
		QToolbar,
		QTree, 
		QIcon,
		QBtn,
		QScrollArea,
		QSideLink,
		
		QCardMain,
		QCardTitle,
		QCard
	},

	data: function(){
		return { 
			show: { },
			views,
			id: 0,
			title: views[0].title,
			text: views[0].content,
		};
	},

  methods: {
  	changeContent: function(i) {
  			this.id = views[i].index;
  			this.title = views[i].title;
  			this.text = views[i].content;
  	}
  },
}
/* eslint-disable */
</script>