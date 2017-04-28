<!--主页面组件-->
<template>
  <div class="warpper">
    <v-head :logo="test"></v-head>
    <v-sider></v-sider>
  </div>
</template>
<script>
  import vHead from './common/header.vue';
  import vSider from './common/slider.vue';
  export default {
    data(){
      return {
          test:''
      }
    },
    components:{
      vHead,vSider
    },
    created(){
//        console.info('home load');
    }
  }
</script>
