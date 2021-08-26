<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: dimgray;
}

</style>
<script>

import navbar from "@/components/Navbar";
export default {
  components: {navbar}
}
</script>