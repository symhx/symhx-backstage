<template>
    <div class="header-wrap">
        <div class="header-content">
            <div class="login-left"></div>
            <div class="desc-right">
                <ul>
                    <li class="item" :key="item.label" :class="{'item-active': activeIndex === index}" v-for="(item, index) in intro">{{item.label}}</li>
                </ul>
                <span @click="showList"></span>
            </div>
        </div>
        <div class="hide-serve-list" :class="{'show-serve-list': showEnable}">
            <div class="mini-header">
                <div class="mini-logo-left"></div>
                <div class="close-left" @click="hideList">
                    <span></span>
                </div>
            </div>
            <ul>
                <li :key="index" v-for="(item, index) in miniIntro">{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: 0,
                showEnable: false,
                intro: [
                    {label: '首页'},
                    {label: '产品'},
                    // {label: '简介'},
                    {label: '业务'},
                    // {label: '产品'},
                    {label: '服务'},
                    // '案例',
                    {label: '联系'}
                ],
                miniIntro: [
                    {label: '首页'},
                    // {label: '关于我们'},
                    {label: '业务'},
                    {label: '服务与支持'},
                    // {label: '案例'},
                    {label: '联系我们'}
                ]
            }
        },
        mounted() {
        },
        created() {
        },
        methods: {
            showList() {
                this.showEnable = true;
            },
            hideList() {
                this.showEnable = false;
            }
        },
        destroyed() {
        }
    }
</script>

<style scoped>
    .header-wrap {
        background: #fff;
        width: 100%;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #e4e4e4;
        padding-bottom: 2px;
        position: fixed;
        top: 0;
        z-index: 99;
    }
    .header-content {
        font-family: "PingFang SC";
        font-weight: 600;
        width: 80%;
        display: flex;
        justify-content: space-between;
    }
    .desc-right{
        width: 50%;
    }
    .desc-right>ul{
        display: flex;
        width: 100%;
        justify-content: center;
    }
    .desc-right>ul>li{
        height: 60px;
        line-height: 60px;
        color: #4e4e4e;
        cursor: pointer;
        width: 12%;
    }
    .desc-right>ul>li:hover{
        color: #c7a480;
    }
    .desc-right>ul>li::after{
        content: "";
        height: 2px;
        width: 0;
        background: #4e4e4e;
        display: block;
    }
    .desc-right>ul>li:hover::after{
        width: 100%;
        transition: 0.2s all linear;
        background: #c7a480;
    }
    .header-content>.desc-right>ul>.item-active{
        color: #c7a480;
    }
    .header-content>.desc-right>ul>.item-active::after{
        width: 100%;
        background: #c7a480;
    }

    .hide-serve-list{
        padding: 0 0 60px;
        z-index: 100;
        background: #4e4e4e;
        width: 100%;
        height: 100vh;
        display: block;
        position: fixed;
        top: -100%;
        opacity: 0;
        left: 0;
        transition: all .8s cubic-bezier(.645, .045, .355, 1);
    }

    /*=================响应式代码=====================*/
    @media screen and (min-width: 721px) {
        .header-wrap {
            box-shadow: 0 2px 1px 1px #b5b5b526;
            border-bottom: 0;
        }
        .desc-right>span{
            display: none;
        }

    }
    @media screen and (min-width: 0px) and (max-width:720px) {
        .header-wrap{
            display: block;
            background: #4e4e4e;
            color: #fff;
            padding-bottom: 0;
            border-bottom: 0;
        }
        .header-content{
            width: 90%;
            margin: 0 5%;
        }
        .desc-right{
            height: 60px;
            width: 25px;
            position: relative;
        }
        .desc-right>ul{
            display: none;
        }
        .desc-right>span{
            display: block;
            width: 25px;
            height: 2px;
            background: #fff;
            position: absolute;
            right: 0;
            top: 29px;
            cursor: pointer;
        }
        .desc-right>span::before{
            top: -8px;
        }
        .desc-right>span::after{
            top: 8px;
        }
        .desc-right>span::before,.desc-right>span::after{
            content: "";
            display: block;
            position: absolute;
            width: 25px;
            height: 2px;
            background: #fff;
        }
        .show-serve-list{
            display: block;
            background: #4e4e4e;
            height: 100vh;
            opacity: 1;
            position: fixed;
            width: 100%;
            z-index: 100;
            padding: 0 0 60px;
            top: 0;
        }
        .mini-header{
            width: 100%;
            padding: 0 5%;
            height: 60px;
            line-height: 60px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #797979;
        }
        .close-left{
            width: 30px;
            height: 60px;
            position: relative;
        }
        .close-left:hover span{
            transform: rotate(90deg);
        }
        .close-left>span{
            display: inline-block;
            width: 25px;
            position: absolute;
            height: 2px;
            top: 29px;
            right: 0;
            transform: rotate(0deg);
            transition: transform .25s linear;
        }
        .close-left>span::before{
            transform: rotate(-45deg);
        }
        .close-left>span::after{
            transform: rotate(45deg);
        }
        .close-left>span::before,.close-left>span::after{
            content: "";
            display: block;
            width: 25px;
            position: absolute;
            height: 2px;
            background: #fff;
        }
        .hide-serve-list>ul{
            padding-top: 15px;
        }
        .hide-serve-list>ul>li{
            font-family: "PingFang SC";
            line-height: 58px;
            font-size: 24px;
        }
    }
</style>
