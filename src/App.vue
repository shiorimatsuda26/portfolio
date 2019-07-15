<template>
  <div class="root-container">
    <div class="header">
      <a href="#" class="header-content" @click="clickSmoothScroll()">Top</a>
      <a href="#" class="header-content" @click="clickSmoothScroll()">About</a>
      <a href="#" class="header-content" @click="clickSmoothScroll()">Work</a>
      <a href="#" class="header-content" @click="clickSmoothScroll()"
        >Contact</a
      >
    </div>

    <Top id="Top" />
    <About id="About" />
    <Work id="Work" />
    <Contact id="Contact" />
  </div>
</template>

<script>
import Top from "@/pages/Top.vue";
import About from "@/pages/About";
import Work from "@/pages/Work";
import Contact from "@/pages/Contact";

export default {
  name: "App",
  components: {
    Top,
    About,
    Work,
    Contact
  },
  methods: {
    clickSmoothScroll() {
      event.preventDefault();
      const el = event.target.textContent;
      this.$SmoothScroll(
        document.querySelector(`#${el}`),
        400,
        null,
        null,
        "y"
      );
    }
  }
};
</script>

<style lang="stylus">
@import "assets/index.css"
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}

.header
  position: fixed /* ヘッダーを固定する */
  top: 0	/* 上部から配置の基準位置を決める */
  left: 0
  display: flex
  justify-content: flex-end
  background-color: #ffffff
  height: 65px
  width: 100vw
  z-index: 5

.header-content
  display: flex
  justify-content: center
  text-align: center
  font-size: 18px
  line-height: 40px
  letter-spacing: 0.5px
  padding: 12px 0px
  width: 100px
  height: auto
  cursor: pointer
  color: #212121
  &:hover
    background-color: #98DDDE
    color: #ffffff
    transition: color .5s
    transition: background-color .5s
</style>
