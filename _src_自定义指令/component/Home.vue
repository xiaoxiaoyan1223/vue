<template>
    <div>
        <h1>Home</h1>
        <!-- 定义一个v-big指令和v-text功能类似，会把绑定的值放大10倍 -->
        <div >原始值：<span v-text="n"></span></div>
        <div v-big="n">绑定后的值</div>
        <button @click="n++">点我+1</button>
        <!-- 定义一个v-fbind指令和v-bind指令类似，可以让其绑定的input元素默认获取焦点 -->
        <input type="text" v-fbind:value="n">
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                n: 1
            }
        },
        directives: {
            // 对象写法
            // 定义一个v-big指令
            // 何时会被调用？
            // 1.指令与元素成功绑定时（一上来）
            // 2.指令所在的模板被重新解析时
            fbind:{
                bind(element, binding) {
                    element.value = binding.value
                },
                inserted(element, binding) {
                    element.focus()
                },
                update(element, binding) {
                    element.value = binding.value
                    element.focus()
                }
            },
            big(element, binding) {
                element.innerText = binding.value * 10
            }
        }
    }
</script>

<style scoped>

</style>