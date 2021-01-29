<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <Server></Server>

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
    import Introduction from "./introduction/Introduction";
    import Process from "./process/Process";
    import ContactUS from "./contact/ContactUS";
    import Footer from "./footer/Footer";
    export default {
        name: "PreView",
        components: {
            Header, Banner, Server, ContactUS, Process, Footer
        }
    }
</script>

<style scoped>

</style>
