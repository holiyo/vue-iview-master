# 基于Vue+iview的单页面管理后台框架

# 这是 H1

## 这是 H2

###### 这是 H6

    这是一个代码区块。
### 动态加载路由
        export  default new Router({
            routes: [
              {
                  path: '/',
                  redirect:'/obd/1'
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
