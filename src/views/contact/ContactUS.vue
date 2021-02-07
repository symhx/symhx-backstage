<template>
    <div class="contact-wrap">
        <div class="contact-top">
            <div class="contact-title">
                <span class="server-title">{{contactTitle}}</span>
                <div class="title-under-line">
                    <div>
                        <i class="iconfont iconmessage"/>
                    </div>
                </div>
            </div>
            <div class="mini-contact-title">
                <span>{{miniContactTitle}}</span>
            </div>
            <p class="contact-desc-start">{{contactDescStart}}</p>
            <p class="contact-desc-end">{{contactDescEnd}}</p>
        </div>
        <div class="contact-content">
            <div class="content-right">
                <form>
                    <ul>
                        <li>
                            <input type="text" placeholder="您的称呼">
                        </li>
                        <li>
                            <input type="text" placeholder="您的电话号码">
                        </li>
                        <li>
                            <textarea type="text" style="resize: none" cols="10" rows="10" placeholder="留言内容"></textarea>
                        </li>
                        <li>
                            <div @click="delivery">投递</div>
                        </li>
                    </ul>
                </form>
            </div>
            <div class="content-left">
                <table>
                    <tr>
                        <td><i class="iconfont icondizhi"/><span>{{contentLeft.address}}</span></td>
                    </tr>
                    <tr>
                        <td><i class="iconfont iconmobile-fill"/><span>{{contentLeft.phone}}</span></td>
                    </tr>
                    <tr>
                        <td><i class="iconfont iconemail"/><span>{{contentLeft.mail}}</span></td>
                    </tr>
                </table>
            </div>
        </div>
        <el-dialog
                class="contact-tips"
                width="70%"
                :visible.sync="visible"
                center>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "ContactUS",
        data() {
            return {
                // 文本属性
                contactTitle: '联系我们',
                miniContactTitle: '欢迎您给我们留言！',
                contactDescStart: '无论是业务资讯或是意见反馈',
                contactDescEnd: '都可以联系我们，我们将24小时都为您服务',
                contactOne: '为您提供定制产品和品牌设计服务',
                contactTwo: '让您的创意成为可能',
                // 数据对象
                contentLeft: {
                    mail: 'symhx@foxmail.com',
                    phone: '184 8365 0305',
                    address: '成都市高新区天府软件园G1区1206'
                },
                // 状态属性
                visible: false
            };
        },
        mounted() {

        },
        created() {

        },
        methods: {
            delivery() {
                this.visible = true;
            }
        },
        destroyed() {
        }
    }
</script>

