<template>
    <span>
      <div class="slides">
        <transition name="fade" mode="out-in">
        <home     v-if="view == 0" key="home"/>
        <about    v-if="view == 1" key="about"/>
        <timeline v-if="view == 2" key="timeline"/>
        <blog     v-if="view == 3" key="blog"/>
        <contact  v-if="view == 4" key="contact"/>
        </transition>
      </div>

      <navbar />
    </span>
</template>

<script>
import Vue from 'vue'
import VueAgile from 'vue-agile'

import home from './home/home.vue'
import about from './about/about.vue'
import timeline from './work/timeline.vue'
import blog from './blog.vue'
import contact from './contact/contact.vue'
import VModal from 'vue-js-modal'

import eventBus from './../eventBus.js';
import navbar from './navbar.vue'

Vue.use(VueAgile)
Vue.use(VModal)

export default {
  name: 'hello',
  data () {
    return {
      view: 0,
    }
  },
  components: {
    navbar,
    home,
    about,
    timeline,
    blog,
    contact
  },
  created: function(){
    eventBus.$on('changeView', (n)=>{
      this.view = n
    })
    console.log("Main")
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade:not(.delay) {
  display: none;
}
</style>
