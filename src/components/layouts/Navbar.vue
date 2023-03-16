<script>
export default {
  name: "Navbar",
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
    </nav>
  </div>
</template>

<style scoped>
.navbarWrapper {
  height: 100px;
  background-color: #212121;
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
  color: #1a4520;
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
</style>
