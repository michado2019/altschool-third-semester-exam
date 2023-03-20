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
      <div v-for="(repo, index) in repos" :key="repo.id">
        <div class="reposContents" v-if="repo.id == $route.params.id">
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
              </div>
              <h2 class="reposCreated-at">Created at: {{ repo.created_at }}</h2>
              <h2 class="reposCreated-at">Updated at: {{ repo.updated_at }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div v-for="repo in repos" :key="repo.id" class="reposDetail-wrapper">
          <div class="reposDetailContents" v-if="repo.id == $route.params.id">
            <div class="reposDetail">
              <div>{{ repoDetails[0] }}</div>
              <div id="reposDetail">{{ repo.name }}</div>
            </div>
            <div class="reposDetail">
              <div>{{ repoDetails[1] }}</div>
              <div id="reposDetail">{{ repo.forks }}</div>
            </div>
            <div class="reposDetail">
              <div>{{ repoDetails[2] }}</div>
              <div id="reposDetail">{{ repo.watchers }}</div>
            </div>
            <div class="reposDetail">
              <div>{{ repoDetails[3] }}</div>
              <div id="reposDetail">{{ repo.visibility }}</div>
            </div>
            <div class="reposDetail">
              <div>{{ repoDetails[4] }}</div>
              <div id="reposDetail">{{ repo.open_issues }}</div>
            </div>
            <div class="reposDetail">
              <div>{{ repoDetails[5] }}</div>
              <div id="reposDetail">{{ repo.default_branch }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Repo",
  data() {
    return {
      repos: [],
      isLoading: true,
      error: "",
      repoDetails: [
        "Name",
        "Forked",
        "Watchers",
        "Visibility",
        "Open issues",
        "Default branch",
      ],
    };
  },
  methods: {
    fetchRepos() {
      const url = "https://api.github.com/users/michado2019/repos";

      fetch(url)
        .then((response) => response.json())
        .then((response) => (this.repos = response))
        .finally(() => (this.isLoading = false));
    },
  },
  mounted() {
    this.fetchRepos();
  },
};
</script>

<style scoped>
.reposWrapper {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  justify-content: center;
  height: 65vh;
}
.reposIsloading {
  padding-top: 50px;
  margin-bottom: 50px;
  width: 200px;
  height: 200px;
}
.reposGrid {
  display: flex;
  align-items: center;
}
.reposContents {
  width: 250px;
  height: 350px;
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
@keyframes reposArrow-img {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.reposAvatar {
  width: 250px;
  height: 200px;
  border-radius: 7px;
}
.reposCreated-at {
  font-size: 12.7px;
  font-weight: 900;
  margin-top: 15px;
  color: #f2f2f2;
}
.reposDetail-contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.reposDetail {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  color: #f2f2f2;
  font-size: 10px;
  line-height: 14px;
  width: fit-content;
  border-bottom: 5px solid #098c1a;
}
#reposDetail {
  font-size: 14px;
  box-shadow: 1px 2px 3px 2px #745b21;
  font-weight: 800;
}
@media screen and (max-width:540px) {
  .reposWrapper{
    height: 100%;
    padding: 50px 0;
  }
  .reposGrid {
    flex-direction: column;
  }
}
</style>
