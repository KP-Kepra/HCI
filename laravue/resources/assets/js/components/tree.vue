<script>
import './../../../../public/css/fontawesome.css';
import eventBus from './../eventBus.js';

export default {
  name: 'treeview',
  props: [
    'data', 
    'link',
    'what',
  ],
  template: `
    <ul>
        <li v-for="(val, key) in data" class="tree">
            <span @click="toggle(key, val)" :class="{ folderT : !isLeaf(val) }">
            {{ key }}
            <i v-if="!isLeaf(val) && !show[key]" class="fa fa-caret-down icon"></i>
            <i v-if="!isLeaf(val) && show[key]" class="fa fa-caret-left icon"></i>
            </span>

            <tree v-if="!isLeaf(val)" v-show="show[key]" :data="val" :link="link[key]">
            </tree>
            
        </li>
    </ul>`,
  data: function() {
    return {
      show: {},
      msg: ""
    };
  },
  methods: {
    isLeaf: function(node) {
      return typeof node != 'object';
    },

    toggle: function(key, val) {
      if (!this.isLeaf(val)) {
        if(this.show[key]){
          this.$set(this.show, key, false)
        } else {
          this.$set(this.show, key, true)
        }
      } else {
        this.msg = [key, val];
        this.makeItHappen();
      }
    },

    makeItHappen: function(){
      eventBus.$emit("somethingHappened", this.msg)
    }
  }
};
</script>

<style>
.tree {
  cursor: pointer;
  padding-left: 15px;
  line-height: 180%;
  color: white;
}

.folderT {
  text-shadow: -.5px 0 white, 0 .5px white, .5px 0 white, 0 -.5px white;
}

.icon {
  display: inline;
}
</style>