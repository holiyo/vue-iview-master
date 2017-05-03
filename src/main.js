// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
/*引用入口app的vue文件*/
import App from './App'
// import router from './router'
import Router from './config/routes-vaccine' // 路由列表
import iView from 'iview'            //引入iviewUI
import 'iview/dist/styles/iview.css' // 使用 iview CSS
// import './style/theme/index.less'
//   Vue.config.productionTip = false;
  Vue.use(iView);
  new Vue({
    el: '#app',
    router: Router,
    render: h => h(App)
  });
