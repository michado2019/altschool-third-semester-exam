<script>
export default {
  name: "Repos",
  data() {
    return {
      repos: [],
      isLoading: false,
      error: "",
      page: 1,
      skip: "",
      pages: "",
      perPage: "",
    };
  },
  methods: {
    fetchRepos() {
      const url = "https://api.github.com/users/michado2019/repos";

      fetch(url)
        .then((response) => response.json())
        .then((response) => ([...this.repos] = response))
        .finally(() => (this.isLoading = false));
    },
  },
  mounted() {
    this.fetchRepos();
  },
  watch: {
    repos() {
      this.perPage = 2;
      this.pages = Math.ceil(this.repos.length / this.perPage);
      this.skip = this.page * this.perPage - this.perPage;
    },
  },
};
</script>
<template>
  <div class="reposWrapper">
    <img
      v-if="isLoading"
      src="https://help.presentations2go.eu/LTI/lib/Spinner.gif"
      alt="spinner"
      class="reposIsloading"
    />
    <div v-if="error" class="reposError">{{ error }}</div>
    <div v-else class="reposGrid">
      <div
        v-for="(repo, index) in repos.slice(
          this.skip,
          this.skip + this.perPage
        )"
      >
        <div class="reposContents">
          <div class="reposContent-div">
            <div class="repoContents">
              <h2 class="reposTitle">Repo overview</h2>
              <div class="reposUpper-part_one">
                <h2 class="reposIndex">{{ index + 1 }}</h2>
                <div class="reposUpper-part_two">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="img"
                    class="reposStar"
                  />
                  <h3 class="reposStar-count">({{ repo.stargazers_count }})</h3>
                </div>
              </div>
              <div class="reposImg-arrow_div">
                <img
                  :src="repo.owner.avatar_url"
                  alt="img"
                  class="reposAvatar"
                />
                <img
                  src="data:image/jpeg;base64,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"
                  alt="img"
                  class="reposArrow-img"
                />
              </div>
              <h2 class="reposCreated-at">Created at: {{ repo.created_at }}</h2>
              <h2 class="reposCreated-at">Updated at: {{ repo.updated_at }}</h2>
              <Router-link :to="`/repos/${repo.id}`">
                <button class="reposMore-btn">more</button>
              </Router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reposWrapper {
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  justify-content: center;
  height: 100%;
}
.reposIsloading {
  padding-top: 50px;
  margin-bottom: 50px;
  width: 200px;
  height: 200px;
}
.reposGrid {
  display: grid;
  grid-template-columns: 2fr 2fr;
}
.reposContents {
  width: 250px;
  height: 250px;
  border-radius: 7px;
  border: 1px solid #ddd;
  margin: 30px;
  box-shadow: 2px 4px 5px #212121;
}
.repoContents {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.reposTitle {
  color: #745b21;
  font-size: 18px;
  font-weight: 550;
}
.reposContent-div {
  margin: 7px;
}
.reposUpper-part_one {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.reposIndex {
  font-size: 16px;
  color: #098c1a;
  font-weight: 600;
}
.reposUpper-part_two {
  display: flex;
  align-items: center;
}
.reposStar {
  widows: 25px;
  height: 25px;
}
.reposStar-count {
  color: #745b21;
  font-size: 12px;
}
.reposImg-arrow_div {
  display: flex;
  align-items: self-end;
}
.reposArrow-img {
  widows: 10px;
  height: 30px;
  margin-left: 50px;
  margin-top: -20px;
  animation: reposArrow-img 2s infinite;
}
@keyframes reposArrow-img {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.reposAvatar {
  width: 150px;
  height: 120px;
  border-radius: 7px;
}
.reposCreated-at {
  font-size: 8.4px;
  font-weight: 900;
  margin-top: 5px;
  color: #f2f2f2;
}
.reposMore-btn {
  padding: 2px 5px;
  background-color: #745b21;
  border-radius: 4px;
  width: 20%;
  cursor: pointer;
  border: 0;
  color: #f2f2f2;
  font-weight: 700;
  margin-left: 80%;
  margin-top: -20px;
}
</style>
