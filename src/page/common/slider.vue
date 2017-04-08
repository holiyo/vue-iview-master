<template>
  <div class="layout">
    <div class="layout-slider">
      <Row type="flex">
        <i-col span="24" class="">
          <ul class="ivu-menu ivu-menu-dark ivu-menu-vertical" style="width: auto;">
            <div class="layout-logo-left"></div>
            <li class="ivu-menu-submenu" v-for="(left,$index) in leftNav" :key="left.nodeId">
              <div class="ivu-menu-submenu-title" v-on:click="ntoggle(left,$index)">
                <i class="ivu-icon ivu-icon-ios-navigate"></i>{{left.nodeName}}
                <i class="ivu-icon ivu-icon-ios-arrow-down ivu-menu-submenu-title-icon"></i></div>
                <ul class="ivu-menu" v-show="left.isActive">
                  <li class="ivu-menu-item" v-for="(c_node,$index) in left.childrens" @click.native="addTabNav(c_node,$index)" :key="c_node.nodeId">
                    <router-link :to="c_node.reflink" @click.native="addTabNav(c_node,$index)">{{c_node.nodeName}}</router-link></li>
                </ul>
            </li>
          </ul>
          <!--<Menu active-name="" theme="dark" width="auto" :open-names="['node1']">-->
            <!--<div class="layout-logo-left"></div>-->
            <!--<Submenu :name="left.nodeId" v-for="(left,$index) in leftNav" :key="left.nodeId">-->
              <!--<template slot="title">-->
                <!--<Icon type="ios-navigate"></Icon>-->
                <!--{{left.nodeName}}-->
            <!--</template>-->
              <!--<Menu-item :name="left.nodeId+$index" :href="c_node.reflink" v-for="(c_node,$index) in left.childrens" @click.native="addTabNav(c_node,$index)" :key="c_node.nodeId">{{c_node.nodeName}}</Menu-item>-->
            <!--</Submenu>-->
          <!--</Menu>-->
        </i-col>
      </Row>
    </div>
    <div class="layout-body">
      <div class="layout-tab">
        <Row type="flex">
          <i-col span="24">
            <ul class="layout-tab-title">
              <li v-for="tabs in headTabs"><a href="">{{tabs.nodeName}}</a></li>
            </ul>
          </i-col>
        </Row>
      </div>
      <div class="layout-content">
        <Row type="flex">
          <i-col span="24">
            <router-view></router-view>
          </i-col>
        </Row>
      </div>

    </div>
  </div>
