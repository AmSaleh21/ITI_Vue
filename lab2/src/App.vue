<template>
  <div class="container">
    <navigation-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
export default {
  name: 'App',
  components: {
    NavigationBar,
  }
}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap-icons/font/bootstrap-icons.css";
@import "primeicons/primeicons.css";
@import "primevue/resources/themes/lara-dark-indigo/theme.css";
@import "primevue/resources/primevue.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body {
  background-color: #181a1b;
}
p, a, label {
  color: #e8e6e3;
}
</style>