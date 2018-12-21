<template>
  <div>
    <el-table :data="tableData3" class="daiban" height="250"  style="width: 90%">
      <el-table-column  prop="date" label="代办事项" width="180"></el-table-column>
      <el-table-column prop="info" label="" ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "EchartsComponents",
  props: {},
   data() {
      return {
        tableData3: [{
          date: '2018-12-12',
          info:'您有一条新公告'
        }, {
          date: '2016-05-02',
          info:'您有一条新公告'
          
        }, {
          date: '2016-05-04',
          info:'您有一条新公告'
        }, {
          date: '2016-05-01',
          info:'您有一条新公告'
        }, {
          date: '2016-05-08',
          info:'您有一条新公告'
        }, {
          date: '2016-05-06',
          info:'您有一条新公告'
        }, {
          date: '2016-05-07',
          info:'您有一条新公告'
        }]
      }
    },
  methods: {},
  computed: {},
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {
      //   vm.drawChart();
    });
  },
  created: () => {}
};
</script>

<style scope>
 .el-table th {
  background-color: rgba(17, 38, 109, 0.9);
  color: #fff;
  height: 30px;
}
.el-table tr {
  background-color: rgba(4, 11, 53, 0.9);
}
.el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color: rgba(4, 11, 53, 0.9);
}
tbody .el-table_1_column_1 .cell {
  margin: 0 auto;
  border-radius: 10px;
  width: 100px;
  color: #fff;
  text-align: center;
  background: #ff7602;
}
.el-table td, .el-table th.is-leaf{
    border-bottom:1px solid #262b51;
}

</style>