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
    },
    update(state) {
      this.smallScreenNavbar = false;
    },
  },
};
</script>

<template>
  <main class="App">
    <Navbar :controlSmallScreenNavbar="this.controlSmallScreenNavbar" />
    <SmallScreenNavbar :smallScreenNavbar="this.smallScreenNavbar"  @update-state="update"/>
    <div class="content" :style="smallScreenNavbar ? {display : 'none'} : {display: 'block'}">
      <RouterView></RouterView>
    </div>
    <Footer :smallScreenNavbar="this.smallScreenNavbar" />
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
@media screen and (max-width: 480px) {
  .App {
    height: 65vh;
  }
  .content{
  position: relative;
  }
}
@media screen and (min-width: 481px) {
  .content{
  display: block;
  }
}
</style>
