<template>
    <div class="contact-wrap">
        <div class="contact-title">
            {{contactTitle}}
        </div>
        <p class="contact-desc">{{contactDesc}}</p>
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
                <form action="">
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
                            <button>提交</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUS",
        data() {
            return {
                contactTitle: '联系我们',
                contactDesc: '为您提供定制产品和品牌设计服务, 让您的创意成为可能',
                contentLeft: {
                    qq: '1766470919',
                    wx: 'Jun1766470919',
                    mail: '1766470919@qq.com',
                    phone: '184 8365 0305',
                    address: '成都市高新区天府软件园G1区1206'
                }
            };
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
        color: #333;
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
        width: 100%;
        color: #666;
    }
    .content-right{
        position: relative;
        width: 100%;
        color: #666;
    }
    .content-left>ul{
        position: relative;
        display: inline-block;
        left: 50%;
    }
    .content-left>ul>li{
        line-height: 36px;
        min-width: 299px;
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
        width: 90%;
        text-indent: 14px;
        font-weight: 500;
        margin-left: 10px;
    }
    .content-right>form>ul>li>textarea{
        background: #f7f7f7;
        outline: 0;
        border: none;
        width: 90%;
        height: 157px;
        text-indent: 14px;
        padding-top: 15px;
        float: right;
        position: relative;
        left: -2px;
        font-family: '微软雅黑', '宋体';
    }
    .content-right>form>ul>li>button{
        color: #fff;
        outline: 0;
        border: none;
        cursor: pointer;
        display: inline-block;
        width: 130px;
        height: 45px;
        text-align: center;
        line-height: 43px;
        background: #3b97e6;
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
    /*=================响应式代码=====================*/
    @media screen and (min-width: 1220px) {
        .contact-wrap {
            background-color:red;

        }
    }
    @media screen and (min-width: 720px) and (max-width:1220px){
        .contact-content {
            display: flex;
        }
    }
    @media screen and (min-width: 375px) and (max-width:720px) {
        .contact-wrap {
            background-color: #ffffff;
            padding: 0 15px;
        }
        .contact-content{
            display: inline-block;
            margin-top: 0;
        }
        .content-left>ul>li{
            padding-left: 40px;
        }
        .content-left>ul{
            left: unset;
            width: 100%;
        }
        .content-right>form>ul>li{
            width: 100%;
        }
        .content-right>form>ul>li>input{
            width: 80%;
        }
        .message{
            float: left;
        }
        .content-right>form>ul>li>textarea{
            width: 80%;
            left: 10px;
            float: unset;
        }
    }

</style>
