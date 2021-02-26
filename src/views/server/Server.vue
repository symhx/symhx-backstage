<template>
    <div class="server-wrap">
        <div class="server-title">
            <p>服务范围</p>
            <div class="mini-title">
                <span class="title-zh">服务范围</span>
                <div class="title-en">SERVICE</div>
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
                                <img :src="item.imgPath" alt="">
                                <i class="iconfont" :class="item.icon"/>
                                <div class="server-name">{{item.label}}</div>
                                <div class="server-desc">
                                    <ul>
                                        <li :key="itm" v-for="itm in item.desc">{{itm}}</li>
                                    </ul>
                                </div>
                                <div class="server-detail">
                                    <span>了解详情 >></span>
                                </div>
                            </div>
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
                    {icon: 'iconshoujidiannao', imgPath: require('../../assets/server-bg-01.webp'), label: '网站建设', desc: ['企业官网','手机网站','微信网站','H5网站','定制网站','SEO优化']},
                    {icon: 'iconwechat', imgPath: require('../../assets/server-bg-02.webp'), label: '微信开发', desc: ['小程序', '公众号', '电商/零售', '生活服务', '政务民生', '定制开发']},
                    {icon: 'icontubiao_shejikongjian', imgPath: require('../../assets/server-bg-03.webp'), label: '软件定制', desc: ['商城系统', 'SAAS系统', 'ERP系统','管理系统']},
                    {icon: 'icontubiao_shejiku', imgPath: require('../../assets/server-bg-03.webp'), label: '品牌设计', desc: ['品牌包装', 'Logo/VI', '海报', '画册', '折页', '其它']}
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
        background: #FFFFFF;
        padding: 50px 0;
    }
    @media screen and (min-width: 1201px){
        .server-title>.mini-title{
            display: none;
        }
        .server-title>p{
            font-family: '微软雅黑', '宋体', serif;
            margin: 0;
            display: inline-block;
            width: 100%;
            line-height: 60px;
            font-size: 26px;
            color: #454545;
            letter-spacing: 3px;
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
        .server-item-wrap {
            margin: 0 auto;
            max-width: 1200px;
            position: relative;
            width: 100%;
        }
        .main-header{
            padding: 50px 0 0;
        }
        .server-item-wrap>.server-ul{
            display: flex;
            justify-content: space-around;
        }
        .server-item-wrap>.server-ul>.server-ul-li{
            margin: 0 5px;
            width: 22%;
            position: relative;
            top: 0;
            transition: all .2s linear;
            z-index: 10;
        }
        .server-item-wrap>.server-ul>.server-ul-li:hover {
            top: -3px;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg {
            position: relative;
            height: 330px;
            color: #333333;
            background-color: #fff;
            box-shadow: unset;
            border: 1px solid #E5E8ED;
            transition: all .2s linear;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg:hover {
            box-shadow: 0 4px 8px rgba(3, 27, 78, 0.12);
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>i {
            position: absolute;
            font-size: 120px;
            opacity: 0.2;
            color: #ffffff;
            left: calc(50% - 60px);
            top: calc(24% - 60px);
        }
        .server-item-wrap>.server-ul>.server-ul-li:hover{
            cursor: pointer;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>.server-name {
            position: absolute;
            display: inline-block;
            width: 100%;
            text-align: center;
            top: 60px;
            left: 0;
            z-index: 1;
            font-size: 30px;
            color: #ffffff;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>.server-desc {
            position: relative;
            text-align: left;
            display: inline-block;
            font-size: 14px;
            font-family: '微软雅黑', '宋体', serif;
            color: #979FA8;
            line-height: 1.5rem;
            font-weight: 300;
            margin: 10px;
            height: 100px;
            overflow: hidden;
        }
        .server-desc>ul{
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            text-align: center;
        }
        .server-desc>ul>li{
            width: 50%;
            height: 30px;
            line-height: 30px;
        }
        .server-desc>ul>li:hover{
            color: #333333;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>img{
            width: 100%;
            height: 170px;
            vertical-align: bottom;
        }
        .server-item-wrap>.server-ul>.server-ul-li:nth-child(3) img{
            filter: grayscale(1);
        }
        .server-detail{
            position: absolute;
            bottom: 0;
            left: 0;
            height: 40px;
            line-height: 40px;
            font-family: '微软雅黑', '宋体', serif;
            font-size: 14px;
            width: 100%;
            padding: 0 10px;
            text-align: left;
        }
        .server-detail::before {
            content: "";
            display: inline-block;
            width: calc(100% - 20px);
            height: 1px;
            background: rgba(167, 167, 179, 0.35);
            position: absolute;
        }
        .server-detail>span{
            display: inline-block;
            color: #a6a6b0;
        }
        .server-bg:hover .server-detail>span{
            color: #333;
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
            box-shadow: 0 0 15px #deebf2!important;
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
    @media screen and (min-width: 721px)  and (max-width:1200px) {
        .server-title>.mini-title{
            display: none;
        }
        .server-title>p{
            font-family: '微软雅黑', '宋体', serif;
            margin: 0;
            display: inline-block;
            width: 100%;
            line-height: 60px;
            font-size: 26px;
            color: #454545;
            letter-spacing: 3px;
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
        .server-item-wrap {
            margin: 0 auto;
            max-width: 750px;
            position: relative;
            width: 100%;
        }
        .main-header{
            padding: 50px 0 0;
        }
        .server-item-wrap>.server-ul{
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }
        .server-item-wrap>.server-ul>.server-ul-li{
            margin: 0 5px 30px;
            width: 40%;
            position: relative;
            top: 0;
            transition: all .2s linear;
            z-index: 10;
        }
        .server-item-wrap>.server-ul>.server-ul-li:hover {
            top: -3px;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg {
            position: relative;
            height: 330px;
            color: #333333;
            background-color: #fff;
            box-shadow: unset;
            border: 1px solid #E5E8ED;
            transition: all .2s linear;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg:hover {
            box-shadow: 0 4px 8px rgba(3, 27, 78, 0.12);
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>i {
            position: absolute;
            font-size: 120px;
            opacity: 0.2;
            color: #ffffff;
            left: calc(50% - 60px);
            top: calc(24% - 60px);
        }
        .server-item-wrap>.server-ul>.server-ul-li:hover{
            cursor: pointer;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>.server-name {
            position: absolute;
            display: inline-block;
            width: 100%;
            text-align: center;
            top: 60px;
            left: 0;
            z-index: 1;
            font-size: 30px;
            color: #ffffff;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>.server-desc {
            position: relative;
            text-align: left;
            display: inline-block;
            font-size: 14px;
            font-family: '微软雅黑', '宋体', serif;
            color: #979FA8;
            line-height: 1.5rem;
            font-weight: 300;
            margin: 10px;
            height: 100px;
            overflow: hidden;
        }
        .server-desc>ul{
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            text-align: center;
        }
        .server-desc>ul>li{
            width: 50%;
            height: 30px;
            line-height: 30px;
        }
        .server-desc>ul>li:hover{
            color: #333333;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>img{
            width: 100%;
            height: 170px;
            vertical-align: bottom;
        }
        .server-item-wrap>.server-ul>.server-ul-li:nth-child(3) img{
            filter: grayscale(1);
        }
        .server-detail{
            position: absolute;
            bottom: 0;
            left: 0;
            height: 40px;
            line-height: 40px;
            font-family: '微软雅黑', '宋体', serif;
            font-size: 14px;
            width: 100%;
            padding: 0 10px;
            text-align: left;
        }
        .server-detail::before {
            content: "";
            display: inline-block;
            width: calc(100% - 20px);
            height: 1px;
            background: rgba(167, 167, 179, 0.35);
            position: absolute;
        }
        .server-detail>span{
            display: inline-block;
            color: #a6a6b0;
        }
        .server-bg:hover .server-detail>span{
            color: #333;
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
            box-shadow: 0 0 15px #deebf2!important;
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
            background: #ffffff;
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
            position: relative;
            padding: 40px 0 0;
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
            padding: 15px;
            text-align: left;
            font-family: '微软雅黑', '宋体', serif;
            font-size: 14px;
            font-weight: 300;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg{
            position: relative;
            height: 100%;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg> i {
            position: absolute;
            left: 5%;
            font-size: 88px;
            color: #FFFFFF;
            opacity: .8;
            top: calc(50% - 44px)
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>.server-name {
            position: absolute;
            right: 0;
            top: 15%;
            display: inline-block;
            width: calc(80% - 88px);
            font-size: 24px;
            color: #ffffff;
            opacity: 1;
        }
        .server-item-wrap>.server-ul>.server-ul-li>.server-bg>.server-desc {
            position: absolute;
            right: 0;
            top: 44%;
            display: inline-block;
            width: calc(80% - 88px);
            font-size: 16px;
            color: #ffffff;
            opacity: 1;
        }
        .server-desc>ul{
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
        }
        .server-desc>ul>li{
            width: 50%;
            height: 22px;
            line-height: 22px;
        }
        .server-item-wrap>.server-ul>.server-ul-li:nth-child(3) img {
            filter: grayscale(1);
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
            height: inherit;
        }
        .server-detail{
            display: none;
        }
    }
</style>
