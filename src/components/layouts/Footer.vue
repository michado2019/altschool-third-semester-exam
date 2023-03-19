<script>
export default {
  name: "Footer",
};
</script>

<template>
  <div class="footerWrapper">
    <div class="footerContents-one">
      <Router-link to="/" class="footerLinks"> GApp </Router-link>
      <Router-link to="/" class="footerLinks"> Home </Router-link>
      <Router-link to="/about" class="footerLinks"> About </Router-link>
      <Router-link to="/contact" class="footerLinks"> Contact me </Router-link>
    </div>
    <div class="footerContents-two">
      <h3 class="footerCopyright">All right reserved</h3>
      <p class="footerCopyright">&copy; Michado2023.</p>
    </div>
  </div>
</template>

<style scoped>
.footerWrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #111;
  height: 121px;
  border-top: 1px solid #3a3a3a;
  top: 100%;
}
.footerContents-one {
  display: grid;
  grid-template-columns: 2fr 2fr;
}
.footerContents-two {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footerLinks{
  color: #22662b;
  text-decoration: none;
  font-weight: 550;
}
.footerCopyright{
  color: #22662b;
  font-weight: 550;
  font-size: 14px;
}
@media screen and (max-width: 565px) {
.footerWrapper {
  height: 172px;
}
}
@media screen and (max-width: 450px) {
.footerWrapper {
  height: 190px;
}
}
</style>
