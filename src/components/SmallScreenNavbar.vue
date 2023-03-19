<script>
export default {
  name: "SmallScreenNavbar",
  props: ['smallScreenNavbar'],
  data(){
    return{
    newState: this.smallScreenNavbar
    }
  },

  methods: {
    handleSmallNav(condition){
      this.newState = condition
    }
  }
};
</script>

<template>
  <div class="smallScreen-wrapper" :style= "[smallScreenNavbar ? {marginLeft: '0', transition: 'all 0.5s'} : {marginLeft: '-500px', transition: 'all 0.5s'}]" >
    <nav class="smallScreen-navbar_nav">
      <ul class="smallScreen-navbar_lists">
        <Router-link to="/" class="smallScreen-navbar_links">
          <li class="smallScreen-navbar_list">Home</li>
        </Router-link>
        <Router-link to="/about" class="smallScreen-navbar_links">
          <li class="smallScreen-navbar_list">About</li>
        </Router-link>
        <Router-link to="/contact" class="smallScreen-navbar_links">
          <li class="smallScreen-navbar_list">Contact</li>
        </Router-link>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.smallScreen-wrapper{
  background-color: #212121;
  left: 0;
  width: 100%;
  height: 65vh;
  position: absolute;
}
.smallScreen-navbar_nav {
  margin-left: -40px;
  padding-top: 130px;
}
.smallScreen-navbar_lists {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.smallScreen-navbar_links {
  text-decoration: none;
}
.smallScreen-navbar_list {
  list-style: none;
  font-size: 32px;
  font-weight: 600;
  color: #745b21;
}
@media screen and (min-width: 481px) {
    .smallScreen-wrapper{
        display: none;
    }
}
</style>
