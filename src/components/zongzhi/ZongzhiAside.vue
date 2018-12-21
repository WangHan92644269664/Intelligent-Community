<template>
  <el-menu  class="submenu" router>
    <el-menu-item index="#" class="leftTitle">综治</el-menu-item>
    <el-submenu index="1">
      <template slot="title"><i class="iconfont icon-home"></i>综治组织</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">综治机构</el-menu-item>
        <el-menu-item index="2-2">群防群治组织</el-menu-item>
        <el-menu-item index="2-3">网络队伍</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="iconfont icon-home"></i>综治视联网信息中心</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">综治视联网信息中心1</el-menu-item>
        <el-menu-item index="2-2">综治视联网信息中心2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="iconfont icon-home"></i>特殊人群</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">特殊人群1</el-menu-item>
        <el-menu-item index="2-2">特殊人群2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="iconfont icon-home"></i>重点青少年</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">重点青少年1</el-menu-item>
        <el-menu-item index="2-2">重点青少年2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="iconfont icon-home"></i>两断组织</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">两断组织1</el-menu-item>
        <el-menu-item index="2-2">两断组织2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="iconfont icon-home"></i>社会治安</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">社会治安1</el-menu-item>
        <el-menu-item index="2-2">社会治安2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="iconfont icon-home"></i>信访管理</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">信访管理1</el-menu-item>
        <el-menu-item index="2-2">信访管理2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="iconfont icon-home"></i>事件/矛盾纠纷</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">事件/矛盾纠纷1</el-menu-item>
        <el-menu-item index="2-2">事件/矛盾纠纷2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
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
