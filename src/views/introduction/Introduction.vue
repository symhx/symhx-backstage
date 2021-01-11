<template>
    <div class="introduction-wrap">
        <div class="intro-img">

        </div>
<!--        <h3>COMPANY INTRODUCTION</h3>-->
        <span class="intro-title">公司简介</span>
        <div class="intro-content">
            <p>
                苏屿科技以“用心做好每一次服务”为核心理念打造“苏屿”品牌 探索从个人到企业的纯粹工作方式。先从简单的设计出发，在扎实的基础上发展创意，如何用简洁的视觉体验突出企业的品牌调性是我们研究的方向。一直以来从“服务至上”为起点，秉承“有态度、有专业、有性价比”的品牌理念，提供最优质的服务。在不断加速的时代.我们不断地试图从众多的信息中筛选出我们需要的信息，似乎技术正在以加速的速度超过我们.我们怎样才能更好地确定我们的定位。
            </p>
            <p>
                从一片枫叶掉落开始，回归、纯真、质朴、简单这些词语将我们唤醒，不要繁琐冗杂的东西. 我们希望从一开始就简单。我认为彼此应该从直白的沟通开始，仔细聆听专业实践之外的表达.改变传统的思维方式，从以资源整合为基础到以创意为中心.这样我们就不会困在传统实践的舒适区内想出最好的传统主意，而是足够敏捷去寻找机会，从无法预见的角度来看某件事物。我们很幸运，有一帮拥有创造力与才华的人在一起工作，共同创造不一样的互联网视觉体验。
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Introduce",
        data() {
            return {};
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
    .introduction-wrap{
        font-family: "PingFang SC";
    }
    /*=================响应式代码=====================*/
    @media screen and (min-width: 721px) {

    }
    @media screen and (min-width: 0px) and (max-width:720px) {
        .introduction-wrap{
            position: relative;
            text-align: left;
            padding: 0 10px;
            background-image: url("../../assets/support-bg.webp");
            background-size: 200% 100%;
        }
        .introduction-wrap>h3{
            font-size: 16px;
            color: #959595;
            font-weight: normal;
            line-height: 15px;
            height: 20px;
            margin: 0;
            text-align: left;
        }
        .introduction-wrap>p{
            text-align: left;
            font-size: 15px;
            color: #020202;
            line-height: 16px;
            margin-top: 4px;
        }
        .intro-title{
            display: inline-block;
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
        }
        .intro-title::before{
            content: "";
            display: block;
            position: absolute;
            top: 15px;
            left: 10px;
            width: 2px;
            height: 20px;
            background: #ff7600ba;
        }
        .intro-content {
            border-bottom: 1px solid #dce0e2;
            padding-bottom: 20px;
        }
        .intro-content>p{
            padding: 0 20px;
            text-indent: 2em;
            font-size: 13px;
            color: #333;
            line-height: 28px;
            text-align: left;
        }
    }
</style>
