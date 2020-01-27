<!-- 登录/注册模板 -->
<template>
<div class='login'>
    <div class="backcontrol" @click="back" ><i class="el-icon-arrow-left"></i></div>
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
return {

};
},
//监听属性 类似于data概念
computed: {
    parent(){
        return this.$parent.$parent.$parent.$parent
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
back(){
        // this.$router.replace('/welcome')
        this.parent.jump = "1"
        setTimeout(()=>{
            this.$router.replace('/welcome')
        },300)
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    console.log("login template 呗创建")
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {
    console.log("销毁之前")
}, //生命周期 - 销毁之前
destroyed() {
    console.log("login template 销毁")
}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
deactivated() {}, //如果有keep-alive缓存功能,当该页面撤销使这个函数会触发
}
</script>
<style scoped>
.login{
    width: 100%;
    z-index: 2;
    height: 100%;
    background-color: white;
}   
.backcontrol{
    display: inline-block;
}
</style>