<template>
    <div>
        <h1>人员列表</h1>
        <h2 style="color:red">上面的求和为{{ $store.state.sum }}</h2>
        <label></label>
        <input v-model="name" placeholder="请输入名字"/>
        <button @click="add">添加</button>
        <ul>
            <li v-for="item in personList " :key="item.id">{{item.name}}</li>
            
        </ul>
    </div>
</template>
<script>
export default {
    name: 'PersonList',
    data() {
        return {
            name: '',
            age: 18
        }
    },
    methods: {
        add() {
            const personObj = { id: Date.now(), name: this.name }
            this.$store.commit('AddPerson', personObj)
            this.name = ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.personList
        }
    },
    mounted() {
    },
    watch: {

    },
    filters: {

    },
    components: {

    },

};
</script>