<template>
    <div><Form :model="formItem" :label-width="80">
    <Row>
      <i-col span="6">
      <Form-item label="身份证">
        <Input v-model="formItem.input" placeholder="请输入"></Input>
      </Form-item>
      </i-col>
      <i-col span="6">
      <Form-item label="卡号">
        <Input v-model="formItem.input" placeholder="请输入"></Input>
      </Form-item>
      </i-col>
      <i-col span="6">
      <Form-item label="姓名">
        <Input v-model="formItem.input" placeholder="请输入"></Input>
      </Form-item>
      </i-col>
      <i-col span="6">
      <Form-item label="性别">
        <Select v-model="formItem.select" placeholder="请选择">
          <Option value="beijing">男</Option>
          <Option value="shanghai">女</Option>
        </Select>
      </Form-item>
      </i-col>
    </Row>
    <Row>
      <i-col span="6">
      <Form-item label="日期">
        <Select v-model="formItem.select" placeholder="请选择">
          <Option value="week">最近一周内</Option>
          <Option value="mouth">最近一个月</Option>
          <Option value="trheemouth">最近三个月</Option>
          <Option value="year">最近一年内</Option>
          <Option value="auto">自定义时间</Option>
        </Select>
      </Form-item>
      </i-col>
      <i-col span="6">
      <Form-item label="出生日期">
        <Date-picker type="date" placeholder="选择日期" v-model="formItem.date"></Date-picker>
      </Form-item>
      </i-col>
      <i-col span="6">
      <Form-item label="联系电话">
        <Input v-model="formItem.input" placeholder="请输入"></Input>
      </Form-item>
      </i-col>
      <i-col span="6">
        <Form-item>
          <Dropdown>
            <a href="javascript:void(0)">
              hover 触发
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item>驴打滚</Dropdown-item>
              <Dropdown-item>炸酱面</Dropdown-item>
              <Dropdown-item>豆汁儿</Dropdown-item>
              <Dropdown-item>冰糖葫芦</Dropdown-item>
              <Dropdown-item>北京烤鸭</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
          <Dropdown trigger="click" style="margin-left: 20px" @on-click="cc(name)">
            <a href="javascript:void(0)">
              click 触发
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
              <Dropdown-item>驴打滚</Dropdown-item>
              <Dropdown-item>炸酱面</Dropdown-item>
              <Dropdown-item>豆汁儿</Dropdown-item>
              <Dropdown-item>冰糖葫芦</Dropdown-item>
              <Dropdown-item>北京烤鸭</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>

        </Form-item>
      </i-col>
    </Row>
  </Form>
      <Row type="flex" justify="space-start" class="code-row-bg" style="margin-left: 30px">
        <!--<col span="18">-->
        <Col span="3"> <Button type="primary" class="bt100">快速接种</Button></Col>
        <Col span="3"> <Button type="primary" class="bt100">建档</Button></Col>
        <Col span="3"> <Button type="primary" class="bt100">编辑</Button></Col>
        <Col span="3"> <Button type="primary" class="bt100">接种</Button></Col>
        <Col span="3"> <Button type="primary" class="bt100">打印</Button></Col>
        <!--</col>-->
      </Row>
      <br>
      <Row>
        <Table border :context="self" :columns="columns4" :data="data1"></Table>
      </Row>
    </div>

</template>
<script>
  export default {
    data () {
      return {
        self:this,
        flag:'lihoo',
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: '',


        },
        columns4: [
          {
            type: 'selection',
            width: 40,
            align: 'center'
          },
          {
            title: '姓名',
            width:80,
            key: 'name'
          },
          {
            title: '性别',
            key: 'sex',
            width:70
          },
          {
            title: '出生日期',
            width:150,
            key: 'date'
          },
          {
              title:'母亲姓名',
              width:90,
              key:  'mumName'
          },
          {
            title:'联系电话',
            width:120,
            key:  'tel'
          },
          {
            title:'疫苗',
            key:  'vaccine'
          },
          {
            title:'生产企业',
            key:  'manufacturer'
          },
          {
            title:'批号',
            width:100,
            key:  'batNumber'
          },
          {
            title:'免费/自费',
            width:88,
            key:  'cost'
          },
          {
            title:'接种时间',
            key:  'vaccineTime',
            width:150
          },
          {
            title:'接种医生',
            width:90,
            key:  'doctor',
            render (row, column, index) {
              return '<i-button type="primary" size="small" @click="show('+index+')"></i-button>';
            }
          }
        ],
        data1: [
          {
            name: '王小明',
            sex: 18,
            date: '2016-01-01 00：00',
            mumName:'李妈妈',
            tel:'1398989999',
            vaccine:'乙肝(1) /卡介苗(1)',
            manufacturer:'北京天坛',
            batNumber:'170001',
            cost:'免费',
            vaccineTime:'2016-01-01 00：00',
            doctor:'张医生'
          },
          {
            name: '王小明',
            sex: 18,
            date: '2016-01-01 00：00',
            mumName:'李妈妈',
            tel:'1398989999',
            vaccine:'乙肝(1) /卡介苗(1)',
            manufacturer:'北京天坛',
            batNumber:'170001',
            cost:'免费',
            vaccineTime:'2016-01-01 00：00',
            doctor:'张医生'
          },
          {
            name: '王小明',
            sex: 18,
            date: '2016-01-01 00：00',
            mumName:'李妈妈',
            tel:'1398989999',
            vaccine:'乙肝(1) /卡介苗(1)',
            manufacturer:'北京天坛',
            batNumber:'170001',
            cost:'免费',
            vaccineTime:'2016-01-01 00：00',
            doctor:'张医生'
          },
          {
            name: '王小明',
            sex: 18,
            date: '2016-01-01 00：00',
            mumName:'李妈妈',
            tel:'1398989999',
            vaccine:'乙肝(1) /卡介苗(1)',
            manufacturer:'北京天坛',
            batNumber:'170001',
            cost:'免费',
            vaccineTime:'2016-01-01 00：00',
            doctor:'张医生'
          }
        ]
      }
    },
    methods:{
      show(i){
          debugger;
            alert('sdsd')
        },
      cc(name){
          debugger;
          alert(1)
      }
    },
    activated(){
//      this.sendrouter();
    },created(){
        debugger;
        function Person(){

        }
        var person=new Person();
    }
  }
</script>
