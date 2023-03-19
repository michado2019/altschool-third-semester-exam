<script>
  export default{
    name: 'NotFoundPage'
  }
</script>
<template>
  <div class="notFound-page_wrapper">
    <div class="notFound-page_detail">Page not found</div>
    <router-link to="/" class="notFound-page_home">Go back home</router-link>
  </div>
</template>

<style scoped>
.notFound-page_wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65vh;
  background-color: #111;
}
.notFound-page_detail{
  color: #745b21;
  font-size: 32px;
  font-size: 600;
  padding-bottom: 20px;
}
.notFound-page_home{
  text-decoration: none;
  background-color: #098c1a;
  border-radius: 7px;
  color: #f2f2f2;
  border: 0;
  padding: 10px 40px;
}
</style>
