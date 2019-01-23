<template>
  <div id="app">
    <Logo/>
    <a href="http://blog.peichenhu.cn" target="_blank" rel="noopener noreferrer">Blog</a>
    <a
      href="http://resume.peichenhu.cn/resume.docx"
      target="_blank"
      rel="noopener noreferrer"
    >Resume</a>
    <a
      href="http://interview.peichenhu.cn"
      target="_blank"
      rel="noopener noreferrer"
    >FE Interview Book</a>
    <a href="https://github.com/pch1024" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
</template>
<script>
import Logo from "@/components/logo/index.vue";
export default {
  components: {
    Logo
  },
  mounted() {
    this.$nextTick(function() {});
    let some = () => {
      console.log("arrow fn");
    };
    some();
  }
};
</script>
<style lang="scss" scoped>
#app {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  a {
    padding: 1em;
  }
  ::placeholder {
    color: gray;
  }
}
</style>


