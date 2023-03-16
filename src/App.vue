<script>
import Navbar from './components/layouts/Navbar.vue'
import Footer from './components/layouts/Footer.vue'
 export default{
  name: 'App',
  components: {Navbar, Footer}
 }
</script>

<template>
  <main class="App">
    <Navbar />
    <RouterView></RouterView>
    <Footer />
  </main>
</template>

<style scoped>
.App{
  max-width: 70%;
  margin: 0 auto;
}
</style>
