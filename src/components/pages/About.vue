<script>
export default {
  name: "About",
};
</script>

<template>
  <div class="aboutWrapper">
    <div class="aboutContents">
      Create a new vue js application then using the GitHub API, fetch your
      GitHub repositories using this endpoint <span class="aboutLink">https://api.github.com/users/{{
        USERNAME
      }}/repos</span>. show a page with a list of all your repositories on GitHub(the
      page should have some form of pagination). Then create another page
      showing data for a single repo clicked from the list of repos using nested
      routes. Make sure to implement a wildcard route to catch 404 pages. NB:
      Good UI and Designs are important.
    </div>
  </div>
</template>

<style scoped>
.aboutWrapper{
  height: 65vh;
  padding-top: 50px;
  background-color: #212121;
}
.aboutContents{
  width: 70%;
  color: #ccc8c8;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  line-height: 38px;
}
.aboutLink{
  color: #745b21
}
</style>
