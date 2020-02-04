<!--  -->
<template>
  <div class="action-block">
    <div class="process">
      <span class="text">进行中</span>
      <span class="decor-left"></span>
      <span class="decor-right"></span>
    </div>
    <div class="img">
      <img src="../../assets/img/test.png" alt />
    </div>
    <div class="action-info">
      <!-- 活动名 -->
      <div class="title">The tenth challenge Guangzhou Station</div>
      <!-- 地址 -->
      <div class="desc">Whamapoa Tianhe Road,Guangzhou</div>
      <div class="show-details">
        <span class="action-time">2017-02-02</span>
        <span class="limit">686/1000</span>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  deactivated() {} //如果有keep-alive缓存功能,当该页面撤销使这个函数会触发
};
</script>
<style scoped>
.action-block{
    position: relative;
    margin-bottom: 30px;
}
.title {
  font-weight: bold;
  font-size: 18px;
  word-break: break-all;
}
.process {
  position: absolute;
  z-index: 2;
  top: 10px;
  /* left: -20%; */
  transform: translateX(-20%);
  background-color: rgb(67, 108, 231);
  color: rgb(179, 196, 244);
  font-weight: bold;
  padding: 10px 20px;
}
.decor-left {
  right: 0;
  transform: translate(95%,-70%) rotateZ(-315deg);

  transform-origin: left top;
  display: inline-block;
  position: absolute;
  top: 0;
  /* width: 15px; */
  /* height: 18px; */
  border: 12px solid;
  border-color:  transparent rgb(67, 108, 231) transparent transparent;
}
.decor-right {
  bottom: 0;
  right: 0;
  /* height: 18px; */
  border: 12px solid rgb(67, 108, 231);
  transform: translate(95%,29%) rotateZ(-315deg);
  /* transform: translateY(100%); */
  position: absolute;
  display: inline-block;
  transform-origin: left top;
  border-color:rgb(67, 108, 231)  transparent transparent transparent;
  /* width: 15px; */
}
.desc {
  font-size: 16px;
}
.desc,
.action-time,
.limit {
  font-size: 16px;
  color: rgb(158, 160, 159);
}
.show-details {
  margin-top: 15px;
  overflow: hidden;
}
.show-details > span:first-of-type {
  float: left;
}
.show-details > span:last-of-type {
  float: right;
}
.img {
  position: relative;
  box-shadow: 0 0 3px #aba7a7;
}
.action-info {
  position: relative;
}
.img img {
  vertical-align: middle;
  width: 100%;
  height: 100%;
  max-height: 200px;
}
.action-info > div:first-of-type {
  margin-top: 10px;
}
.action-info > div {
  margin-bottom: 10px;
}
</style>