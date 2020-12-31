<template>
    <div class="index_wrap">
        <div class="header white">
            <div>
                <img src="../assets/logo.png" alt="苏屿网络科技">
            </div>
            <div class="header-nav">
                <ul class="header-ul">
                    <li data-menuanchor="page1" :class="{'active': isActive}"><a href="#page1">首页</a></li>
                    <li data-menuanchor="page2"><a href="#page2">简介</a></li>
                    <li data-menuanchor="page3"><a href="#page3">业务</a></li>
                    <li data-menuanchor="page5"><a href="#page5">产品</a></li>
                    <li data-menuanchor="page6"><a href="#page6">案例</a></li>
                    <li data-menuanchor="page7"><a href="#page7">服务</a></li>
                    <li data-menuanchor="page8"><a href="#page8">联系</a></li>
                </ul>
                <i class="base-icon menu-icon"></i>
            </div>
        </div>
        <el-carousel :initial-index="initBannerIndex" trigger="click" indicator-position="outside" class="sy-banner-head" @change="changeBanner">
            <el-carousel-item v-for="(item,index) in imageList" :key="item">
                <img :src="item" :class="[bannerIndex===index?'selected_banner':'no_selected']" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: "Index",
        data() {
            return {
                imageList: [
                    require('../assets/banner_01_bg.jpg'),
                    require('../assets/banner_02_bg.jpg'),
                    require('../assets/banner_03_bg.jpg'),
                ],
                bannerIndex: 1,
                initBannerIndex: 0,
                isActive: true
            };
        },
        mounted() {
            setTimeout(() => {
                this.bannerIndex = 0;
            }, 1);
        },
        created() {
        },
        methods: {
            changeBanner(index) {
                this.bannerIndex = index;
            }
        },
        components: {
        }
    };
</script>
<style scoped>
    .index_wrap {
        position: relative;
        overflow: hidden;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .selected_banner{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: all 3s ease-out;
    }
    .no_selected{
        position: absolute;
        width: 120%;
        height: 120%;
        top: -10%;
        left: -10%;
        overflow: hidden;
    }
    /deep/ .el-carousel__indicators--outside{
        position: absolute!important;
    }
    /deep/ .el-carousel__container {
        position: relative!important;
        height: 100vh !important;
        width: 100vw !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header.white {
        box-shadow: none;
        background-color: transparent;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 36px;
        height: 60px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99;
    }
    .header>div>img{
        vertical-align: middle;
        width: 40px;
        height: 30px;
    }
    .header-nav {
        display: flex;
        align-items: center;
    }
    .header-nav>ul {
        display: flex;
    }
    .header-nav>ul>li {
        margin-right: 16px;
        height: 45px;
        line-height: 45px;
        padding: 0 8px;
        position: relative;
        cursor: pointer;
    }
    ul li {
        list-style: none;
    }
    .white .header-nav>ul>li.active::before {
        border-bottom: 2px solid #FFFFFF;
        width: 100%;
    }
    .white .header-nav>ul>li::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        border-bottom: 2px solid #fff;
        transition: 0.2s all linear;
    }
    .white .header-nav>ul>li.active>a {
        color: #FFFFFF;
        text-decoration: none;
    }
    .white .header-nav>ul>li>a {
        color: #ffffff;
        text-decoration: none;
    }
    .white .header-nav>ul>li:hover::before {
        left: 0;
        width: 100%;
    }
</style>
