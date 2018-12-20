<template>
  <el-container style="height: 752px;margin-top: 10px;">
    <!--主体内容的侧边栏-->
    <el-aside width="200px">
      <!--左侧侧边栏组件-->
      <ConAside></ConAside>
    </el-aside>
    <el-container style="margin-right: 20px;">
      <!--子路由显示的地方-->
      <router-view/>
    </el-container>
  </el-container>
</template>

<script>

  import ConAside from '../../components/ContainerAside'
  export default {
    name: "ZongZhi",
    data() {
      return {
      }
    },
    components: {

      ConAside,
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
    }
  }
</script>
<style scoped>

  .el-aside {
    color: #333;
    background-color: #fff;
    margin-right: 10px;
    margin-left: 20px;
  }

  .el-menu-item.is-active {
    color: #1951C1;
    background: #EBF0FA;
    font-weight: bolder;
    border-left: 2px solid #1951C1;
  }

  /*主体内容*/
  .el-header[data-v-69eb3339] {
    background-color: #fff !important;
    height: 40px !important;
    color: #aaa;
  }

</style>
