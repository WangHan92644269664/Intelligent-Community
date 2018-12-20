<template>
  <el-menu  class="submenu" router>
    <el-menu-item index="#" class="leftTitle">政务</el-menu-item>
    <el-menu-item index="/zhengwu/brifInfo"><i class="iconfont icon-home"></i>辖区简介</el-menu-item>
    <el-menu-item index="/zhengwu/quest"><i class="iconfont icon-home"></i>调查问卷</el-menu-item>
    <el-menu-item index="/zhengwu/vote"><i class="iconfont icon-home"></i>投票管理</el-menu-item>
    <el-menu-item index="/zhengwu/mess"><i class="iconfont icon-home"></i>留言建议</el-menu-item>
    <el-menu-item index="/zhengwu/three"><i class="iconfont icon-home"></i>三务公开</el-menu-item>
    <el-submenu index="1">
      <template slot="title"><i class="iconfont icon-home"></i>在线办事</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">在线办事1</el-menu-item>
        <el-menu-item index="2-2">在线办事2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/zhengwu/poverty">
      <template slot="title"><i class="iconfont icon-home"></i>精准扶贫</template>
      <el-menu-item-group>
        <el-menu-item index="/zhengwu/poverty/people">贫困人员</el-menu-item>
        <el-menu-item index="/zhengwu/poverty/record">精准扶贫记录</el-menu-item>
        <el-menu-item index="/zhengwu/poverty/policy">精准扶贫政策</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="iconfont icon-home"></i>智慧养老</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">老人信息</el-menu-item>
        <el-menu-item index="/zhengwu/smart/healthy">健康档案</el-menu-item>
        <el-menu-item index="2-2">服务档案</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
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
