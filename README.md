# 基于Vue+iview的单页面管理后台框架
左侧导航菜单，右侧内容页面
![vue-iview-master](static/img.jpg)
使用的技术点：
* vue-cli
* [vue](https://cn.vuejs.org/)
* [iview](https://www.iviewui.com/docs/guide/start)
##### 动态加载路由 src/config/routes-vaccine.js
```javascript
    export  default new Router({
            routes: [
              {
                  //根路由跳转
                  path: '/',
                  redirect:'/obd/1'
            },{
                  path:'/obd',
                  name:'obd',
                  component:resolve=>require(['@/page/home.vue'],resolve),//动态加载路由
                  children:[
                    //子路由路径匹配
                    {path:'/obd/1', component:resolve=>require(['@/page/obDepartment/putOnRecord.vue'],resolve)},
                    {path:'/obd/2', component:resolve=>require(['@/page/obDepartment/inoAnalysis.vue'],resolve)},
                    //没有匹配到的路由跳转到404页面
                    {path:'*',component:resolve=>require(['@/page/404.vue'],resolve)}
                  ]
            },{
                  path:'/content',
                  name:'content',
                  component:content
            }]
        })
```

##### QQ:12826209
##### Wechat:lh7364526
欢迎交流！