<style scoped>
    .contact-wrap {
        width: 100%;
        font-family: '微软雅黑', '宋体', serif;
        -webkit-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        font-size: 16px;
        overflow: hidden;
        height: auto;
    }
    .contact-title {
        text-align: center;
        font-size: 28px;
        position: relative;
        color: #fff;
        line-height: 72px;
        font-weight: 500;
        padding: 60px 0 20px;
        letter-spacing: 2px;
    }
    .server-title{
        display: inline-block;
        font-size: 40px;
    }
    .title-under-line{
        line-height: 58px;
        height: 58px;
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
    .mini-contact-title{
        display: none;
    }
    .contact-desc-start,.contact-desc-end {
        color: #f5f5f5;
        font-size: 16px;
        font-weight: 500;
        display: block;
    }
    .contact-desc-start::before {
        content: "\e641";
        display: inline-block;
        font-family: iconfont,serif;
        font-size: 26px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        top: -2px;
    }
    .contact-desc-end::after {
        content: "\e63e";
        display: inline-block;
        font-family: iconfont,serif;
        font-size: 26px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        top: -2px;
    }
    .contact-content{
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-top: 50px;
    }
    .content-left{
        position: relative;
        text-align: left;
        width: 40%;
        color: #a6a6b0;
        display: flex;
        justify-content: flex-end;
        transform-origin: 50% 50%;
    }
    .content-right{
        position: relative;
        width: 60%;
        color: #666;
        display: flex;
        justify-content: flex-start;
        padding: 20px 0;
    }
    .content-left>table {
        display: flex;
        width: 100%;
        position: relative;
        flex-direction: column;
        justify-content: center;
    }
    .content-left>table>tr{
        text-align: center;
        display: inline-block;
        width: 100%;
        position: relative;
        top: -60px;
    }
    .content-left>table>tr>td {
        display: inline-block;
        height: 58px;
        line-height: 58px;
        font-family: '微软雅黑', '宋体', serif;
        font-size: 14px;
        color: #a6a6b0;
    }
    .content-left>table>tr>td{
        width: 100%;
        text-align: left;
    }
    .content-right>form{
        height: 100%;
        text-align: left;
        width: 100%;
    }
    .content-right>form>ul{
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .content-right>form>ul>li{
        line-height: 45px;
        margin-bottom: 15px;
        color: #a6a6b0;
        overflow: hidden;
        width: 50%;
        display: inline-block;
    }
    .content-right>form>ul>li:last-child{
        /*width: 160px;*/
        display: flex;
        justify-content: flex-end;
    }
    .content-right>form>ul>li:last-child>div{
        width: 160px;
    }
    .content-right>form>ul>li:last-child>div{
        font-size: 14px;
    }
    .content-right>form>ul>li>input{
        border-radius: 4px;
        background: #f7f7f7;
        outline: 0;
        border: none;
        height: 45px;
        width: 100%;
        text-indent: 16px;
        font-weight: 500;
        color: #333333;
    }
    .content-right>form>ul>li>textarea{
        border-radius: 4px;
        background: #f7f7f7;
        outline: 0;
        border: none;
        width: 100%;
        height: 157px;
        padding: 16px;
        padding-top: 15px;
        position: relative;
        font-family: '微软雅黑', '宋体',serif;
        color: #333333;
    }
    .message{
        float: left;
    }
    .content-right>form>ul>li>div{
        color: #fff;
        outline: 0;
        border: none;
        cursor: pointer;
        display: inline-block;
        width: 100%;
        height: 45px;
        text-align: center;
        line-height: 43px;
        background: #e4b685;
        border-radius: 4px;
        font-size: 16px;
        position: relative;
    }

    textarea::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #757575;
        font-family: '微软雅黑', '宋体',serif;
    }
    textarea:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #757575;
        font-family: '微软雅黑', '宋体',serif;
    }
    textarea::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #757575;
        font-family: '微软雅黑', '宋体',serif;
    }
    textarea:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #757575;
        font-family: '微软雅黑', '宋体',serif;
    }
    /*=================响应式代码=====================*/
    @media screen and (min-width: 1221px) {
        .contact-wrap {
            padding-bottom: 20px;
        }
        .contact-top {
            background-image: url("../../assets/contact-us-bg.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: center center;
            position: relative;
            overflow: hidden;
            width: auto;
            height: auto;
            min-height: 350px;
        }
        .contact-top::after {
            content: "";
            width: 330px;
            height: 604px;
            display: inline-block;
            background: #ffffff;
            position: absolute;
            top: -130px;
            left: 49%;
            opacity: .42;
            transform: rotate(30deg);
        }
        .content-left i{
            font-size: 24px;
            vertical-align: middle;
            display: inline-block;
            margin-right: 10px;
            color: #7b9ee7;
        }
        .content-left span{
            color: #333333;
            font-weight: 500;
            font-family: '微软雅黑', '宋体', serif;
        }
    }
    @media screen and (min-width: 721px) and (max-width:1220px){
        .contact-wrap{
            padding-bottom: 20px;
        }
        .contact-content {
            display: flex;
        }
        .contact-top::after {
            content: "";
            width: 330px;
            height: 530px;
            display: inline-block;
            background: #ffffff;
            position: absolute;
            top: -120px;
            left: 49%;
            opacity: .42;
            transform: rotate(30deg);
        }
        .contact-top{
            background-image: url("../../assets/contact-us-bg.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: center center;
            position: relative;
            overflow: hidden;
            width: auto;
            height: auto;
        }
        .contact-title{
            text-align: center;
            font-size: 28px;
            position: relative;
            color: #fff;
            line-height: 72px;
            font-weight: 500;
            padding: 32px 0 20px;
            letter-spacing: 2px;
        }
        .content-left i {
            font-size: 24px;
            vertical-align: middle;
            display: inline-block;
            margin-right: 10px;
            color: #7b9ee7;
        }
        .content-left span {
            color: #333333;
        }
        .content-right>form>ul>li{
            width: 70%;
        }
    }
    @media screen and (min-width: 0px) and (max-width:720px) {
        .contact-top {
            position: relative;
            overflow: hidden;
            width: auto;
            height: auto;
        }
        .contact-wrap {
            padding: 15px;
        }
        .contact-title{
            display: none;
        }
        .mini-contact-title{

        }
        .contact-content{
            display: inline-block;
            padding-top: 0;
            height: auto;
            margin-top: 0;
        }
        .mini-contact-title{
            color: #333;
            min-height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            width: 100%;
            position: relative;
            z-index: 5;
        }
        .contact-desc-start, .contact-desc-end {
            display: none;
        }
        .content-left{
            display: none;
        }
        .content-right{
            padding-left: 0;
            width: 100%;
        }
        .content-right>form{
            width: 100%;
        }
        .content-right>form>ul>li{
            width: 100%;
            position: relative;;
            line-height: 0;
        }
        .content-right>form>ul>li:nth-child(4){
            display: flex;
            justify-content: center;
            margin-top: 0;
        }
        .content-right>form>ul>li>span{
            display: none;
        }
        .content-right>form>ul>li>input{
            width: 100%;
            margin-left: 0;
        }
        .content-right>form>ul>li>textarea{
            width: 100%;
            float: unset;
            left: 0;
        }
        .content-right>form>ul>li>div{
            background: #e4b685;
            left: unset;
            border-radius: 0;
            width: 40%;
        }
        .contact-tips{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

</style>
