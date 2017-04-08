import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/page/index'
import content from '@/page/content'
Vue.use(Router);

export  default new Router({
    routes: [
      {
          path: '/',
          redirect:'/home'
          // name:'hello',
          // component:Hello
    },{
          path:'/home',
          name:'home',
          component:resolve=>require(['@/page/home.vue'],resolve),
          children:[
            {path:'/home/archives/1', component:resolve=>require(['@/page/archives/list.vue'],resolve)},
            {path:'/home/archives/2', component:resolve=>require(['@/page/archives/append.vue'],resolve)}
          ]
    },{
          path:'/content',
          name:'content',
          component:content
    }]
})
