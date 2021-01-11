<template>
    <div class="server-wrap">
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
<!--        <h3>SERVICE CAPABILITIES</h3>-->
<!--        <p>服务能力</p>-->
        <div class="main-header">
            <div>
                <span class="server-title">开发服务</span>
                <div class="server-item-wrap">
                    <div class="develop">
                        <div class="pc-web-site">
                            <div class="pc-icon bg-position"></div>
                            <div class="develop-desc">PC建设</div>
                        </div>
                        <div class="mobile-web-site">
                            <div class="mobile-icon bg-position"></div>
                            <div class="develop-desc">手机网站</div>
                        </div>
                        <div class="mini-program-site">
                            <div class="mini-icon bg-position"></div>
                            <div class="develop-desc">小程序</div>
                        </div>
                        <div class="h5-web-site">
                            <div class="h5-icon bg-position"></div>
                            <div class="develop-desc">H5</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span class="server-title">设计服务</span>
                <div class="server-item-wrap">
                    <ul>
                        <li @click="setIndex(index)" :key="index" :class="['design-server-li',item.class, {'album-active': albumIndex===index}]" v-for="(item,index) in designList">
                            <span class="iconfont" :class="item.icon"></span>
                            <div class="server-title">{{item.label}}</div>
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
                designList: [
                    {label: '品牌包装', class: 'brand-clz', icon: 'icon-brand'},
                    {label: '品牌/Logo/VI', class: 'design-clz', icon: 'icon-icon-design-'},
                    {label: '画册/海报', class: 'album-clz', icon: 'icon-24gl-photoAlbum'},
                ]
            };
        },
        mounted() {
            setInterval(this.timeOut, 3000);
        },
        created() {
        },
        methods: {
            timeOut() {
                if (this.albumIndex < this.designList.length - 1) {
                    this.albumIndex++;
                } else {
                    this.albumIndex = 0;
                }
            },
            setIndex(index) {
                this.albumIndex = index;
            }
        },
        destroyed() {
        }
    }
</script>

<style scoped>
    .server-wrap{
        position: relative;;
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
