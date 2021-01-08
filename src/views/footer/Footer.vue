<template>
    <div class="footer-wrap">
        <div class="footer-qr">
            <div class="qr-img">
                <img src="../../assets/qr-img.jpg" width="150" height="150" alt="">
            </div>
            <span>{{qrDesc}}</span>
        </div>
        <div class="footer-content">
            {{copyright}}
        </div>
        <div class="mobile-footer-content">
            <p>Copyright © 2021-2021</p>
            <p>symhx.com All rights reserved.</p>
            <p>苏屿 版权所有</p>
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
                qrDesc: '长按识别或截图保存'
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
        background: #494b4c;
        color: #999;
        font-family: "PingFang SC";
        padding: 40px 15px 15px;
    }
    .footer-qr{
        margin-bottom: 20px;
    }
    .footer-content{
        font-size: 14px;
    }
    .mobile-footer-content>p{
        margin: 0;
        font-size: 14px;
    }
    /*=================响应式代码=====================*/
    @media screen and (min-width: 721px) {
        .footer-wrap {
        }
        .qr-img{
            margin-bottom: 20px;
        }
        .mobile-footer-content{
            display: none;
        }
    }
    @media screen and (min-width: 0px) and (max-width:720px) {
        .footer-wrap {
            background: #101010;;
        }
        .footer-content {
            display: none;
        }
        .qr-img{
            margin-bottom: 10px;
        }
    }
</style>
