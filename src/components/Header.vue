<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#273B56"
        text-color="#fff"
        active-text-color="#fff" router>
        <el-menu-item index="/index" ><i class="iconfont icon-guohui"></i> 智慧街道云平台</el-menu-item>
        <el-menu-item index="/gis" class="left">GIS</el-menu-item>
        <el-menu-item index="/data">大数据</el-menu-item>
        <el-menu-item index="/terminal">智能终端</el-menu-item>
        <el-menu-item index="/grid">网格化</el-menu-item>
        <el-menu-item index="/zongzhi">综治</el-menu-item>
        <el-menu-item index="/dangjian">党建</el-menu-item>
        <el-menu-item index="/zhengwu">政务</el-menu-item>
        <el-menu-item index="/working">工作</el-menu-item>
        <el-menu-item index="/system">系统</el-menu-item>
        <el-menu-item index="/inform"><i class="iconfont icon-huiyitongzhi"></i></el-menu-item>
        <el-menu-item index="/phone"><i class="iconfont icon-phone"></i></el-menu-item>
        <el-submenu index="/admin">
          <template slot="title">超级管理员</template>
          <el-menu-item index="/admin1">管理员1</el-menu-item>
          <el-menu-item index="/admin2">管理员1</el-menu-item>
        </el-submenu>
        <el-menu-item index="/more"><i class="iconfont icon-ellipsis"></i></el-menu-item>
      </el-menu>
    </el-header>
  </el-container>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-header {
    padding: 0;
  }

  .el-menu-item {
    padding: 0 40px;
  }

  .el-menu--horizontal > .el-menu-item {
    border-bottom: none !important;
  }

  .el-menu--horizontal > .el-menu-item.is-active{
    border-bottom: none;
    background: #1951C1 !important;
  }
  .left {
    margin-left: 250px;
  }
  .iconfont {
    color: #fff;
    font-size: 20px;
  }
</style>
