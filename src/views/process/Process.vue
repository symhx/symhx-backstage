<template>
    <div class="process-wrap">
        <div class="process-title">
            <p>品牌/产品建设流程</p>
            <div class="mini-title">
                <span class="title-zh">服务流程</span>
                <div class="title-en">PROCESS</div>
            </div>
            <div class="title-under-line">
                <div>
                    <i class="iconfont iconyewuliuchengguanli"/>
                </div>
            </div>
            <span>通过专业的流程与丰富的经验</span>
            <span>实现品牌设计创新的承诺</span>
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
        -webkit-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        margin: 0 5vw 40px 5vw;
    }
    .process-step{
        margin-top: 80px;
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
        height: 2px;
        background: #a6a6b0;
        top: 50px;
        z-index: -1;
        opacity: .4;
    }
    .process-step>ul>li>i {
        cursor: pointer;
        display: inline-block;
        font-size: 50px;
        color: #9e9e9e;
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
    .process-step>ul>li>i:hover:before {
        border-color: #e4b685;;
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
        .process-wrap{
            height: 66vh;
        }
        .process-title>p {
            font-family: '微软雅黑', '宋体', serif;
            margin: 0;
            display: inline-block;
            width: 100%;
            height: 80px;
            line-height: 100px;
            font-size: 26px;
            color: #454545;
        }
        .mini-title{
            display: none;
        }
        .title-under-line>div{
            height: 20px;
            line-height: 20px;
            display: inline-block;
            position: relative;
        }
        .title-under-line>div::before {
            content: "";
            position: absolute;
            display: inline-block;
            width: 100px;
            height: 1px;
            background: #e4b685;
            top: 10px;
            left: -110px;
        }
        .title-under-line>div::after {
            content: "";
            position: absolute;
            display: inline-block;
            width: 100px;
            height: 1px;
            background: #e4b685;
            top: 10px;
            left: 32px;
        }

        .title-under-line>div>i{
            color: #e4b685;
            vertical-align: top;
            font-size: 20px;
        }

        .process-title>span{
            display: inline-block;
            font-family: '微软雅黑', '宋体', serif;
            font-size: 14px;
            width: 100%;
            color: #a6a6b0;
            margin-top: 36px;
            font-weight: 300;
        }
        .process-title>span:last-child{
            margin-top: 10px;
        }
    }
    @media screen and (min-width: 0px) and (max-width:720px) {
        .process-wrap{
            margin-bottom: 0;
            font-family: '微软雅黑', '宋体', serif;
            background: #f7f9fa;
            margin: 0;
        }
        .process-title>p {
            display: none;
        }
        .process-title>.mini-title {
            margin: 0;
            display: inline-block;
            width: 100%;
            font-size: 20px;
            color: #333;
            text-align: center;
            height: 48px;
            position: relative;
        }
        .process-title>span {
            font-size: 14px;
            color: #333333;
            display: inline-block;
            margin-top: 40px;
            width: 80%;
            line-height: 2em;
        }
        .process-title>span:last-child{
            margin-top: 0;
        }
        .process-step>ul>li>i{
            width: 100%;
        }
        .process-step>ul>li>i::before{
            border-radius: 0;
            border: 0;
            background: unset;
        }
        .process-step>ul>li>div{
            margin-top: 0;
        }
        .title-en{
            color: #ababab;
            font-size: 16px;
        }
        .title-under-line{
            display: none;
        }
        .process-title{
            padding: 40px 0;
        }
        .process-step{
            margin-top: 0;
            padding: 15px;
        }
        .process-step>ul{
            flex-direction: column;
        }
        .process-step>ul>li{
            background: #ffffff;
            box-shadow: 0 0 10px #eaeaea;
            margin-bottom: 10px;
            padding-bottom: 20px;
        }
        .process-ul::before{
            display: none!important;
        }
    }
</style>
