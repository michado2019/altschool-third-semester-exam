<script>
import Navbar from "./components/layouts/Navbar.vue";
import Footer from "./components/layouts/Footer.vue";
import SmallScreenNavbar from "./components/SmallScreenNavbar.vue";
export default {
  name: "App",
  components: { Navbar, Footer, SmallScreenNavbar },
  data() {
    return {
      smallScreenNavbar: false,
    };
  },
  methods: {
    controlSmallScreenNavbar() {
      this.smallScreenNavbar = !this.smallScreenNavbar;
      console.log(this.smallScreenNavbar);
    },
  },
};
</script>

<template>
  <main class="App">
    <Navbar :controlSmallScreenNavbar="this.controlSmallScreenNavbar" />
    <SmallScreenNavbar :smallScreenNavbar="this.smallScreenNavbar" />
    <div>
      <RouterView></RouterView>
    </div>
    <Footer />
  </main>
</template>

<style scoped>
.App {
  max-width: 70%;
  margin: 0 auto;
}
@media screen and (max-width: 830px) {
  .App {
    max-width: 80%;
  }
}
@media screen and (max-width: 768px) {
  .App {
    max-width: 100%;
  }
}
</style>
