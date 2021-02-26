<template>
    <div class="parent-wrap" @scroll="scrollEvent()">
        <div class="tool-wrap">
            <ul>
                <li>
                    <span>1</span>
                </li>
                <li>
                    <span>2</span>
                </li>
            </ul>
        </div>
        <Header></Header>
        <Banner></Banner>
        <Server></Server>
        <Superiority></Superiority>
        <!--
        banner
        superiority
        特色
        案例
        流程
        -->

<!--        <Introduction></Introduction>-->
        <Process></Process>
        <ContactUS></ContactUS>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./header/Header";
    import Banner from "./banner/Banner";
    import Server from "./server/Server";
    import Superiority from "./superiority/Superiority";
    import Introduction from "./introduction/Introduction";
    import Process from "./process/Process";
    import ContactUS from "./contact/ContactUS";
    import Footer from "./footer/Footer";
    export default {
        name: "PreView",
        methods: {
            scrollEvent(e) {
                console.log(e)
            }
        },
        components: {
            Header, Banner, Server,Superiority, Process,  ContactUS, Footer
        }
    }
</script>

<style scoped>
    .parent-wrap{
        position: relative;
        width: 100%;
    }
    .tool-wrap{
        position: fixed;
        bottom: 50px;
        right: 60px;
        z-index: 999;
    }
    .tool-wrap>ul>li {
        margin-bottom: 10px;
        width: 46px;
        height: 46px;
        background: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tool-wrap>ul>li:hover{
        cursor: pointer;
        background: #f5f5f5;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
    }
</style>
