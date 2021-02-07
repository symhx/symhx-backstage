<template>
    <div class="server-wrap">
        <div class="server-title">
            <p>我们的服务</p>
            <div class="mini-title">
                <span class="title-zh">我们的服务</span>
                <div class="title-en">PROCESS</div>
            </div>
            <div class="title-under-line">
                <div>
                    <i class="iconfont iconfuwu1"/>
                </div>
            </div>
        </div>
        <div class="main-header">
            <div>
                <div class="server-item-wrap">
                    <ul class="server-ul">
                        <li :key="item.label" class="server-ul-li" v-for="item in serverList">
                            <div class="server-bg">
                                <i class="iconfont" :class="item.icon"/>
                                <img :src="item.imgPath" alt="">
                                <div class="server-name">{{item.label}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="server-bg-wrap">
            <div>
                <div class="features-title">
                    <p>建站特色</p>
                    <div class="title-under-line">
                        <div>
                            <i class="iconfont icongongnengdingyi"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="server-row">
                <div class="img-left">
                    <img src="../../assets/pp.svg" width="500px" alt="">
                </div>
                <div class="server-right-wrap">
                    <div class="server-middle">
                        <ul>
                            <li :key="item.title" v-for="item in middleSpecifically">
                                <div>
                                    <img :src="item.icon" alt="">
                                    <span class="title">{{item.title}}</span>
                                </div>
                                <div>
                                <span class="desc">
                                    {{item.desc}}
                                </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="server-right">
                        <ul>
                            <li :key="item.title" v-for="item in rightSpecifically">
                                <div>
                                    <img :src="item.icon" alt="">
                                    <span class="title">{{item.title}}</span>
                                </div>
                                <div>
                                <span class="desc">
                                    {{item.desc}}
                                </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div class="features-title">
                    <p>品牌建设</p>
                    <div class="title-under-line">
                        <div>
                            <i class="iconfont iconpinpaix"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Server",
        data() {
            return {
                albumIndex: 0,
                serverList: [
                    {icon: 'iconshoujidiannao', imgPath: require('../../assets/server-bg-01.webp'), label: '网站建设', desc: ''},
                    {icon: 'iconwechat', imgPath: require('../../assets/server-bg-02.webp'), label: '微信开发', desc: ''},
                    {icon: 'icontubiao_shejikongjian', imgPath: require('../../assets/server-bg-03.webp'), label: '品牌包装', desc: ''},
                    {icon: 'icontubiao_shejiku', imgPath: require('../../assets/server-bg-01.webp'), label: 'Logo/VI/画册设计', desc: ''}
                ],
                middleSpecifically: [
                    {
                        title: '多平台应用',
                        icon: require('../../assets/pt-img.svg'),
                        desc: '您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标，按钮，图片等常用元素。'
                    },
                    {
                        title: '交互体验',
                        icon: require('../../assets/jh-img.svg'),
                        desc: '您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标，按钮，图片等常用元素。'
                    },
                    {
                        title: '功能控件',
                        icon: require('../../assets/fun-img.svg'),
                        desc: '您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标，按钮，图片等常用元素。'
                    }
                ],
                rightSpecifically: [
                    {
                        title: '响应式设计',
                        icon: require('../../assets/xys-img.svg'),
                        desc: '全面实效的数据分析，专业的网站制作策划和顾问团队，帮您建立品牌知名度，为您的网站开发成功助力！'
                    },
                    {
                        title: '万能表单',
                        icon: require('../../assets/bd-img.svg'),
                        desc: '您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标，按钮，图片等常用元素。'
                    },
                    {
                        title: '自定义页面',
                        icon: require('../../assets/diy-img.svg'),
                        desc: '您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标，按钮，图片等常用元素。'
                    }
                ],
                brandSpecifically: [
                    {title: 'Logo'},
                    {title: 'VI'},
                    {title: '包装'},
                    {title: '海报'},
                    {title: '画册'},
                    {title: '折页'},
                    {title: '网站设计'}
                ]
            };
        },
        mounted() {
        },
        created() {
        },
        methods: {
        },
        destroyed() {
        }
    }
</script>

