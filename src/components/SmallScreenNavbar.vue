<script>
export default {
  name: "SmallScreenNavbar",
  props: ["smallScreenNavbar"],
  data() {
    return {
      close: this.smallScreenNavbar,
    };
  },
  methods: {
    handleState(state) {
      this.close = state;
      this.$emit("update-state", this.close);
    },
  },
};
</script>
<template>
  <div
    class="smallScreen-wrapper"
    :style="[
      smallScreenNavbar
        ? { marginLeft: '0', transition: 'all 0.5s' }
        : { marginLeft: '-500px', transition: 'all 0.5s' },
    ]"
  >
    <nav class="smallScreen-navbar_nav">
      <ul class="smallScreen-navbar_lists">
        <Router-link to="/" class="smallScreen-navbar_links">
          <li class="smallScreen-navbar_list" @click="handleState(state)">
            Home
          </li>
        </Router-link>
        <Router-link to="/about" class="smallScreen-navbar_links">
          <li class="smallScreen-navbar_list" @click="handleState(state)">
            About
          </li>
        </Router-link>
        <Router-link to="/contact" class="smallScreen-navbar_links">
          <li class="smallScreen-navbar_list" @click="handleState(state)">
            Contact
          </li>
        </Router-link>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.smallScreen-wrapper {
  background-color: #111;
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
  .smallScreen-wrapper {
    display: block;
  }
}
</style>
