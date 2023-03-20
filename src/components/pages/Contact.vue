<script>
export default {
  name: "Contact",
};
</script>

<template>
  <div class="contactWrapper">
    <div class="contactContents">
      <h2>
        For your web development you can contact me by clicking the big button
        below
      </h2>
      <button class="contactBtn-contact">
        <a
          href="mailto: adeshinaobafemi09@gmail.com"
          class="contactContact-link"
          >Contact</a
        >
      </button>
    </div>
  </div>
</template>

<style scoped>
.contactWrapper {
  background-color: #111;
}
.contactContents {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  height: 65.2vh;
  padding-bottom: 50px;
}
.contactContents h2{
  color: #ccc8c8;
}
.contactBtn-contact {
  padding: 15px 80px;
  border-radius: 7px;
  border: 0;
  background-color: #745b21;
  margin-top: 40px;
}
.contactBtn-contact:hover {
  font-weight: 800;
}
.contactContact-link {
  color: #f2f2f2;
  text-decoration: none;
}
</style>
