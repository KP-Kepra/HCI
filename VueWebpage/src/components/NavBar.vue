<template>
	<q-tabs
    color="tertiary">
       <!-- Tabs - notice slot="title" -->
      <q-route-tab 
        default
        class="bg-tertiary"
        icon="home"
        to="/home"
        exact
        slot="title"
        style="width: 20vw">
        <h6>Home</h6>
      </q-route-tab>

      <q-route-tab 
        class="bg-tertiary"
        icon="account_circle"
        to="/about"
        exact
        slot="title"
        style="width: 20vw">
        <h6>About</h6>
      </q-route-tab>

      <q-route-tab 
        class="bg-tertiary"
        icon="work"
        to="/timeline"
        exact
        append
        slot="title"
        style="width: 20vw">
        <h6>Work</h6>
      </q-route-tab>

      <q-route-tab 
        class="bg-tertiary"
        icon="chrome_reader_mode"
        to="/blog"
        exact
        slot="title"
        style="width: 20vw">
        <h6>Blog</h6>
      </q-route-tab>

      <q-route-tab 
        class="bg-tertiary"
        icon="email"
        to="/contact"
        exact
        slot="title"
        style="width: 20vw">
        <h6>Contact</h6>
      </q-route-tab>
    </q-tabs>
</template>

<script>
/* eslint-disable */
import {
	QTabs,
  QRouteTab,
} from 'quasar'

export default {
	name: 'NavBar',
	components: {
		QTabs,
		QRouteTab,
	}
}
/* eslint-disable */
</script>

