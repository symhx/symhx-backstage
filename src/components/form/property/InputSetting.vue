<template>
    <div class="setting input-wrap">
        <div class="default-title">
            <h2>{{defaultTitle}}</h2>
        </div>
        <div class="tag-wrap">
            <div class="tag-title input-tag">
                <label for="formName" class="title">{{tagTitle}}</label>
                <input v-model="tagTitleName" type="text" id="formName" class="title-input" @input="changeTitleName">
                <span v-if="tagTitleName.length>0" class="iconfont iconclose" @click="tagTitleName = ''"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputSetting",
        data() {
            return {
                defaultTitle: '单行文本',
                tagTitle: '标题',
                tagTitleName: ''
            };
        },
        methods: {
            changeTitleName() {
                this.$emit("titleName", this.tagTitleName);
            }
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
        width: 100%;
        height: 100vh;
        background: #ffffff;
    }
    .setting>.default-title>h2 {
        text-align: left;
        width: 100%;
        font-size: 16px;
        margin: 0;
        padding: 10px;
        display: inline-block;
        background: linear-gradient(to right bottom, #a1c4fd, #c2e9fb);
        color: #FFFFFF;
    }
    /*************标签设置******************/
    .tag-wrap{
        padding: 15px 20px;
    }
    .tag-wrap>.tag-title>.title {
        font-size: 16px;
        line-height: 40px;
        height: 40px;
        display: inline-block;
        width: 100%;
    }
    .tag-wrap>.tag-title{
        position: relative;
    }
    .tag-wrap>.tag-title>.iconfont{
        position: absolute;
        right: 0;
        height: 32px;
        line-height: 32px;
        font-size: 12px;
        cursor: pointer;
    }
    input[type="text"], input[type="password"], input[type="number"], select {
        width: 100%;
        height: 32px;
        padding: 0 28px 0 8px;
        border: 1px solid #b3b8c1;
        outline: 0;
        box-sizing: border-box;
        border-radius: 4px;
        color: #051433;
    }
    input[type="text"]:hover, input[type="number"]:hover, input[type="password"]:hover, textarea:hover {
        border-color: #2e73ff;
    }
    input[type='text']:focus, input[type='password']:focus, textarea:focus {
        border-color: #2e73ff;
    }
</style>
