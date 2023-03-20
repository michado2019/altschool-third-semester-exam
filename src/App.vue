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
      this.smallScreenNavbar = state;
    },
  },
};
</script>

<template>
  <main class="App">
    <Navbar :controlSmallScreenNavbar="this.controlSmallScreenNavbar" />
    <SmallScreenNavbar :smallScreenNavbar="this.smallScreenNavbar"  @update-state="update"/>
    <div class="content" :style="[smallScreenNavbar ? {display : 'none'} : {display: 'block'}]">
      <RouterView></RouterView>
    </div>
    <Footer :smallScreenNavbar="this.smallScreenNavbar" />
  </main>
</template>

<style scoped>
.App {
  margin: 0 auto;
}
</style>
