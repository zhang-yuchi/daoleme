<!-- 登录 -->
<template>
  <navi :navi="jump" ref="root">
    <div class="login-page">
    <cover></cover>
    <div class="logo">
        <img src="../assets/img/logo.png" alt="">
        <span class="logo-text">到了么</span>
    </div>
    <div class="login-controls">
      <mybtn class="btn" :callback="register" color="rgba(0,0,0,0)" fontColor="rgb(255,255,255)" content="注册"></mybtn>
      <mybtn class="btn" :callback="login" color="white" fontColor="rgb(69,108,229)" content="登录"></mybtn>
    </div>
  </div>
  </navi>
  
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import cover from "../components/content/backcover"
import mybtn from "../components/content/button";
import navi from "../components/content/navigate"
// import move from "../components/content/animate"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    mybtn,
    cover,
    // move,
    navi,
  },
  data() {
    //这里存放数据
    return {
      jump:"1",//根目录必须要有这个属性
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    login(){
      this.jump = "0"
      this.$router.push('/welcome/login')
    },
    register(){
      this.jump='0'
      this.$router.push('/welcome/register')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
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
.login-page {
  /* background-color: rgba(69, 108, 229); */
  height: 100%;
  width: 100%;
  z-index: 10;
}
.login-controls {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 100px;
}
.btn:first-of-type {
  margin-right: 10px;
}
.btn:last-of-type {
  margin-left: 10px;
}
.logo{
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
}
.logo img{
    margin-bottom: 15px;
    width: 70px;
}
.logo-text{
    color: white;
    font-size: 20px;
    font-weight: bold;
}
</style>