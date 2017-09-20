<script>
export default {
  name: 'treeview',
  props: [
    'data', 
    'link'
  ],
  template: `
    <ul>
        <li v-for="(val, key) in data">
            <span @click="toggle(key)">{{ key }}</span>
            
            <tree v-if="!isLeaf(val)" v-show="show[key]" :data="val" :link="link[key]">
            </tree>
            
        </li>
    </ul>`,
  data: function() {
    return {
      show: {}
    };
  },
  methods: {
    isLeaf: function(node) {
      return typeof node != 'object';
    },
    toggle: function(node) {
      if(this.show[node]){
        this.$set(this.show, node, false)
      } else {
        this.$set(this.show, node, true)
      }
    }    
  }
};
</script>