<template>
  <el-menu  class="submenu" router>
    <el-menu-item index="#" class="leftTitle">综治</el-menu-item>
    <el-submenu index="1">
      <template slot="title"><i class="iconfont icon-home"></i>综治组织</template>
      <el-menu-item-group>
        <el-menu-item index="/zongzhi/organ/institution">综治机构</el-menu-item>
        <el-menu-item index="#1">群防群治组织</el-menu-item>
        <el-menu-item index="#2">网络队伍</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="iconfont icon-home"></i>综治视联网信息中心</template>
      <el-menu-item-group>
        <el-menu-item index="21">综治视联网信息中心1</el-menu-item>
        <el-menu-item index="22">综治视联网信息中心2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="iconfont icon-home"></i>特殊人群</template>
      <el-menu-item-group>
        <el-menu-item index="/zongzhi/special/release">刑满释放人员</el-menu-item>
        <el-menu-item index="222">社区矫正人员</el-menu-item>
        <el-menu-item index="223">吸毒人员</el-menu-item>
        <el-menu-item index="334">精神病人员</el-menu-item>
        <el-menu-item index="224">艾滋病危险人员</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title"><i class="iconfont icon-home"></i>重点青少年</template>
      <el-menu-item-group>
        <el-menu-item index="41">重点青少年1</el-menu-item>
        <el-menu-item index="42">重点青少年2</el-menu-item>
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
        <el-menu-item index="/zongzhi/socity/important">重点地区排查整治</el-menu-item>
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
    <el-submenu index="2">
      <template slot="title"><i class="iconfont icon-home"></i>校园安全</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">校园安全1</el-menu-item>
        <el-menu-item index="2-2">校园安全2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="iconfont icon-home"></i>护路护线</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">护路护线</el-menu-item>
        <el-menu-item index="2-2">涉及线、路案(事)件</el-menu-item>
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
