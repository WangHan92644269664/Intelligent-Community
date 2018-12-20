<template>
  <el-menu  class="submenu" router>
    <el-menu-item index="#" class="leftTitle">工作</el-menu-item>
    <el-submenu index="1">
      <template slot="title"><i class="iconfont icon-home"></i>日志管理</template>
      <el-menu-item-group>
        <el-menu-item index="1-1">日志管理1</el-menu-item>
        <el-menu-item index="1-2">日志管理2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/working/plan">
      <template slot="title"><i class="iconfont icon-home"></i>工作计划</template>
      <el-menu-item-group>
        <el-menu-item index="/working/plan/my">我的工作计划</el-menu-item>
        <el-menu-item index="2-2">我安排的工作</el-menu-item>
        <el-menu-item index="2-2">部门工作计划</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="3"><i class="iconfont icon-home"></i>积分管理</el-menu-item>
    <el-submenu index="4">
      <template slot="title"><i class="iconfont icon-home"></i>绩效管理</template>
      <el-menu-item-group>
        <el-menu-item index="4-1">绩效管理1</el-menu-item>
        <el-menu-item index="4-2">绩效管理2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/working/notice"><i class="iconfont icon-home"></i>公告管理</el-menu-item>
    <el-menu-item index="6"><i class="iconfont icon-home"></i>备忘录</el-menu-item>
    <el-submenu index="7">
      <template slot="title"><i class="iconfont icon-home"></i>宣传平台</template>
      <el-menu-item-group>
        <el-menu-item index="7-1">宣传平台1</el-menu-item>
        <el-menu-item index="7-2">宣传平台2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="8"><i class="iconfont icon-home"></i>内部邮件</el-menu-item>
  </el-menu>
</template>

<script>
    export default {
        name: "ContainerAside",
      methods:{

      }
    }
</script>
<style>
  .el-submenu__title{
    color: #444;
    font-weight: bolder;
  }
  .el-menu-item-group .el-menu-item{
    color:#777!important;
  }
</style>
<style scoped>
  .submenu li.leftTitle{
    background: #1D5BDA;
    color:#fff;
    text-align: center!important;
    border:none!important;
  }
  .el-menu-item,.el-submenu__title{
    color: #444;
    font-weight: bolder;
  }
  .el-menu-item, .el-submenu__title{
    height: 50px;
    line-height: 50px;
  }
  .submenu li:nth-of-type(1){
    text-align: center;
  }
  .submenu>li{
    text-align: left!important;
    border-bottom: 2px solid #f0f0f0;
  }
  .submenu>li i{
    margin-right: 10px;
    color:#555
  }
</style>
