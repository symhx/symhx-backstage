<template>
    <div>
        我是单选
        <div>1</div>
        <div>2</div>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
</template>

<script>
    export default {
        name: "Radio",
        props: {},
        data() {
            return {
                radio: '1'
            };
        },
        methods:{

        },
        created() {
        },
        watch: {

        }
    }
</script>

<style scoped>

</style>
