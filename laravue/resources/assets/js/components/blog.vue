// blog.vue

// HTML
<template>
<div class="container bl-container content-container">
	<div class="tree-container">
		<div class="panel-heading"><h3 class="panel-title">BLOG POSTS</h3></div>
		<hr>
		<tree :data="blog_menu" :link="blog_menu"></tree>
	</div>

	<div class="ab-group-container bl-group-container">
	<transition name="expand" mode="out-in">
		<div class="panel-group ab-group" :key="text">

			<div class="panel ab-content">
				<tree-view></tree-view>
			</div>

        	
		</div>
	</transition>
	</div>

</div>
</template>

// CSS
<style>
.bl-container {
	height: 100% !important;
	display: inline-flex;
	padding: 3%;
}

.bl-group-container {
	border-radius: 0 10px 10px 0;
}

.bl-group-container:before {
	float: right;
	border-radius: 0 20px 20px 0;
}

.tree-container {
	width: 30%;
	border-width: 2px;
	border-style: solid;
	border-color: #404040;
	border-radius: 10px 0 0 10px;
	padding: 15px;
}

.tree-container > h3 {
	padding-bottom: 0px;
}

.tree-container > hr {
	margin-top: 0px;
}
</style>

// JS
<script>
let blog_menu = 
{
	2017: {
		December: {
			"Title2": "Text2",
		},

		November: {
			"Title3": "Text3",
		}
	},

	2015: {
		December: {
			"Title4": "Text4",
		},

		November: {
			"Title5": "Text5",
		}
	},

	"Title 1": "Text1",
};

export default {
	name: 'blog',
	data: function(){
		return { 
			id: "",
			blog_menu,
			show: {},
			text: 'Component A1'
		};
	},

  	methods: {
  		changeView: function(view){
  			this.id = view.index;
  			this.text = view.content;
  		}
  	}
}
</script>