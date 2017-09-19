// appMenuList.vue

<script>
var menus = 
[{
	title: 'General',
	sub_menus: 
	[{
		name: 'Dashboard',
		active: true,
	},

	{
		name: 'Customers',
		active: false,
	}],


},

{
	title: 'Administration',
	sub_menus: 
	[{
		name: 'Users',
		active: false,
	}],
},

{
	title: 'Transactions',
	sub_menus:
	[{
		name: 'Payments',
		active: false,
	},

	{
		name: 'Transfers',
		active: false,
	},

	{
		name: 'Balance',
		active: false,
	}]
}];

export default {
	name: 'appMenuList',
	data: function()
	{
		return { menus };
	},

	methods: 
	{
		isActive: function(menu) {
			return menu.active? 'is-active' : '';
		}
	}
}

</script>

<template>
<div>
	<div v-for="menu in menus">
		<p class="menu-label"> {{ menu.title }} </p>

		<ul class="menu-list">
			<li v-for="sub_menu in menu.sub_menus"><a :class="isActive(menu)">{{ sub_menu.name }}</a></li>
		</ul>
	</div>
</div>
</template>