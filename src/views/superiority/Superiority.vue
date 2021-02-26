<template>
    <div class="superiority-wrap">
        <img src="../../assets/background-superiority.png" alt="">
        <div class="superiority-title">
            <p>特色功能</p>
            <div class="mini-title">
                <span class="title-zh">特色功能</span>
                <div class="title-en">OUR ADVANTAGE</div>
            </div>
            <div class="title-under-line">
                <div>
                    <i class="iconfont icongengduotese"/>
                </div>
            </div>
        </div>
        <div class="superiority-ul-wrap">
            <ul>
                <li @mouseover="chooseThis(1)" :class="{'active-state': liIndex === 1}">响应式</li>
                <li @mouseover="chooseThis(2)" :class="{'active-state': liIndex === 2}">多端平台</li>
                <li @mouseover="chooseThis(3)" :class="{'active-state': liIndex === 3}">丰富模板</li>
                <li @mouseover="chooseThis(4)" :class="{'active-state': liIndex === 4}">DIV可视化</li>
                <li @mouseover="chooseThis(5)" :class="{'active-state': liIndex === 5}">专属品牌</li>
            </ul>
        </div>
        <div class="dashed-introduce"></div>
        <div class="content-list">
            <div class="show-wrap" :class="{'active-item': liIndex === 1}">
                <div class="left-item-desc">
                    <p>响应式</p>
                    <span>阿达瓦大沙发斯蒂芬阿萨德发顺丰撒旦法是否去玩儿请问</span>
                </div>
                <div class="right-show">
                    <img src="../../assets/zhanshi.png" alt="">
                </div>
            </div>
            <div class="show-wrap" :class="{'active-item': liIndex === 2}">
                <div class="left-item-desc">
                    <p>多端平台</p>
                    <span>一套代码、多平台适用，让你可以快速触达微信、支付宝、抖音等平台用户。</span>
                </div>
                <div class="right-show">
                    <img src="../../assets/mini-demo.png" alt="">
                    <ul class="icon-ul">
                        <li class="wx mini-icon">
                            <img src="../../assets/wx-mini-icon.svg" alt="">
                        </li>
                        <li class="dy mini-icon">
                            <img src="../../assets/dy-mini-icon.svg" alt="">
                        </li>
                        <li class="zfb mini-icon">
                            <img src="../../assets/zfb-mini-icon.svg" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="show-wrap" :class="{'active-item': liIndex === 3}">
                <div class="left-item-desc">
                    <p>丰富模板</p>
                    <span>阿达瓦大沙发斯蒂芬阿萨德发顺丰撒旦法是否去玩儿请问</span>
                </div>
                <div class="right-show">
                    <img src="../../assets/diy-demo.webp" alt="">
                </div>
            </div>
            <div class="show-wrap" :class="{'active-item': liIndex === 4}">
                <div class="left-item-desc">
                    <p>DIV可视化</p>
                    <span>阿达瓦大沙发斯蒂芬阿萨德发顺丰撒旦法是否去玩儿请问</span>
                </div>
                <div class="right-show">
                    <img src="../../assets/diy-demo.webp" alt="">
                </div>
            </div>
            <div class="show-wrap" :class="{'active-item': liIndex === 5}">
                <div class="left-item-desc">
                    <p>专属品牌设计</p>
                    <span>阿达瓦大沙发斯蒂芬阿萨德发顺丰撒旦法是否去玩儿请问</span>
                </div>
                <div class="right-show">
                    <img src="../../assets/zhanshi.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Superiority",
        data() {
            return {
                liIndex: 1
            };
        },
        mounted() {
        },
        created() {
        },
        methods: {
            chooseThis(value) {
                if (value === this.liIndex) {
                    return;
                }else {
                    this.liIndex = value;
                }
            }
        },
        destroyed() {
        }
    }
</script>

