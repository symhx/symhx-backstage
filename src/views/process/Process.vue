<template>
    <div class="process-wrap">
        <div class="process-title">
            <p>品牌产品制作流程</p>
            <span>我们通过专业的流程与丰富的经验实现了在品牌设计创新的承诺</span>
        </div>
        <div class="process-step">
            <ul class="process-ul">
                <li class="process-ul-li" :key="item.title" v-for="item in stepList">
                    <i class="iconfont" :class="item.icon"/>
                    <div>
                        <span class="process-item-title">{{item.title}}</span>
                        <ul class="process-item-ul">
                            <li class="process-item-ul-li" :key="itm" v-for="itm in item.itemList">
                                {{itm}}
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Process',
        data() {
            return {
                stepList: [
                    {icon: 'icongoutongnengli', title: '沟通与签约', itemList: ['-需求沟通', '-签订合同', '-项目启动']},
                    {icon: 'iconsheji', title: '设计与开发', itemList: ['-项目原型', '-视觉设计', '-模块开发']},
                    {icon: 'iconyewuliucheng', style: 'font-size: 70px', title: '整合与测试', itemList: ['-功能整合', '-外部测试', '-内部测试']},
                    {icon: 'iconwangzhanshejikaifa', title: '上线与售后', itemList: ['-项目验收', '-项目上线', '-售后服务']}
                ]
            };
        },
        mounted() {
        },
        created() {
        },
        methods: {},
        destroyed() {
        }
    }
</script>

<style scoped>
    .process-wrap{
        position: relative;
        padding: 15px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        margin-bottom: 40px;
    }
    .process-step{
        margin-top: 50px;
    }
    .process-step>ul{
        display: flex;
        justify-content: space-around;
        position: relative;
    }
    .process-step>ul::before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 90vw;
        height: 1px;
        background: #a6a6b0;
        top: 50px;
        z-index: -1;
    }
    .process-step>ul>li>i {
        cursor: pointer;
        display: inline-block;
        font-size: 50px;
        color: #3e3e3e;
        height: 100px;
        line-height: 100px;
        transition: all .25s linear;
    }
    .process-step>ul>li>i::before {
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 1px solid #a6a6b0;
        border-radius: 50%;
        background: #fff;
    }
    .process-step>ul>li>i:hover {
        color: #e4b685;
    }
    .process-step>ul>li>div{
        margin-top: 40px;
    }
    .process-step>ul>li>div>span{
        display: inline-block;
        width: 100%;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .process-step>ul>li>div>ul{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
    }
    .process-step>ul>li>div>ul>li {
        display: inline-block;
        height: 32px;
        line-height: 32px;
        font-size: 16px;
        color: #a6a6b0;
        font-family: "Microsoft YaHei UI",serif;
    }
    .icongoutongnengli,.iconwangzhanshejikaifa{
        font-size: 60px!important;
    }
    .iconyewuliucheng{
        font-size: 70px!important;
    }
    /*=================响应式代码=====================*/
    @media screen and (min-width: 721px) {
        .process-title>p {
            margin: 0;
            display: inline-block;
            width: 100%;
            height: 100px;
            line-height: 100px;
            font-size: 24px;
            color: #333;
        }
        .process-title>span{
            display: inline-block;
            width: 100%;
            color: #a6a6b0;
        }
    }
    @media screen and (min-width: 0px) and (max-width:720px) {

    }
</style>
