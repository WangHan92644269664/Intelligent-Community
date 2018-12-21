<template>
  <div>
    <div class="content" id="content">
        <div class="title"><h2 class="gis-title">GIS 地图</h2></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gis",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
     
    };
  },
  components: { },
  mounted() {
    var _this = this;
    //页面加载时赋值id全屏高度
    var oIframe = document.getElementById("content");
    oIframe.style.height = document.documentElement.clientHeight + "px";
    // 加载时echarts的高度
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
      console.log(_this.screenHeight);
    };
    console.log(_this.screenHeight);
  },
  watch: {
    screenHeight: function(val) {
      //监听屏幕高度变化
      var oIframe = document.getElementById("content");
      oIframe.style.height = Number(val) + "px"; //'120'是页面布局调整，可去除
    }
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
#content{
    width:100%;
    height: 100%;
    background:url('../../assets/images/gis/bg.png') no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
}
.title{
    margin:0 auto;
    text-align: center;
    width: 100%;
    
}
.gis-title{
    color:#fff;
    width:400px;
    display: inline-block;
    background-color:#ff7c00;
    padding:10px 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}

</style>
