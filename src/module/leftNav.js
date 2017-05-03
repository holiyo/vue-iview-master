/**
 * Created by Administrator on 2017/4/10.
 */
function navConfig() {}
navConfig.prototype.nav=[];
var config=new navConfig();
var ymzs=new navConfig();
ymzs.nav=[
  {
    nodeName: "基本元素",
    nodeId: 'node1',
    isActive: false,
    childrens: [{
      nodeName: '按钮',
      nodeId: 'node1-1',
      parentId:'node1',
      select:true,
      reflink: '/obd/1'
    }]
  },
  {
    nodeName: "组件",
    nodeId: 'node2',
    isActive: false,
    childrens: [{
      nodeName: 'DataTable',
      nodeId: 'node2-1',
      parentId:'node2',
      select:false,
      reflink: '/obd/2'
    },{
      nodeName: 'MarkDown',
      nodeId: 'node2-2',
      parentId:'node2',
      select:false,
      reflink: '/obd/2-1'
    }]
  },
  {
    nodeName: "第三方组件",
    nodeId: 'node3',
    isActive: false,
    childrens: [{
      nodeName: 'iCheck组件',
      nodeId: 'node2-1',
      parentId:'node2',
      select:false,
      reflink: '/obd/3'
    }]
  }
];
  console.info(config);
  export {config,ymzs};
