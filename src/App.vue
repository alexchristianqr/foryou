<template>
  <div id="app" class="container-lg">
    <ForYou />
  </div>
</template>

<script>
import ForYou from "@/components/foryou";

export default {
  name: "App",
  components: {
    ForYou,
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
