<script>
import CustomFetch from "../CustomFetch.vue";

export default {
  name: "Repos",
  components: { CustomFetch },
};
</script>

<template>
  <div class="reposWrapper">
    <CustomFetch url="https://api.github.com/users/michado2019/repos">
      <template v-slot:dataContext="{ isLoading, response, error }">
        <div v-if="isLoading" class="reposIsloading">Loading....</div>
        <div v-if="error" class="reposError">{{ error }}</div>
        <div v-else class="reposGrid">
          <div v-for="(repo, index) in response" :key="repo.id">
            <div class="reposContents">
              <div class="reposContent-div">
                <div class="repoContents">
                  <h2 class="reposTitle">Repo overview</h2>
                  <div class="reposUpper-part_one">
                    <h2 class="reposIndex">{{ index + 1 }}</h2>
                    <div class="reposUpper-part_two">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAAk1BMVEX////+zgD/vg7///3/vQD+zAD+wQv/uwD7ywD7uwD///j/3lX+vwz90x/+1jL+2kH9+un89Nv+/PD656D+3Uv56af67LH500H+/OX89tj844n+2Tn+xgj87rj7vxj60DL88s/5zFz511j65Zf78cL62mX60035yET32IT988r72278xDj9zVX51G375q776rv52ZDIvKVrAAAER0lEQVR4nO2a3XaqMBCFE0OagIKAosU/sGrVcqx9/6c7SQiiiBQpkZvsq67WBZ97diYTKABaWlpaWlpaWlpaWlpaWvWFEEBdMwBgWV0TAOB/fPidAvBKbDDe8Jp0KZ9CSK1OY4HACEOIR91m048gU+R2iJAaweqx6RBCGEG7toIZQW0oUtGNeKtkLnAGZkdHfZNBBBhiR0DgoAsEnkqeCCeFgFFXbZMZQccYZlZ0Ug9uxHwOpabdWBGwWI7tDKKLVLDVwBMxhhdFLy8HEomAfQfDKytevJkiYHEj+ja8suLV0w0CE+bBeHjFAPHk1QvEmhaNYAvk1VaIRPRvGLgVL1VqxPAW4tVWiEQUqsGsWKZzJwIq04GyyzvciDEtQMBIfgopXKziyshyw41IhFNkgHgTusrPIe/bYLb7tCmzYF6MpRCl9uduFmzfW3Miv5AbHkezXUQXGLMRgt/N7t/FMvcDYkwjxnIM3eurNQSz/PA4me2mNoX89vLb2rbNfOjb+BFFSgIppvZ+ffg+er4lktIE4fj1GVF6+e6248yHw/F43Be6j2UZikGISVbJv1Pc0Agnu/l8PpR3vtJ9LEv01hMyDJI0hJjQ1FZZBcp4hB3OkKnYI0q16EkZ5nfTPTa4cbwyAqXCgwyCMTQW9+L5e98bQZagcQNDYFknfb8xGOayuQ+c/Q8UOGNYnZuuTyDbS3OKbGWY5+aNSnKAbUOKxUAyNO0QOQSzcVtrNRYlV4axOv7RB5Bu3k0oLgzbFmYLkaj4+Yos8lq0MVtwM8OoGUMStjRjIV6S+DmKjCFu7zwkvHimImkgjJXXvE+WYgC3fjoFw8BYue2Ou/xi3rTmLiJ92Ht/X5v38urlAotOSRKv/bmfX8+vHuikUgZWi1YDket9WsOHgaiFq+45wa/7SFqLHtm206PKIX6ph2TomSohRtUQl3GOqHzC+1UJsbiMlMZJIURlMHMGFkx1DG5Vp7hMtWLXUPdUM/49klKDWBnE8mEk8hOGtOKsDGL2CGJRYOgRdW8Id7VKIZxYK3tgVJ7LOxtEMhUhAKusGiU2iJ5pqXh4xkoclkAsyhl6JFRSj/RJci0bOMQfjuGVEJsCBOZpIIZByiB+lEAAlC8OQcNbpEFOoXci9xjkpKYaVlR0wTBPMf9bvDaN4vLYq3mc6dICgrE/o/SgaG33pIBhqtg9EDjiC8IbL0RyTh0XrRGdCxjsAKgCQi4OnGYh+b5uBPx18Tm5xlC0PPjOwUzg/ZEkgQ9udgcxjQdJnlByUALxkdaB5/GHF/xmikx/9g9mhsF2DwWy9oJgQN5+KjLn/0gMNXONtxqIE+bBfbwr8N+7h5XAYMfh9hUbojGE2c0eULA/eSfuBokVQASEt8fqvTF7MRSe2IdVLA9vv37iuUu83ocKIPj/t9U8VvGPKXkLJdpibSMub+y0tLS0tLS0tLS0tLS0tIr6D0k/PEeLVsN6AAAAAElFTkSuQmCC"
                        alt="img"
                        class="reposStar"
                      />
                      <h3>({{ repo.stargazers_count }})</h3>
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

                  <h2 class="reposCreated-at">
                    Created at: {{ repo.created_at }}
                  </h2>
                  <h2 class="reposCreated-at">
                    Updated at: {{ repo.updated_at }}
                  </h2>
                  <button class="reposMore-btn">more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </CustomFetch>
  </div>
</template>

<style scoped>
.reposWrapper {
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
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
  box-shadow: 2px 4px 5px #000000;
}
.repoContents {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.reposTitle{
    color: #745b21;
}
.reposTitle {
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
  font-weight: 600;
}
.reposUpper-part_two {
  display: flex;
  align-items: center;
}
.reposStar {
  widows: 30px;
  height: 30px;
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