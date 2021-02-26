<template>
    <div class="banner-wrap">
        <el-carousel :initial-index="initBannerIndex" trigger="click" :interval="5000" indicator-position="inside" class="sy-banner-head" @change="changeBanner">
            <el-carousel-item v-for="(item,index) in imageList" :key="item">
                <img :src="item" :class="[bannerIndex===index?'selected_banner':'no_selected']" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        data() {
            return {
                imageList: [
                    require('../../assets/web-bg-02.jpg'),
                    require('../../assets/web-bg-03.png'),
                    require('../../assets/banner_04.png'),
                ],
                bannerIndex: 1,
                initBannerIndex: 0,
                isActive: true
            }
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
    }
</script>

<style scoped>
    .banner-wrap {
        padding-top: 72px;
        position: relative;
        overflow: hidden;
        width: 100%;
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
        transition: all 2s ease-out;
    }
    .no_selected{
        position: absolute;
        width: 110%;
        height: 110%;
        top: -5%;
        left: -5%;
        overflow: hidden;
    }
    /deep/ .el-carousel__indicators--outside{
        position: absolute!important;
    }
    /deep/ .el-carousel__container {
        position: relative!important;
        height: 60vh !important;
        width: 100vw !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /*=================响应式代码=====================*/
    @media screen and (min-width: 721px) {

    }
    @media screen and (min-width: 0px) and (max-width:720px) {
        /deep/ .el-carousel__container {
            height: 30vh !important;
        }
    }
</style>
