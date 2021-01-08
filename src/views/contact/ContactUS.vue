<template>
    <div class="contact-wrap">
        <div class="contact-title">
            {{contactTitle}}
        </div>
        <p class="contact-desc">{{contactDesc}}</p>
        <p class="contact-desc-one">{{contactOne}}</p>
        <p class="contact-desc-two">{{contactTwo}}</p>
        <div class="contact-content">
            <div class="content-left">
                <ul>
                    <li>
                        <span>Q  Q：</span><span>{{contentLeft.qq}}</span>
                    </li>
                    <li>
                        <span>微信：</span><span>{{contentLeft.wx}}</span>
                    </li>
                    <li>
                        <span>邮箱：</span><span>{{contentLeft.mail}}</span>
                    </li>
                    <li>
                        <span>电话：</span><span>{{contentLeft.phone}}</span>
                    </li>
                    <li>
                        <span>地址：</span><span>{{contentLeft.address}}</span>
                    </li>
                </ul>
            </div>
            <div class="content-right">
                <form>
                    <ul>
                        <li>
                            <span>姓名：</span><input type="text" placeholder="您的称呼">
                        </li>
                        <li>
                            <span>电话：</span><input type="text" placeholder="您的电话号码">
                        </li>
                        <li>
                            <span class="message">留言：</span><textarea type="text" style="resize: none" cols="10" rows="10" placeholder="您的创意"></textarea>
                        </li>
                        <li>
                            <div @click="delivery">投递</div>
                        </li>
                    </ul>
                </form>
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
                contactDesc: '为您提供定制产品和品牌设计服务, 让您的创意成为可能',
                contactOne: '为您提供定制产品和品牌设计服务',
                contactTwo: '让您的创意成为可能',
                // 数据对象
                contentLeft: {
                    qq: '1766470919',
                    wx: 'Jun1766470919',
                    mail: '1766470919@qq.com',
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
        font-family: '微软雅黑','宋体';
    }
    .contact-title {
        text-align: center;
        font-size: 48px;
        position: relative;
        color: #c7a480;
        line-height: 72px;
        font-weight: 500;
        padding: 25px 0;
        letter-spacing: 2px;
    }
    .contact-title::after {
        content: '';
        position: absolute;
        width: 40px;
        height: 2px;
        background: #ccc;
        left: 50%;
        bottom: 0;
        margin-left: -20px;
    }
    .contact-desc {
        margin-top: 25px;
        color: #999;
        font-size: 24px;
        font-weight: 500;
        display: block;
    }
    .contact-content{
        display: flex;
        margin-top: 50px;
        width: 100%;
        padding-top: 25px;
    }
    .content-left{
        position: relative;
        text-align: left;
        width: 50%;
        color: #666;
        display: flex;
        justify-content: flex-end;
        padding-right: 50px;
    }
    .content-right{
        position: relative;
        width: 50%;
        color: #666;
        display: flex;
        justify-content: flex-start;
        padding-left: 50px;
    }
    .content-left>ul{
        position: relative;
        display: inline-block;
    }
    .content-left>ul>li{
        line-height: 36px;
    }
    .content-right>form{
        height: 100%;
        text-align: left;
    }
    .content-right>form>ul{
        position: relative;
    }
    .content-right>form>ul>li{
        line-height: 45px;
        margin-bottom: 15px;
        width: 600px;
        color: #333;
        font-size: 16px;
        overflow: auto;
    }
    .content-right>form>ul>li>input{
        background: #f7f7f7;
        outline: 0;
        border: none;
        height: 45px;
        width: 55%;
        text-indent: 14px;
        font-weight: 500;
        margin-left: 10px;
    }
    .content-right>form>ul>li>textarea{
        background: #f7f7f7;
        outline: 0;
        border: none;
        width: 55%;
        height: 157px;
        text-indent: 14px;
        padding-top: 15px;
        position: relative;
        left: 10px;
        font-family: '微软雅黑', '宋体';
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
        width: 130px;
        height: 45px;
        text-align: center;
        line-height: 43px;
        background: #c7a480;
        border-radius: 8px;
        font-size: 16px;
        position: relative;
        left: 60px;
    }

    textarea::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #757575;
        font-family: '微软雅黑', '宋体';
    }
    textarea:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #757575;
        font-family: '微软雅黑', '宋体';
    }
    textarea::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #757575;
        font-family: '微软雅黑', '宋体';
    }
    textarea:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #757575;
        font-family: '微软雅黑', '宋体';
    }
    .contact-desc-one,.contact-desc-two{
        display: none;
    }
    /*=================响应式代码=====================*/
    @media screen and (min-width: 1221px) {
        .contact-wrap {
        }

    }
    @media screen and (min-width: 721px) and (max-width:1220px){
        .contact-content {
            display: flex;
        }
    }
    @media screen and (min-width: 0px) and (max-width:720px) {
        .contact-wrap {
            background-image: url("../../assets/mobile-bg-01.jpg");
            background-size: 100% 100%;
            padding: 0 15px;
        }
        .contact-title{
            color: #fff;
        }
        .contact-content{
            display: inline-block;
            margin-top: 0;
        }
        .contact-desc{
            display: none;
        }
        .contact-desc-one,.contact-desc-two{
            display: block;
            color: #ff7600ba;
            margin-top: 20px;
            font-size: 20px;
            font-weight: 500;
        }
        .content-left{
            margin-bottom: 32px;
            width: 100%;
            padding-right: 0;
        }
        .content-left>ul>li{
            color: #fff;
        }
        .content-left>ul{
            left: unset;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            font-size: 15px;
            padding: 0 10px;
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
            margin-top: 32px;
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
            left: unset;
            border-radius: 0;
            width: 44%;
        }
        .contact-tips{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

</style>
