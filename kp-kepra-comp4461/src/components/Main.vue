<template>
  <div class="container">
    <navbar></navbar>
    <agile :arrows="false" :infinite="false">
        <div class="slide slide--1"><home></home></div>
        <div class="slide slide--2"><about></about></div>
        <div class="slide slide--3"><timeline></timeline></div>
        <div class="slide slide--4"><blog></blog></div>
        <div class="slide slide--5"><contact></contact></div>
    </agile>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAgile from 'vue-agile'

import home from './home/home.vue'
import about from './about.vue'
import timeline from './timeline.vue'
import blog from './blog.vue'
import contact from './contact.vue'

import navbar from './navbar.vue'

Vue.use(VueAgile)

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    navbar,
    home,
    about,
    timeline,
    blog,
    contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
