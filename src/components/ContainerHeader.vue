<template>
  <el-row>
    <el-col :span="1" class="left"><i class="iconfont icon-icon_jiantoub_left_h"></i></el-col>
    <el-col :span="1"><i class="iconfont icon-home"></i></el-col>
    <el-col :span="2" class="title">{{title}} <span>x</span></el-col>
    <el-col :span="1" :offset="18" class="left"><i class="iconfont icon-jiantouyou"></i></el-col>
    <el-col :span="1"><i class="iconfont icon-icon_arrow_bottom"></i></el-col>
  </el-row>
</template>

<script>
  export default {
    name: "ContainerHeader",
    props: {
      title: String
    }
  }
</script>

<style scoped>
  .el-row[data-v-69eb3339] i {
    font-size: 18px;
  }

  .title {
    background: #F5F5F5;
    font-weight: bolder;
    color: #444;
    border-top: 2px solid #1951C1;
  }

  .title > span {
    color: #bbb;
    margin-left: 20px;
  }

  .left {
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  }
</style>
