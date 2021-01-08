<template>
    <div>
        <Header></Header>
        <Banner></Banner>
        <Server></Server>
        <ContactUS></ContactUS>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./header/Header";
    import Banner from "./banner/Banner";
    import Server from "./server/Server";
    import ContactUS from "./contact/ContactUS";
    import Footer from "./footer/Footer";
    export default {
        name: "PreView",
        components: {
            Header, Banner, Server, ContactUS, Footer
        }
    }
</script>

<style scoped>

</style>
