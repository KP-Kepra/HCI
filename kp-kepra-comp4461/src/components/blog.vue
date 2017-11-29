// blog.vue

// HTML
<template>
<div class="container bl-container content-container">
	<div class="bg-title"><h2>BLOG</h2></div>
	<div class="bl-logo"><img v-bind:src="pic"></img></div>

	<div class="tree-container">
		<div class="panel-heading"><h3 class="panel-title">BLOG POSTS</h3></div>
		<hr>
		<tree :data="blog_menu" :link="blog_menu"></tree>
	</div>

	<div class="ab-group-container bl-group-container">
	<transition name="expand" mode="out-in">
		<div class="panel-group ab-group" :key="text">

			<div class="panel ab-content">
				<treeview></treeview>
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
	margin-bottom: 0px;
}

.bl-logo {
	position: absolute;
	top: 2%;
	left: 45.5%;
}

.bl-logo > img {
	width: 75px;
	height: 75px;
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
import treeview from './tree-view.vue'
import tree from './tree.vue'

let blog_menu = 
{
	2015: {
		December: {
			"Title1": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus lectus in augue rutrum semper. Proin id odio posuere, efficitur enim a, malesuada arcu. Phasellus commodo diam at mauris tempus auctor. Praesent ultrices vitae nisl eu ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent maximus orci eget ex imperdiet sagittis. Morbi eleifend, nisi eget accumsan vulputate, arcu elit feugiat felis, vitae blandit orci odio ut ipsum. Quisque sit amet felis maximus, egestas ante id, bibendum nulla. Praesent non iaculis metus, vitae aliquet tortor. Mauris molestie, elit et blandit accumsan, nisl dolor blandit ante, scelerisque accumsan urna lacus pharetra nisl. Pellentesque volutpat maximus imperdiet. Nunc sollicitudin ligula mauris, ut auctor lorem posuere non. Ut consequat rutrum mauris, at bibendum dui maximus a. Aliquam erat volutpat. Sed ac tincidunt nunc, at malesuada lectus.",
		},

		November: {
			"Title2": "In sagittis elit ut turpis ullamcorper, vel imperdiet magna scelerisque. Nullam et orci orci. Curabitur feugiat pharetra magna ut efficitur. Pellentesque ut sapien a libero malesuada pellentesque. Vestibulum ut condimentum ipsum. Praesent a dictum nulla. Fusce varius ullamcorper suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur dapibus nisl venenatis dolor hendrerit, id auctor leo tristique.",
		}
	},

	2016: {
		December: {
			"Title3": "Aenean sit amet est sit amet nibh suscipit euismod. Maecenas pulvinar euismod pellentesque. Donec sed urna tincidunt, imperdiet velit vitae, placerat lectus. Ut vel rutrum turpis, sit amet ultricies nisl. Nam in quam dignissim, malesuada urna non, dictum arcu. Maecenas non lectus rhoncus, pulvinar ligula a, feugiat nisl. Praesent id ipsum vitae est ullamcorper fringilla in sit amet massa. Nunc ut lectus turpis. Etiam sed accumsan ex. Sed quis est libero.",
		},

		November: {
			"Title4": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus lectus in augue rutrum semper. Proin id odio posuere, efficitur enim a, malesuada arcu. Phasellus commodo diam at mauris tempus auctor. Praesent ultrices vitae nisl eu ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent maximus orci eget ex imperdiet sagittis. Morbi eleifend, nisi eget accumsan vulputate, arcu elit feugiat felis, vitae blandit orci odio ut ipsum. Quisque sit amet felis maximus, egestas ante id, bibendum nulla. Praesent non iaculis metus, vitae aliquet tortor. Mauris molestie, elit et blandit accumsan, nisl dolor blandit ante, scelerisque accumsan urna lacus pharetra nisl. Pellentesque volutpat maximus imperdiet. Nunc sollicitudin ligula mauris, ut auctor lorem posuere non. Ut consequat rutrum mauris, at bibendum dui maximus a. Aliquam erat volutpat. Sed ac tincidunt nunc, at malesuada lectus.",
		}
	},
	
	2017: {
		December: {
			"Title5": "Morbi eu magna semper risus lobortis lobortis. Aliquam eget hendrerit odio, porttitor gravida tortor. Suspendisse quis cursus lorem. Aliquam mattis efficitur urna, at dignissim nisl aliquam id. Donec augue leo, gravida dignissim erat ac, faucibus condimentum augue. Suspendisse potenti. Sed ultricies, enim sed porttitor viverra, dolor est posuere eros, at tristique augue dolor eu augue. Vivamus libero urna, aliquam a nibh et, aliquet vestibulum felis. Sed quis pharetra lacus, in vestibulum justo. Integer cursus arcu sit amet neque laoreet, nec tincidunt augue auctor. Donec ut volutpat quam. Sed elementum lorem orci, quis accumsan ligula rutrum ac. Nullam consequat fermentum nisl in blandit. Aenean a ornare neque.",
		},

		November: {
			"Title6": "Aenean sit amet est sit amet nibh suscipit euismod. Maecenas pulvinar euismod pellentesque. Donec sed urna tincidunt, imperdiet velit vitae, placerat lectus. Ut vel rutrum turpis, sit amet ultricies nisl. Nam in quam dignissim, malesuada urna non, dictum arcu. Maecenas non lectus rhoncus, pulvinar ligula a, feugiat nisl. Praesent id ipsum vitae est ullamcorper fringilla in sit amet massa. Nunc ut lectus turpis. Etiam sed accumsan ex. Sed quis est libero.",
		}
	},
};

export default {
	name: 'blog',
	data: function(){
		return { 
			id: "",
			pic: require('./../assets/kp.png'),
			blog_menu,
			show: {},
			text: 'Component A1'
		};
	},

	components: {
		treeview,
		tree
	},

  	methods: {
  		changeView: function(view){
  			this.id = view.index;
  			this.text = view.content;
  		}
  	}
}
</script>