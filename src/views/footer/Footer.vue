<template>
    <div class="footer-wrap">
        <div class="promotional-information">
            <div class="left-desc">
                <ul class="title-ul">
                    <li class="title-ul-li" :key="item.title" v-for="item in descInfoList">
                        <p>{{item.title}}</p>
                        <div class="serve-item-wrap">
                            <ul>
                                <li :key="itm.label" v-for="itm in item.itemList">
                                    <template v-if="typeof itm === 'object'">
                                        <i class="iconfont" :class="itm.icon"/><span class="info-span">{{itm.label}}</span>
                                    </template>
                                    <template v-else>
                                        <span>{{itm}}</span>
                                    </template>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="right-ewm">
                <p>{{FollowUS}}</p>
                <div class="ewm-item-wrap">
                    <ul>
                        <li class="ewm-ul-li" :key="item.title" v-for="item in ewmList">
                            <span>{{item.title}}</span>
                            <img :src="item.imgPath" width="120" height="120" alt="二维码">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="mini-serve-desc">
            <ul class="mini-serve-ul">
                <li class="mini-serve-ul-li" :key="item" v-for="item in miniServeDescList">
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="record-information">
            <div class="pc-footer-content">
                {{copyright}}
            </div>
            <div class="mobile-footer-content">
                <p>Copyright © 2021-2021</p>
                <p>symhx.com All rights reserved.</p>
                <p>苏屿 版权所有</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                year: 0,
                copyright: '',
                descInfoList: [
                    {title: '首页', itemList: ['产品', '服务', '案例', '流程', '关于']},
                    {title: '产品中心', itemList: ['苏码', '苏表单', '苏网站']},
                    {title: '联系我们', itemList: [{icon: 'icondianhua', label: '18483650305'}, {icon: 'iconservice', label: '工作日 9:00-18:00'}, {icon: 'iconxinfengbeifen', label: 'symhx@foxmail.com'}, {icon: 'icondingwei', label: '成都市高新区天府软件园G1区12层'}]}
                ],
                miniServeDescList: [
                    '服务', '案例', '流程', '关于', '联系'
                ],
                ewmList: [
                    {title: '微信公众号', imgPath: require('../../assets/qr-img.jpg')}
                ],
                FollowUS: '关注我们'
            }
        },
        mounted() {
            this.year = new Date().getFullYear();
            this.copyright = 'Copyright © 2021-' + this.year + ' symhx.com All rights reserved.'
        },
        created() {

        },
        methods: {},
        destroyed() {
        }
    }
</script>

<style scoped>
    .footer-wrap {
        width: 100%;
        background: url("../../assets/footer-bg.png");
        color: #999;
        font-family: "PingFang SC",serif;
        padding: 20px 0 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    .promotional-information{
        display: flex;
        justify-content: space-around;

    }
    .title-ul {
        display: flex;
        flex-flow: column;
    }
    .title-ul-li {
        text-align: left;
        display: inline-block;
    }
    .title-ul-li>p {
        color: #e4b685;
        font-family: "Microsoft YaHei UI",serif;
        font-size: 14px;
        position: relative;
        display: inline-block;
    }
    .title-ul-li>p::after, .right-ewm>p::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        display: inline-block;
        width: 100%;
        height: 1px;
        background: #e4b685;
    }
    .serve-item-wrap{
        color: #a6a6b0;
        font-size: 14px;
    }
    .serve-item-wrap>ul>li {
        display: inline-block;
        margin-right: 14px;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
    }
    .serve-item-wrap>ul>li>i{
        color: #e4b685;
        display: inline-block;
        height: 20px;
        vertical-align: middle;
        font-size: 18px;
    }
    .serve-item-wrap>ul>li>.info-span{
        display: inline-block;
        margin-left: 4px;
        font-size: 14px;
    }
    .mini-serve-desc{
        display: none;
    }
    .record-information{
        position: relative;
        margin-top: 20px;
    }
    .record-information::before {
        content: "";
        display: flex;
        justify-content: center;
        width: 90vw;
        height: 1px;
        background: #545454;
        position: absolute;
        left: 5vw;
        top: 0;
    }
    .right-ewm{
        text-align: left;
    }
    .right-ewm>p{
        color: #e4b685;
        font-family: "Microsoft YaHei UI",serif;
        font-size: 14px;
        position: relative;
        display: inline-block;
    }

    .ewm-item-wrap>ul{
        display: flex;
    }
    .ewm-item-wrap>ul>.ewm-ul-li{
        font-size: 14px;
        display: flex;
        flex-direction: column;
    }
    .ewm-item-wrap>ul>.ewm-ul-li>span{
        width: 120px;
        display: inline-block;
        text-align: center;
        height: 40px;
        line-height: 40px;
    }

    /*=================响应式代码=====================*/
    @media screen and (min-width: 721px) and (max-width:1292px) {
        .ewm-item-wrap{
            min-width: unset;
        }
        .mobile-footer-content{
            display: none;
        }
        .pc-footer-content {
            display: block;
            height: 56px;
            line-height: 56px;
            font-size: 16px;
        }
    }
    @media screen and (min-width: 1292px) {
        .footer-wrap {
        }
        .pc-footer-content {
            display: block;
            height: 56px;
            line-height: 56px;
            font-size: 16px;
        }
        .mobile-footer-content{
            display: none;
        }
        .ewm-item-wrap{
            min-width: 360px;
        }
    }
    @media screen and (min-width: 0px) and (max-width:720px) {
        .footer-wrap {
        }

        .promotional-information>.left-desc{
            display: none;
        }
        .promotional-information>.right-ewm>p{
            display: none;
        }
        .ewm-ul-li>span{
            margin-bottom: 10px;
        }
        .mini-serve-desc{
            display: inline-block;
            width: 100vw;
            margin-top: 20px;
        }
        .mini-serve-desc>.mini-serve-ul{
            display: flex;
            justify-content: space-around;
            font-size: 14px;
        }

        .pc-footer-content{
            display: none;
        }
        .mobile-footer-content{
            display: block;
            padding: 20px;
        }
        .mobile-footer-content>p{
            margin: 0;
            height: 24px;
            line-height: 20px;
            font-size: 14px;
        }
    }
</style>
