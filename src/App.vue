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

<style scoped></style>
