<template>
  <div id="app">
      HelloWorld
      <button @click="add()">点我</button>
     <div>
        现在数字: {{count}}
     </div>
     <Demo>
       
     </Demo> 
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'
import Demo from './assets/components/Demo.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:mapActions(['add']),
  computed:mapGetters(['count']),
  components:{
    Demo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
