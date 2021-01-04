<template>
    <div>
        <ContactUS></ContactUS>
        <Footer></Footer>
    </div>
</template>

<script>
    import ContactUS from "./contact/ContactUS";
    import Footer from "./footer/Footer";
    export default {
        name: "PreView",
        components: {
            ContactUS, Footer
        }
    }
</script>

<style scoped>

</style>
