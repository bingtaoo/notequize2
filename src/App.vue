<template>
  <img alt="Vue logo" src="/assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <BeginButton />
</template>

<script>
import BeginButton from '/components/BeginButton';
//import HomePage from '/pages/HomePage';
// import HelloWorld from '/components/HelloWorld.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    BeginButton,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
