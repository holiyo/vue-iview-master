/**
 * Created by Administrator on 2017/4/10.
 */

  // function getConfig() {
  //
  // }
  // getConfig.prototype=config;
  // getConfig.prototype.nav=[
  //   ];

function navConfig() {}
navConfig.prototype.nav=[];
var config=new navConfig(); //
var ymzs=new navConfig(); //
ymzs.nav=[
  {
    nodeName: "接种",
    nodeId: 'node1',
    isActive: false,
    childrens: [{
      nodeName: '建档接种',
      nodeId: 'node1-1',
      parentId:'node1',
      select:true,
      reflink: '/obd/1'
    }]
  },
  {
    nodeName: "接种日志",
    nodeId: 'node2',
    isActive: false,
    childrens: [{
      nodeName: '接种情况分析',
      nodeId: 'node2-1',
      parentId:'node2',
      select:false,
      reflink: '/obd/2'
    }]
  }
];
  console.info(config);
  export {config,ymzs};
