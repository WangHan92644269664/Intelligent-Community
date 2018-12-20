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

<style scoped>
.chartHeight {
  height: 100%;
}
 .el-table th{
 background-color: red !important;
}

</style>