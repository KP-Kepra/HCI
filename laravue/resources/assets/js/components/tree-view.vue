<script>
import eventBus from './../eventBus.js';

export default {
	name: "tree-view",
  props: ["name"],
  template: `
  	<div>
      <div class="panel-heading"><h3 class="panel-title">{{ titleText }}</h3></div>
      <hr>
    	<div class="panel-body content-body">{{ contentText }}</div>
     </div>
  `,
  data: function(){
  	return {
    	titleText: "Title",
      contentText: "Placeholder text",
    }
  },
	created: function(){
  	eventBus.$on('somethingHappened', (text)=>{
      this.titleText = text[0];
    	this.contentText = text[1]; 
    })
  	console.log("Responder")
  }

};
</script>