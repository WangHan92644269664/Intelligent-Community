<template>
  <el-menu  class="submenu" router>
    <el-menu-item index="#" class="leftTitle">党建</el-menu-item>
    <el-submenu index="#1">
      <template slot="title"><i class="iconfont icon-home"></i>党建中心</template>
      <el-submenu index="#2">
        <template slot="title">党组织管理</template>
        <el-menu-item index="#3">党组织管理1</el-menu-item>
        <el-menu-item index="#4">党组织管理2</el-menu-item>
      </el-submenu>
      <el-menu-item-group>
        <el-menu-item index="#5">党内职务管理</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="#6">
        <template slot="title">党员管理</template>
        <el-menu-item index="/dangjian/building/people/list">党员列表</el-menu-item>
        <el-menu-item index="#7">历史党员</el-menu-item>
        <el-menu-item index="#8">优秀党员</el-menu-item>
      </el-submenu>
      <el-menu-item-group>
        <el-menu-item index="#9">党员发展全纪实</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="#00">
        <template slot="title">党员关系转移</template>
        <el-menu-item index="#09">党员关系转移1</el-menu-item>
        <el-menu-item index="#08">党员关系转移2</el-menu-item>
      </el-submenu>
      <el-submenu index="#07">
        <template slot="title">活动党员</template>
        <el-menu-item index="#06">活动党员1</el-menu-item>
        <el-menu-item index="#05">活动党员2</el-menu-item>
      </el-submenu>
      <el-menu-item-group>
        <el-menu-item index="#04">党费缴纳记录</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="#03">政治生日</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="#02">
      <template slot="title"><i class="iconfont icon-home"></i>学习平台</template>
      <el-menu-item-group>
        <el-menu-item index="/dangjian/study/setting">专题设置</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="#01">
        <template slot="title">学习资料管理</template>
        <el-menu-item index="#11">学习资料管理1</el-menu-item>
        <el-menu-item index="#12">学习资料管理2</el-menu-item>
      </el-submenu>
      <el-menu-item-group>
        <el-menu-item index="#13">题库管理</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="#14">考试中心</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="#15">学习笔记</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="#16">
      <template slot="title"><i class="iconfont icon-home"></i>活动中心</template>
      <el-submenu index="#17">
        <template slot="title">三会一课</template>
        <el-menu-item index="/dangjian/activity/three/origan">组织会议</el-menu-item>
        <el-menu-item index="#18">会议列表</el-menu-item>
        <el-menu-item index="#19">会议记录</el-menu-item>
      </el-submenu>
      <el-menu-item-group>
        <el-menu-item index="#20">组织生活</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="#21">
        <template slot="title">主题党日</template>
        <el-menu-item index="#22">主题党日1</el-menu-item>
        <el-menu-item index="#23">主题党日2</el-menu-item>
      </el-submenu>
      <el-submenu index="#24">
        <template slot="title">品牌党建</template>
        <el-menu-item index="#25">品牌党建1</el-menu-item>
        <el-menu-item index="#26">品牌党建2</el-menu-item>
      </el-submenu>
      <el-submenu index="#27">
        <template slot="title">第一书记</template>
        <el-menu-item index="#28">第一书记1</el-menu-item>
        <el-menu-item index="#29">第一书记2</el-menu-item>
      </el-submenu>
      <el-submenu index="#30">
        <template slot="title">志愿者服务</template>
        <el-menu-item index="#31">志愿者服务1</el-menu-item>
        <el-menu-item index="#32">志愿者服务2</el-menu-item>
      </el-submenu>
      <el-menu-item-group>
        <el-menu-item index="#33">民主评议</el-menu-item>
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
