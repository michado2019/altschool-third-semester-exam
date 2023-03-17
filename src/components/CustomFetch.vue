<script>
 export default{
    props: ["url"],
    name: "CustomFetch",
    data() {
      return {
        isLoading: true,
        response: [],
        error: "",
      };
    },
    mounted() {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => (this.response = data))
        .catch((error) => (this.error = error))
        .finally(() => (this.isLoading = false));
    }
 }

</script>

<template>
 <div>
      <slot
        name="dataContext"
        :isLoading="isLoading"
        :response="response"
        :error="error"
      />
    </div>
</template>

<style scoped>

</style>

