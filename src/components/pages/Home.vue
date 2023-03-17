<script>
export default {
  name: "Home",
};
</script>

<template>
  <div class="homeWrapper">
    <div class="homeContents">
      <p class="homeIntro">
        <span class="homeSpan-one">GApp</span
        ><span>This is an app built to analyze my</span
        ><span class="homeSpan-two">Github account,</span
        ><span>and get an overview of it.</span>
      </p>
      <div class="homeBtn-div">
        <button class="homeBtn-start">
          <Router-link to="/repos" class="homeStart-link">
            Get started
          </Router-link>
        </button>
        <button class="homeBtn-contact">
          <a href="mailto: adeshinaobafemi09@gmail.com" class="homeContact-link"
            >Contact</a
          >
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.homeWrapper {
  padding-bottom: 50px;
  background-color: #111;
}
.homeContents {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 100px;
}
div {
  font-size: 28px;
  color: #ccc8c8;
}
.homeSpan-one {
  color: #745b21;
}
.homeIntro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.homeBtn-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
.homeBtn-start {
  color: #f2f2f2;
  background-color: #098c1a;
  padding: 10px 40px;
  border: 0;
  border-radius: 7px;
  cursor: pointer;
  margin: 5px;
}
.homeBtn-contact {
  color: #f2f2f2;
  background-color: #745b21;
  cursor: pointer;
  padding: 10px 10px;
  border: 0;
  margin: 5px;
  border-radius: 7px;
}
.homeBtn-start:hover,
.homeBtn-contact:hover {
  font-weight: 800;
  transition: all 0.3s;
}
.homeContact-link,
.homeStart-link {
  text-decoration: none;
  color: #f2f2f2;
}
@media screen and (max-width: 565px) {
  div {
    font-size: 20px;
  }
}
@media screen and (max-width: 490px) {
  .homeWrapper {
    padding-bottom: 40px;
  }
  div {
    font-size: 22px;
  }
}
@media screen and (max-width: 450px) {
  div {
    font-size: 20px;
  }
}
@media screen and (max-width: 420px) {
  .homeContents {
    width: 100%;
  }
  div {
    font-size: 18px;
  }
}
</style>
