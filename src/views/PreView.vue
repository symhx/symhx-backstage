<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <Server></Server>
        <Introduction></Introduction>
        <ContactUS></ContactUS>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./header/Header";
    import Banner from "./banner/Banner";
    import Server from "./server/Server";
    import Introduction from "./introduction/Introduction";
    import ContactUS from "./contact/ContactUS";
    import Footer from "./footer/Footer";
    export default {
        name: "PreView",
        components: {
            Header, Banner, Server, Introduction, ContactUS, Footer
        }
    }
</script>

<style scoped>

</style>
