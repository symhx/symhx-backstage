<template>
    <div class="server-wrap">
        <div class="server-title">
            <p>我们的服务</p>
<!--            <div class="mini-title">-->
<!--                <span class="title-zh">我们的服务</span>-->
<!--                <div class="title-en">PROCESS</div>-->
<!--            </div>-->
            <div class="title-under-line">
                <div>
                    <i class="iconfont iconfuwu"/>
                </div>
            </div>
        </div>
        <main>
            <div class="blob">
                <svg width="100vw" height="300" viewBox="0 0 600 600">
                    <path>
                        <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;

									M404.4 176.7c20.9 16.4 20.8 58.8 38.8 106.2 18.1 47.4 54.4 99.7 40.9 123.6-13.5 23.9-76.7 19.3-131.6 40.4-54.8 21-101.2 67.7-150.5 71.7-49.4 4.1-101.7-34.5-107.8-81.9C88 389.2 128 333 144.2 278c16.2-55.1 8.5-108.8 30.5-125 22-16.1 73.7 5.5 120.4 11.3 46.7 5.9 88.5-3.9 109.3 12.4z;

                  M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;"></animate>
                    </path>
                </svg>
            </div>
        </main>
        <div class="main-header">
            <div>
                <div class="server-item-wrap">
                    <ul class="server-ul">
                        <li :key="item.label" class="server-ul-li" v-for="item in serverList">
                            <div class="server-bg">
                                <img :src="item.imgPath" alt="">
                            </div>
                            <div class="server-name">{{item.label}}</div>
                            <div class="server-desc">{{item.desc}}</div>
                        </li>
                    </ul>
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
                    {icon: '', imgPath: require('../../assets/serve_bg1.png'), label: '自助建站', desc: '重点行业应用开发（SaaS、PaaS、CRM、HCM、银行核心系统、监管报送平台、系统搭建、人工智能助理）、大数据平台开发、商业智能、App开发、ERP、云平台、智'},
                    {icon: '', imgPath: require('../../assets/serve_bg2.png'), label: '定制软件开发', desc: '重点行业应用开发（SaaS、PaaS、CRM、HCM、银行核心系统、监管报送平台、系统搭建、人工智能助理）、大数据平台开发、商业智能、App开发、ERP、云平台、智'},
                    {icon: '', imgPath: require('../../assets/serve_bg3.png'), label: '品牌包装', desc: '重点行业应用开发（SaaS、PaaS、CRM、HCM、银行核心系统、监管报送平台、系统搭建、人工智能助理）、大数据平台开发、商业智能、App开发、ERP、云平台、智'},
                    {icon: '', imgPath: require('../../assets/serve_bg1.png'), label: 'Logo、Vi、画册设计', desc: '重点行业应用开发（SaaS、PaaS、CRM、HCM、银行核心系统、监管报送平台、系统搭建、人工智能助理）、大数据平台开发、商业智能、App开发、ERP、云平台、智'}
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
    @media screen and (min-width:721px){
        main{
            display: none;
        }
        .server-title>p {
            margin: 0;
            display: inline-block;
            width: 100%;
            height: 80px;
            line-height: 100px;
            font-size: 32px;
            color: #333;
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
        .server-item-wrap>.server-ul{
            display: flex;
            justify-content: space-around;
            width: 80vw;
            margin: 0 10vw;
        }
        .server-item-wrap>.server-ul>.server-ul-li{
            margin: 0 5px;
            border: 1px solid #e5e5e5;
            padding-bottom: 15px;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>img{
            width: 100%;
            height: 170px;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-name {
            font-size: 24px;
            margin: 20px 0 10px;
            padding: 10px 0 20px;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-desc{
            line-height: 21px;
            padding: 0 16px 0 22px;
            font-size: 12px;
            overflow: hidden;
            text-align: left;
        }
    }
    @media screen and (min-width: 0px) and (max-width:720px) {
        main {
            position: absolute;
            display: grid;
            width: 100vw;
            height: 50vh;
            z-index: 1;
        }

        .blob {
            margin: auto;
        }
        svg {
            transform-origin: 50% 50%;
            animation: move 5000s ease-in-out infinite;
        }
        @keyframes move {
            0%   { transform: scale(1)   translate(0, 0) rotate(0); fill: #F9F9F9;  }
            25%  { transform: scale(0.8) translate(5vw, 10vh) rotate(0deg); fill: #F9F9F9; }
            50%  { transform: scale(0.6) translate(15vw, 5vh) rotate(0deg); fill: #F9F9F9;  }
            75%  { transform: scale(0.8) translate(5vw, 10vh) rotate(0deg); fill: #F9F9F9;  }
            100% { transform: scale(1)   translate(0, 0) rotate(0); fill: #F9F9F9;  }
        }

        .main-header {
            position: relative;
            z-index: 10;
            text-align: left;
            padding: 0 10px;
            font-family: "PingFang SC";
            font-size: 14px;
            color: #333;
        }

        .main-header>div{
            position: relative;
        }
        .server-title{
            display: inline-block;
            height: 50px;
            line-height: 50px;
            padding: 0 10px;
        }
        .server-title::before{
            content: "";
            display: block;
            position: absolute;
            top: 15px;
            left: 0;
            width: 2px;
            height: 20px;
            background: #ff7600ba;
        }
        .server-wrap{
            padding-bottom: 20px;
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
        .server-item-wrap>.develop{
            display: flex;
            justify-content: space-between;
            width: 100vh;
            flex-wrap: wrap;
        }
        .server-item-wrap>.develop>div{
            width: 48%;
            height: 120px;
            overflow: hidden;
            flex-shrink: 0;
            margin-bottom: 10px;
            background: #fff;
            border-radius: 8px;
            opacity: 0.5;
            position: relative;
        }
        .server-item-wrap>.develop>div>div:last-child{
            position: relative;
            top: 10px;
        }
        .server-item-wrap>.develop>.pc-web-site,.server-item-wrap>.develop>.mobile-web-site,.server-item-wrap>.develop>.mini-program-site,.develop>.h5-web-site {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }
        .server-item-wrap>.develop>.mini-program-site {
        }
        .server-item-wrap>ul{
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
        .server-item-wrap>ul>li{
            height: 150px;
            width: 33.3%;
            transition: width .5s ease;
            padding: 15px 5px;
            flex-wrap: nowrap;
        }
        .album-active{
            width: 50% !important;
        }
        .design-server-li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
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
        .pc-icon{
            background-position: 0 0;
        }
        .mobile-icon{
            background-position: -96px 0;
        }
        .h5-icon{
            background-position: -190px 0;
        }
        .mini-icon{
            background-position: -292px 0;
        }
        .bg-position{
            background-image: url("../../assets/web-develop.png");
            background-repeat: no-repeat;
            background-size: 525% 100%;
            height: 68px;
            width: 68px;
        }
        .brand-clz{
            background-image: url("../../assets/serve_bg1.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        .design-clz{
            background-image: url("../../assets/serve_bg2.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        .album-clz{
            background-image: url("../../assets/serve_bg3.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
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
    }
</style>
