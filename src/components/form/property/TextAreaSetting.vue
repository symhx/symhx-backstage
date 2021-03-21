<template>
    <div class="setting input-wrap">
        <div class="default-title">
            <h2>{{defaultTitle}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TextAreaSetting",
        data() {
            return {
                defaultTitle: '多行文本'
            };
        }
    }
</script>

<style scoped>
    /****************通用设置*********************/
    *{
        font-size: 16px;
        font-family: '微软雅黑', '宋体', serif;
        font-weight: 500;
        color: #333333;
        text-align: left;
        letter-spacing: 1px;
    }
    .setting{
        padding: 15px;
    }
    .setting>.default-title>h2{
        font-size: 16px;
        margin: 0;
        padding: 6px 26px;
        text-align: center;
        display: inline-block;
        background: linear-gradient(to right bottom, #a1c4fd, #c2e9fb);
        color: #FFFFFF;
    }
</style>
