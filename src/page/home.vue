<!--主页面组件-->
<template>
  <div class="warpper">
    <!--<div class="header">头部</div>-->
    <!--<div class="slider">左边</div>-->
    <v-head :logo="test"></v-head>
    <v-sider></v-sider>
  </div>
  <!--<div class="slider">left</div>-->
</template>
<script>
  import vHead from './common/header.vue';
  import vSider from './common/slider.vue';
  export default {
//    components:{
//      vHead, vSider
//    }
    data(){
      return {
          test:'parentsData'
      }
    },
    components:{
      vHead,vSider
    },
    created(){
        console.info('home')
    }
  }
</script>
