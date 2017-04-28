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
          redirect:'/obd/1'
          // name:'hello',
          // component:Hello
    },{
          path:'/obd',
          name:'obd',
          component:resolve=>require(['@/page/home.vue'],resolve),
          children:[
            {path:'/obd/1', component:resolve=>require(['@/page/obDepartment/putOnRecord.vue'],resolve)},
            {path:'/obd/2', component:resolve=>require(['@/page/obDepartment/inoAnalysis.vue'],resolve)},
            {path:'*',component:resolve=>require(['@/page/404.vue'],resolve)}
          ]
    },{
          path:'/content',
          name:'content',
          component:content
    }]
})
