<script>
export default {
  name: "Navbar",
  props: ["controlSmallScreenNavbar"],
};
</script>

<template>
  <div class="navbarWrapper">
    <nav class="navbarNav">
      <h2 class="navbarLogo">GApp</h2>
      <ul class="navbarLists">
        <Router-link to="/" class="navbarLinks">
          <li class="navbarList">Home</li>
        </Router-link>
        <Router-link to="/about" class="navbarLinks">
          <li class="navbarList">About</li>
        </Router-link>
        <Router-link to="/contact" class="navbarLinks">
          <li class="navbarList">Contact</li>
        </Router-link>
      </ul>
      <img
        src="data:image/jpeg;base64,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"
        alt="menu"
        class="navbarMenu"
        @click="controlSmallScreenNavbar"
      />
    </nav>
  </div>
</template>

<style scoped>
.navbarWrapper {
  height: 100px;
  background-color: #212121;
  position: sticky;
  top: 0;
  left: 0;
}
.navbarNav {
  display: flex;
  align-items: center;
  padding: 30px 20px;
}
.navbarLogo {
  margin-right: auto;
  text-decoration: none;
  font-weight: 900;
  color: #745b21;
  font-size: 24px;
}
.navbarLists {
  display: flex;
  align-items: center;
}
.navbarLinks {
  color: #098c1a;
  text-decoration: none;
}
.navbarList {
  cursor: pointer;
  margin: 0 10px;
  font-weight: 700;
  font-size: 20px;
  list-style: none;
}
.router-link-exact-active {
  color: red;
}
.navbarMenu {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
}
@media screen and (max-width: 480px) {
  .navbarNav {
    box-shadow: 10px 3px 4px #3a3a3a;
  }
  .navbarLists {
    display: none;
  }
}
@media screen and (min-width: 481px) {
  .navbarMenu {
    display: none;
  }
}
</style>