<style scoped>
    .server-wrap{
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    .server-bg-wrap{
        background: url("../../assets/index_ab_bg.jpg");
        background-size: 80% 60%;
    }
    @media screen and (min-width:721px){
        main{
            display: none;
        }
        .server-title>.mini-title{
            display: none;
        }
        .server-title>p, .features-title>p{
            margin: 0;
            display: inline-block;
            width: 100%;
            height: 80px;
            line-height: 100px;
            font-size: 26px;
            color: #454545;
        }
        .title-under-line{
            height: 58px;
            line-height: 58px;
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

        .server-title>span{
            display: inline-block;
            width: 100%;
            color: #a6a6b0;
            margin-top: 36px;
        }
        .server-item-wrap{
        }
        .server-item-wrap>.server-ul{
            display: flex;
            justify-content: space-around;
            width: 80vw;
            margin: 15px 10vw 0;
        }
        .server-item-wrap>.server-ul>.server-ul-li{
            margin: 0 5px;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg{
            position: relative;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>i {
            position: absolute;
            font-size: 120px;
            opacity: 0.2;
            color: #ffffff;
            left: calc(50% - 60px);
            top: calc(50% - 60px);
        }
        .server-item-wrap>.server-ul>.server-ul-li:hover{
            cursor: pointer;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>.server-name {
            position: absolute;
            display: inline-block;
            width: 100%;
            text-align: center;
            bottom: calc(50% - 20px);
            left: 0;
            z-index: 1;
            font-size: 30px;
            color: #fff;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>img{
            width: 100%;
            height: 170px;
            vertical-align: bottom;
        }
        .server-item-wrap>.server-ul>.server-ul-li:last-child{
            filter: grayscale(1);
        }
        .main-header{
        }
        .server-row{
            display: flex;
            justify-content: space-around;
            position: relative;
            padding: 0 5vw;
        }
        .server-row>.img-left{
            margin-top: 5%;
            animation-direction: normal;
            animation-fill-mode: none;
            animation-play-state: running;
            animation-name: shakeUp;
            animation-delay: 0s;
            animation-timing-function: ease;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            opacity: 1;
            position: relative;
            width: 40%;
        }
        .server-right-wrap{
            width: 60%;
            display: flex;
            justify-content: center;
        }
        @keyframes shakeUp {
            0% {
                top: 0;
            }
            50% {
                top: 20px;
            }
            100%{
                top: 0;
            }
        }
        .server-middle>ul>li,.server-right>ul>li {
            height: 190px;
            width: 300px;
            border: 1px solid rgba(236,236,236,1);
            margin: 15px;
            background: #ffffff;
            padding: 30px 20px;
            text-align: left;
        }
        .server-middle>ul>li:hover,.server-right>ul>li:hover {
            border: 1px solid rgba(255,255,255,1);
            box-shadow: 0 0 15px #deebf2 !important;
        }
        .server-middle>ul>li>div>img,.server-right>ul>li>div>img{
            vertical-align: middle;
        }
        .server-middle>ul>li>div>.title,.server-right>ul>li>div>.title{
            font-size: 18px;
            color: #222d39;
            font-weight: bold;
            display: inline-block;
            margin-left: 20px;
        }
        .server-middle>ul>li>div>.desc,.server-right>ul>li>div>.desc{
            color: rgb(103, 114, 148);
            font-size: 13px;
            display: inline-block;
            padding-left: 54px;
            line-height: 26px;
            letter-spacing: inherit;
        }
    }
    @media screen and (min-width: 0px) and (max-width:720px) {
        .server-title>p {
            display: none;
        }
        .server-title>.mini-title{
            display: inline-block;
        }
        .main-header {
            position: relative;
        }
        .title-en{
            color: #ababab;
            font-size: 16px;
        }
        .main-header>div{
            position: relative;
        }
        .server-wrap{
            padding-bottom: 20px;
        }
        .title-under-line{
            display: none;
        }
        .server-title>span {
            font-size: 14px;
            color: #333333;
            display: inline-block;
            margin-top: 40px;
        }
        .server-title>.mini-title{
            margin: 0;
            display: inline-block;
            width: 100%;
            font-size: 20px;
            color: #333;
            text-align: center;
            height: 91px;
            position: relative;
            padding: 47px 0 0;
        }
        .server-wrap>h3{
            font-size: 16px;
            color: #959595;
            font-weight: normal;
            line-height: 15px;
            height: 20px;
            margin: 0;
            text-align: left;
        }
        .server-wrap>p{
            text-align: left;
            font-size: 15px;
            color: #020202;
            line-height: 16px;
            margin-top: 4px;
        }
        .server-item-wrap{
            display: flex;
            flex-wrap: wrap;
        }
        .server-item-wrap>ul{
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        .server-item-wrap>.server-ul>.server-ul-li{
            padding: 15px 5px;
            width: 50%;
        }
        .design-server-li>span{
            font-size: 32px;
            color: #ffffff;
            transition: all .5s linear;
        }
        .design-server-li>div{
            opacity: 0;
            display: none;
        }
        .album-active>span{
            font-size: 42px;
        }
        .album-active>div{
            opacity: 1;
            display: block;
            font-size: 16px;
            color: #fff;
            transition: all .5s linear;
            min-width: 120px;
            text-align: center;
        }
        .server-title{
            font-size: 16px;
        }
        .server-item-wrap>.server-ul>.server-ul-li img {
            width: 100%;
        }
        .server-row>.img-left{
            display: flex;
            justify-content: center;
        }
        .server-row>.img-left>img{
            width: 60%;
        }
    }
</style>