<style scoped>
    .superiority-wrap{
        font-family: "PingFang SC",serif;
        color: #454545;
        position: relative;
        padding: 50px 0;
        max-width: 1200px;
        margin: 0 auto;
        -webkit-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    /*=================响应式代码=====================*/
    @media screen and (min-width: 721px) {
        .superiority-wrap>img {
            position: absolute;
            left: -350px;
            top: -120px;
            width: 800px;
            height: 800px;
            transform: rotate(45deg);
            z-index: 1;
        }
        .superiority-title{
            position: relative;
        }
        .superiority-title>p{
            font-family: '微软雅黑', '宋体', serif;
            margin: 0;
            display: inline-block;
            width: 100%;
            line-height: 60px;
            font-size: 26px;
            color: #454545;
            letter-spacing: 3px;
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
        .superiority-ul-wrap{
            padding-top: 50px;
        }
        .superiority-ul-wrap>ul {
            display: flex;
            position: relative;
            z-index: 10;
            justify-content: space-evenly;
            align-items: center;
        }
        .superiority-ul-wrap>ul>li {
            position: relative;
            height: 40px;
            width: 120px;
            line-height: 40px;
            color: #00000066;
            font-weight: 900;
            display: inline-block;
            cursor: pointer;
            transition: color .2s linear,transform .2s linear;
        }
        .superiority-ul-wrap>ul>.active-state{
            color: #c7a480;
            font-weight: 900;
            cursor: pointer;
            transform: scale(1.25);
        }
        /*.superiority-ul-wrap>ul>li:hover {*/
        /*    color: #c7a480;*/
        /*    font-weight: 900;*/
        /*    cursor: pointer;*/
        /*    transform: scale(1.25);*/
        /*}*/
        .dashed-introduce {
            position: relative;
            height: 1px;
            background: linear-gradient(90deg, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3) 7px, transparent 0, transparent);
            background-size: 12px 100%;
            z-index: 9;
        }
        .content-list {
            margin-top: 60px;
            position: relative;
            z-index: 10;
            height: 560px;
            width: 100%;
        }
        .content-list>.show-wrap {
            position: absolute;
            top: 0;
            justify-content: space-evenly;
            align-items: center;
            opacity: 0;
            display: flex;
            transition: opacity .4s linear;
            height: 100%;
        }
        .content-list>.active-item {
            opacity: 1;
            z-index: 11;
        }
        .content-list>.active-item>div>p {
            opacity: 1!important;
        }
        .show-wrap>div:first-child{
            width: 400px;
            position: relative;
            text-align: left;
        }
        .show-wrap>div:first-child>p {
            position: relative;
            display: inline-block;
            left: 120px;
            width: 280px;
            font-weight: bold;
            font-family: "PingFang SC",serif;
            letter-spacing: 2px;
            font-size: 20px;
            opacity: 0;
            transition: opacity .2s linear;
        }
        .show-wrap>div:first-child>span {
            position: relative;
            left: 120px;
            display: inline-block;
            width: 280px;
            line-height: 1.5em;
            font-size: 14px;
            color: #00000066;
        }
        .show-wrap>div:last-child{
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        .show-wrap>div:last-child>img{
            width: 100%
        }
        .right-show>.icon-ul{
            width: 100%;
            height: 50%;
            position: absolute;
        }
        .right-show>.icon-ul>li {
            display: flex;
            flex-direction: column;
            width: 60px;
            position: absolute;
            background: #FFFFFF;
            border-radius: 50%;
            box-shadow: 0 2px 8px 0 rgba(149, 160, 165, 0.2);
            padding: 5px;
            cursor: pointer;
        }
        @keyframes move
        {
            0% {top: 50px;}
            50% {top: 40px;}
            100% {top: 50px;}
        }
        .right-show>.icon-ul>.wx {
            top: 50px;
            left: 60px;
            animation: move 2s linear infinite;
        }
        @keyframes moveDy
        {
            0% {top: 0;}
            50% {top: -10px;}
            100% {top: 0;}
        }
        .right-show>.icon-ul>.dy {
            top: 0;
            right: 60px;
            animation: moveDy 2s linear infinite;
        }
        @keyframes moveZfb
        {
            0% {bottom: 0;}
            50% {bottom: -10px;}
            100% {bottom: 0;}
        }
        .right-show>.icon-ul>.zfb {
            bottom: 0;
            right: 120px;
            animation: moveZfb 2s linear infinite;
        }
        .right-show>.icon-ul>li img{
            width: 48px;
        }
    }
    @media screen and (min-width: 0px) and (max-width:720px) {
        .superiority-wrap{

        }
    }
</style>
