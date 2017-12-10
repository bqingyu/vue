<template>
  <div class="layout">
    <div class="left">
      <v-side-menu></v-side-menu>
    </div>
    <div class="right">
      <v-header></v-header>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from './Header.vue'
import vSideMenu from "./SideMenu.vue"
export default {
  name: 'layout',
  data () {
    return {
      
    }
  },
  components:{
    vHeader,
    vSideMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout{
  height:100%;
  display:flex;
}
.left{
  width:200px;
}
.right{
  flex:1;
  overflow:auto;
}
.content{
  padding:20px;
}
</style>