</template>
<style>
</style>
<script>
  import Bus from '@/module/eventBus.js';
  export default {
    data: function () {
      return {
        leftNav: [{
          nodeName: "档案管理",
          nodeId: 'node1',
          isActive: false,
          childrens: [{
            nodeName: '查询档案',
            nodeId: 'node1-1',
            parentId:'node1',
            reflink: '/home/archives/1'
          }, {
            nodeName: '合并档案',
            nodeId: 'node1-2',
            parentId:'node1',
            reflink: '/home/archives/2'
          }, {
            nodeName: '注册档案',
            nodeId: 'node1-3',
            parentId:'node1',
            reflink: '/home/archives/3'
          }]
        },{
          nodeName:"免疫中心",
          nodeId:'node2',
          isActive:false,
          childrens:[{
            nodeName:'实时监控台',
            nodeId:'node2-1',
            parentId:'node2',
            reflink:''
          },{
            nodeName:'数字化检测',
            nodeId:'node2-2',
            parentId:'node2',
            reflink:''
          },{
            nodeName:'免疫检测',
            nodeId:'node2-3',
            parentId:'node2',
            reflink:''
          },{
            nodeName:'冷链检测',
            nodeId:'node2-4',
            parentId:'node2',
            reflink:''
          },{
            nodeName:'疫苗检测',
            nodeId:'node2-5',
            parentId:'node2',
            reflink:''
          }]
        },{
          nodeName:"免疫程序",
          nodeId:'node3',
          isActive:false,
          childrens:[{
            nodeName:'接种程序设置',
            nodeId:'node3-1',
            parentId:'node3',
            reflink:''
          },{
            nodeName:'预约评价设置',
            nodeId:'node3-2',
            parentId:'node3',
            reflink:''
          },{
            nodeName:'门诊日设置',
            nodeId:'node3-3',
            parentId:'node3',
            reflink:''
          },{
            nodeName:'打印设置',
            nodeId:'node3-4',
            parentId:'node3',
            reflink:''
          },{
            nodeName:'App设置',
            nodeId:'node3-5',
            parentId:'node3',
            reflink:''
          },{
            nodeName:'上传下载设置',
            nodeId:'node3-6',
            parentId:'node3',
            reflink:''
          },{
            nodeName:'生物制品设置',
            nodeId:'node3-7',
            parentId:'node3',
            reflink:''
          }]
        },{
          nodeName: "综合报表",
          nodeId: 'node4',
          isActive: false,
          childrens: [{
            nodeName: '6-1报表',
            nodeId: 'node4-1',
            parentId:'node4',
            reflink: ''
          }, {
            nodeName: '6-2报表',
            nodeId: 'node4-2',
            parentId:'node4',
            reflink: ''
          }, {
            nodeName: '添加报表',
            nodeId: 'node4-3',
            parentId:'node4',
            reflink: ''
          },{
            nodeName: '报表上传下载',
            nodeId: 'node4-4',
            parentId:'node4',
            reflink: ''
          }]
        },{
          nodeName: "政务管理",
          nodeId: 'node5',
          isActive: false,
          childrens: [{
            nodeName: '会话',
            nodeId: 'node5-1',
            parentId:'node5',
            reflink: ''
          }, {
            nodeName: '通知公告',
            nodeId: 'node5-2',
            parentId:'node5',
            reflink: ''
          }, {
            nodeName: '我的待办',
            nodeId: 'node5-3',
            parentId:'node5',
            reflink: ''
          },{
            nodeName: '我的申请',
            nodeId: 'node5-4',
            parentId:'node5',
            reflink: ''
          },{
            nodeName: '个人设置',
            nodeId: 'node5-5',
            parentId:'node5',
            reflink: ''
          }]
        },{
          nodeName: "参数配置",
          nodeId: 'node6',
          isActive: false,
          childrens: [{
            nodeName: '区域设置',
            nodeId: 'node6-1',
            parentId:'node6',
            reflink: ''
          }, {
            nodeName: '机构设置',
            nodeId: 'node6-2',
            parentId:'node6',
            reflink: ''
          }, {
            nodeName: '物资管理',
            nodeId: 'node6-3',
            parentId:'node6',
            reflink: '',
          },{
            nodeName: '人员设置',
            nodeId: 'node6-4',
            parentId:'node6',
            reflink: ''
          },{
            nodeName: '操作权限',
            nodeId: 'node6-5',
            parentId:'node6',
            reflink: ''
          }]
        },{
          nodeName: "民生服务",
          nodeId: 'node7',
          isActive: false,
          childrens: [{
            nodeName: '服务论坛',
            nodeId: 'node7-1',
            parentId:'node7',
            reflink: ''
          }, {
            nodeName: '个人入口',
            nodeId: 'node7-2',
            parentId:'node7',
            reflink: ''
          }, {
            nodeName: '企业入口',
            nodeId: 'node7-3',
            parentId:'node7',
            reflink: ''
          },{
            nodeName: '个人服务后台分析',
            nodeId: 'node7-4',
            parentId:'node7',
            reflink: ''
          },{
            nodeName: '企业服务后台分析',
            nodeId: 'node7-5',
            parentId:'node7',
            reflink: ''
          },{
            nodeName: '服务成效综合分析',
            nodeId: 'node7-6',
            parentId:'node7',
            reflink: ''
          }]
        }],
        tab0: true,
        tab1: true,
        tab2: true,
        headTabs:[],
        isShow:false
      }
    },methods: {
      checkTab(tabId){    //检查tab标签页是否已经选中
          var _Tabs=this['headTabs'];
          for(var i=0;i<_Tabs.length;i++){
              if(_Tabs[i].nodeId==tabId){
                  return false;
              }
          }
        return true;
      },
      addTabNav(n,i) {
        if(this.checkTab(n.nodeId)){  //如果导航没激活，添加选项卡
          this['headTabs'].push(n);
        }
      },
      ntoggle(d,i) {
        this.leftNav[i].isActive=!this.leftNav[i].isActive
        // this.isShow = !this.isShow;
      },
      hash(e){
        return this.$route.path.replace('/','');
      }
    },
    created(){
//      Bus.$on('getTarget',function(d){
//          console.info(d)
//      })
    },
    beforeMount: function () {
      console.group('beforeMount 挂载前状态===============》');
      console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
      console.log(this.$el);
      this['headTabs'].push(this['leftNav'][0].childrens[0]);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.headTabs); //已被初始化
    },
    mounted: function () {
      console.group('mounted 挂载结束状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
      console.log(this.$el);
//      this['headTabs'].push(this['leftNav'][0].childrens[0]);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.headTabs); //已被初始化
    },

//    beforeMount(){
//      if(this['headTabs'].length<0){
//        this['headTabs'].push(this['leftNav'][0].childrens[0]);
//      }
//    },
    components:{
          'curr-Template': {
            template: '<div style="background: lemonchiffon;position: absolute;top: 0;bottom: 0;left: 0;right: 0;">111111111111</div>'
          }
      }
  }
</script>
