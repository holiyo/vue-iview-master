<style scoped>

</style>
<template>
  <div class="layout">
      <div class="layout-header">
        <div class="layout-main">{{logo}}</div>
        <div><template>
          <Button @click="doClick">Default</Button></template></div>
      </div>
  </div>
</template>
<style>
  .layout-header{
    height:70px;
    position: relative;
    width: 100%;
    background: #242F42;
    color: #fff;
  }
</style>
<script>
  import Bus from '@/module/eventBus.js'
  export default {
    data(){
        return{
          fdata:[{
            nodeName: "档案管理",
            nodeId: 'node1',
            isActive: false,
            childrens: [{
              nodeName: '查询档案',
              nodeId: 'node1-1',
              reflink: ''
            }, {
              nodeName: '合并档案',
              nodeId: 'node1-2',
              reflink: ''
            }, {
              nodeName: '注册档案',
              nodeId: 'node1-3',
              reflink: ''
            }]
          }]
        }
    },
    methods:{
      doClick(){
        Bus.$emit('getTarget',this.fdata[0].childrens)
      }
    },
    props:['logo']
  }
</script>
