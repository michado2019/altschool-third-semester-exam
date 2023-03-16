<script>
import Navbar from "./components/layouts/Navbar.vue";
import Footer from "./components/layouts/Footer.vue";
import SmallScreenNavbar from "./components/SmallScreenNavbar.vue";
export default {
  name: "App",
  components: { Navbar, Footer, SmallScreenNavbar },
  data() {
    return {
      smallScreenNavbar: true,
    };
  },
  methods:{
    controlSmallScreenNavbar(){
     this.smallScreenNavbar = !this.smallScreenNavbar
     console.log(this.smallScreenNavbar)   
    }
  }
};
</script>

<template>
  <main class="App">
    <Navbar :controlSmallScreenNavbar="this.controlSmallScreenNavbar" />
    <SmallScreenNavbar :smallScreenNavbar="this.smallScreenNavbar"/>
    <RouterView></RouterView>
    <Footer />
  </main>
</template>

<style scoped>
.App {
  max-width: 70%;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .App {
    max-width: 100%;
  }
}
</style>
