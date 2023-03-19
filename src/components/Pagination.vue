<script>
export default {
  name: "Pagination",
  props: ["totalRepos", "reposPerPage", "page"],
  data() {
    return {
      pageNumbers: [],
      number: this.page
    };
  },
  beforeUpdate() {
    for (let i = 1; i <= Math.ceil(this.totalRepos / this.reposPerPage); i++) {
      this.pageNumbers.push(i);
    }
  },
  methods: {
    handlePaginate(pageNumber){
      this.number = pageNumber
      this.$emit("update-number", this.number);
    }
  }
};
</script>

<template>
  <div class="paginationWrapper">
    <nav>
      <ul class="paginationBtns">
        <li
          class="paginationBtn-list"
          v-for="pageNumber in pageNumbers"
          :key="pageNumber"
        >
          <button class="paginationBtn" @click="() => handlePaginate(pageNumber)">
            {{ pageNumber }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.paginationWrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -40px;
  padding-bottom: 50px;
}

.paginationBtns {
  display: flex;
  justify-content: center;
}
.paginationBtn-list {
  list-style: none;
}
.paginationBtn {
  border-radius: 50%;
  width: 30px;
  border: 1px solid #098c1a;
  color: #f2f2f2;
  height: 30px;
  background-color: #745b21;
  font-weight: 900;
  margin: 8px 2px;
  cursor: pointer;
}
.paginationBtn:hover {
  width: 32px;
  border: 0;
  color: #f2f2f2;
  height: 32px;
  background-color: #098c1a;
  margin: 9px 3px;
  transition: all 0.3s;
  box-shadow: 1px 4px 10px #3a3a3a;

}
@media screen and (max-width: 585px) {
  .paginationBtns {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
}
</style>
