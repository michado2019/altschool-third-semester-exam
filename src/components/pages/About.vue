<script>
export default {
  name: "About",
};
</script>

<template>
  <div class="aboutWrapper">
    <div class="aboutContents">
      A vue js app using the GitHub API to fetch my GitHub repositories. Shows a page with a list of all my repositories on GitHub(the page has
      a form of pagination). It has a single page showing data for a single repo
      clicked from the list of repos using nested routes. It uses a wildcard
      route to catch 404 pages.
    </div>
  </div>
</template>

<style scoped>
.aboutWrapper {
  height: 65.2vh;
  padding-top: 100px;
  background-color: #111;
}
.aboutContents {
  width: 70%;
  color: #ccc8c8;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  line-height: 38px;
}
.aboutLink {
  color: #745b21;
}
@media screen and (max-width: 600px) {
  .aboutWrapper{
  padding-bottom: 250px;
  }
  .aboutContents {
    width: 90%;
    font-size: 18px;
  }
}
@media screen and (max-width: 410px) {
  .aboutWrapper{
  padding-bottom: 400px;
  }
}
@media screen and (max-width: 345px) {
  .aboutWrapper{
  padding-bottom: 450px;
  }
}
</style>
